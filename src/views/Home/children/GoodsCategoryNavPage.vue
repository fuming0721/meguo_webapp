<template>
  <div class="goodsList">
    <van-tabs :line-width="100" @click="tabChange">
      <van-tab v-for="(item, index) in menuIcons" :key="index" :title="item.id.toString()">
        <span slot="title" class="navItemName">{{item.name}}</span>
      </van-tab>
    </van-tabs>
    <goods-list-vertical :activeId="activeId" :getDataName="getDataName" channel="5"></goods-list-vertical>
  </div>
</template>

<script>
import GoodsListVertical from '@/components/GoodsListVertical'
export default {
  data () {
    return {
      activeId: '0',
      getDataName: 'goodList'
    }
  },
  components: {
    GoodsListVertical
  },
  mounted () {
  },
  methods: {
    tabChange (index, id) {
      this.activeId = id
    }
  },
  computed: {
    menuIcons () {
      const featured = [{ 'id': 0, 'name': '精选' }]
      return [...featured, ...this.$menuIcon]
    }
  }
}
</script>

<style lang="less" type="text/less" scope>
  .navItemName{
    font-size: 24px;
  }
  .goodsList{
    margin-top: 20px;
  }
</style>
