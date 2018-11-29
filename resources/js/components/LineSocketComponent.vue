<template>
    <div>
        {{ title }}
        <div id="chartdiv"></div>
        <div class="input-group mb-3">
            <label>A</label>
            <input type="text" class="ml-3 mr-3" placeholder="" v-model="message">
            <!--<div class="input-group-append">-->
                <!--<button @click="sendMessage" class="btn btn-outline-secondary" type="button">Отправить</button>-->
            <!--</div>-->
            <br><br>
            <label>B</label>
            <input type="text" class="ml-3 mr-3" placeholder="" v-model="messageB" value="messageB">
            <br>
            <div class="input-group-append">
                <button @click="sendMessage" class="btn btn-outline-secondary" type="button">Отправить</button>
            </div>
        </div>
    </div>
</template>

<script>
    var socket = io(':6001');
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    am4core.useTheme(am4themes_animated);

    export default {
        props: ['title'],
        data() {
            return {
                dataCustom: [],
                chartline: {dataProvivder:{}},
                message: '',
                messageB: ''
            }
        },
        mounted() {

            var aaa = this;
//            this.chart.dataProvider = {};
            socket.send('getdata');
            socket
                .on ('message', function (data) {
                    aaa.dataCustom = JSON.parse(data);
                    aaa.chartline.dataProvider = aaa.dataCustom;
                    aaa.chartline.validateData();
//                    aaa.showChartGraphLine(aaa.dataCustom);
                    console.log("get data 111111111111111111111111111111=",aaa.chartline.dataProvivder);
                })
                .on('server-info', function (data) {
                    console.log('in',data);
                    aaa.dataCustom = JSON.parse(data);
                    console.log('out',aaa.dataCustom);
                    aaa.message = aaa.dataCustom[0].value;
                    aaa.messageB = aaa.dataCustom[1].value;
                    aaa.showChartGraphLine(aaa.dataCustom);
                });
        },
        methods: {
            sendMessage: function () {
                this.dataCustom[0].value = this.message;
                this.dataCustom[1].value = this.messageB;
                this.chartline.dataProvider = this.dataCustom;
                this.chartline.validateData();
//                this.showChartGraphLine(this.dataCustom);
                var aaa = this;
                console.log(aaa.dataCustom);
                socket.send(JSON.stringify(aaa.dataCustom));
//                this.message = '';
//                this.messageB = '';
            },

            showChartGraphLine: function (data) {
                let chart = am4core.create("chartdiv", am4charts.XYChart);
                chart.paddingRight = 20;

                chart.data = data;
                chart.dataProvider = data;
//                chart.validateData();
                let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
                categoryAxis.dataFields.category = "object";
                categoryAxis.title.text = "Object";

                let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                valueAxis.title.text = "Litres sold (M)";

                let series = chart.series.push(new am4charts.LineSeries());
                series.name = "Units";
                series.stroke = am4core.color("#7792cd");
                series.strokeWidth = 3;
                series.dataFields.valueY = "value";
                series.dataFields.categoryX = "object";

                chart.cursor = new am4charts.XYCursor();
                chart.cursor.lineY.opacity = 0.3;
                chart.scrollbarX = new am4charts.XYChartScrollbar();
                chart.scrollbarX.series.push(series);

                this.chartline = chart;
            }
        },

        beforeDestroy() {
            if (this.chartline) {
                this.chartline.dispose();
            }
        }
    }
</script>

<style scoped>
    #chartdiv {
        width: 100%;
        height: 500px;
    }
</style>