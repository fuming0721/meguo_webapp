<template>
  <div class="article-content" id="detail_1">
    <div class="article_title">——— 图文详情 ———</div>
    <div class="showDetailBtn">
      <div class="seemoredetail" @click="showAllPics" v-if="!isShowAll">
        <van-icon name="arrow-down" class="lookIcon"></van-icon>
        <div class="seemoreBtn">点击查看商品介绍<van-loading v-if="loading" class="loading" type="spinner" color="#000" /></div>
      </div>

      <div class="taobaoDetailBox">
        <img v-for="(item, index) in allPicsList" v-lazy="item" alt="" :key="index">
      </div>

      <div class="seemoredetail" @click="hideAllPics"  v-if="isShowAll">
        <van-icon name="arrow-up" class="lookIcon"></van-icon>
        <div class="seemoreBtn">点击收起</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    extension: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      isShowAll: false,
      loading: false,
      allPicsList: [],
      navOffsetTop: 0
    }
  },
  mounted () {
    this.$nextTick().then(() => {
      this.navOffsetTop = document.getElementById('detail_1').offsetTop
      this.$store.commit('detail/SETDETAIL_1_OFFSETTOP', this.navOffsetTop)
    })
  },
  methods: {
    async showAllPics () {
      this.loading = true
      const allPics = await this.$api('seeAllPics', { num_iid: this.extension.num_iid })
      this.loading = false
      if (allPics.data.success) {
        this.isShowAll = true
        this.allPicsList = allPics.data.list
        this.updateDetail2OffsetTop()
      }
    },
    hideAllPics () {
      this.allPicsList = []
      this.isShowAll = false
      document.documentElement.scrollTop = this.navOffsetTop - 100
      this.updateDetail2OffsetTop()
    },
    updateDetail2OffsetTop () {
      this.$nextTick().then(() => {
        let detail2Offset = document.getElementById('detail_2').offsetTop - 100
        this.$store.commit('detail/SETDETAIL_2_OFFSETTOP', detail2Offset)
      })
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .article-content {
    padding: 0 30px;
    overflow: hidden;
    background-color: #fff;
  }
  .article_title {
    font-size: 28px;
    text-align: center;
    height: 80px;
    line-height: 80px;
    border-bottom: 2px solid #f2f2f2;
  }
  .showDetailBtn {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
  .lookIcon{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: @base_font_color;
    color: #fff;
    line-height: 40px;
  }
  .seemoreBtn{
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
  }
  .loading{
    width: 40px !important;
    height: 40px !important;
    margin-left: 20px !important;
  }
  .taobaoDetailBox{
    margin-bottom: 40px;
  }
  .taobaoDetailBox > img {
    width: 100%;
  }
  .seemoredetail{
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
