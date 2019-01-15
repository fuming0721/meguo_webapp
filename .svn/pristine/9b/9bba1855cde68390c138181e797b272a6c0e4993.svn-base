<template>
  <div class="loginform">
    <nav-bar />
    <div class="form">
      <LoginAreaInput placeholder="请输入注册账号的手机或邮箱" leftIcon="contact" v-model="params.account" :value="params.account" type="text" />
      <button class="loginBtn" :disabled="!params.account.length || loading" @click="nextStep"><van-loading class="loginloading" v-if="loading" />下一步</button>
    </div>
  </div>
</template>

<script>
import LoginAreaInput from './children/LoginAreaInput'
export default {
  components: {
    LoginAreaInput
  },
  data () {
    return {
      params: {
        account: ''
      },
      loading: false
    }
  },
  methods: {
    nextStep () {
      this.loading = true
      this.$api('findPassword', this.params).then(({ data }) => {
        this.loading = false
        this.$toast(data.message)
        if (data.success) {
          if (data.result.type === 'email') {
            this.$router.push(`/emailreset?redirect=${this.$route.query.redirect}&email=${data.result.hide}`)
          } else if (data.result.type === 'mobile') {
            this.$router.replace(`/phonereset?redirect=${this.$route.query.redirect}&phone=${data.result.mobile}`)
          }
        }
      })
    }
  }
}
</script>
<style lang="less" type="text/less" scoped>
  .loginform{
    padding-top: 80px;
    display: flex;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .form {
    width: 100%;
    padding: 40px 60px;
  }
  .formItem{
    margin-bottom: 40px;
    height: 80px;
    padding: 0 !important;
  }
  .loginBtn{
    width: 100%;
    height: 80px;
    border-radius: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: @base_font_color;
    font-size: 24px;
    &:disabled{
      opacity: 0.4;
    }
  }
  .subForm{
    font-size: 24px;
    color: #666;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: 80px;
  }
  .otherWay{
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    color: #dcdcdc;
    padding: 0 80px;
  }
  .otherWayIcon{
    width: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &>.icon{
      font-size: 70px;
    }
  }
</style>
