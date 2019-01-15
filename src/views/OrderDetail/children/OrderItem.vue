<template>
  <div class="orderItem">
    <user-info-item :userInfo="userInfo">
      <OrderStatus :status="orderItem.order_status"/>
    </user-info-item>
    <OrderGoodsItem :item="orderItem"/>
  </div>
</template>

<script>
import UserInfoItem from '@/components/UserInfoItem'
import OrderStatus from './OrderStatus.vue'
import OrderGoodsItem from './OrderGoodsItem.vue'
export default {
  components: {
    UserInfoItem,
    OrderStatus,
    OrderGoodsItem
  },
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      orderItem: {},
      userInfo: {}
    }
  },
  watch: {
    item: {
      handler (v) {
        this.orderItem = v
        this.userInfo = {
          avatar: v.user.avatar,
          username: v.user.username,
          time: v.create_time
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .orderItem{
    height: 340px;
    margin-bottom: 10px;
    background-color: #fff;
  }
</style>
