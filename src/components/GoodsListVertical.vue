<template>
  <div class="goodsCotent" id="goodsCotent" :class="{haveTabbar: $route.meta.showTabbar}">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getGoodsList" v-if="!noGoods">
      <goods-item v-for="(item, index) in dataList" :key="index" :item="item" :index="index" :timeNavItemData="timeNavItemData"></goods-item>
    </van-list>
    <no-goods v-else text="除了你，我是真的一无所有…">
      <img src="@/assets/images/noGoods.png" alt="">
    </no-goods>
  </div>
</template>

<script>
import GoodsItem from '@/components/GoodsItem'
import NoGoods from '@/components/NoGoods'
export default {
  props: {
    getDataName: {
      require: true,
      type: String
    },
    pramas: {
      type: Object,
      default: () => {}
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
      },
      navOffsetTop: 0
    }
  },
  components: {
    GoodsItem,
    NoGoods
  },
  mounted () {
    this.$nextTick().then(() => {
      this.navOffsetTop = document.querySelector('#goodsCotent').offsetTop
    })
  },
  methods: {
    async getGoodsList () {
      let dataForm = {}
      Object.assign(dataForm, this.pramas, { page: this.nextPage })
      let goodsinfo = await this.$api(this.getDataName, dataForm)
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
    pramas: {
      handler () {
        this.loading = true
        this.finished = false
        this.dataList = []
        this.nextPage = 1
        document.documentElement.scrollTop = this.navOffsetTop - 160
        this.getGoodsList()
      },
      deep: true
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .goodsCotent{
    min-height: 1240px;
  }
  .haveTabbar{
    margin-bottom: 110px;
  }
</style>
