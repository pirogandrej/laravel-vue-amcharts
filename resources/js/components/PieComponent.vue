<template>
    <div>
        {{ title }}
        <div id="chartdiv"></div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="" v-model="message">
            <div class="input-group-append">
                <button @click="sendMessage" class="btn btn-outline-secondary" type="button">Отправить</button>
            </div>
            <!--<div class="cold-md-5 col-md-offset-7">-->
                <!--<span v-for="(item,index) in dataCustom">-->
                    <!--<label >{{item.object}}</label>-->
                    <!--<input type="text" class="form-control" v-model="inputParams"><br/>-->
                <!--</span>-->
            <!--</div>-->

            <!--<form>-->

                <!--<span :submit="sub(index)" v-for="(item,index) in dataCustom">-->
                    <!--<label >{{item.object}}</label>-->
                    <!--<input type="text" class="form-control" v-model="inputParams"><br/>-->
                    <!--<button type="submit">Entrar</button>-->
                <!--</span>-->

            <!--</form>-->
            <!--<table>-->
                <!--<thead>-->
                <!--<tr>-->
                    <!--<th>object</th>-->
                    <!--<th>value</th>-->
                <!--</tr>-->
                <!--</thead>-->
                <!--<tbody>-->
                <!--<tr v-for="item in dataCustom">-->
                    <!--<td>{{item.object}}</td>-->
                    <!--<td><input type="text" name="" :value="item.value" v-model="dataCustom"/></td>-->
                <!--</tr>-->
                <!--</tbody>-->
            <!--</table>-->

        </div>

    </div>
</template>

<script>
    var socket = io(':6001');
    import AmPie from 'amcharts3/amcharts/pie';
    export default {
        props: ['title'],
        data() {
            return {
                dataCustom: [],
                chart: {},
                message: '',
                kilometers : 0,
                meters:0,
                inputParams:0


            }
        },
        mounted() {
            var aaa = this;
            socket
                .on ('message', function (data) {
                    console.log(data);
                    aaa.dataCustom = JSON.parse(data);
                    aaa.showChartGraph(aaa.dataCustom);
                })
                .on('server-info', function (data) {
                    console.log('in',data);
                    aaa.dataCustom = JSON.parse(data);
                    console.log('out',aaa.dataCustom);
                    aaa.showChartGraph(aaa.dataCustom);
                });

//            var dataCustom = [
//                {
//                    "object": "A",
//                    "value": 1
//                },
//                {
//                    "object": "B",
//                    "value": 201
//                },
//                {
//                    "object": "C",
//                    "value": 65
//                },
//                {
//                    "object": "D",
//                    "value": 39
//                },
//                {
//                    "object": "E",
//                    "value": 19
//                },
//                {
//                    "object": "F",
//                    "value": 191
//                },
//                {
//                    "object": "G",
//                    "value": 16
//                },
//                {
//                    "object": "H",
//                    "value": 55
//                },
//                {
//                    "object": "I",
//                    "value": 44
//                },
//                {
//                    "object": "K",
//                    "value": 100
//                }
//            ];

//            this.showChart();
//            this.chart = window.AmCharts.makeChart( "chartdiv", {
//                "type": "pie",
//                "theme": "light",
//                "dataProvider": this.dataCustom,
//                "valueField": "value",
//                "titleField": "object",
//                "outlineAlpha": 0.4,
//                "depth3D": 15,
//                "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b>([[percents]]%)</span>",
//                "angle": 30,
//                "export": {
//                    "enabled": true
//                }
//            } );
        },
        methods: {
            sub: function (index) {
//              alert(index);
            },

            sendMessage: function () {
                console.log('333333333333333333333');
                console.log(this.dataCustom);
                this.dataCustom[0].value = this.message;
                this.showChartGraph(this.dataCustom);
                var aaa = this;
                console.log(aaa.dataCustom);

                socket.send(JSON.stringify(aaa.dataCustom));
                this.message = '';
            },
            showChartGraph: function (data) {
                console.log('1111111111111111');
                console.log(data);
//            var dataC = [
//                {
//                    "object": "A",
//                    "value": 1
//                },
//                {
//                    "object": "B",
//                    "value": 201
//                },
//                {
//                    "object": "C",
//                    "value": 65
//                },
//                {
//                    "object": "D",
//                    "value": 39
//                },
//                {
//                    "object": "E",
//                    "value": 19
//                },
//                {
//                    "object": "F",
//                    "value": 191
//                },
//                {
//                    "object": "G",
//                    "value": 16
//                },
//                {
//                    "object": "H",
//                    "value": 55
//                },
//                {
//                    "object": "I",
//                    "value": 44
//                },
//                {
//                    "object": "K",
//                    "value": 100
//                }
//            ];
//                console.log('22222222222222222');
//                console.log(dataC);


                this.chart = window.AmCharts.makeChart( "chartdiv", {
                    "type": "pie",
                    "theme": "light",
                    "dataProvider": data,
                    "valueField": "value",
                    "titleField": "object",
                    "outlineAlpha": 0.4,
                    "depth3D": 15,
                    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b>([[percents]]%)</span>",
                    "angle": 30,
                    "export": {
                        "enabled": true
                    }
                } );
            }
        },
        watch : {
            kilometers:function(val) {
                this.kilometers = val;
                this.meters = val * 1000;
            },
            meters : function (val) {
                this.kilometers = val/ 1000;
                this.meters = val;
            }
        }
    }
</script>

<style>
    #chartdiv {
        width: 100%;
        height: 500px;
    }
</style>
