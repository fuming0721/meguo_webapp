<template>
  <div class="ticketInfo" v-if="extension.discount==3 || extension.summary.length || haveManyDiscount">
    <div class="ticket" @click="orderBuy" v-if="extension.discount==3 && !haveManyDiscount">
      <div class="ticket_left">
        <div class="ticketJe">{{extension.yhq_amount}}元优惠券</div>
        <div class="ticketshijian">使用期限：{{extension.coupon_start_time * 1000 | dateformat}}-{{extension.coupon_end_time * 1000 | dateformat}}
        </div>
      </div>
      <div class="ticket_right">
        立即领取
      </div>
    </div>
    <div class="manyDiscount" v-if="haveManyDiscount">
      <div class="manyDiscount_title">优惠</div>
      <ul class="many_discount_list">
        <li class="discount_item" v-if="extension.discount==3">
          <div class="item_tag">优惠券</div>
          <div>￥{{extension.yhq_amount}}元， 有效期至{{extension.coupon_end_time * 1000 | dateformat}}</div>
          <div class="getCoupon" @click="orderBuy">领券 <van-icon name="arrow"/></div>
        </li>
        <li class="discount_item">
          <div class="item_tag">定金</div>
          <div>付款￥{{extension.deposit_price}}元抵扣￥{{extension.deposit_deduct_price}}元</div>
        </li>
        <li class="discount_item">
          <div class="item_tag">拍下减</div>
          <div>拍下立减￥{{extension.buy_deduct_price}}元</div>
        </li>
        <li class="discount_item">
          <div class="item_tag">满减</div>
          <div>满￥{{extension.full_reduction_price}}元减￥{{extension.full_reduction_deduct_price}}</div>
        </li>
      </ul>
    </div>
    <div class="summary" v-if="extension.summary.length">{{extension.summary}}</div>
  </div>
</template>
<script>
export default {
  props: {
    extension: {
      type: Object,
      require: true
    }
  },
  methods: {
    orderBuy () {
      this.$emit('buy')
    }
  },
  computed: {
    // 有存定金抵扣活动
    haveActive_deposit () {
      return parseFloat(this.extension.deposit_deduct_price) > 0
    },
    // 有拍下减活动
    haveActive_buy_deduct () {
      return parseFloat(this.extension.buy_deduct_price) > 0
    },
    // 有满减活动
    haveActive_full_reduction () {
      return parseFloat(this.extension.full_reduction_deduct_price) > 0
    },
    // 有多项优惠
    haveManyDiscount () {
      return this.haveActive_deposit || this.haveActive_buy_deduct || this.haveActive_full_reduction
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .ticketInfo{
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
  }
  .ticket {
    width: 100%;
    height: 120px;
    position: relative;
    margin: 0px auto;
    background: -ms-linear-gradient(left, #FF9000 0%, #F23C4E 100%);
    background: -moz-linear-gradient(left, #FF9000 0%, #F23C4E 100%);
    background: -o-linear-gradient(left, #FF9000 0%, #F23C4E 100%);
    background: -webkit-gradient(linear, 0% 0%, 0%, 100%, from(#FF9000), to(#F23C4E));
    background: linear-gradient(to right, #FF9000 0%, #F23C4E 100%);
    border-radius: 12px;
    box-shadow: 0 2px 8px 0 rgba(74, 74, 74, 0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
  }

  .ticket:before, .ticket:after {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    content: '';
    position: absolute;
  }

  .ticket:before {
    left: -20px;
  }

  .ticket:after {
    right: -20px;
  }

  .ticket_left {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .ticket_right {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: #fff;
    height: 100%;
    border-left: 2px dashed rgba(255, 255, 255, 0.3);
  }

  .ticketJe {
    font-size: 28px;
    color: #fff;
  }

  .ticketshijian {
    color: #fff;
    font-size: 20px;
    margin-top: 16px;
  }
  .summary{
    font-size: 26px;
    color: #666;
    line-height: 1.5;
    padding: 20px 0 0;
  }
  .manyDiscount{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 2px dashed #f2f2f2;
    padding-bottom: 10px;
  }
  .manyDiscount_title{
    height: 100%;
    width: 90px;
    color: #666;
    flex-shrink: 0;
    padding-top: 5px;
  }
  .many_discount_list{
    flex-grow: 1;
  }
  .discount_item{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 24px;
    color: #999;
    line-height: 2;
    position: relative;
  }
  .item_tag{
    background-color: #FDEDE7;
    color: #FF703B;
    height: 36px;
    line-height: 36px;
    text-align: center;
    padding: 0 16px;
    border-radius: 36px;
    margin-right: 20px;
  }
  .getCoupon{
    color: #FF703B;
    font-size: 28px;
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    height: 100%;
    top: 0;
  }
</style>
