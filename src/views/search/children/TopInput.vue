<template>
  <div class="searchTop">
    <div class="topInputBox">
      <van-icon class="back" name="arrow-left" @click="$router.go(-1)" />
      <div class="inputBox">
        <input type="text" :placeholder="placeholder" @focus="$emit('focus')" @input="handleInput" :value="value" @keyup.enter="$emit('startSearch', keyword)" >
        <van-icon class="clear" name="cross" v-if="keyword && keyword.length"  @click="clear" />
      </div>
      <van-icon class="search" name="search"  @click="$emit('startSearch', keyword)"/>
    </div>
    <van-tabs v-model="active" :line-width="340">
      <van-tab title="搜淘宝" />
      <van-tab title="搜天猫" />
    </van-tabs>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String
    },
    value: {
      type: String
    },
    is_tmall: {
      type: Number
    }
  },
  data () {
    return {
      keyword: this.value,
      active: this.is_tmall
    }
  },
  created () {
  },
  methods: {
    handleInput () {
      this.$emit('input', event.target.value)
    },
    clear () {
      this.$emit('input', '')
    }
  },
  watch: {
    value (v) {
      this.keyword = v
    },
    is_tmall (v) {
      this.active = v
    },
    active (v) {
      this.$emit('is_tmall', v)
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .searchTop{
    height: 160px;
    width: 100%;
  }
  .topInputBox{
    height: 80px;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .clear, .back, .search{
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
  }
  .back{
    font-size: 46px;
    color: #333;
  }
  .search{
    font-size: 36px;
    color: #333;
  }
  .inputBox{
    height: 60px;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F5F5F5;
    border-radius: 60px;
    overflow: hidden;
    padding-left: 30px;
    &>input{
      height: 100%;
      flex-grow: 1;
      background-color: #F5F5F5;
      font-size: 26px;
      &::placeholder{
        color: #999;
      }
    }
  }
</style>
