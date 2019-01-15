<template>
  <div class="recommend" id="detail_2">
    <div class="article_title">——— 热门推荐 ———</div>
    <goods-list-vertical fetch="detail_recommend" :pramas="params" @done="onDone">
      <goods-item v-for="(item, index) in goodsList" :key="index" :item="item" :index="index" />
    </goods-list-vertical>
  </div>
</template>
<script>
export default {
  props: {
    params: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      goodsList: []
    }
  },
  mounted () {
    this.$nextTick().then(() => {
      let boxOffsetTop = document.getElementById('detail_2').offsetTop - 100
      this.$store.commit('detail/SETDETAIL_2_OFFSETTOP', boxOffsetTop)
    })
  },
  methods: {
    onDone (data) {
      this.goodsList = data
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .recommend{
    background-color: #fff;
    margin-top: 20px;
  }
  .article_title {
    font-size: 28px;
    text-align: center;
    height: 80px;
    line-height: 80px;
    margin-bottom: 4px;
    border-bottom: 2px solid #f2f2f2;
  }
</style>
