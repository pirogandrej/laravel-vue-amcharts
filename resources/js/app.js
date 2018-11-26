require('./bootstrap');

window.Vue = require('vue');
window.VueRouter = require('vue-router').default;

Vue.use(VueRouter);

Vue.component('title-component', require('./components/TitleComponent.vue'));
Vue.component('menu-component', require('./components/MenuComponent.vue'));
Vue.component('chartrandom-component', require('./components/ChartRandomComponent.vue'));


const LineComponent = require('./components/LineComponent.vue');
const MapComponent = require('./components/MapComponent.vue');
const CubeComponent = require('./components/CubeComponent.vue');
const PieComponent = require('./components/PieComponent.vue');

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
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');

