<template>
  <div class="album">
    <nav-bar />
    <div class="album_img">
      <img :src="PageParams.album_cover_img" alt="">
    </div>
    <goods-list-vertical fetch="albumList" :pramas="pramas" @done="onDone">
      <goods-item v-for="(item, index) in goodsList" :key="index" :item="item" :index="index" />
    </goods-list-vertical>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      PageParams: this.$route.query,
      pramas: {
        id: this.$route.query.id
      },
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
  .album_img{
    margin: 80px 0 20px;
    &>img{
      max-width: 100%
    }
  }
</style>
