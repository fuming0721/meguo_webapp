<template>
  <div class="searchBox">
    <van-icon class="searchIcon" name="search" />
    <input class="seachInput" type="text" :placeholder="placeholder" v-model="value">
    <van-icon class="clear" name="clear" @click="value = ''" v-if="value.length"/>
    <button class="search" @click="onSearch" :disabled="loading"><van-loading class="loading" v-if="loading" />搜索</button>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch () {
      if (this.value.length) {
        this.$emit('searchStart', this.value)
      } else {
        this.$toast(`请${this.placeholder}`)
      }
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .searchBox{
    width: calc(100% - 40px);
    height: 80px;
    margin: 0px 20px 10px;
    background-color: #fff;
    border-radius: 80px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .searchIcon, .clear{
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
  .seachInput{
    height: 80px;
    flex-grow: 1;
    font-size: 26px;
    line-height: 80px;
    color: #999;
  }
  .search{
    width: 140px;
    height: 60px;
    background-color: #1AAD19;
    color: #fff;
    border-radius: 60px;
    overflow: hidden;
    margin-right: 10px;
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    .loading{
      width: 30px !important;
      margin: 0 !important;
      margin-right: 10px !important;
    }
  }
  .clear{
    color: #999;
    font-size: 32px;
  }
</style>
