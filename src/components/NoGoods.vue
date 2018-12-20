<template>
  <div class="noGoods">
    <slot></slot>
    <p class="noGoodsText">{{text}}</p>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .noGoods{
    width: 100%;
    height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .noGoodsText{
    margin-top: 40px;
    color: #999;
    font-size: 24px;
  }
</style>
