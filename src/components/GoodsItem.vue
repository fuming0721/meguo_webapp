<template>
  <li class="goods_item" @click="toDetail">
    <div class="goods_item_left">
      <img v-lazy="item.thread_img" alt="">
      <span class="goodsItem_tag" v-if="item.extension.activity_id!=0">{{item.extension.activity_id | activity_type}}</span>
      <span class="album_num" v-if="item.album">{{item.album.album_num}}</span>
      <van-icon class="video_link" name="play" />
    </div>
    <div class="goods_item_right">
      <div class="goodsItem_right_title">
        <span class="sellerType">{{item.extension.mall_id | mall_id}}</span>
        <span>{{item.title}}</span>
      </div>
      <div class="cunponboxcunponbox">
        <div class="priceBox">
          <span>券后价</span>
          <span>{{item.extension.price}}</span>
        </div>
        <div class="cunpon2" v-if="item.extension.yhq_amount > 0">
          <img src="@/assets/images/conpunTicket.png" alt="">
          <div>
            {{item.extension.yhq_amount | formatnum}}元券
          </div>
        </div>
      </div>
      <div class="moreInfo">
        <div>
          <tag-price type="vip">自买省￥2.9</tag-price>
          <tag-price type="svip">升级省￥2.9</tag-price>
        </div>
        <van-icon name="star-o"></van-icon>
      </div>

    </div>
    <!--<div class="v_goodsItem_right">-->
      <!---->
      <!--<div class="volume">-->
        <!--<del>￥{{item.extension.origin_price}}</del>-->
        <!--<div v-if="timeNavItemData.over != '即将开始'">已售{{item.extension.volume | over10000}}件</div>-->
      <!--</div>-->

      <!--<div class="price">-->
        <!--<div class="priceN">-->
          <!--<p>券后价￥</p>-->
          <!--<p class="priceNum">{{item.extension.price}}</p>-->
        <!--</div>-->
        <!--<button class="notBegin" v-if="timeNavItemData.over == '即将开始'">即将开始</button>-->
        <!--<button class="buyNow" v-else>立即抢</button>-->
      <!--</div>-->
    <!--</div>-->
  </li>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    },
    timeNavItemData: {
      type: Object,
      require: true
    }
  },
  methods: {
    toDetail () {
      if (this.timeNavItemData.over !== '即将开始') {
        if ((this.$store.state.isAndroidApp || this.$store.state.isiOSApp) && this.item.over !== '即将开始') {
          this.$bridge.callhandler('seeDetail', this.item.id)
        }
      }
    }
  },
  computed: {
    sellerIcon () {
      if (this.item.extension.mall_id === 1) {
        return '/assets/images/tianmao.png'
      } else {
        return '/assets/images/taobao.png'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scope>
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
    font-size: 26px;
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
  .cunponbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
</style>
