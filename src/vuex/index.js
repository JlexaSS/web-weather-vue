import Vue from 'vue'
import Vuex from 'vuex'
import weather from '@/vuex/modules/weather'
import news from '@/vuex/modules/news'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        weather,
        news
    }
})