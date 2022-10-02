import axios from "axios";

const weather = {
    state: {
        weather: {}
    },
    getters: {
        WEATHER(state) {
            return state.weather.days
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
            const date = new Date()
            return axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${coords.lat},${coords.lng}/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+6}/?unitGroup=us&key=NYESDBMPHZKGSTH6UCQ34NGV4&contentType=json`,
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
}

export default weather