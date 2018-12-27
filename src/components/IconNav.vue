<template>
  <ul class="iconNav">
    <icon-link class="icon_link" v-for="(item, index) in navList" :iconItem="item" :key="index" @iconClick="iconClick" />
  </ul>
</template>

<script>
import IconLink from './IconLink'
export default {
  data () {
    return {
      navList: [
        { app_icon: require('@/assets/images/home-nav-button-miaosha.png'), name: '限时抢购', url: '/timebuy' },
        { app_icon: require('@/assets/images/icon-brand-sale.png'), name: '半价精选', url: '/halfoff' },
        { app_icon: require('@/assets/images/icon-market-sale.png'), name: '大额券', url: '/bigcoupon' },
        { app_icon: require('@/assets/images/icon-Big-brand-sle.png'), name: '聚好货', url: '/bestgoods' },
        { app_icon: require('@/assets/images/home-nav-button-Imports.png'), name: '领券排行', url: '/coupongettingranking' }
      ]
    }
  },
  components: {
    IconLink
  },
  methods: {
    iconClick (item) {
      this.$router.push(item.url)
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .iconNav {
    height: 180px;
    background-color: #fff;
    display: flex;
    padding: 0 10px;
    justify-content: space-around;
    align-items: center;
  }
  .icon_link{
    width: 20%;
    padding: 10px;
  }
</style>
