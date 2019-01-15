<template>
  <div class="orderdetail">
    <nav-bar :customize="true">
      <div class="navBarCenter" @click="showPop=!showPop">{{currentItem.name}} <van-icon class="arrow" :name="showPop ? 'arrow-up' : 'arrow-down'" /></div>
    </nav-bar>
    <van-popup v-model="showPop" position="top" overlay-class="overLay">
      <ul class="menuItem">
        <li v-for="(item, index) in headerMenu" :key="index" :class="{'currentItem': item.group == currentItem.group}" @click="handlerGroupClick(item.group)">{{item.name}}</li>
      </ul>
    </van-popup>
    <van-tabs class="nav" v-model="navIndex" :line-width="120" :swipe-threshold="4">
      <van-tab v-for="(item, index) in navList" :key="index" :title="item" />
    </van-tabs>
    <div class="orderdetailList">
      <div class="orderSearchBox">
        <p class="msg">订单数据每10分钟更新一次，请耐心等待</p>
        <SearchForm @searchStart="orderSearch" :loading="searchLoading" placeholder="输入订单编号" />
      </div>
      <goods-list-vertical fetch="memberOrders" :pramas="params" @done="onDone" >
        <OrderItem v-for="(item, index) in orderList" :key="index" :item="item" :index="index" />
      </goods-list-vertical>
    </div>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'
import OrderItem from './children/OrderItem.vue'
export default {
  components: {
    SearchForm,
    OrderItem
  },
  props: {
    group: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      headerMenu: [
        { name: '我的订单', group: 1 },
        { name: '粉丝订单', group: 2 },
        { name: '团队订单', group: 3 }
      ],
      currentItem: {},
      showPop: false,
      navList: ['全部订单', '已付款', '已收货', '已结算', '已失效', '维权'],
      navIndex: 0,
      orderList: [],
      params: {},
      searchLoading: false
    }
  },
  created () {
    this.currentItem = this.headerMenu[this.group - 1]
    this.params = {
      group: this.currentItem.group,
      type: this.navIndex
    }
  },
  methods: {
    handlerGroupClick (group) {
      this.$router.replace(`/orderdetail/${group}`)
      this.showPop = false
      this.params = {
        group: group,
        type: this.navIndex
      }
    },
    onDone (data) {
      this.orderList = data
    },
    orderSearch (keyword) {
      this.searchLoading = true
      this.$api('searchMyOrders', {
        trade_id: keyword
      }).then(({ data }) => {
        this.searchLoading = false
        if (data.success) {
          this.orderList = [data.result]
        } else {
          this.$toast(data.message)
        }
      })
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.currentItem = this.headerMenu[to.params.group - 1]
    this.orderList = []
    this.navIndex = 0
    next()
  },
  watch: {
    navIndex (v) {
      this.orderList = []
      this.params = {
        group: this.currentItem.group,
        type: v
      }
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .orderdetail{
    min-height: 100vh;
    padding: 0 !important;
  }
  .navBarCenter{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .arrow{
    margin-left: 10px;
  }
  .menuItem{
    height: 160px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &>li{
      width: 210px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      background-color: #F8F8F8;
      color: #939393;
      border-radius: 8px;
      font-size: 26px;
    }
  }
  .currentItem{
    background-color: @base_font_color !important;
    color: #fff !important;
  }
  .nav{
    position: fixed;
    top: 80px;
  }

  .msg{
    height: 80px;
    width: 100%;
    line-height: 80px;
    text-align: center;
    color: #999;
    font-size: 24px;
  }
  .orderdetailList{
    margin-top: 100px;
  }
  .orderSearchBox{
    height: 150px;
    margin-bottom: 20px;
  }
  .msg{
    height: 60px;
    line-height: 60px;
    width: 100%;
    font-size: 24px;
    color: #999;
    text-align: center;
  }
</style>
<style>
  .overLay{
    background-color: rgba(0, 0, 0, 0.4) !important;
    top: 80px !important;
  }
</style>
