require('./bootstrap');

window.Vue = require('vue');
window.VueRouter = require('vue-router').default;

Vue.use(VueRouter);

Vue.component('title-component', require('./components/TitleComponent.vue'));
Vue.component('menu-component', require('./components/MenuComponent.vue'));

const LineComponent = require('./components/LineComponent.vue');
const MapComponent = require('./components/MapComponent.vue');
const CubeComponent = require('./components/CubeComponent.vue');
const PieComponent = require('./components/PieComponent.vue');

const routes = [
    {
        name: 'line',
        path: '/line',
        component: LineComponent
    },
    {
        name: 'map',
        path: '/map',
        component: MapComponent
    },
    {
        name: 'cube',
        path: '/cube',
        component: CubeComponent
    },
    {
        name: 'pie',
        path: '/pie',
        component: PieComponent
    }
];

const router = new VueRouter({
    routes:routes
});

const app = new Vue({
    router:router
}).$mount('#app');

