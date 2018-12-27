<template>
  <div class="tabBar positionCenter" :class="{isAboveIhphoneX: $deviceType.isAboveIPhoneX}">
    <router-link class="tabbarItem" tag="button" :to="item.url" v-for="(item, index) in list" :key="index">
      <van-icon class-prefix="icon" :name="item.iconName" class="tabbarIcon" />
      <p>{{item.name}}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          name: '首页',
          url: '/',
          iconName: 'tabbar_home'
        },
        {
          name: '9块9',
          url: '/baoyou',
          iconName: 'tabbar_cheap'
        },
        {
          name: '种草',
          url: '/zhongcao',
          iconName: 'tabbar_shopping'
        },
        {
          name: '搜券',
          url: '/couponsearch',
          iconName: 'tabbar_search'
        },
        {
          name: '我',
          url: '/my',
          iconName: 'tabbar_me'
        }
      ]
    }
  }
}
</script>
<style lang="less" type="text/less" scoped>
  .tabBar{
    position: fixed;
    width: 100%;
    height: 100px;
    bottom: 0;
    left: 0;
    display: flex;
    z-index: 1000;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  }
  .router-link-exact-active{
    color: @base_font_color;
  }
  .tabbarItem{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    width: 20%;
  }
  .tabbarIcon{
    font-size: 32px;
    margin-bottom: 10px;
  }
</style>
