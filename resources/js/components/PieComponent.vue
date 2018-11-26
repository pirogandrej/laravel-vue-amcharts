<template>
    <div>
        {{ title }}
        <div>
            Kilometers : <input type = "text" v-model = "kilometers">
            Meters : <input type = "text" v-model = "meters">
        </div>
        <div id="chartdiv"></div>
    </div>
</template>

<script>
    import AmPie from 'amcharts3/amcharts/pie';
    export default {
        props: ['title'],
        data() {
            return {
                dataCustom: [],
                kilometers : 0,
                meters:0

            }
        },
        mounted() {
            var dataCustom = [ {
                "object": "AZZURRA",
                "value": 1
            }, {
                "object": "KERLITE",
                "value": 201
            }, {
                "object": "APELL",
                "value": 65
            }, {
                "object": "BIANCHI",
                "value": 39
            }, {
                "object": "QTAP",
                "value": 19
            }, {
                "object": "COSH",
                "value": 10
            } ];

            var chart = window.AmCharts.makeChart( "chartdiv", {
                "type": "pie",
                "theme": "light",
                "dataProvider": dataCustom,
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
