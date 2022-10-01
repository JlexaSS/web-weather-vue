import Vue from 'vue'
import VueRouter from "vue-router"
import Weather from "@/Views/Weather";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Weather',
        component: Weather
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})