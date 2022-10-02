<template>
  <div class="about">
    <div class="container">
      <Header/>
      <div class="about-content">
        <h2 class="about-title">О нас</h2>
        <p class="about-text">
          <img src="@/assets/images/office.jpg" alt="company" class="about-img">
              Наша компания является ведущим научно-исследовательским и оперативно-методическим учреждением в области гидрометеорологических прогнозов.
        </p>
        <p class="about-text">
          VueWeather - ведущий поставщик данных о погоде и инструментов корпоративного анализа для ученых, бизнес-аналитиков, профессионалов и ученых.  Наша миссия, основанная в 2003 году, всегда заключалась в том, чтобы дать потребителям данных и аналитикам возможность принимать более взвешенные решения на основе высококачественных и легкодоступных данных.
        </p>
        <p class="about-text">
          Наш API данных о погоде лидирует в отрасли, предоставляя самый дешевый доступ ко всем типам данных о погоде по всему миру.  Если вам нужны исторические данные о погоде, прогнозы погоды, сводки о климате, исторические прогнозы погоды или специальные погодные показатели, VueWeather предоставит данные, которые вам нужны для любого метеорологического проекта.
        </p>
        <p class="about-text">
         В системе Всемирной службы погоды Всемирной Метеорологической Организации (ВМО) VueWeather  обеспечивает выполнение международных обязательств Российской Федерации по международному обмену прогностической информацией и данными гидрометеорологических наблюдений и функционирует как:
        </p>
        <ul class="about-list">
          <li class="about-list__item">Мировой Метеорологический Центр</li>
          <li class="about-list__item">Региональный специализированный метеорологический центр в европейском регионе</li>
          <li class="about-list__item">Национальный центр по гидрометеорологическим прогнозам</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: "About",
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
  .about{
    display: block;
    min-height: 100vh;
    height: 100%;
    background-image: url('@/assets/images/about.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    &-content{
      padding: 15px;
      background-color: rgba(0, 0, 0, .3);
      border-radius: 50px;
      p+p {
        padding-top: 15px;
      }
    }
    &-img {
      max-width: 40%;
      padding-right: 10px;
      float: left;
    }
    &-title {
      font-family: 'Open Sans', sans-serif;
      font-weight: 500;
      font-size: 40px;
      line-height: 100%;
      margin-bottom: 10px;
    }
    &-text {
      text-indent: 20px;
    }
    &-list {
      list-style: disclosure-closed;
      padding-top: 10px;
    }

  }
  @media (max-width: 950px) {
    .about {
      &-title {
        padding-left: 15px;
      }
      &-img {
        float: none;
        max-width: 95%;
        padding: 0;
        margin-bottom: 15px;
        margin-left: -10px;
      }
    }
  }
  @media (max-width: 450px) {
    .about {
      &-title {
        font-size: 30px;
      }
      &-text {
        font-size: 16px;
      }
    }
  }
</style>