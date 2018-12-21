<template>
  <li class="goods_item" @click="toDetail">
    <div class="goods_item_left">
      <img v-lazy="item.thread_img" alt="">
      <slot name="activity_type"></slot>
      <slot name="ranking"></slot>
      <slot name="forMoney"></slot>
      <icon name="haveVideo" class="video_link"/>
    </div>
    <div class="goods_item_right">
      <div class="goodsItem_right_title">
        <span class="sellerType">{{item.extension.mall_id | mall_id}}</span>
        <span>{{item.title}}</span>
      </div>
      <div class="couponbox">
        <div class="cunpon2" v-if="item.extension.yhq_amount > 0">
          <img src="@/assets/images/conpunTicket.png" alt="">
          <div>{{item.extension.yhq_amount | formatnum}}元券</div>
        </div>
        <div v-else></div>  <!--flex占位-->
        <slot name="subContent"></slot>
      </div>
      <div class="volume">
        <del>￥{{item.extension.origin_price | formatMoney}}</del>
        <div v-if="timeStatus !== '即将开始'">已售{{item.extension.volume | over10000}}件</div>
      </div>
      <div class="moreInfo">
        <div class="priceBox">
          <span class="priceBox_title">券后价￥</span>
          <span class="priceNum">{{item.extension.price | formatMoney}}</span>
        </div>
        <button class="notBegin" v-if="timeStatus == '即将开始'">即将开始</button>
        <slot name="buyBtn" v-else></slot>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    timeStatus: {
      type: String
    }
  },
  methods: {
    toDetail () {
      if (this.timeStatus !== '即将开始') {
        if (this.$deviceType.isMeguoApp) {
          this.$bridge.callhandler('seeDetail', this.item.id)
        } else {
          this.$router.push({ path: '/detail/' + this.item.id })
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .goods_item {
    width: 100%;
    height: 280px;
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: #fff;
    margin-bottom: 2px;
  }
  .goods_item_left{
    width: 240px;
    height: 240px;
    position: relative;
    flex-shrink: 0;
  }
  .goodsItem_tag {
    position: absolute;
    top: 0px;
    left: 0px;
    color: #fff;
    font-size: 20px;
    width: 80px;
    height: 32px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    background-image: url("../assets/images/tag.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
  .album_num{
    width: 70px;
    height: 30px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    border-radius: 4px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .video_link{
    position: absolute;
    width: 50px;
    right: 5px;
    bottom: 5px;
    opacity: 0.7;
  }
  .goods_item_right{
    flex-grow: 1;
    height: 100%;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .goodsItem_right_title {
    width: 100%;
    font-size: 28px;
    height: 80px;
    line-height: 40px;
    overflow: hidden;
    color: #333;
  }
  .sellerType{
    font-size: 14px;
    padding: 0 5px;
    border-radius: 8px;
    border: 1px solid @base_font_color;
    line-height: 20px;
    color: @base_font_color;
    position: relative;
    top: -4px;
    margin-right: 10px;
  }
  .couponbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .priceBox{
    color: @base_font_color;
  }
  .priceBox_title{
    font-size: 18px;
  }
  .priceNum{
    font-size: 32px;
    font-weight: bolder;
    position: relative;
    top: 1px;
  }
  .cunpon2 {
    position: relative;
    width: 108px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cunpon2 > img {
    width: 100%;
    height: 32px;
  }

  .cunpon2 > div {
    font-size: 20px;
    position: absolute;
    width: 100%;
    height: 32px;
    line-height: 34px;
    top: 0px;
    left: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: @orange_ticket;
  }
  .volume {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    color: #999;
    margin: 12px 0;
  }
  .moreInfo{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .vipBox{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .collection{
    font-size: 32px;
  }
  .enterAlbum{
    width: 120px;
    height: 40px;
    font-size: 22px;
    color: #fff;
    background-color: @base_font_color;
    border-radius: 8px;
  }
  .buyNow, .notBegin {
    width: 120px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    background-color: @base_font_color;
    color: #fff;
    border-radius: 4px;
    border: none;
  }
  .notBegin{
    background-color: @base_not_begin;
  }
  .brief{
    font-size: 28px;
    color: @base_font_color;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 320px;
  }
</style>
