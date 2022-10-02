<template>
  <div class="weather">
    <div class="container">
      <Header/>
      <div class="weather-content">
        <div class="weather-today">
          <h1 class="weather-title">
            Погода на сегодня:
          </h1>
          <div
            class="lds-dual-ring"
            v-if="isLoading"
          >
          </div>
          <div
            class="weather-states"
            v-else
          >
            <img :src="require('../assets/images/weather/'+CURRENT_WEATHER.icon+'.svg')" alt="weather" class="weather-icon">
            <table>
              <tr>
                <th><img class="weather-img" src="@/assets/images/temperature.svg" alt="temperature"></th>
                <th><img class="weather-img" src="@/assets/images/weather/wind.svg" alt="wind"></th>
                <th><img class="weather-img" src="@/assets/images/pressure.svg" alt="pressure"></th>
              </tr>
              <tr>
                <td class="weather-state"> {{ Math.round((CURRENT_WEATHER.temp - 32) * 5/9) }}°</td>
                <td class="weather-state"> {{ Math.round(CURRENT_WEATHER.windspeed / 3.6) }}<span>м/с</span></td>
                <td class="weather-state"> {{ Math.round(CURRENT_WEATHER.pressure / 1.3) }}<span>мм</span></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import {mapGetters, mapActions} from  'vuex'
export default {
  name: "Weather",
  components: {
    Header
  },
  data() {
    return {
      isLoading: true
    }
  },
  computed: {
    ...mapGetters([
        'CURRENT_WEATHER'
    ])
  },
  methods: {
    ...mapActions([
        'GET_WEATHER_FROM_API'
    ])
  },
  mounted() {
    this.$getLocation().then(coords => {
      this.GET_WEATHER_FROM_API(coords)
      this.isLoading = false
    })

  }
}
</script>


<style lang="scss" scoped>
  .weather {
    height: 100vh;
    background-image: url('@/assets/images/weather.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    &-title {
      align-items: center;
      width: 450px;
      font-weight: 700;
      font-size: 60px;
      line-height: 120%;
      padding-top: 150px;

    }
    &-state{
      font-weight: 700;
      font-size: 70px;
      line-height: 120%;
    }
    &-content{
      height: 70vh;
      width: 100%;
      padding: 0 10px;
      overflow: auto;
      overflow-x: hidden;
    }
    &-today {
      display: flex;
      flex-wrap: wrap;
    }
    &-states {
      max-width: 100%;
      margin: 0 auto;
    }
    &-state span{
      font-weight: 400;
      font-size: 30px;
    }
    th,
    td {
      padding: 10px 40px;
      text-align: center;
    }
    &-icon {
      width: 250px;
      height: 250px;
      margin-left: 150px;
    }
    &-img {
      height: 90px;
      width: 90px;
    }
  }
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 170px auto 0;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media(max-width: 1125px){
    .weather{
      &-title{
        width: 100%;
        text-align: center;
        padding-top: 30px;
      }
      &-content{
        padding: 0;
      }
    }
  }
  @media(max-width: 650px){
    .weather{
      &-content{
        padding: 0;
      }
      &-title{
        font-size: 40px;
      }
      &-state{
        font-size: 40px;
      }
      &-icon{
        width: 180px;
        height: 180px;
        margin-left: 110px;
      }
      &-img {
        height: 65px;
        width: 65px;
      }
      th,
      td {
        padding: 10px 30px;
      }
    }
  }
  @media(max-width: 450px){
    .weather{
      &-content{
        padding: 0;
      }
      &-title{
        font-size: 30px;
      }
      &-state{
        font-size: 30px;
      }
      &-icon{
        width: 160px;
        height: 160px;
        margin-left: 65px;
      }
      &-img {
        height: 60px;
        width: 60px;
      }
      th,
      td {
        padding: 10px 15px;
      }
    }
  }
</style>

