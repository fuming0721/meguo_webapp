<template>
  <van-row type="flex" justify="space-around" align="center" class="iconNav">
    <van-col span="4" v-for="(item, index) in navList" :key="index">
      <nav-icon :iconItem="item"></nav-icon>
    </van-col>
  </van-row>
</template>

<script>
import navIcon from '@/components/NavIcon'
export default {
  name: 'iconNav',
  data () {
    return {
      navList: [
        { icon: 'time', name: '限时抢购', url: '/' },
        { icon: 'time', name: '半价精选', url: '/' },
        { icon: 'time', name: '大额券', url: '/' },
        { icon: 'time', name: '聚好货', url: '/' },
        { icon: 'time', name: '领券排行', url: '/' }
      ]
    }
  },
  components: {
    navIcon
  }
}
</script>

<style lang="less" type="text/less" scope>
  .iconNav {
    height: 180px;
    background-color: #fff;
  }
</style>
