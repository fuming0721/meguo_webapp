<template>
  <div class="orderStatus">{{orderStatus}}</div>
</template>

<script>
export default {
  props: {
    status: {
      type: Number
    }
  },
  computed: {
    // eslint-disable-next-line
    orderStatus () {
      switch (this.status) {
        case 1:
          return '已付款'
        case 2:
          return '已收货'
        case 3:
          return '已结算'
        case 4:
          return '已失效'
        case 5:
          return '维权创建'
        case 6:
          return '维权等待处理'
        case 7:
          return '维权失败'
        case 8:
          return '维权成功'
      }
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .orderStatus{
    width: 140px;
    height: 40px;
    border-radius: 48px;
    border: 1px solid @base_font_color;
    color: @base_font_color;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }
</style>
