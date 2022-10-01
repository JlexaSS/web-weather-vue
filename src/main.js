import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/styles.scss'
import router from "@/router";
import store from '@/vuex'
import VueGeolocation from "vue-browser-geolocation";

Vue.use(VueGeolocation)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
