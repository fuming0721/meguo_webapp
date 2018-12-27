<template>
  <div class="container">
    <div v-if="loading" class="loadingPage">
      <van-loading type="spinner" />
    </div>
    <div class="error" v-else-if='error'>{{error}}</div>
    <slot v-else></slot>
  </div>

</template>

<script>
export default {
  props: {
    fetch: {
      type: String,
      required: true
    },
    params: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      error: '',
      loading: true
    }
  },

  watch: {
    params: {
      handler (v, o) {
        this.doFetch()
      },
      deep: true
    }
  },

  created () {
    this.doFetch()
  },
  activated () {
  },
  methods: {
    doFetch () {
      this.$showLoading()
      this.loading = true
      this.$api(this.fetch, this.params)
        .then(response => {
          this.loading = false
          this.$emit('done', response)
        })
        .catch(error => {
          this.loading = false
          this.error = '数据获取失败，请重试！'
          this.$emit('fail', error)
        })
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .error, .loadingPage{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
  }
</style>
