<template>
    <div>
        {{ title }}
        <div id="chartdiv"></div>
        <div class="input-group mb-3">
            <label>A</label>
            <input type="text" class="ml-3 mr-3" placeholder="" v-model="message"/>
            <br/><br/>
            <label>B</label>
            <input type="text" class="ml-3 mr-3" placeholder="" v-model="messageB" value="messageB"/>
            <br/>
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
            socket.send('getdata');
            socket
                .on ('message', function (data) {
                    aaa.dataCustom = JSON.parse(data);
                    aaa.chartline.data = aaa.dataCustom;
                    aaa.chartline.dataProvider = aaa.dataCustom;
                    aaa.chartline.validateData();
                    aaa.message = aaa.dataCustom[0].value;
                    aaa.messageB = aaa.dataCustom[1].value;
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
                this.chartline.data = this.dataCustom;
                this.chartline.dataProvider = this.dataCustom;
                this.chartline.validateData();
                var aaa = this;
                socket.send(JSON.stringify(aaa.dataCustom));
            },

            showChartGraphLine: function (data) {
                let chart = am4core.create("chartdiv", am4charts.XYChart);
                chart.paddingRight = 20;

                chart.data = data;
                chart.dataProvider = data;
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
                series.tooltipText = "Visits: [bold]{valueY}[/]";
                series.fillOpacity = 0.3;

                chart.cursor = new am4charts.XYCursor();
                chart.cursor.lineY.opacity = 0;
                chart.scrollbarX = new am4charts.XYChartScrollbar();
                chart.scrollbarX.series.push(series);

                chart.events.on("datavalidated", function () {
                    categoryAxis.zoom({start:0, end:1});
                });

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