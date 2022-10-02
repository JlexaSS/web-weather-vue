<template>
  <div class="forecast">
    <div class="container">
      <Header/>
      <div
          class="lds-dual-ring"
          v-if="isLoading"
      >
      </div>
      <ForecastTabs
        v-else
      >
        <ForecastTab
          v-for="(weather, index) in WEATHER"
          :key="weather.datetime"
          :title="weather.datetime"
          :img="weather.icon"
          :index="index"
        >
          <div class="weather-states">
            <img :src="require('../../assets/images/weather/'+weather.icon+'.svg')" alt="weather" class="weather-icon">
            <table>
              <tr>
                <th><img class="weather-img" src="@/assets/images/temperature.svg" alt="temperature"></th>
                <th><img class="weather-img" src="@/assets/images/weather/wind.svg" alt="wind"></th>
                <th><img class="weather-img" src="@/assets/images/pressure.svg" alt="pressure"></th>
              </tr>
              <tr>
                <td class="weather-state"> {{ Math.round((weather.temp - 32) * 5/9) }}°</td>
                <td class="weather-state"> {{ Math.round(weather.windspeed / 3.6) }}<span>м/с</span></td>
                <td class="weather-state"> {{ Math.round(weather.pressure / 1.3) }}<span>мм</span></td>
              </tr>
            </table>
          </div>
        </ForecastTab>
      </ForecastTabs>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import ForecastTab from '@/Views/forecast/ForecastTab'
import ForecastTabs from '@/Views/forecast/ForecastTabs'
import {mapGetters, mapActions} from "vuex";

export default {
  name: "Forecast",
  components: {
    Header, ForecastTab, ForecastTabs
  },
  data() {
    return {
      isLoading: true,
    }
  },
  computed: {
    ...mapGetters([
        'WEATHER'
    ])
  },
  methods: {
    ...mapActions([
        'GET_WEATHER_FROM_API'
    ]),
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
  .forecast {
    display: block;
    min-height: 100vh;
    height: 100%;
    background-image: url('@/assets/images/forecast.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .weather{
    &-icon{
      width: 240px;
      height: 240px;
      text-align: center;
    }
    &-state{
      font-weight: 700;
      font-size: 55px;
      line-height: 110%;
    }
    &-states {
      text-align: center;
      table {
        max-width: 100%;
        margin: 0 auto;
        th,
        td {
          padding: 10px 40px;
          text-align: center;
        }
      }
    }
    &-img{
      height: 80px;
      width: 80px;
    }
  }
  .lds-dual-ring {
    display: block;
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
  @media (max-width: 1200px) {
    .weather-states{
      margin-left: 100px;
    }
  }
  @media (max-width: 1100px) {
    .weather{
      &-states {
        margin-top: 5%;
      }
      &-state {
        font-size: 40px;
      }
      &-icon {
        width: 180px;
        height: 180px;
      }
      &-img {
        height: 65px;
        width: 65px;
      }
    }
  }
  @media (max-width: 800px) {
    .weather{
      &-states{
        margin-top: 10%;
        table{
          th,
          td {
            padding: 10px 20px;
            text-align: center;
          }
        }
      }
      &-state {
        font-size: 30px;
      }
      &-icon {
        width: 150px;
        height: 150px;
      }
      &-img {
        height: 55px;
        width: 55px;
      }
    }
  }
  @media (max-width: 500px) {
    .weather {
      &-states {
        margin-top: 30%;
        table {
          th,
          td {
            padding: 10px 10px;
            text-align: center;
          }
        }
      }
      &-state {
        font-size: 20px;
      }
      &-icon {
        width: 125px;
        height: 125px;
      }
      &-img {
        width: 45px;
        height: 45px;
      }
    }
  }
  @media (max-width: 400px) {
    .weather {
      &-states {
        table {
          th,
          td {
            padding: 10px 5px;
            text-align: center;
          }
        }
      }
    }

  }
</style>