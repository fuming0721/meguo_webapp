<template>
  <div class="goodsCotent" id="goodsCotent" :class="{haveTabbar: $route.meta.showTabbar}" :style="{'min-height': $route.name == 'home' ? '1240px' : '400px'}">
    <template v-if="!error">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getGoodsList" v-if="!noGoods">
        <slot></slot>
      </van-list>
      <no-goods v-else text="除了你，我是真的一无所有…">
        <img src="@/assets/images/noGoods.png" alt="">
      </no-goods>
    </template>
    <div v-else class="error">数据错误， 请重试</div>
  </div>
</template>

<script>
import NoGoods from '@/components/NoGoods'
export default {
  props: {
    fetch: {
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
      error: false,
      nextPage: 1,
      dataList: [],
      navOffsetTop: 0
    }
  },
  components: {
    NoGoods
  },
  mounted () {
    this.$nextTick().then(() => {
      this.navOffsetTop = document.getElementById('goodsCotent').offsetTop
    })
  },
  methods: {
    async getGoodsList () {
      let dataForm = {}
      Object.assign(dataForm, this.pramas, { page: this.nextPage })
      try {
        let goodsinfo = await this.$api(this.fetch, dataForm)
        this.error = false
        if (goodsinfo.data.success) {
          this.loading = false
          this.noGoods = false
          this.dataList.push(...goodsinfo.data.result.threads)
          this.$emit('done', this.dataList)
          if (this.nextPage === goodsinfo.data.result.pagination.page_count) {
            this.finished = true
          } else {
            this.nextPage++
            this.finished = false
          }
        } else {
          this.noGoods = true
        }
      } catch (err) {
        this.$notify(err)
        this.error = true
      }
    }
  },
  watch: {
    pramas: {
      handler () {
        this.loading = true
        this.finished = false
        this.dataList = []
        this.$emit('done', this.dataList)
        this.nextPage = 1
        if (this.$route.name === 'home') {
          document.documentElement.scrollTop = this.navOffsetTop - 80
        } else {
          document.documentElement.scrollTop = 0
        }
        this.getGoodsList()
      },
      deep: true
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .goodsCotent{
    /*min-height: 1240px;*/
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
