<template>
  <div class="new">
    <div class="container">
      <Header/>
      <div
          class="lds-dual-ring"
          v-if="isLoading"
      >
      </div>
      <div
        class="new-container"
        v-else
      >
        <div class="new-inner">
          <div class="new-images">
            <img class="new-img" :src="CURRENT_NEWS.url" alt="news">
          </div>
          <div class="new-content">
            <h2 class="new-content__title">{{CURRENT_NEWS.title}}</h2>
            <div class="new-content__desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur beatae dolore ea ex excepturi hic laboriosam laborum maiores maxime molestias nemo numquam odio quisquam quo repellat, sunt vero voluptatum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut culpa cum, dicta ex excepturi hic id ipsum iste laudantium magnam molestias possimus provident quibusdam quisquam recusandae ullam veritatis voluptatibus!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur beatae dolore ea ex excepturi hic laboriosam laborum maiores maxime molestias nemo numquam odio quisquam quo repellat, sunt vero voluptatum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut culpa cum, dicta ex excepturi hic id ipsum iste laudantium magnam molestias possimus!
              </p>
            </div>
          </div>
        </div>
        <div class="new-bottom">
          <div class="new-content__desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur beatae dolore ea ex excepturi hic laboriosam laborum maiores maxime molestias nemo numquam odio quisquam quo repellat, sunt vero voluptatum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut culpa cum, dicta ex excepturi hic id ipsum iste laudantium magnam molestias possimus provident quibusdam quisquam recusandae ullam veritatis voluptatibus!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur beatae dolore ea ex excepturi hic laboriosam laborum maiores maxime molestias nemo numquam odio quisquam quo repellat, sunt vero voluptatum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut culpa cum, dicta ex excepturi hic id ipsum iste laudantium magnam molestias possimus!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "NewsItem",
  components: {
    Header
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data(){
    return {
      isLoading: true
    }
  },
  computed: {
    ...mapGetters([
        'CURRENT_NEWS'
    ])
  },
  methods: {
    ...mapActions([
        'GET_NEWS_FROM_API_BY_ID'
    ])
  },
  mounted() {
    this.GET_NEWS_FROM_API_BY_ID(this.id)
    this.isLoading = false
  }
}
</script>

<style lang="scss" scoped>
  .new{
    &-container{
      padding: 10px;
    }
    &-images {
      width: 30%;
      overflow: hidden;
    }

    &-img{
      max-width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &-inner{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    &-content{
      width: 70%;
      padding: 10px;

      &__title{
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 35px;
        line-height: 100%;
        margin-bottom: 30px;
      }

      &__desc{
        line-height: 29px;
        p+p {
          margin-top: 10px;
      }
      }
    }
    &-bottom{
      padding: 10px 0;
    }

  }
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 170px 45% 0;
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
  @media (max-width: 1150px) {
    .new{
      &-inner{
        flex-direction: column;
      }
      &-content{
        padding: 10px 0;
        width: 100%;
      }
      &-images{
        height: 250px;
        width: 100%;
      }
      &-img{
        object-fit: cover;
        width: 100%;
      }
    }
  }
  @media(max-width: 950px) {
    .new-content {
      &__title {
        font-size: 28px;
      }
      &__desc {
        font-size: 16px;
        line-height: 25px;
      }
    }
  }
</style>