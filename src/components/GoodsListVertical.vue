<template>
  <div class="goodsCotent">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getGoodsList" v-if="!noGoods">
      <goods-item v-for="(item, index) in dataList" :key="index" :item="item" :index="index" :timeNavItemData="timeNavItemData"></goods-item>
    </van-list>
    <div v-else>
      哈哈哈哈啊哈
    </div>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem'
export default {
  props: {
    getDataName: {
      require: true,
      type: String
    },
    activeId: {
      require: true,
      type: String
    },
    channel: {
      require: true,
      type: String
    }
  },
  data () {
    return {
      loading: false,
      finished: false,
      noGoods: false,
      nextPage: 1,
      dataList: [],
      timeNavItemData: {
        over: ''
      }
    }
  },
  components: {
    GoodsItem
  },
  methods: {
    async getGoodsList () {
      let pramas = { channel: this.channel, cid: this.activeId, page: this.nextPage }
      let goodsinfo = await this.$api(this.getDataName, pramas)
      if (goodsinfo.data.success) {
        this.loading = false
        this.finished = false
        this.noGoods = false
        this.nextPage++
        this.dataList.push(...goodsinfo.data.result.threads)
        if (this.nextPage === goodsinfo.data.result.pagination.page_count) {
          this.finished = true
        }
      } else {
        this.noGoods = true
      }
    }
  },
  watch: {
    activeId (newVal) {
      this.loading = true
      this.finished = false
      this.dataList = []
      this.nextPage = 1
      this.getGoodsList()
    }
  }
}
</script>

<style lang="less" type="text/less" scope>
  .goodsCotent{
    min-height: 1600px;
    margin-bottom: 100px;
    padding-top: 80px;
  }
</style>
