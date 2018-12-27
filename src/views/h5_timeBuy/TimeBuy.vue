<template>
  <div class="timeBuy">
    <nav-bar />
    <template v-if="timeNavList.length">
      <time-nav class="timeBuyTimeNav" :timeNavList="timeNavList" @getItemData="getItemData" @timeOver="getTimeNav" />
      <goods-list-vertical fetch="timeBuy" :pramas="goodListParams"  @done="onDone" >
        <goods-item-channel v-for="(item, index) in dataList" :key="index" :item="item" :timeStatus="timeStatus">
          <span class="goodsItem_tag" v-if="item.extension.activity_id!=0" slot="activity_type">{{item.extension.activity_id | activity_type}}</span>
          <tag-price slot="subContent" :item="item.extension" v-if="item.extension" />
          <button class="buyNow" slot="buyBtn">立即抢</button>
        </goods-item-channel>
      </goods-list-vertical>
    </template>
    <template v-else>
      <div class="noTimeNav">
        {{noTimeNav}}
      </div>
    </template>
  </div>
</template>

<script>
import TimeNav from '@/components/TimeNav.vue'
export default {
  data () {
    return {
      noTimeNav: '',
      timeNavList: [],
      timeStatus: '',
      goodListParams: {},
      dataList: []
    }
  },
  components: {
    TimeNav
  },
  mounted () {
    this.getTimeNav()
  },
  methods: {
    getTimeNav () {
      this.$showLoading()
      this.$api('timeBuyTimeStatus').then(({ data }) => {
        if (data.success) {
          this.timeNavList = data.result
        } else {
          this.noTimeNav = data.message
          this.timeNavList = []
        }
      })
    },
    getItemData (data) {
      this.timeStatus = data.over
      this.goodListParams = { t: data.round }
    },
    onDone (data) {
      this.dataList = data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .timeBuy{
    padding-top: 80px;
  }
  .noTimeNav{
    font-size: 28px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    color: @base_font_color;
  }
</style>
