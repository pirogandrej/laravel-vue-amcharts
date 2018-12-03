require('./bootstrap');

window.Vue = require('vue');
window.VueRouter = require('vue-router').default;

Vue.use(VueRouter);

Vue.component('menu-component', require('./components/MenuComponent.vue'));

const LineComponent = require('./components/LineComponent.vue');
const MapComponent = require('./components/MapComponent.vue');
const CubeComponent = require('./components/CubeComponent.vue');
const PieComponent = require('./components/PieComponent.vue');
const LineRandomComponent = require('./components/LineRandomComponent.vue');
const LineSocketComponent = require('./components/LineSocketComponent.vue');

const routes = [
    {
        name: 'line',
        path: '/line',
        component: LineComponent,
        props: true
    },
    {
        name: 'map',
        path: '/map',
        component: MapComponent,
        props: true
    },
    {
        name: 'cube',
        path: '/cube',
        component: CubeComponent,
        props: true
    },
    {
        name: 'pie',
        path: '/pie',
        component: PieComponent,
        props: true
    },
    {
        name: 'linerandom',
        path: '/linerandom',
        component: LineRandomComponent,
        props: true
    },
    {
        name: 'linesocket',
        path: '/linesocket',
        component: LineSocketComponent,
        props: true
    }
];

const router = new VueRouter({
    routes
});

const appchart = new Vue({
    router
}).$mount('#app');

