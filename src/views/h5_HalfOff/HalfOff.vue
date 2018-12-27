<template>
  <div class="channelBox">
    <nav-bar />
    <img src="https://img.alicdn.com/imgextra/i1/62752115/O1CN01iRbxbL1RUi9mbHc6i-62752115.png" alt="">
    <template v-if="timeNavList.length">
      <time-nav class="halfOffTimeNav" :timeNavList="timeNavList" @getItemData="getItemData" @timeOver="getTimeNav" />
      <goods-list-vertical fetch="halfOff" :pramas="goodListParams"  @done="onDone" >
        <goods-item-channel v-for="(item, index) in dataList" :key="index" :item="item" :timeStatus="timeStatus">
          <span class="goodsItem_tag" v-if="item.extension.activity_id!=0" slot="activity_type">{{item.extension.activity_id | activity_type}}</span>
          <div slot="subContent" class="brief" type="share">{{item.extension.brief}}</div>
          <button class="buyNow" slot="buyBtn">去看看</button>
          <!--<tag-price slot="forMoney" class="forMoney" type="share">赚￥{{item.extension.commission | formatMoney}}</tag-price>-->
          <tag-price slot="forMoney" class="forMoney" :item="item.extension" v-if="item.extension" />
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
      this.$api('halfOffTimeStatus').then(({ data }) => {
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
  .channelBox{
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
  .forMoney{
    position: absolute;
    left: 4px;
    bottom: 4px;
    width: 110px;
    height: 28px;
    font-size: 20px;
  }
</style>
