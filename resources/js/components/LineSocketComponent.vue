<template>
    <div>
        {{ title }}
        <div id="chartdiv"></div>

        <!--test---------------------------------------------->
        <div class="input-group mb-3">
            <label>A</label>
            <input type="text" class="ml-3 mr-3" placeholder="" v-model="message">
            <br><br>
            <label>B</label>
            <input type="text" class="ml-3 mr-3" placeholder="" v-model="messageB" value="messageB">
            <br>
            <div class="input-group-append">
                <button @click="sendMessage" class="btn btn-outline-secondary" type="button">Отправить</button>
            </div>
        </div>
        <!--test------------------------------------------------>

    </div>
</template>

<script>
    import io from 'socket.io-client';
    const socket = io(':6001');

    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";
    import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    am4core.useTheme(am4themes_animated);

    export default {
        props: ['title'],
        data() {
            return {
                dataCustom: [],
                chartline: {},
                message: '',
                messageB: ''
            }
        },
        mounted() {
            socket.send('getdata');
            var appchart = this;
            socket
                .on ('message', function (data) {
                    appchart.dataCustom = JSON.parse(data);

                    //test ---------------------------------------
                    appchart.message = appchart.dataCustom[0].value;
                    appchart.messageB = appchart.dataCustom[1].value;
                    //test ----------------------------------------

                    appchart.changechart(appchart.dataCustom);
                })
                .on('server-info', function (data) {
                    appchart.dataCustom = JSON.parse(data);

                    //test ---------------------------------------
                    appchart.message = appchart.dataCustom[0].value;
                    appchart.messageB = appchart.dataCustom[1].value;
                    //test ---------------------------------------












                    var chart = AmCharts.makeChart("chartdiv", {
                        "type": "serial",
                        "theme": "light",
                        "titles": [{
                            "text": "Traffic incidents per year",
                            "size": 15
                        }],
                        "legend": {
                            "align": "center",
                            "equalWidths": false,
                            "periodValueText": "total: [[value.sum]]",
                            "valueAlign": "left",
                            "valueText": "[[value]] ([[percents]]%)",
                            "valueWidth": 100
                        },
                        "dataProvider":appchart.dataCustom,
                        "plotAreaBorderAlpha": 0,
                        "marginLeft": 0,
                        "marginBottom": 0,
                        "chartCursor": {
                            "cursorAlpha": 0,
                            "zoomable": false,
                            "animationDuration": 0
                        },
                        "categoryField": "year",
                        "categoryAxis": {
                            "startOnAxis": true,
                            "axisColor": "#DADADA",
                            "gridAlpha": 0.07
                        },
                        "export": {
                            "enabled": true,
                            "beforeCapture": function() {
                                chart.chartCursor.showCursorAt("2005");
                            }
                        }
                    });
















//                    let chart = am4core.create("chartdiv", am4charts.XYChart);
//                    chart.paddingRight = 20;
//
//                    chart.data = appchart.dataCustom;
//                    chart.dataProvider = appchart.dataCustom;
//
//                    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
//                    categoryAxis.dataFields.category = "object";
//                    categoryAxis.title.text = "Object";
//
//                    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//                    valueAxis.title.text = "Litres sold (M)";
//
//                    let series = chart.series.push(new am4charts.LineSeries());
//                    series.name = "Units";
//                    series.stroke = am4core.color("#7792cd");
//                    series.strokeWidth = 3;
//                    series.dataFields.valueY = "value";
//                    series.dataFields.categoryX = "object";
//                    series.fillOpacity = 0.3;
//
//                    chart.cursor = new am4charts.XYCursor();
//                    chart.cursor.lineY.opacity = 0;
//                    chart.scrollbarX = new am4charts.XYChartScrollbar();
//                    chart.scrollbarX.series.push(series);

                    appchart.chartline = chart;
                });
        },
        methods: {
            sendMessage: function () {

                //test ---------------------------------------
                this.dataCustom[0].value = this.message;
                this.dataCustom[1].value = this.messageB;
                //test ---------------------------------------

                this.changechart(this.dataCustom);
                socket.send(JSON.stringify(this.dataCustom));
            },
            changechart: function (data) {
//                this.chartline.data = data;
                this.chartline.dataProvider = data;
                this.chartline.validateData();
//                this.chartline.animateAgain();
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