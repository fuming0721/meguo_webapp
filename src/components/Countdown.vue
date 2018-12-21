<template>
  <p class="countDown"><span>{{hour}}</span>:<span>{{min}}</span>:<span>{{sec}}</span></p>
</template>

<script>
export default {
  props: {
    endTime: {
      require: true,
      type: Number
    }
  },
  data () {
    return {
      hour: '00',
      min: '00',
      sec: '00',
      countdownTime: null,
      timeData: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.setTime(this.endTime)
    })
  },
  methods: {
    setTime (timestamp) {
      clearInterval(this.countdownTime)
      this.countdownTime = setInterval(() => {
        let nowTime = new Date()
        let endTime = new Date(timestamp * 1000)
        let t = endTime.getTime() - nowTime.getTime()
        if (t > 0) {
          let hour = Math.floor((t / 3600000) % 24)
          let min = Math.floor((t / 60000) % 60)
          let sec = Math.floor((t / 1000) % 60)
          this.hour = hour < 10 ? '0' + hour : hour
          this.min = min < 10 ? '0' + min : min
          this.sec = sec < 10 ? '0' + sec : sec
        } else {
          clearInterval(this.countdownTime)
          this.$emit('clear')
        }
      }, 1000)
    }
  },
  beforeDestroy () {
    clearInterval(this.countdownTime)
  },
  watch: {
    endTime (n) {
      this.setTime(n)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .countDown {
    font-size: 20px !important;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &>span {
        width: 34px;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color: #000;
        border-radius: 50%;
      }
  }
</style>
