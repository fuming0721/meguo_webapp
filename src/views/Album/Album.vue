<template>
  <div class="album">
    <nav-bar :title="params.album_title"></nav-bar>
    <div class="album_img">
      <img :src="params.album_cover_img" alt="">
    </div>
    <goods-list-vertical :pramas="dataListParams" :getDataName="getDataName"></goods-list-vertical>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      params: this.$route.query,
      getDataName: 'albumList',
      dataListParams: {
        id: this.$route.query.id
      }
    }
  },
  mounted () {
    //    this.$api('pib', { tid: 22132 }).then(data => {
    //      console.log(data)
    //    })
  },
  methods: {
    getList () {
      this.num += 1
      this.$api('pic', { cid: this.num }).then(data => {
        console.log(data)
      })
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
