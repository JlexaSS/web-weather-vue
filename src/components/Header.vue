<template>
  <div class="header">
    <div class="header-content">
      <router-link to="/" class="header-logo">
        VueWeather
      </router-link>
      <ul
        class="header-menu"
        :class="{active: isOpen}"
      >
        <li class="header-link"><router-link to="/">Погода</router-link></li>
        <li class="header-link"><router-link to="/news">Новости</router-link></li>
        <li class="header-link"><router-link to="/">О нас</router-link></li>
      </ul>
      <a href="mailto:jowe.jlexa@mail.ru" class="mail">jowe.jlexa@mail.ru</a>
      <button
        class="hamburger-btn"
        :class="{active: isOpen}"
        @click="toggleMenu"
      >
        <span class="hamburger-btn-line"></span>
        <span class="hamburger-btn-line"></span>
        <span class="hamburger-btn-line"></span>
        <span class="hamburger-btn-line"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu(){
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 70px;
    margin-bottom: 80px;
    &-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-logo {
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 50px;
      line-height: 100%;
    }

    &-menu {
      display: flex;
      padding: 0;
      list-style: none;
      cursor: pointer;
    }
    li + li{
      margin-left: 50px;
    }
    &-link{
      position: relative;
      transition: all .5s;
    }
    &-link:hover {
      color: #FFF9DF;
      transform: scale(125%);
    }
    &-link:after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      bottom: -3px;
      width: 0;
      height: 2px;
      background-color: #FFFFFF;
      transition: all .5s;
    }
    &-link:hover:after {
      content: '';
      width: 100%;
      display: block;
      position: absolute;
      left: 0;
      bottom: -3px;
      height: 2px;
      background-color: #FFF9DF;
      transition: all .5s;
    }
  }
  .hamburger-btn {
    display: none;
  }
  @media (max-width: 800px) {
    .header {
      padding: 20px 20px 0;
      &-menu{
        height: 300px;
        flex-direction: column;
        position: absolute;
        padding: 50px 0 0 0;
        text-align: center;
        top: -300px;
        left: 0;
        right: 0;
        font-size: 35px;
        background-color: #0F0F0F;
        transition: all .5s;
        z-index: 1;
      }
      li + li{
        margin: 60px 0 0 0;
      }
    }
    .hamburger-btn {
      display: inline-block;
      position: relative;
      margin: 0;
      padding: 0;
      height: 34px;
      width: 40px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      z-index: 2;
      &-line{
        position: absolute;
        left: 0;
        width: 100%;
        background-color: #FFFFFF;
        height: 2px;
        transition: .3s ease;
        &:nth-child(1){
          top: 0;
        }
        &:nth-child(2){
          top: 17px;
        }
        &:nth-child(3){
          top: 17px;
        }
        &:nth-child(4){
          top: 34px;
        }
      }
    }
    .active{
      &.header-menu{
        transform: translateY(300px);
      }
      .hamburger-btn{
        &-line{
          &:nth-child(1){
            transform: scaleX(0);
          }
          &:nth-child(2){
            transform: rotate(45deg);
          }
          &:nth-child(3){
            transform: rotate(-45deg);
          }
          &:nth-child(4){
            transform: scaleX(0);
          }
        }
      }
    }
  }
  @media (max-width: 650px) {
    .mail{
      display: none;
    }
  }
  @media (max-width: 450px) {
    .header-logo{
      font-size: 40px;
    }
  }
</style>