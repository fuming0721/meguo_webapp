<template>
  <ul class="iconNav">
    <icon-link class="icon_link" v-for="(item, index) in navList" :iconItem="item" :key="index" @iconClick="iconClick" />
  </ul>
</template>

<script>
import IconLink from '@/components/IconLink'
export default {
  data () {
    return {
      navList: [
        { app_icon: 'time', name: '限时抢购', url: '/timebuy', isSvg: true },
        { app_icon: 'time', name: '半价精选', url: '/halfoff', isSvg: true },
        { app_icon: 'time', name: '大额券', url: '/bigcoupon', isSvg: true },
        { app_icon: 'time', name: '聚好货', url: '/', isSvg: true },
        { app_icon: 'time', name: '领券排行', url: '/', isSvg: true }
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
