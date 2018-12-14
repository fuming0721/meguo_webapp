<template>
  <div id="app">
    <keep-alive>
      <router-view class="routerView" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view  class="routerView" v-if="!$route.meta.keepAlive"></router-view>
    <footer-nav />
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
  @import "assets/style/reset.less";
  @import "assets/style/common.less";
  .routerView{
    min-height: calc(100vh - 100px);
  }
</style>
