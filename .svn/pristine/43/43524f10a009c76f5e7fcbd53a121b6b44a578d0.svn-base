<template>
  <li class="goods_item" @click="toDetail">
    <div class="goods_item_left">
      <img v-lazy="item.pict_url" alt="">
    </div>
    <div class="goods_item_right">
      <div class="goodsItem_right_title">
        <span class="sellerType">{{item.user_type | mall_id}}</span>
        <span>{{item.title}}</span>
      </div>
      <div class="couponbox">
        <div class="priceBox">
          <span class="priceBox_title">券后价￥</span>
          <span class="priceNum">{{item.zk_final_price | formatMoney}}</span>
        </div>
        <div class="cunpon2" v-if="item.coupon_price > 0">
          <img src="@/assets/images/conpunTicket.png" alt="">
          <div>{{item.coupon_price | formatnum}}元券</div>
        </div>
      </div>
      <div class="volume">
        <del>￥{{(Number(item.zk_final_price) + Number(item.coupon_price)) | formatMoney}}</del>
        <div>已售{{item.volume | over10000}}件</div>
      </div>
      <div class="moreInfo">
        <div class="vipBox" v-if="($auth.userInfo.success && $auth.userInfo && ($auth.userInfo.memberLevel == 3 || $auth.userInfo.memberLevel == 2)) && (item.black_commission != 0 || item.white_commission != 0)"> <!--白金-->
          <tag-price :item="item" />
          <tag-price :item="item" type="ifSvip" />
        </div>
        <button class="enterAlbum" v-else>立即购买</button>   <!--普通-->
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
    }
  },
  data () {
    return {
    }
  },
  methods: {
    toDetail () {
      let params = {
        extension: {
          white_commission: this.item.white_commission,
          black_commission: this.item.black_commission,
          num_iid: this.item.num_iid,
          coupon_start_time: this.item.coupon_start_time,
          coupon_end_time: this.item.coupon_end_time,
          price: this.item.zk_final_price,
          volume: this.item.volume,
          yhq_amount: this.item.coupon_price,
          mall_id: this.item.user_type,
          summary: '',
          origin_price: Number(this.item.zk_final_price) + Number(this.item.coupon_price),
          discount: this.item.coupon_price > 0 ? 3 : 0,
          coupon_activity_id: this.item.coupon_activity_id
        },
        thread_img: this.item.pict_url,
        title: this.item.title,
        cover_pic: this.item.cover_pic,
        is_video: 0
      }
      this.$router.push(`/detailtb?tbparams=${JSON.stringify(params)}`)
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
    background-image: url("../../../assets/images/tag.png");
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
    line-height: 1.5;
    &>span{
      overflow: hidden;
    }
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
    left: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FF9D5C;
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
  .collection.is_favorite {
    color: @base_font_color;
  }
  .enterAlbum{
    width: 120px;
    height: 40px;
    font-size: 22px;
    color: #fff;
    background-color: @base_font_color;
    border-radius: 8px;
  }
</style>
