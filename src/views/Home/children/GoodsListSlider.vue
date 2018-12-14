<template>
  <div class="ranking">
    <header-title :title="title">
      <div class="more" @click="seeMore">查看更多 <van-icon name="arrow" /></div>
    </header-title>
    <div class="rankingList">
      <goods-item-grid class="rankingItem" v-for="(item, index) in volumeRank" :key="index" :item="item">
        <p class="volume" slot="volume">已售{{item.extension.volume | over10000}}件</p>
        <div class="tag" slot="tag">Top.{{index + 1}}</div>
        <!--<div class="couponNum" slot="coupon" v-if="title=='大额券'">-->
          <!--<img src="@/assets/images/ticket.png" alt="">-->
          <!--<span class="couponText">{{item.extension.yhq_amount | formatnum}}元券</span>-->
        <!--</div>-->
      </goods-item-grid>
      <div class="moreLi" @click="seeMore">查看<br>更多</div>
      <div class="lineHH"></div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle'
import GoodsItemGrid from '@/components/GoodsItemGrid'
export default {
  props: {
    title: {
      require: true,
      type: String
    },
    volumeRank: {
      require: true,
      type: Array
    }
  },
  data () {
    return {}
  },
  components: {
    HeaderTitle,
    GoodsItemGrid
  },
  methods: {
    seeMore () {
      // this.$emit('seeMore')
      this.$toast('跳转')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scope>
  .couponNum > img {
    width: 100%;
    height: 32px;
    line-height: 32px;
  }

  .couponText {
    font-size: 20px;
    position: absolute;
    width: 100%;
    height: 32px;
    line-height: 347px;
    top: 0px;
    left: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FF2400;
  }
  .couponNum {
    position: absolute;
    width: 120px;
    left: calc(50% - 54px);
    height: 32px;
    bottom: 4px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .lineHH {
    width: 2px;
    height: 100px;
    flex-shrink: 0;
  }

  .moreLi {
    width: 120px;
    margin: 0 30px;
    height: 200px;
    flex-shrink: 0;
    background-color: #eee;
    font-size: 24px;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tag {
    position: absolute;
    top: 0;
    left: -8px;
    font-size: 20px;
    width: 45%;
    height: 28px;
    color: #fff;
    background: -moz-linear-gradient(left, #FF7502 0%, #FF0100 100%);
    background: -webkit-linear-gradient(left, #FF7502 0%, #FF0100 100%);
    background: -o-linear-gradient(left, #FF7502 0%, #FF0100 100%);
    background: -ms-linear-gradient(left, #FF7502 0%, #FF0100 100%);
    background: linear-gradient(to right, #FF7502 0%, #FF0100 100%);
    display: flex;
    align-items: center;
    padding-left: 8px;
    box-sizing: border-box;
    border-radius: 0 28px 28px 0;

    &::after {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 8px 8px 0;
      border-color: transparent #ff7402 transparent transparent;
      top: 28px;
      left: 0px;
      position: absolute;
    }
  }

  .volume {
    font-size: 20px;
    color: #999;
    margin: 10px 0;
  }

  .rankingItem {
    width: 200px;
    margin-left: 30px;
    position: relative;
  }

  .ranking {
    margin-top: 20px;
    background-color: #fff;
  }

  .rankingList {
    display: flex;
    justify-content: flex-start;
    overflow-y: scroll;
    padding-right: 30px;
    -webkit-overflow-scrolling: touch;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
  }

  .countDown > span {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #000;
    border-radius: 50%;
  }

  .app_table > ul {
    width: 50%;
    padding: 12px 20px;
    flex-shrink: 0;
    box-sizing: border-box;
  }

  .more {
    font-size: 22px;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
