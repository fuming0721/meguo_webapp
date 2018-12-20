<template>
  <loading-container fetch="subCategoryNav" :params="loadParams" @done="onDone">
    <nav-bar :title="$route.query.title"></nav-bar>
    <category-icon-nav :iconList="iconList"></category-icon-nav>
    <van-tabs :line-width="80" @click="tabChange" :swipe-threshold="4">
      <van-tab v-for="(item, index) in sortname" :key="index" :title="item.channel.toString()">
        <span slot="title" class="navItemName">{{item.name}}</span>
      </van-tab>
    </van-tabs>
    <goods-list-vertical :pramas="goodListParams" :getDataName="getDataName"></goods-list-vertical>
  </loading-container>
</template>
<script>
import CategoryIconNav from './children/CategoryIconNav'
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
      getDataName: 'goodList',
      loadParams: {
        cid: this.$route.query.id
      },
      goodListParams: {
        channel: 5,
        cid: this.$route.query.id
      }
    }
  },
  components: {
    CategoryIconNav
  },
  methods: {
    onDone ({ data }) {
      this.iconList = data.success ? data.subCate : []
    },
    tabChange (index, id) {
      this.goodListParams.channel = id
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>

</style>
