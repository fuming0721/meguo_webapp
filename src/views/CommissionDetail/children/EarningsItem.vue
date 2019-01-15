<template>
  <div class="EarningsItem" v-if="item">
    <OrderItem :item="item.myOrder" title="我的订单" :iconName="iconName" :iconColor="iconColor" @whatSthis="pop(myOrderDes)" @jump="$router.push('/orderdetail/1')" />
    <OrderItem :item="item.fansOrder" title="粉丝订单" :iconName="iconName" :iconColor="iconColor" @whatSthis="pop(fansOrderDes)" @jump="$router.push('/orderdetail/2')" />
    <OrderItem :item="item.groupOrder" title="团队订单" :iconName="iconName" :iconColor="iconColor" @whatSthis="pop(groupOrderDes)" @jump="$router.push('/orderdetail/3')" />
  </div>
</template>

<script>
import OrderItem from './OrderItem.vue'
export default {
  components: {
    OrderItem
  },
  props: {
    item: {
      type: Object,
      require: true
    },
    iconName: {
      type: String,
      require: true
    },
    iconColor: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      myOrderDes: {
        title: '什么是我的订单？',
        message: '您自购或者您分享后产生购买的订单。'
      },
      fansOrderDes: {
        title: '什么是粉丝订单？',
        message: '您的粉丝：ta自购或者ta分享后产生购买的订单您将获得该订单的部分收益。'
      },
      groupOrderDes: {
        title: '什么是团队订单？',
        message: '您升级为运营商后，您的整体团队他们自购或分享产生的订单，您可获得该订单的部分收益'
      }
    }
  },
  methods: {
    pop (info) {
      this.$dialog.confirm({
        className: 'des',
        cancelButtonText: '＋',
        title: info.title,
        message: info.message,
        showConfirmButton: false,
        closeOnClickOverlay: true
      }).then(() => {}).catch(() => {})
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .EarningsItem{
    margin-top: 20px;
    height: 700px;
  }
</style>
