<template>
  <loading-container fetch="getHomeData" :params="params" @done="onDone">
    <top-search></top-search>
    <sweiper :swiperImgs="swiperImgs" />
    <icon-nav></icon-nav>

    <today-must-browse class="today-must-browse" :todayMustBrowseData="todayMustBrowse" @timeEnd="timeEnd"></today-must-browse>
    <goods-list-slider :volumeRank="volumeRank" title="销量排行"></goods-list-slider>

    <goods-category-nav-page></goods-category-nav-page>
  </loading-container>
</template>

<script>
import Sweiper from './children/Swiper'
import IconNav from './children/IconNav'
import TopSearch from '@/components/searchLink'
import TodayMustBrowse from './children/TodayMustBrowse'
import GoodsListSlider from './children/GoodsListSlider'
import GoodsCategoryNavPage from './children/GoodsCategoryNavPage'
export default {
  name: 'home',
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
  mounted () {
  },
  methods: {
    onDone ([swiperImgs, todayMustBrowse, volumeRank]) {
      this.swiperImgs = swiperImgs.data.pic
      this.todayMustBrowse = todayMustBrowse.data.result
      this.volumeRank = volumeRank.data.result.threads
    },
    timeEnd () {
      console.log('倒计时结束')
    }
  }
}
</script>

<style lang="less" type="text/less" scope>
  .today-must-browse{
    margin-top: 20px;
    background-color: #fff;
  }
</style>
