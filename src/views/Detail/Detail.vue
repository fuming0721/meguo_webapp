<template>
  <detail-loading fetch="goodsDetail" :params="params" @done="onDone">
    <Header />
    <Banner :goodsDetailData="goodsDetailData" />
    <GoodsInfo :goodsDetailData="goodsDetailData" />
    <TicketInfo :extension="goodsDetailData.extension" @buy="orderBuy" />
    <SellerInfo :seller="goodsDetailData.seller" />
    <GoodsContent :extension="goodsDetailData.extension" />
    <Recommend :params="recommendParams" />
    <GoodsAction :goodsDetailData="goodsDetailData" @buy="orderBuy" />
    <van-popup v-model="showPop" class="taokouling" overlay-class="myss" @click-overlay="close">
      <p class="taokoulingText">{{taoKouLingText}}</p>
      <div class="title">长按 -> 全选 -> 复制，打开[手氵掏]即可领券购买</div>
      <div class="copyArea copyBtn" @click="copyTaoKouLongText" v-if="!copySuccess">一键复制</div>
      <div class="copyArea copySuccess" v-else>复制成功，打开【手淘】领券购买</div>
    </van-popup>
  </detail-loading>
</template>

<script>
import DetailLoading from './children/DetailLoading.vue'
import Header from './children/Header.vue'
import Banner from './children/Banner.vue'
import GoodsInfo from './children/GoodsInfo.vue'
import TicketInfo from './children/TicketInfo.vue'
import SellerInfo from './children/SellerInfo.vue'
import GoodsContent from './children/GoodsContent.vue'
import Recommend from './children/Recommend.vue'
import GoodsAction from './children/GoodsAction.vue'
export default {
  props: {
    id: {
      type: String
    }
  },
  components: {
    DetailLoading,
    Header,
    Banner,
    GoodsInfo,
    TicketInfo,
    SellerInfo,
    GoodsContent,
    Recommend,
    GoodsAction
  },
  data () {
    return {
      params: {
        id: this.id
      },
      goodsDetailData: {},
      recommendParams: {
        flag: Math.random().toString(36).substr(2),
        id: this.id
      },
      showPop: false,
      taoKouLingText: '',
      copySuccess: false
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.params.id = to.params.id
    this.recommendParams = {
      flag: Math.random().toString(36).substr(2),
      id: to.params.id
    }
    next()
  },
  methods: {
    onDone ({ data }) {
      this.goodsDetailData = data
      this.leaveFootprint()
    },
    leaveFootprint () {
      if (this.$auth.userInfo && this.$auth.userInfo.success) {
        this.$api('leaveFootprint', {
          id: this.id,
          type: 1
        })
      }
    },
    orderBuy () {
      if (this.$auth.userInfo.success && this.$auth.userInfo) {
        let extension = this.goodsDetailData.extension
        let jumpUrl = `https://uland.taobao.com/coupon/edetail?itemId=${extension.num_iid}&activityId=${extension.coupon_activity_id}&pid=mm_17784698_11946156_42764458`
        if (this.$deviceType.isWeixin) {
          this.showPop = true
          this.geTaoKouLing()
        } else if (this.$deviceType.isWeibo) {
          window.location.href = extension.click_url.wb_wap_url.length ? `http://m.meguo.com/link?url=${encodeURIComponent(extension.click_url.wb_wap_url)}` : jumpUrl
        } else {
          window.location.href = extension.click_url.wap_url.length ? extension.click_url.wb_wap_url : jumpUrl
        }
      } else {
        this.$router.push('/login?redirect=' + this.$route.fullPath)
      }
    },
    geTaoKouLing () {
      this.$api('tao_kou_ling', { id: this.params.id }).then(({ data }) => {
        this.taoKouLingText = data.data.model
      })
    },
    copyTaoKouLongText () {
      this.$copyText(this.taoKouLingText).then(e => {
        this.copySuccess = true
      }, e => {
        this.copySuccess = false
        this.$toast({
          duration: 3000,
          forbidClick: true,
          message: '复制失败，请重新尝试'
        })
      })
    },
    close () {
      setTimeout(() => {
        this.copySuccess = false
      }, 200)
    }
  }
}
</script>
<style lang="less" type="text/less" scoped>
  .myss{
    background-color: rgba(0, 0, 0, 0.6);
  }
  .taokouling{
    width: 600px;
    height: 240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .taokoulingText{
    height: 90px;
    text-align: center;
    line-height: 90px;
    font-size: 28px;
  }
  .title{
    font-size: 24px;
    height: 50px;
    line-height: 50px;
  }
  .copyArea{
    height: 100px;
    line-height: 100px;
    color: #fff;
    width: 100%;
    text-align: center;
    font-size: 28px;
  }
  .copyBtn{
    background-color: #FE5913;
  }
  .copySuccess{
    background-color: #72B835;
  }
</style>
