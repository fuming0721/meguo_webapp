<template>
  <div class="container">
    <div class="loading" v-if="loading">
      <van-loading color="#666" />
    </div>
    <div v-else>
      <div class="noDetail" v-if="noDetail">
        <img src="@/assets/images/noGoods.png" alt="">
        <p>{{noDetailMsg}}</p>
        <button class="back" @click="$router.go(-1)">返回</button>
      </div>
      <slot v-if="!noDetail" />
    </div>
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
      noDetail: true,
      noDetailMsg: '',
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
  methods: {
    doFetch () {
      this.loading = true
      this.$api(this.fetch, this.params)
        .then(({ data }) => {
          this.loading = false
          if (!data.success) {
            this.noDetail = true
            this.noDetailMsg = data.message
          } else {
            this.noDetail = false
            this.$emit('done', data)
          }
        })
        .catch(error => {
          alert(error)
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
  .noDetail, .loading{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &>img{
      width: 50%;
    }
    &>p{
      margin: 30px 0;
      font-size: 26px;
      color: @base_font_color;
    }
  }
  .back{
    width: 200px;
    height: 60px;
    border-radius: 8px;
    background-color: @base_font_color;
    color: #fff;
    &:active{
      opacity: 0.8;
    }
  }
</style>
