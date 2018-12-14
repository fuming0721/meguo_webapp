<template>
  <div class="tag_item" :class="{vipTag: type==='vip', svipTag: type==='svip'}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      require: true,
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scope>
  .tag_item{
    width: 160px;
    height: 30px;
    border-radius: 30px;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .vipTag{
     background: -moz-linear-gradient(left, #FAD961 0%, #FF5C00 100%);
     background: -webkit-linear-gradient(left, #FAD961 0%, #FF5C00 100%);
     background: -o-linear-gradient(left, #FAD961 0%, #FF5C00 100%);
     background: -ms-linear-gradient(left, #FAD961 0%, #FF5C00 100%);
     background: linear-gradient(to right, #FAD961 0%, #FF5C00 100%);
   }
  .svipTag{
    background: -moz-linear-gradient(left, #C86DD7 0%, #3023AE 100%);
    background: -webkit-linear-gradient(left, #C86DD7 0%, #3023AE 100%);
    background: -o-linear-gradient(left, #C86DD7 0%, #3023AE 100%);
    background: -ms-linear-gradient(left, #C86DD7 0%, #3023AE 100%);
    background: linear-gradient(to right, #C86DD7 0%, #3023AE 100%);
  }
</style>
