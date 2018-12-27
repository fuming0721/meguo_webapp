<template>
  <div class="pageAgent">
    <top-search />
    <img class="agentBannerImg" src="@/assets/images/banner.png" alt="">
    <agent-school />
    <icon-nav />
    <goods-list-slider :dataList="bigCouponList" title="大额券" @seeMore="toBigCoupon"/>
    <goods-list-slider :dataList="volumeRankList" title="销量排行" @seeMore="toVolumeRanking"/>
    <van-tabs class="appJuMoneyNav" :line-width="100" @click="tabChange" :swipe-threshold="4">
      <van-tab v-for="(item, index) in menuIcons" :key="index" :title="item.id.toString()">
        <span slot="title" class="navItemName">{{item.name}}</span>
      </van-tab>
    </van-tabs>
    <goods-list-vertical fetch="goodsList" :pramas="pramas" @done="onDone">
      <goods-item v-for="(item, index) in goodsList" :key="index" :item="item" :index="index" />
    </goods-list-vertical>
    <agent-tabbar></agent-tabbar>
  </div>
</template>

<script>
import TopSearch from '@/components/searchLink'
import IconNav from '@/components/IconNav'
import GoodsListSlider from '@/components/GoodsListSlider'
import AgentSchool from './children/AgentSchool'
import agentTabbar from './children/AgentTabBar.vue'
export default {
  data () {
    return {
      bigCouponList: [],
      volumeRankList: [],
      pramas: {
        cid: '0'
      },
      goodsList: []
    }
  },
  components: {
    TopSearch,
    IconNav,
    GoodsListSlider,
    AgentSchool,
    agentTabbar
  },
  mounted () {
    this.$nextTick(() => {
      this.getBigCouponList()
      this.getVolumeRankingList()
    })
  },
  methods: {
    getBigCouponList () {
      this.$showLoading()
      this.$api('bigCoupon').then(({ data }) => {
        this.bigCouponList = data.success ? data.result.threads : []
      })
    },
    getVolumeRankingList () {
      this.$showLoading()
      this.$api('volumeRanking').then(({ data }) => {
        this.volumeRankList = data.success ? data.result.threads : []
      })
    },
    toBigCoupon () {
      this.$router.push('/bigcoupon')
    },
    toVolumeRanking () {
      this.$router.push('/volumeranking')
    },
    tabChange (index, id) {
      this.pramas.cid = id
    },
    onDone (data) {
      this.goodsList = data
    }
  },
  computed: {
    menuIcons () {
      const featured = [{ 'id': 0, 'name': '精选' }]
      return [...featured, ...this.$menuIcon]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .appJuMoneyNav{
    margin-top: 20px;
  }
  .pageAgent {
    margin-bottom: 100px;
  }
  .agentBannerImg {
    width: 100%;
  }
  .banner_link{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 160px;
    background-color: #fff;
    margin-bottom: 2px;
  }
  .info_title{
    font-size: 28px;
  }
  .info_title>p{
    font-size: 24px;
    color: #999;
  }
  .info_icon{
    width: 80px;
    margin: 0 20px 0
  }
  .info{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
  }
  .info:first-child{
    border-right: 2px solid #f2f2f2;
  }
</style>
