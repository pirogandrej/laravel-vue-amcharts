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
//    var socket = io(':6001');
//    import AmPie from 'amcharts3/amcharts/pie';
    export default {
//        props: ['title'],
//        data() {
//            return {
//                dataCustom: [],
//                chart: {},
//                message: ''
//            }
//        },
//        mounted() {
//            var aaa = this;
//            socket.send('getdata');
//            socket
//                .on ('message', function (data) {
//                    console.log(data);
//                    aaa.dataCustom = JSON.parse(data);
//                    aaa.showChartGraph(aaa.dataCustom);
//                })
//                .on('server-info', function (data) {
//                    console.log('in',data);
//                    aaa.dataCustom = JSON.parse(data);
//                    console.log('out',aaa.dataCustom);
//                    aaa.showChartGraph(aaa.dataCustom);
//                });
//        },
//        methods: {
//            sendMessage: function () {
//                this.dataCustom[0].value = this.message;
//                this.chart.dataProvider = this.dataCustom;
//                this.chart.validateData();
//
////                this.showChartGraph(this.dataCustom);
//                var aaa = this;
//                socket.send(JSON.stringify(aaa.dataCustom));
//                this.message = '';
//            },
//            showChartGraph: function (data) {
//                this.chart = window.AmCharts.makeChart( "chartdiv", {
//                    "type": "pie",
//                    "theme": "light",
//                    "dataProvider": data,
//                    "valueField": "value",
//                    "titleField": "object",
//                    "outlineAlpha": 0.4,
//                    "depth3D": 15,
//                    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b>([[percents]]%)</span>",
//                    "angle": 30,
//                    "export": {
//                        "enabled": true
//                    }
//                } );
//            }
//        }
    }
</script>

<style>
    #chartdiv {
        width: 100%;
        height: 500px;
    }
</style>
