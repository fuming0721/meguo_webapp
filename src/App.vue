<template>
  <div id="app">
    <keep-alive>
      <router-view class="routerView" :class="{NavBarInApp: $deviceType.isMeguoApp, isAboveIhphoneX: $deviceType.isAboveIPhoneX}"></router-view>
    </keep-alive>
    <footer-nav v-if="$route.meta.showTabbar"/>
    <back-top />
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav'
export default {
  data () {
    return {
    }
  },
  components: {
    FooterNav
  }
}
</script>
<style lang="less" type="text/less">
  @import "assets/style/fonts/iconfont.css";
  @import "assets/style/reset.less";
  @import "assets/style/common.less";
</style>
