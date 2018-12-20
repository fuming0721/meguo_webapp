<template>
  <div class="error">
    <img src="@/assets/images/nodata-icon@3x.png" alt="">
    <div class="error_title">页面被外星人偷走了</div>
    <router-link tag="button" class="error_back_btn" to="/">返回首页</router-link>
  </div>
</template>

<style lang="less" type="text/less" scoped>
  .error{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .error_title{
    font-size: 32px;
    color: #999;
  }
  .error_back_btn{
    width: 200px;
    margin-top: 80px;
    background-color: @base_font_color;
    color: #fff;
    height: 80px;
    border-radius: 8px;
  }
</style>
