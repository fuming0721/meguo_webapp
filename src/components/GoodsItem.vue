<template>
  <li class="goods_item" @click="toDetail">
    <div class="goods_item_left">
      <img v-lazy="item.thread_img" alt="">
      <span class="goodsItem_tag" v-if="item.extension.activity_id!=0">{{item.extension.activity_id | activity_type}}</span>
      <span class="album_num" v-if="item.album">{{item.album.album_num}}款</span>
      <van-icon class="video_link" name="play" />
    </div>
    <div class="goods_item_right">
      <div class="goodsItem_right_title">
        <span class="sellerType">{{item.extension.mall_id | mall_id}}</span>
        <span>{{item.title}}</span>
      </div>
      <div class="couponbox">
        <div class="priceBox">
          <span class="priceBox_title">券后价￥</span>
          <span class="priceNum">{{item.extension.price | formatMoney}}</span>
        </div>
        <div class="cunpon2" v-if="item.extension.yhq_amount > 0">
          <img src="@/assets/images/conpunTicket.png" alt="">
          <div>{{item.extension.yhq_amount | formatnum}}元券</div>
        </div>
      </div>
      <div class="volume">
        <del>￥{{item.extension.origin_price | formatMoney}}</del>
        <div v-if="timeNavItemData.over != '即将开始'">已售{{item.extension.volume | over10000}}件</div>
      </div>
      <div class="moreInfo">
        <button class="enterAlbum" v-if="item.album">立即购买</button>
        <div class="vipBox" v-else>
          <tag-price type="vip">自买省￥{{item.extension.commission | formatMoney}}</tag-price>
          <tag-price type="svip">升级省￥2.9</tag-price>
        </div>
        <van-icon name="star-o" class="collection"></van-icon>
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
    timeNavItemData: {
      type: Object,
      require: true
    }
  },
  methods: {
    toDetail () {
      this.item.album ? this.$router.push({ path: 'album',
        query: {
          id: this.item.id,
          album_title: this.item.album.album_title,
          album_cover_img: this.item.album.album_cover_img
        }
      }) : this.$router.push('/detail')
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
    right: 5px;
    bottom: 5px;
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
  .enterAlbum{
    width: 120px;
    height: 40px;
    font-size: 22px;
    color: #fff;
    background-color: @base_font_color;
    border-radius: 8px;
  }
</style>
