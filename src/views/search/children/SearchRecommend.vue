<template>
  <ul class="hotSearch">
    <li v-if="noData">没有搜索结果，试试其他关键词？</li>
    <li v-else v-for="(item, index) in dataList" :key="index" @click="$emit('keywordClick', item.name)">
      <van-icon name="search" class="searchIcon" />{{item.name}}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String
    }
  },
  data () {
    return {
      dataList: [],
      noData: false
    }
  },
  created () {
    this.getReconmmendData(this.keyword)
  },
  methods: {
    getReconmmendData (keyoword) {
      this.$api('getKeywords', {
        keyword: keyoword
      }).then(({ data }) => {
        if (data.success) {
          this.noData = false
          this.dataList = data.result
        } else {
          this.noData = true
        }
      })
    }
  },
  watch: {
    keyword (v) {
      this.getReconmmendData(v)
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .hotSearch {
    width: 100%;
    height: calc(100vh - 160px);
    &>li{
      display: flex;
      height: 80px;
      padding: 0 30px;
      justify-content: flex-start;
      background-color: #fff;
      align-items: center;
      border-bottom: 1px solid #f2f2f2;
      font-size: 24px;
    }
  }
  .searchIcon{
    margin-right: 10px;
  }
</style>
