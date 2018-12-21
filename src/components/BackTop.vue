<template>
  <transition name="btn-fade">
    <div class="scrollTop" v-show="showTop" @click="toTop">
      <van-icon class-prefix="icon" name="top" class="backTop" />
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      scrollTop: 0,
      time: 0,
      dParams: 20,
      scrollState: 0
    }
  },
  computed: {
    showTop () {
      // eslint-disable-next-line
      return this.scrollTop > 1600 ? true : false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.getScrollTop)
  },
  methods: {
    toTop (e) {
      // eslint-disable-next-line
      if (!!this.scrollState) {
        return
      }
      this.scrollState = 1
      e.preventDefault()
      //      let distance = document.documentElement.scrollTop || document.body.scrollTop
      this.time = setInterval(() => { this.gotoTop(this.scrollTop - this.dParams) })
    },
    gotoTop (distance) {
      this.dParams += 60
      distance = distance > 0 ? distance : 0
      document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance
      if (this.scrollTop < 10) {
        clearInterval(this.time)
        this.dParams = 20
        this.scrollState = 0
      }
    },
    getScrollTop () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }
  }
}
</script>
<style lang="less" type="text/less" scoped>
  .scrollTop {
    position: fixed;
    right: 40px;
    bottom: 160px;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(204, 184, 184, 0.5);
  }
  .backTop{
    font-size: 50px;
    color: @base_font_color;
  }
  .btn-fade-enter-active {
    transition: all .8s ease;
  }
  .btn-fade-leave-active {
    transition: all .8s ease;
  }
  .btn-fade-enter,
  .btn-fade-leave-to {
    transform: translateY(80px);
    opacity: 0;
  }
</style>
