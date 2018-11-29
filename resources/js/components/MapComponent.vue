<template>
    <div class="">
        {{ title }}
        <div id="chartdiv"></div>
        <div id="info">
        </div>
    </div>
</template>

<script>
//    import AmLight from 'amcharts3/amcharts/themes/light';
//    import UkraineLow from '../../plugins/amcharts/ukraineLow.js';

    export default {
//        props: ['title'],
//        data() {
//            return {
//                //
//            }
//        },
//        mounted() {
//            var map = window.AmCharts.makeChart( "chartdiv", {
//                "type": "map",
//                "theme": "light",
//                "colorSteps": 10,
//                "dataProvider": {
//                    "map": "ukraineLow",
//                    "getAreasFromMap": true,
//                    "zoomLevel": 0.9,
//                    "areas": []
//                },
//                "areasSettings": {
//                    "autoZoom": true,
//                    "balloonText": "[[title]]: <strong>[[value]]</strong>"
//                },
//                "valueLegend": {
//                    "right": 10,
//                    "minValue": "little",
//                    "maxValue": "a lot!"
//                },
//                "zoomControl": {
//                    "minZoomLevel": 0.9
//                },
//                "titles": 'titles',
//                "listeners": [ {
//                    "event": "init",
//                    "method": updateHeatmap
//                } ]
//            } );
//
//            function updateHeatmap( event ) {
//                var map = event.chart;
//                if ( map.dataGenerated )
//                    return;
//                if ( map.dataProvider.areas.length === 0 ) {
//                    setTimeout( updateHeatmap, 100 );
//                    return;
//                }
//                for ( var i = 0; i < map.dataProvider.areas.length; i++ ) {
//                    if (map.dataProvider.areas[ i ].id != 'UA-63'){
//                        map.dataProvider.areas[ i ].value = Math.round( Math.random() * 10000 );
//                    }
//                    else{
//                        map.dataProvider.areas[ i ].value = 555;
//                    }
//                }
//                map.dataGenerated = true;
//                map.validateNow();
//            }
//
//        }
    }
</script>

<style>
    #chartdiv {
        width: 100%;
        height: 500px;
    }
</style>
