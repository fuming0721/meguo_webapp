<template>
  <div class="list">
    <nav-bar />
    <goods-list-vertical fetch="favoritesLists" @done="onDone">
      <GoodsItemHistory v-for="(item, index) in goodsList" :key="index" :item="item" :index="index" />
    </goods-list-vertical>
  </div>
</template>

<script>
import GoodsItemHistory from '@/components/GoodsItemHistory'
export default {
  components: {
    GoodsItemHistory
  },
  data () {
    return {
      params: {},
      goodsList: []
    }
  },
  methods: {
    onDone (data) {
      this.goodsList = data
    }
  }
}
</script>
<style lang="less" type="text/less" scoped>
  .list{
    padding-top: 80px;
  }
</style>
