<template>
  <div class="tabBar positionCenter">
    <router-link class="tabbarItem" tag="button" to="/">
      <img class="on" src="@/assets/images/tabbar/home(on)@2x.png" alt="">
      <img class="off" src="@/assets/images/tabbar/home(off)@2x.png" alt="">
      <p>首页</p>
    </router-link>
    <router-link class="tabbarItem" tag="button" to="/baoyou">
      <img class="on" src="@/assets/images/tabbar/9.9(on)@2x.png" alt="">
      <img class="off" src="@/assets/images/tabbar/9.9(off)@2x.png" alt="">
      <p>9块9包邮</p>
    </router-link>
    <router-link class="tabbarItem" tag="button" to="/zhongcao">
      <img class="on" src="@/assets/images/tabbar/my(on)@2x.png" alt="">
      <img class="off" src="@/assets/images/tabbar/my(off)@2x.png" alt="">
      <p>种草</p>
    </router-link>
    <router-link class="tabbarItem" tag="button" to="/couponsearch">
      <img class="on" src="@/assets/images/tabbar/search(on)@2x.png" alt="">
      <img class="off" src="@/assets/images/tabbar/search(off)@2x.png" alt="">
      <p>搜券</p>
    </router-link>
    <router-link class="tabbarItem" tag="button" to="/my">
      <img class="on" src="@/assets/images/tabbar/my(on)@2x.png" alt="">
      <img class="off" src="@/assets/images/tabbar/my(off)@2x.png" alt="">
      <p>我</p>
    </router-link>
  </div>
</template>

<style lang="less" type="text/less" scope>
  .tabBar{
    position: fixed;
    width: 100%;
    height: 100px;
    bottom: 0;
    left: 0;
    display: flex;
    z-index: 10000;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  }
  .on{
    display: none;
  }
  .router-link-exact-active{
    color: @base_font_color;
  }
  .router-link-exact-active .on{
    display: block !important;
  }
  .router-link-exact-active .off{
    display: none;
  }
  .tabbarItem{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    width: 20%;
    &>img{
      width: 30px;
      margin-bottom: 10px;
    }
  }
</style>
