<template>
  <div class="goodsList">
    <van-tabs :line-width="100" @click="tabChange" :swipe-threshold="4">
      <van-tab v-for="(item, index) in menuIcons" :key="index" :title="item.id.toString()">
        <span slot="title" class="navItemName">{{item.name}}</span>
      </van-tab>
    </van-tabs>
    <goods-list-vertical fetch="goodsList" :pramas="pramas" @done="onDone">
      <goods-item v-for="(item, index) in goodsList" :key="index" :item="item" :index="index" />
    </goods-list-vertical>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pramas: {
        cid: '0',
        channel: 5
      },
      goodsList: []
    }
  },
  mounted () {

  },
  methods: {
    tabChange (index, id) {
      this.pramas.cid = id
    },
    onDone (data) {
      this.goodsList = data
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

<style lang="less" type="text/less" scoped>
  .navItemName{
    font-size: 24px;
  }
  .goodsList{
    margin-top: 20px;
  }
</style>
