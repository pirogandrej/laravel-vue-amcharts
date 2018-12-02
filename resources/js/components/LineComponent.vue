<template>
    <div>
        {{ title }}
        <div id="chartdiv"></div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="" v-model="message">
            <div class="input-group-append">
                <button @click="sendMessage" class="btn btn-outline-secondary" type="button">Отправить</button>
            </div>
        </div>
    </div>
</template>

<script>
    var socket = io(':6001');
   import AmExportCss from 'amcharts3/amcharts/plugins/export/export.css';
   import AmCharts from 'amcharts3/amcharts/amcharts';
   import AmSerial from 'amcharts3/amcharts/serial';
   import AmExport from 'amcharts3/amcharts/plugins/export/export.min';

    export default {
       props: ['title'],
        data() {
            return {
                dataCustom: [],
                chart: {},
                message: ''
            }
        },

       mounted() {
           var aaa = this;
           socket.send('getdata');
           socket
               .on ('message', function (data) {
                   console.log(data);
                   aaa.dataCustom = JSON.parse(data);
                   aaa.chart.dataProvider = aaa.dataCustom;
                   aaa.chart.validateData();
               })
               .on('server-info', function (data) {
                   console.log('in',data);
                   aaa.dataCustom = JSON.parse(data);
                   console.log('out',aaa.dataCustom);
                   aaa.showChartGraph(aaa.dataCustom);
               });
       },
        methods: {
            sendMessage: function () {
                this.dataCustom[2].value = this.message;
                this.chart.dataProvider = this.dataCustom;
                this.chart.validateData();
                var aaa = this;
                socket.send(JSON.stringify(aaa.dataCustom));
                this.message = '';
            },
            showChartGraph: function (data) {
                this.chart = window.AmCharts.makeChart("chartdiv", {
                    "type": "serial",
                    "theme": "light",
                    "marginRight": 40,
                    "marginLeft": 40,
                    "autoMarginOffset": 20,
                    "mouseWheelZoomEnabled":true,
                    "valueAxes": [{
                        "id": "v1",
                        "axisAlpha": 0,
                        "position": "left",
                        "ignoreAxisWidth":true
                    }],
                    "balloon": {
                        "adjustBorderColor": true,
                        "color": "#000000",
                        "cornerRadius": 5,
                        "fillColor": "#56b2d4",
                        "fillAlpha": 0.5
                    },
                    "graphs": [{
                        "id": "g1",
                        "lineColor": '#0089b7',
                        "lineThickness": 1,
                        "title": "red line",
                        "fillAlphas": 0.1,
                        "fontSize": 12,
                        "useLineColorForBulletBorder": true,
                        "valueField": "value",
                        "balloonText": "<span style='/*font-size:12px;*//*background-color: #0089b7*/'>Value : <b>[[value]]</b></span>"
                    }],
                    "chartScrollbar": {
                        "graph": "g1",
                        "oppositeAxis":true,
                        "offset":30,
                        "scrollbarHeight": 80,
                        "backgroundAlpha": 0,
                        "selectedBackgroundAlpha": 0.1,
                        "selectedBackgroundColor": "#888888",
                        "graphFillAlpha": 0,
                        "graphLineAlpha": 0.5,
                        "selectedGraphFillAlpha": 0,
                        "selectedGraphLineAlpha": 1,
                        "autoGridCount":true,
                        "color":"#AAAAAA"
                    },
                    "chartCursor": {
                        "pan": true,
                        "valueLineEnabled": false,
                        "valueLineBalloonEnabled": false,
                        "cursorAlpha":0.2,
                        "cursorColor":"#000000",
                        "limitToGraph":"g1",
                        "valueLineAlpha":0.2,
                        "valueZoomable":false
                    },
                    "valueScrollbar":{
                        "oppositeAxis":false,
                        "offset":50,
                        "scrollbarHeight":10
                    },
                    "categoryField": "object",
                    "categoryAxis": {
                        "parseDates": false,
                        "dashLength": 1,
                        "minorGridEnabled": true
                    },
                    "export": {
                        "enabled": true
                    },
                    "dataProvider": data
                });
            }
        }
    }
</script>

<style scoped>
    #chartdiv {
        width	: 100%;
        height	: 500px;
    }
</style>