<template>
  <div class="CommissionDetail">
    <nav-bar />
    <div class="commissionBanner">
      <BalanceCard :myCommission="myCommission"/>
    </div>
    <div class="balanceList">
      <van-tabs v-model="menuIndex" :line-width="120" :swipe-threshold="4" animated swipeable >
        <van-tab>
          <div slot="title" class="navItemName">
            <span>今日预估</span>
            <span class="moneyNum">￥{{(myCommission.todayForecastEarnings || 0) | formatMoney}}</span>
          </div>
          <EarningsItem :item="myCommission.today" iconName="day" iconColor="#50E3C2"/>
        </van-tab>
        <van-tab>
          <div slot="title" class="navItemName">
            <span>昨日预估</span>
            <span class="moneyNum">￥{{(myCommission.yesterdayForecastEarnings || 0) | formatMoney}}</span>
          </div>
          <EarningsItem :item="myCommission.yesterday" iconName="month" iconColor="#FFC31A"/>
        </van-tab>
        <van-tab>
          <div slot="title" class="navItemName">
            <span>本月预估</span>
            <span class="moneyNum">￥{{(myCommission.thisMonthForecastEarnings || 0) | formatMoney}}</span>
          </div>
          <EarningsItem :item="myCommission.thisMonth" iconName="earnings-lastmo" iconColor="#8B572A"/>
        </van-tab>
        <van-tab>
          <div slot="title" class="navItemName">
            <span>上月预估</span>
            <span class="moneyNum">￥{{(myCommission.lastMonthForecastEarnings || 0) | formatMoney}}</span>
          </div>
          <EarningsItem :item="myCommission.lastMonth" iconName="earnings-lastmo" iconColor="#9B9B9B"/>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import BalanceCard from './children/BalanceCard.vue'
import EarningsItem from './children/EarningsItem.vue'
export default {
  components: {
    BalanceCard,
    EarningsItem
  },
  data () {
    return {
      menuIndex: 0,
      myCommission: {}
    }
  },
  created () {
    this.getCommissionDetail()
  },
  methods: {
    getCommissionDetail () {
      this.$api('myCommission').then(({ data }) => {
        this.myCommission = data.success ? data.result : {}
      })
    }
  },
  computed: {
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .CommissionDetail{
    padding-top: 80px;
  }
  .commissionBanner{
    width: 100%;
    height: 422px;
    padding: 30px;
    background-color: #F5A623;
  }
  .balanceList{
    width: 100%;
  }
  .navItemName{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    flex-direction: column;
    &>span{
      height: 40px;
      line-height: 40px;
      color: #fff;
      font-size: 24px;
    }
  }
  .moneyNum{
    font-size: 22px !important;
  }
</style>
