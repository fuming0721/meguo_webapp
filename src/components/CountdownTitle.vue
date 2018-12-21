<template>
  <div class="countdown">
    <div class="v_title" :class="{willStart: itemData.over == '即将开始'}">{{itemData.over}}</div>
      <div class="countdownNum" v-if="itemData.over != '即将开始'">
        <p>距结束还剩</p>
        <countdown :endTime="todayEndTime" @clear="timeOver" :key="itemData.round"></countdown>
      </div>
      <div class="countdownNum" v-else>
        <p>距开始还有</p>
        <countdown :endTime="itemData.round" @clear="timeOver" :key="itemData.round"></countdown>
      </div>
  </div>
</template>

<script>
import countdown from './Countdown.vue'
export default {
  props: {
    itemData: {
      require: true,
      type: [Object, String]
    }
  },
  inheritAttrs: false,
  data () {
    return {
      todayEndTime: null
    }
  },
  components: {
    countdown
  },
  created () {

  },
  mounted () {
    this.$nextTick(() => {
      this.todayEndTime = parseInt((new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1) / 1000)
    })
  },
  methods: {
    timeOver () {
      this.$listeners.timeOver()
      this.$listeners.getCurrentItem()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .v_title {
    font-size: 28px;
    border-left: 6px solid @base_font_color;
    padding-left: 30px;
    color: @base_font_color;
  }

  .v_title.willStart {
    border-color: @base_not_begin;
    color: @base_not_begin;
  }
  .countdown {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #F3F3F3;
    background-color: #fff;
  }

  .countdownNum {
    font-size: 20px;
    color: #999;
    padding-right: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .countdownNum > p {
    margin-right: 10px;
    font-size: 26px;
  }
</style>
