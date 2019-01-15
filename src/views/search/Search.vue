<template>
  <div class="searchPage">
    <topInput v-model.lazy="keyword" :value="keyword" @focus="focus" :placeholder="placeholder" :is_tmall="is_tmall" @is_tmall="setShopSource" @startSearch="startSearch"/>
    <component :is="currentView" @keywordClick="keywordClick" @firstHotWord="firstHotWord" :keyword="keyword" :is_tmall="is_tmall"/>
  </div>
</template>

<script>
import topInput from './children/TopInput.vue'
import HotSearch from './children/HotSearch.vue'
import SearchRecommend from './children/SearchRecommend.vue'
import searchResult from './children/SearchResult.vue'
export default {
  components: {
    topInput,
    HotSearch,
    SearchRecommend,
    searchResult
  },
  data () {
    return {
      keyword: this.$route.query.keyword || '',
      currentView: 'HotSearch',
      placeholder: '',
      is_tmall: Number(this.$route.query.is_tmall) || 0,
      isStartSearch: false
    }
  },
  created () {
    let query = this.$route.query
    if (query.keyword && query.keyword.length) {
      this.keyword = query.keyword
      this.startSearch()
    }
  },
  methods: {
    startSearch () {
      if (this.keyword && this.keyword.length) {
        this.isStartSearch = true
        this.currentView = 'searchResult'
      } else {
        this.$toast('请输入搜索关键词')
      }
    },
    keywordClick (data) {
      this.keyword = data
      this.startSearch()
    },
    focus () {
      this.isStartSearch = false
      this.currentView = this.keyword.length ? 'SearchRecommend' : 'HotSearch'
    },
    firstHotWord (word) {
      this.placeholder = word.name
    },
    setShopSource (v) {
      this.is_tmall = v
      if (this.currentView === 'searchResult') {
        this.startSearch()
      }
    }
  },
  watch: {
    keyword (v) {
      // eslint-disable-next-line
      !v.length ? this.isStartSearch = false : ''
      if (!this.isStartSearch) {
        this.currentView = v.length ? 'SearchRecommend' : 'HotSearch'
      }
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>

</style>
