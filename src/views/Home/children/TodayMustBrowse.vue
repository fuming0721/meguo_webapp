<template>
  <div>
    <header-title title="今日必逛">
      <span class="header_title_subText">省一分  都值得</span>
    </header-title>
    <div class="today-must-browse-content">
      <div class="app_table">
        <div class="app_table_left">
          <div class="item_name">9.9包邮</div>
          <van-swipe :autoplay="5000" :width="320" :show-indicators="false" :touchable="false">
            <van-swipe-item class="swiperItem" v-for="(item, index) in nine" :key="index">
              <p class="title">{{item.title}}</p>
              <div class="app_goods_info">
                <div class="app_price_info">
                  <p class="app_goods_price">￥{{item.extension['price'] | formatMoney}}</p>
                  <span class="app_view" @click="jump(item.id)">查看</span>
                </div>
                <div class="app_imgBox">
                  <img :src="item.thread_img" alt="" class="app_goodsImg">
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
        <ul class="app_table_right" v-if="timeBuy">
          <li class="item_name">限时购 <span class="time_title">| {{timePoint}}点场</span></li>
          <li class="app_table_item1">
            <countdown :endTime="timeBuy.end_time" @clear="timeEnd()"></countdown>
            <div class="app_goods_info">
              <div class="app_price_info">
                <p class="app_goods_price">￥{{timeBuy.extension.price | formatMoney}}</p>
                <span class="app_view" @click="jump(timeBuy.id)">抢购</span>
              </div>
              <div class="app_imgBox">
                <img :src="timeBuy.thread_img" alt="" class="app_goodsImg">
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="app_table_bottom">
        <div class="app_table_item2 table2">
          <p>聚好货</p>
          <goods-item-grid :item="collection"></goods-item-grid>
        </div>
        <div class="app_table_item2 table2">
          <p>每日半价</p>
          <goods-item-grid :item="halfPrice"></goods-item-grid>
        </div>
        <div class="app_table_item2">
          <p>种草甄选</p>
          <goods-item-grid :item="couponRank"></goods-item-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle'
import GoodsItemGrid from '@/components/GoodsItemGrid'
import countdown from '@/components/Countdown.vue'
export default {
  props: {
    todayMustBrowseData: {
      require: true,
      type: Object
    }
  },
  data () {
    return {
      nine: {},
      timeBuy: {},
      collection: {},
      halfPrice: {},
      couponRank: {}
    }
  },
  components: {
    HeaderTitle,
    GoodsItemGrid,
    countdown
  },
  created () {

  },
  mounted () {
    this.$nextTick(() => {
    })
  },
  methods: {
    jump (id) {
      this.$bridge.callhandler('seeDetail', id)
    },
    timeEnd () {
      this.$emit('timeEnd')
    }
  },
  computed: {
    timePoint () {
      let newDate = new Date()
      newDate.setTime(this.timeBuy.start_time * 1000)
      return newDate.getHours() || 0
    }
  },
  watch: {
    todayMustBrowseData: {
      handler (v) {
        this.nine = v.nine
        this.timeBuy = v.timeBuy
        this.collection = v.collection
        this.halfPrice = v.halfPrice
        this.couponRank = v.couponRank
      },
      immediate: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  @import "../../../assets/style/variables";
  .app_goodsImg{
    width: 160px;
    height: 160px;
  }
  .header_title_subText{
    font-size: 22px;
    color: #999;
  }
  .today-must-browse-content{
    padding: 0px 15px 20px;
  }
  .app_table {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #f2f2f2;
    border-bottom: none;
    border-radius: 8px 8px 0 0;
  }
  .app_table_left {
    height: 100%;
    width: 360px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 12px 20px;
    border-right: 2px solid #f2f2f2;
  }
  .app_table_right {
    height: 100%;
    width: 360px;
    padding: 12px 20px;
    flex-shrink: 0;
  }
  .item_name {
    font-size: 26px;
    font-weight: bolder;
    margin-bottom: 10px;
  }
  .app_fade-enter-active {
    transition: all .5s;
  }

  .app_fade-leave-active {
    transition: all .5s;
  }

  .app_fade-enter {
    transform: translateX(20px);
    opacity: 0;
  }

  .app_fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
  }
  .app_table_item1 {
    width: 100%;
  }
  .title {
    font-size: 24px;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 10px;
  }
  .app_price_info {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;
    flex-grow: 1;
    padding-left: 5px;
  }
  .app_goods_info {
    display: flex;
    width: 320px;
    justify-content: space-between;
  }
  .app_goods_price {
    font-size: 24px;
    color: @base_font_color;;
  }
  .app_view {
    font-size: 20px;
    color: @base_font_color;
    border: 2px solid #F56473;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 32px;
    width: 80px;
    margin: 12px 0;
  }
  .app_imgBox {
    width: 50%;
    flex-shrink: 0;
  }
  .table2 {
    border-right: 2px solid #f2f2f2;
  }
  .app_table_bottom {
    border: 2px solid #f2f2f2;
    border-radius: 0 0 8px 8px;
    display: flex;
    justify-content: space-between;
  }
  .app_table_item2 > p {
    font-size: 26px;
    margin: 10px 0 20px;
    text-align: center;
  }
  .app_table_item2 {
    width: 33%;
    padding: 10px 20px;
  }
</style>
