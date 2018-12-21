<template>
  <div class="timeNav">
    <van-tabs v-model="timeIndex" :line-width="120" @click="tabChange" :swipe-threshold="4">
      <van-tab v-for="(item, index) in timeNavList" :key="index" :title="JSON.stringify(item)">
        <div slot="title" class="navItemName">
          <span>{{item.round_show}}</span>
          <span>{{item.over}}</span>
        </div>
      </van-tab>
    </van-tabs>
    <countdown-title :itemData="itemData" :key="itemData.over" v-on="$listeners" @getCurrentItem="getCurrentItem" />
  </div>
</template>

<script>
import CountdownTitle from '@/components/CountdownTitle.vue'
export default {
  props: {
    timeNavList: {
      require: true,
      type: Array
    }
  },
  data () {
    return {
      timeIndex: 0,
      itemData: ''
    }
  },
  components: {
    CountdownTitle
  },
  created () {
  },
  mounted () {
    this.getCurrentItem()
  },
  methods: {
    getCurrentItem () {
      this.timeNavList.filter((item, index) => {
        if (item.is_current === 1) {
          this.timeIndex = index
          this.tabChange(index, JSON.stringify(item))
        }
      })
    },
    tabChange (index, item) {
      this.itemData = JSON.parse(item)
      this.$emit('getItemData', JSON.parse(item))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .navItemName{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    flex-direction: column;
    &>span{
      height: 40px;
      line-height: 40px;
      color: #fff;
      font-size: 24px;
    }
  }
</style>
