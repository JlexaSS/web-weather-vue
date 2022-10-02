<template>
  <div class="news">
    <div class="container">
      <Header/>
      <div
        class="lds-dual-ring"
        v-if="isLoadingTopPosts"
      >
      </div>
      <div
        class="news-content"
        v-else
      >
        <div class="news-top">
          <router-link class="news-top__link" :to="'/news/'+TOP_NEWS[0].id">
            <div class="news-top__block">
              <div class="image image-top">
                <img :src=TOP_NEWS[0].url alt="news" class="news-top__img">
              </div>
              <div class="news-top__block-content">
                <h3 class="news-top__block-title">{{ TOP_NEWS[0].title.substring(0, 35) }}...</h3>
                <span class="news-top__block-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos ducimus est excepturi, fuga laboriosam magnam minus...
                </span>
              </div>
            </div>
          </router-link>
          <div class="news-top__grid">
            <div class="news-top__rows">
              <div class="news-top__article">
                <router-link class="news-top__link" :to="'/news/'+TOP_NEWS[1].id">
                  <div class="image">
                    <img :src=TOP_NEWS[1].url alt="news" class="news-top__row-img">
                  </div>
                  <div class="news-top__row-content">
                    <h3 class="news-top__row-title">{{ TOP_NEWS[1].title.substring(0, 35) }}...</h3>
                    <span class="news-top__row-desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos ducimus...
                    </span>
                  </div>
                </router-link>
              </div>
              <div class="news-top__article">
                <router-link class="news-top__link" :to="'/news/'+TOP_NEWS[2].id">
                  <div class="image">
                    <img :src=TOP_NEWS[2].url alt="news" class="news-top__row-img">
                  </div>
                  <div class="news-top__row-content">
                    <h3 class="news-top__row-title">{{ TOP_NEWS[2].title.substring(0, 35) }}...</h3>
                    <span class="news-top__row-desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos ducimus...
                    </span>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="news-top__rows">
              <div class="news-top__article">
                <router-link class="news-top__link" :to="'/news/'+TOP_NEWS[3].id">
                  <div class="image">
                    <img :src=TOP_NEWS[3].url alt="news" class="news-top__row-img">
                  </div>
                  <div class="news-top__row-content">
                    <h3 class="news-top__row-title">{{ TOP_NEWS[3].title.substring(0, 35) }}...</h3>
                    <span class="news-top__row-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos ducimus...
                  </span>
                  </div>
                </router-link>
              </div>
              <div class="news-top__article">
                <router-link class="news-top__link" :to="'/news/'+TOP_NEWS[4].id">
                  <div class="image">
                    <img :src=TOP_NEWS[4].url alt="news" class="news-top__row-img">
                  </div>
                  <div class="news-top__row-content">
                    <h3 class="news-top__row-title">{{ TOP_NEWS[4].title.substring(0, 35) }}...</h3>
                    <span class="news-top__row-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos ducimus...
                  </span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="news-bottom">
          <div
            class="news-bottom__item"
            v-for="news_list of NEWS"
            :key="news_list.id"
          >
            <router-link
              class="news-bottom__link"
              :to="'/news/'+news_list.id"
            >
              <div class="news-bottom__image">
                <img
                    class="news-bottom__img"
                    :src=news_list.url
                    alt="news"
                >
              </div>
              <div class="news-bottom__content">
                <h6 class="news-bottom__title">{{news_list.title}}</h6>
                <p class="news-bottom__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem commodi cumque eaque ex facilis, fuga illo ipsum porro quo repellat repellendus soluta totam! Asperiores doloribus fugiat placeat quas sed...</p>
              </div>
            </router-link>
          </div>
          <div
              class="lds-dual-ring"
              v-if="isLoadingBottomPosts"
          >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import {mapActions, mapGetters} from "vuex";

export default {
  name: "News",
  components: {Header},
  data() {
    return {
      page: 2,
      isLoadingTopPosts: true,
      isLoadingBottomPosts: false
    }
  },
  computed: {
    ...mapGetters([
      'TOP_NEWS',
      'NEWS',
    ])
  },
  methods: {
    ...mapActions(['GET_NEWS_FROM_API']),
    scroll () {
      this.isLoadingBottomPosts = true
      window.onscroll = () => {
        let isBottomOfWindow =
            document.documentElement.scrollHeight - document.documentElement.scrollTop ===
            document.documentElement.clientHeight;
        if (isBottomOfWindow) {
          this.GET_NEWS_FROM_API(this.page)
          this.page++
          this.isLoadingBottomPosts = false
        }
      }
    }
  },
  mounted() {
    this.GET_NEWS_FROM_API()
    this.isLoadingTopPosts = false
    this.scroll(this.page)
  }
}
</script>

<style lang="scss" scoped>
.news {
  height: 100vh;
  background-image: url('@/assets/images/news.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  &::after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 5px;
    width: 100%;
    border-bottom: 5px solid #555C16;
  }
  &-content {
    padding: 0 10px;
  }

  &-top {
    display: flex;
    flex-wrap: wrap;

    &__img {
      width: 590px;
      height: 300px;
      object-fit: cover;
    }

    &__block {
      position: relative;

      &-content {
        position: absolute;
        border: 1px solid rgba(0, 0, 0, .2);
        background-color: rgba(0, 0, 0, .4);
        left: 0;
        right: 0;
        height: 130px;
        padding: 10px;
      }

      &-title {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 25px;
        line-height: 100%;
        margin-bottom: 30px;
      }
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      width: 50%;
    }

    &__rows {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 50%;
    }

    &__article {
      height: 150px;
      position: relative;
      border: 1px solid rgba(0, 0, 0, .2);
      z-index: 50;
    }

    &__row {
      position: relative;

      &-content {
        position: absolute;
        padding: 5px;
        width: 100%;
        height: 70px;
        bottom: -2px;
        background-color: rgba(0, 0, 0, .4);
      }

      &-img {
        width: 300px;
        height: 150px;
        object-fit: cover;
      }

      &-title {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        position: absolute;
        top: 6px;
        font-size: 18px;
      }

      &-desc {
        position: absolute;
        top: 33px;
        font-size: 13px;
        line-height: 100%;
      }
    }

  }
  &-bottom {
    position: relative;
    z-index: 150;
    padding-top: 50px;
    &__item {
      padding: 15px;
      background-color: rgba(0, 0, 0, .4);
      margin-bottom: 20px;
      transition: background-color .5s;
      &:hover {
        background-color: rgba(0, 0, 0, .7);
      }
    }
    &__link {
      display: flex;
    }
    &__img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
    &__content {
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      width: 900px;
    }
    &__title {
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 30px;
      line-height: 100%;
      padding-top: 10px;
    }
    &__desc {
      font-size: 14px;
      padding-top: 15px;
    }
    &__image {
      height: 150px;
      width: 295px;
      overflow: hidden;
      img {
        transition: transform .5s;
      }
      img:hover {
        transform: scale(1.5);
      }
    }
  }
}

.image {
  height: 150px;
  width: 295px;
  overflow: hidden;

  &-top {
    height: 300px;
    width: 590px;
  }

  img {
    transition: transform .5s;
  }

  img:hover {
    transform: scale(1.5);
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
@media (max-width: 1200px) {
  .news-top {
    justify-content: center;
    &__img {
      width: 100% ;
      height: 200px;
    }
    &__rows,
    &__grid,
    &__link{
      width: 100%;
    }
    &__article{
      height: 200px;
    }
    &__row{
      &-img {
        width: 100%;
        height: 200px;
      }
    }
    &__block{
      &-content{
        height: 70px;
        bottom: -2px;
        padding: 5px;
      }
      &-title{
        top: 6px;
        font-size: 18px;
      }
      &-desc {
        position: absolute;
        top: 25px;
        font-size: 13px;
      }
    }
  }
  .image {
    width: 100%;
    height: 200px;
    &-top {
      width: 100%;
      height: 200px;
    }
  }
}
@media(max-width: 1000px) {
  .news-bottom{
    &__title {
      font-size: 25px;
      padding-top: 5px;
    }
    &__desc {
      font-size: 12px;
    }
  }
}
@media(max-width: 800px){
  .news-bottom{
    &__image{
      width: 100%;
    }
    &__link{
      display: flex;
      flex-direction: column;
    }
    &__content{
      width: 100%;
    }
  }
}
@media(max-width: 600px) {
  .news-bottom {
    &__title {
      font-size: 22px;
      padding-top: 5px;
    }
  }
}
</style>