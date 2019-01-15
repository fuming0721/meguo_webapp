<template>
  <div class="header positionCenter" id="detail_0">
    <div class="headerNav headerNavA" :style="{opacity:1-navOpacity}">
      <van-icon name="arrow-left" @click="back" class="headIcon headIconA"></van-icon>
      <van-icon name="wap-home" class="headIcon headIconA" @click="goHome"></van-icon>
    </div>
    <nav class="headerNav headerNavB" :style="{opacity:navOpacity}">
      <van-icon name="arrow-left" @click="back" class="headIcon headIconB" />
      <van-tabs class="headerNavB_center" v-model="active" @click="goAnchor">
        <van-tab title="商品"></van-tab>
        <van-tab title="详情"></van-tab>
        <van-tab title="推荐"></van-tab>
      </van-tabs>
      <van-icon name="wap-home" class="headIcon headIconB" @click="goHome" />
    </nav>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      active: 0,
      navOpacity: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.addEventListener('scroll', this.showNav, false)
      document.addEventListener('scroll', this.navTab, false)
    })
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    goHome () {
      this.$router.push('/')
    },
    showNav () {
      let octy = window.pageYOffset * 0.004
      this.navOpacity = octy >= 1 ? 1 : octy
    },
    navTab () {
      let docScrollTop = document.documentElement.scrollTop
      if (docScrollTop < this.detai_1_offsetTop - 100) {
        this.active = 0
      } else if (docScrollTop >= this.detai_1_offsetTop - 100 && docScrollTop < this.detai_2_offsetTop - 100) {
        this.active = 1
      } else {
        this.active = 2
      }
    },
    goAnchor (index) {
      switch (index) {
        case 0:
          document.documentElement.scrollTop = 0
          break
        case 1:
          document.documentElement.scrollTop = this.detai_1_offsetTop - 100
          break
        case 2:
          document.documentElement.scrollTop = this.detai_2_offsetTop - 100
          break
      }
    }
  },
  computed: {
    ...mapGetters('detail', [
      'detai_1_offsetTop',
      'detai_2_offsetTop'
    ])
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .header {
    z-index: 999;
    height: 80px;
    position: fixed;
    width: 100%;
    top: 0;
    background-color: transparent;
  }
  .headerNav{
    height: 80px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .headerNavA{
    background: -ms-linear-gradient(top, rgba(0,0,0,0.3) 0%, transparent 90%);
    background: -moz-linear-gradient(top, rgba(0,0,0,0.3) 0%, transparent 90%);
    background: -o-linear-gradient(top, rgba(0,0,0,0.3) 0%, transparent 90%);
    background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 90%);
  }
  .headerNavB{
    background-color: #fff;
    position: fixed;
    top: 0;
  }
  .headIcon{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .headIconA{
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
  }
  .headIconB{
    background-color: #fff;
    color: #333;
  }
  .headerNavB_center{
    width: 400px;
  }
</style>
