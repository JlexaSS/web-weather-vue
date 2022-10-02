import axios from "axios";

const news = {
    state:{
        news: [],
        currentNews: {}
    },
    getters:{
        NEWS(state) {
            return state.news.slice(5)
        },
        TOP_NEWS(state) {
            return state.news.slice(0, 5)
        },
        CURRENT_NEWS(state) {
            return state.currentNews
        }
    },
    mutations:{
        SET_NEWS_TO_STATE(state, news) {
            if(state.news.length === 0){
                state.news = news
            } else {
                state.news = [...state.news, ...news]
            }
        },
        SET_CURRENT_NEWS(state, news) {
            state.currentNews = news[0]
        }
    },
    actions:{
        GET_NEWS_FROM_API({commit}, page = 1){
            return axios(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=15`)
                .then(response => {
                    commit('SET_NEWS_TO_STATE', response.data)
                    return response;
                })
                .catch(error => {
                    console.log(error)
                    return error;
                })
        },
        GET_NEWS_FROM_API_BY_ID({commit}, id) {
            return axios(`https://jsonplaceholder.typicode.com/albums/1/photos?id=${id}`)
                .then(response => {
                    commit('SET_CURRENT_NEWS', response.data)
                    return response;
                })
                .catch(error => {
                    console.log(error)
                    return error;
                })
        }
    }
}

export default news