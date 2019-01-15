<template>
  <div class="orderGoodsItem">
    <div class="item_left">
      <img v-lazy="item.pict_url" alt="">
    </div>
    <div class="item_right">
      <div class="right_top">
        <span class="sellerType">{{item.user_type | mall_id}}</span>
        <span>{{item.title}}</span>
      </div>
      <p class="orderNum">订单编号：{{ item.trade_id }}</p>
      <div class="price">
        <span>￥{{(item.alipay_total_price || 0) | formatMoney}}</span>
        <span class="commission" v-if="item.commission > 0">预估赚￥{{(item.commission || 0) | formatMoney}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .orderGoodsItem{
    width: 100%;
    height: 240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  .item_left{
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-right: 20px;
    &>img{
      max-height: 100%;
      max-width: 100%;
    }
  }
  .item_right{
    height: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }
  .right_top {
    width: 100%;
    font-size: 28px;
    height: 80px;
    line-height: 40px;
    overflow: hidden;
    color: #333;
    line-height: 1.5;
  }
  .sellerType{
    font-size: 20px;
    padding: 0 5px;
    border-radius: 8px;
    border: 1px solid @base_font_color;
    line-height: 20px;
    color: @base_font_color;
    position: relative;
    top: -3px;
    margin-right: 10px;
  }
  .orderNum{
    font-size: 24px;
    color: #999;
  }
  .price{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>span{
      color: #4a4a4a;
    }
  }
  .commission{
    width: 200px;
    height: 40px;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff !important;
    border-radius: 40px;
    background: -moz-linear-gradient(left, #FAD961 0%, #FF5C00 100%);
    background: -webkit-linear-gradient(left, #FAD961 0%, #FF5C00 100%);
    background: -o-linear-gradient(left, #FAD961 0%, #FF5C00 100%);
    background: -ms-linear-gradient(left, #FAD961 0%, #FF5C00 100%);
    background: linear-gradient(to right, #FAD961 0%, #FF5C00 100%);
  }
</style>
