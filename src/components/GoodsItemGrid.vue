<template>
  <div class="goodsElement" @click="seeDetail" v-if="item">
    <div class="goodsElement_imgBox">
      <img class="ele_img" v-if="item" v-lazy="item.thread_img" alt="">
      <slot name="coupon"></slot>
    </div>
    <p class="ele_title">{{item.title}}</p>
    <p class="ele_price" v-if="item.extension">￥{{item.extension.price | formatMoney}}</p>
    <slot name="volume"></slot>
    <slot name="tag"></slot>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      require: true,
      type: Object,
      default: () => {}
    }
  },
  methods: {
    seeDetail () {
      // this.$bridge.callhandler('seeDetail', this.item.id)
    }
  }
}
</script>

<style lang="less" type="text/less" scope>
  .goodsElement_imgBox{
    position: relative;
  }
  .ele_title{
    font-size: 22px;
    color: #666;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 10px 0;
  }
  .ele_price{
    font-size: 22px;
    color: @base_font_color;
  }
</style>
