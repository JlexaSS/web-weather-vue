import Vue from 'vue'
import VueRouter from "vue-router"
import Weather from "@/Views/Weather";
import News from "@/Views/news/News";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Weather',
        component: Weather
    },
    {
        path: '/news',
        name: 'News',
        component: News
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})