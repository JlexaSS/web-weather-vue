import Vue from 'vue'
import VueRouter from "vue-router"
import Weather from "@/Views/Weather";
import News from "@/Views/news/News";
import NewsItem from "@/Views/news/NewsItem";
import About from "@/Views/About";

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
    },
    {
        path: '/news/:id',
        name: 'NewsItem',
        component: NewsItem,
        props: true
    },
    {
        path: '/about',
        name: "About",
        component: About
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})