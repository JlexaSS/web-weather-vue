<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ForecastTab',
  props: {
    title: {
      type: String,
    },
    img: {
      type: String
    },
    index: {
      type: Number
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  mounted() {
    if(this.index === 0){
      this.isActive = true
    }
  }
}
</script>
