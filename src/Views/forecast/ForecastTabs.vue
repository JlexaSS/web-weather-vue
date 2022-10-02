<template>
  <div>
    <ul class='tabs__header'>
      <li
        v-for='(tab, index) in tabs'
        :key='tab.title'
        @click='selectTab(index)'
        :class='{"tab__selected": (index === selectedIndex)}'
      >
        {{ tab.title }}
        <img class="tab-img" :src="require('../../assets/images/weather/'+tab.img+'.svg')" alt="weather">
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ForecastTabs",
  data() {
    return {
      selectedIndex: 0,
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0 0 0 20px;
  padding: 0;

  li {
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
    border-radius: 10px;
    margin: 0 5px 0 0;
    cursor: pointer;
    transition: all .5s;
  }

  li:hover {
    transform: scale(125%);
  }

  li.tab__selected {
    font-weight: bold;
  }
}
.tab-img {
  width: 90px;
  height: 90px;
}
@media (max-width: 1200px) {
  .tabs__header{
    display: block;
    position: sticky;
    width: 50px;
    height: 50px;
    li{
      width: 100px;
      padding: 0;
      margin: 5px 0;
      border: 0;
    }
  }
  .tab-img {
    margin: 0 auto;
    width: 50px;
    height: 50px;
  }
}
</style>