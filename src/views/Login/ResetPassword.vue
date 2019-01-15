<template>
  <div class="loginform">
    <nav-bar />
    <div class="form">
      <LoginAreaInput placeholder="设置6至15位字符新密码" leftIcon="more-o" v-model="passwordCheck" :value="passwordCheck" type="password"/>
      <LoginAreaInput placeholder="重复新密码" leftIcon="contact" v-model="params.password" :value="params.password" type="password" />
      <button class="loginBtn" :disabled="!params.password.length || !passwordCheck.length || loading" @click="confirm"><van-loading class="loginloading" v-if="loading" />确 定</button>
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
        mobile: this.$route.query.mobile,
        password: '',
        code: this.$route.query.code
      },
      passwordCheck: '',
      loading: false
    }
  },
  methods: {
    confirm () {
      this.loading = true
      if (this.params.password !== this.passwordCheck) {
        this.loading = false
        this.$toast('两次密码不一致')
      } else if (this.params.password.length < 6 || this.params.password.length > 15) {
        this.loading = false
        this.$toast('请设置6至15位字符新密码')
      } else {
        this.$api('resetPassword', this.params).then(({ data }) => {
          this.$toast(data.message)
          if (data.success) {
            setTimeout(() => {
              this.loading = false
              this.$router.replace(`/loginaccount?redirect=${this.$route.query.redirect}`)
            }, 2000)
          } else {
            this.loading = false
          }
        })
      }
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
</style>
