<template>
  <div class="tag">Top.{{index}}</div>
</template>
<script>
export default {
  props: {
    index: {
      require: true,
      type: Number
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .tag {
    position: absolute;
    top: 0;
    left: -8px;
    font-size: 20px;
    width: 45%;
    height: 28px;
    color: #fff;
    background: -moz-linear-gradient(left, #FF7502 0%, #FF0100 100%);
    background: -webkit-linear-gradient(left, #FF7502 0%, #FF0100 100%);
    background: -o-linear-gradient(left, #FF7502 0%, #FF0100 100%);
    background: -ms-linear-gradient(left, #FF7502 0%, #FF0100 100%);
    background: linear-gradient(to right, #FF7502 0%, #FF0100 100%);
    display: flex;
    align-items: center;
    padding-left: 8px;
    box-sizing: border-box;
    border-radius: 0 28px 28px 0;

    &::after {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 8px 8px 0;
      border-color: transparent #ff7402 transparent transparent;
      top: 28px;
      left: 0px;
      position: absolute;
    }
  }
</style>
