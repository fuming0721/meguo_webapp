<template>
  <loading-container fetch="getHomeData" :params="params" @done="onDone">
    <top-search class="top-search"/>
    <sweiper :swiperImgs="swiperImgs" />
    <icon-nav />
    <today-must-browse class="today-must-browse" :todayMustBrowseData="todayMustBrowse" @timeEnd="timeEnd" />
    <goods-list-slider :dataList="volumeRank" title="销量排行" @seeMore="seeMore"/>
    <goods-category-nav-page />
  </loading-container>
</template>

<script>
import Sweiper from './children/Swiper'
import IconNav from '@/components/IconNav'
import TopSearch from '@/components/searchLink'
import TodayMustBrowse from './children/TodayMustBrowse'
import GoodsListSlider from '@/components/GoodsListSlider'
import GoodsCategoryNavPage from './children/GoodsCategoryNavPage'
export default {
  components: {
    Sweiper,
    TopSearch,
    IconNav,
    TodayMustBrowse,
    GoodsListSlider,
    GoodsCategoryNavPage
  },
  data () {
    return {
      params: {},
      swiperImgs: [],
      todayMustBrowse: {},
      volumeRank: []
    }
  },
  methods: {
    onDone ([swiperImgs, todayMustBrowse, volumeRank]) {
      this.swiperImgs = swiperImgs.data.pic
      this.todayMustBrowse = todayMustBrowse.data.result
      this.volumeRank = volumeRank.data.result.threads
    },
    timeEnd () {
      console.log('倒计时结束')
    },
    seeMore () {
      this.$router.push('/volumeranking')
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .today-must-browse{
    margin-top: 20px;
    background-color: #fff;
  }
  .top-search{
    position: sticky;
  }
</style>
