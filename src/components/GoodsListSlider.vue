<template>
  <div class="ranking">
    <header-title :title="title">
      <div class="more" @click="seeMore">查看更多 <van-icon name="arrow" /></div>
    </header-title>
    <div class="rankingList">
      <goods-item-grid class="rankingItem" v-for="(item, index) in dataList" :key="index" :item="item">
        <p class="volume" slot="volume">已售{{item.extension.volume | over10000}}件</p>
        <tag-ranking slot="tag" :index="index + 1" v-if="index < 10 && title != '大额券'" />
        <div class="couponNum" slot="coupon" v-if="title=='大额券'">
          <div class="couponNumCenter">
            <div class="couponText">{{item.extension.yhq_amount | formatnum}}元券</div>
          </div>
        </div>
      </goods-item-grid>
      <div class="moreLi" @click="seeMore">查看<br>更多</div>
      <div class="lineHH"></div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from './HeaderTitle'
import GoodsItemGrid from './GoodsItemGrid'
import tagRanking from './TagRanking'
export default {
  props: {
    title: {
      require: true,
      type: String
    },
    dataList: {
      require: true,
      type: Array
    }
  },
  data () {
    return {}
  },
  components: {
    HeaderTitle,
    GoodsItemGrid,
    tagRanking
  },
  methods: {
    seeMore () {
      this.$emit('seeMore')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .couponText {
    font-size: 20px;
    color: #FF2400;
  }
  .couponNumCenter{
    width: 120px;
    height: 32px;
    background-image: url("../assets/images/ticket.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .couponNum {
    position: absolute;
    width: 100%;
    height: 32px;
    bottom: 4px;
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
