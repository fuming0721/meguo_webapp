<template>
  <div class="BalanceCard">
    <p>预估收入<van-icon class="icons" name="question" @click="estimateDes(estimateDesText)" /></p>
    <div class="estimate"><span>￥</span>{{(myCommission.forecastEarnings || 0) | formatMoney}}</div>
    <p>已结算收入<van-icon class="icons" name="question" @click="estimateDes(settlementDesText)"/></p>
    <div class="bottom">
      <div class="bottomMoney">
        <span>￥</span>{{(myCommission.settledEarnings || 0) | formatMoney}}
      </div>
      <button class="toApp" href="http://url.cn/5Qp56rv" @click="handleWithdraw(withdraw)">APP中提现</button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    myCommission: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      estimateDesText: {
        title: '什么是预估收入？',
        message: '预估收入包含：您+您的粉丝+您的团队付款订单佣金预估+收货订单佣金预估。'
      },
      settlementDesText: {
        title: '什么是已结算收入？',
        message: '结算收入是上一个自然月内“已收货”状态订单的佣金收入，每月25号结算与您，结算后可自主提现。'
      },
      withdraw: {
        title: '提现说明',
        message: '因涉及您的资金安全，目前仅支持在APP中提现'
      }
    }
  },
  methods: {
    estimateDes (info) {
      this.$dialog.confirm({
        className: 'des',
        cancelButtonText: '＋',
        title: info.title,
        message: info.message,
        showConfirmButton: false,
        closeOnClickOverlay: true
      }).then(() => {}).catch(() => {})
    },
    handleWithdraw (info) {
      this.$dialog.confirm({
        className: 'myDialog',
        cancelButtonText: '＋',
        title: info.title,
        message: info.message,
        confirmButtonText: '前往APP'
      }).then(() => {
        window.location.href = 'http://url.cn/5Qp56rv'
      }).catch(() => {})
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .BalanceCard{
    width: 100%;
    height: 100%;
    background-image: url("https://img.alicdn.com/imgextra/i2/62752115/O1CN01s3C5B61RUiAf62WvE_!!62752115.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 60px 50px 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    color: #fff;
    &>p{
      font-size: 24px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      &>.icons{
        margin-left: 10px;
      }
    }
  }
  .estimate{
    font-size: 66px;
    font-weight: bolder;
    &>span{
      font-size: 22px;
    }
  }
  .bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .bottomMoney{
    font-size: 32px;
    font-weight: bold;
    &>span{
      font-size: 22px;
    }
  }
  .toApp{
    width: 200px;
    display: block;
    line-height: 60px;
    text-align: center;
    height: 60px;
    background-color: #fff;
    color: #FF740E;
    border-radius: 60px;
    font-size: 24px;
    &:active{
      opacity: 0.8;
    }
  }
</style>
