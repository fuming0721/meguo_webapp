<template>
  <div class="hotSearch">
    <p>热门搜索</p>
    <ul class="hotData">
      <li v-for="(item, index) in hotDataList" :key="index" @click="$emit('keywordClick', item.name)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyword: this.value,
      params: {
        t: new Date().getTime()
      },
      hotDataList: []
    }
  },
  created () {
    this.getHotData()
  },
  methods: {
    getHotData () {
      this.$api('getKeywords', this.params).then(({ data }) => {
        this.hotDataList = data.result
        if (data.result.length > 0) {
          let num = Math.floor(Math.random() * 8)
          this.$emit('firstHotWord', data.result[num])
        }
      })
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .hotSearch {
    width: 100%;
    height: calc(100vh - 160px);
    padding: 40px;
  }
  .hotData{
    margin-top: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    &>li{
      font-size: 24px;
      background-color: #fff;
      height: 50px;
      border-radius: 50px;
      padding: 0 30px;
      line-height: 50px;
      margin: 0 20px 20px 0;
    }
  }
</style>
