<template>
  <div class="tabBar positionCenter">
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="(item, index) in list" :key="index" :to="item.url" replace>
        <span class="tabbarTetx">{{item.name}}</span>
        <img class="tabbarIcon" slot="icon" slot-scope="props"
             :src="props.active ? item.icon.active : item.icon.normal">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      list: [
        {
          name: '首页',
          url: '/',
          icon: {
            normal: require('@/assets/images/tabbar/home(off)@2x.png'),
            active: require('@/assets/images/tabbar/home(on)@2x.png')
          }
        },
        {
          name: '9块9',
          url: '/baoyou',
          icon: {
            normal: require('@/assets/images/tabbar/9.9(off)@2x.png'),
            active: require('@/assets/images/tabbar/9.9(on)@2x.png')
          }
        },
        {
          name: '种草',
          url: '/zhongcao',
          icon: {
            normal: require('@/assets/images/tabbar/my(off)@2x.png'),
            active: require('@/assets/images/tabbar/my(on)@2x.png')
          }
        },
        {
          name: '搜券',
          url: '/couponsearch',
          icon: {
            normal: require('@/assets/images/tabbar/search(off)@2x.png'),
            active: require('@/assets/images/tabbar/search(on)@2x.png')
          }
        },
        {
          name: '我',
          url: '/my',
          icon: {
            normal: require('@/assets/images/tabbar/my(off)@2x.png'),
            active: require('@/assets/images/tabbar/my(on)@2x.png')
          }
        }
      ]
    }
  }
}
</script>

<style lang="less" type="text/less" scope>
  .tabBar {
    position: fixed;
    width: 100%;
    height: 100px;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  }

  .tabbarIcon {
    height: 40px !important;
    margin-bottom: 5px;
  }

  .tabbarTetx {
    font-size: 20px !important;
  }
</style>
