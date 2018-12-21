<template>
  <div class="subCategory">
    <nav-bar />
    <van-tabs :line-width="80" @click="tabChange" :swipe-threshold="4">
      <van-tab v-for="(item, index) in sortname" :key="index" :title="item.channel.toString()">
        <span slot="title" class="navItemName">{{item.name}}</span>
      </van-tab>
    </van-tabs>
    <goods-list-vertical fetch="goodsList" :pramas="goodListParams" @done="onDone">
      <goods-item v-for="(item, index) in goodsList" :key="index" :item="item" :index="index" />
    </goods-list-vertical>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      sortname: [{
        name: '默认',
        channel: 5
      }, {
        name: '最新',
        channel: 2
      }, {
        name: '价格',
        channel: 3
      }, {
        name: '销量',
        channel: 4
      }],
      iconList: [],
      goodsList: [],
      goodListParams: {
        channel: 5,
        cid: this.$route.query.id
      }
    }
  },
  methods: {
    tabChange (index, id) {
      this.goodListParams.channel = id
    },
    onDone (data) {
      this.goodsList = data
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .subCategory{
    padding-top: 80px;
  }
</style>
