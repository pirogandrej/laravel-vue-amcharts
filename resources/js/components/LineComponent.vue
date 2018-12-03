<template>
    <div class="row justify-content-center">

        <div class="col-md-2">

            <button class="btn btn-primary" v-on:click="toggleButton">{{ buttonTitle }}</button>

        </div>
        <div class="col-md-10">

            <div id="chartdiv" v-if="seen"></div>

            <div class="input-group mb-3" v-if="seen">
                <input type="text" class="ml-3 mr-3" placeholder="" v-model="message"/>
                <br/>
                <div class="input-group-append">
                    <button @click="sendMessage" class="btn btn-outline-secondary" type="button">Отправить</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import io from 'socket.io-client';
    import AmExportCss from 'amcharts3/amcharts/plugins/export/export.css';
    import AmCharts from 'amcharts3/amcharts/amcharts';
    import AmSerial from 'amcharts3/amcharts/serial';
    import AmExport from 'amcharts3/amcharts/plugins/export/export.min';
    var socket = io(':6001');

    export default {
        data() {
            return {
                dataCustom: [],
                chart: {},
                message: '',
                seen: true,
                buttonTitle: "Спрятать график"
            }
        },

        mounted() {
            var obj = this;
            socket.send('getdata');
            socket
                .on ('message', function (data) {
                    obj.message = '';
                    obj.dataCustom = JSON.parse(data);

                    obj.chart.dataProvider = obj.dataCustom;
                    obj.chart.validateData();
                })
                .on('server-info', function (data) {
                    obj.dataCustom = JSON.parse(data);
                    obj.showChartGraph(obj.dataCustom);
                });
        },
        methods: {
            toggleButton: function () {
                this.seen = !this.seen;
                if(this.seen)
                {
                    socket.send('getdata');
                    this.buttonTitle = 'Спрятать график';
                }
                else
                {
                    this.buttonTitle = 'Показать график';
                }
            },
            sendMessage: function () {
                var nameObject = this.message.split('=')[0].toUpperCase();
                var valueObject = this.message.split('=')[1].toUpperCase();
                var obj = this;
                this.dataCustom.forEach(function(item, i) {
                    if(item.object == nameObject)
                    {
                        obj.dataCustom[i].value = valueObject;
                    }
                });
                this.chart.dataProvider = this.dataCustom;
                this.chart.validateData();
                socket.send(JSON.stringify(obj.dataCustom));
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
                        "balloonText": "<span>Value : <b>[[value]]</b></span>"
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