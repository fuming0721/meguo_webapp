<template>
  <div class="searchLink">
    <div class="topSearchCenter">
      <van-icon name="search" color="#aaa"/>
      <p class="searchText">搜索您想要的优惠商品</p>
    </div>
  </div>
</template>

<style lang="less" type="text/less" scoped>
  .searchLink{
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 80px;
    padding: 10px 20px;
    background-color: #fff;
    z-index: 100;
  }
  .topSearchCenter{
    background-color: @base_background-color;
    border-radius: 60px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30px;
  }
  .searchText{
    color: #aaa;
    font-size: 24px;
    margin-left: 10px;
  }
</style>
