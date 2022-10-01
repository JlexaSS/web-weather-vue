import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        weather: {}
    },
    getters: {
        WEATHER(state) {
            return state.weather
        },
        CURRENT_WEATHER(state) {
            return state.weather.currentConditions
        }
    },
    mutations: {
        ADD_WEATHER_TO_STATE: (state, weather) => {
            state.weather = weather;
        }
    },
    actions: {
        GET_WEATHER_FROM_API({commit}, coords) {
            return axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${coords.lat},${coords.lng}?unitGroup=us&key=NYESDBMPHZKGSTH6UCQ34NGV4&contentType=json`,
            {
                    method: "GET",
                })
                .then(weather => {
                    commit('ADD_WEATHER_TO_STATE', weather.data)
                    return weather;
                })
                .catch(error => {
                    console.log(error)
                    return error
                })
        }
    }
})