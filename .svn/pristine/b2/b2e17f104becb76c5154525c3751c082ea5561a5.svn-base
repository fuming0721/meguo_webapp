<template>
  <div class="searchResult">
    <searchParamsFilter @searchFilterParams="searchFilterParams" @navParamsChange="navParamsChange"/>
    <div class="goodsCotent">
      <template v-if="!error">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getGoodsList" v-if="!noGoods">
          <goods-item v-for="(item, index) in localDataList" :key="'local'+index" :item="item" :index="index" />
          <GoodsItemTaobao v-for="(item, index) in taobaoDataList" :key="'taobao'+index" :item="item" :index="index"/>
        </van-list>
        <no-goods v-else text="除了你，我是真的一无所有…">
          <img src="@/assets/images/noGoods.png" alt="">
        </no-goods>
      </template>
      <div v-else class="error">数据错误， 请重试</div>
    </div>
  </div>
</template>

<script>
import searchParamsFilter from './searchParamsFilter'
import NoGoods from '@/components/NoGoods'
import GoodsItemTaobao from './GoodsItemTaobao'
export default {
  components: {
    searchParamsFilter,
    NoGoods,
    GoodsItemTaobao
  },
  props: {
    is_tmall: {
      type: Number
    },
    keyword: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      filterParams: {},
      navParams: {
        sort: 'default',
        coupon: 1
      },
      keywordParams: {
        keyword: this.keyword
      },
      shopSourceParams: {
        is_tmall: this.is_tmall
      },
      params: {
        page: 1
      },
      loading: false,
      finished: false,
      noGoods: false,
      error: false,
      isSearchTaobao: false,
      localDataList: [],
      taobaoDataList: []
    }
  },
  created () {
    this.startSearch()
  },
  methods: {
    searchFilterParams (params) {
      this.filterParams = params || {}
      this.startSearch()
    },
    navParamsChange (params) {
      this.navParams = params
      this.startSearch()
    },
    startSearch () {
      Object.assign(this.params, this.filterParams, this.navParams, this.keywordParams, this.shopSourceParams)
      this.loading = true
      this.finished = false
      this.localDataList = []
      this.taobaoDataList = []
      this.isSearchTaobao = false
      this.params.page = 1
      this.getGoodsList()
    },
    async getLocalGoodsData () {
      let goodsinfo = await this.$api('getLocalList', this.params)
      this.error = false
      if (goodsinfo.data.success) {
        this.loading = false
        this.noGoods = false
        this.localDataList.push(...goodsinfo.data.result.threads)
        if (this.params.page === Number(goodsinfo.data.result.pagination.page_count)) {
          this.isSearchTaobao = true
          this.params.page = 1
        } else {
          this.params.page++
          this.finished = false
        }
      } else {
        this.isSearchTaobao = true
        this.params.page = 1
        this.getToaboGoodsData()
      }
    },
    async getToaboGoodsData () {
      let goodsinfo = await this.$api('getTaobaoList', this.params)
      this.error = false
      if (goodsinfo.data.success) {
        this.loading = false
        this.noGoods = false
        this.taobaoDataList.push(...goodsinfo.data.result.list)
        if (this.params.page === Number(goodsinfo.data.result.pagination.page_count)) {
          this.finished = true
        } else {
          this.params.page++
          this.finished = false
        }
      } else {
        this.dataList.length ? this.finished = true : this.noGoods = true
      }
    },
    async getGoodsList () {
      !this.isSearchTaobao ? this.getLocalGoodsData() : this.getToaboGoodsData()
    }
  },
  watch: {
    is_tmall (v) {
      this.shopSourceParams.is_tmall = v
      this.startSearch()
    },
    keyword (v) {
      this.keywordParams.keyword = v
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .searchResult{
    min-height: calc(100vh - 160px);
    background-color: #fff;
    width: 100%;
  }
  .haveTabbar{
    margin-bottom: 110px;
  }
  .error{
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: @base_font_color;
  }
</style>
