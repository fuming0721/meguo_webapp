<template>
  <div class="loginform">
    <nav-bar />
    <div class="form">
      <LoginAreaInput placeholder="请输入手机号码" leftIcon="phone" v-model.trim="params.mobile" :value="params.mobile" type="text" inputType="getCode" action="msg_login" />
      <LoginAreaInput placeholder="验证码" leftIcon="info-o" v-model.trim="params.code" :value="params.code" type="text" />
      <button class="loginBtn" :disabled="!params.mobile.length|| !params.code.length || loading" @click="login"><van-loading class="loginloading" v-if="loading" />登 录</button>
      <div class="subForm">
        <router-link :to="'/loginaccount?redirect='+$route.query.redirect">账号登录</router-link>
        <router-link :to="'/forgetpassword?redirect='+$route.query.redirect">忘记密码？</router-link>
      </div>
    </div>
    <otherWay />
  </div>
</template>

<script>
import LoginAreaInput from './children/LoginAreaInput'
import otherWay from './children/OtherWayLogin.vue'
export default {
  components: {
    LoginAreaInput,
    otherWay
  },
  data () {
    return {
      params: {
        mobile: '',
        code: ''
      },
      loading: false
    }
  },
  methods: {
    otherWayLogin (name) {
      window.location.href = `${this.$asiox.defaults.baseURL}/user/auth?type=${name}&redirect_uri=${this.$route.query.redirect}`
    },
    login () {
      this.loading = true
      this.$auth.login('loginWithCode', this.params).then(({ data }) => {
        this.loading = false
        if (data.success) {
          this.$toast(data.message)
          this.$router.replace(this.$route.query.redirect)
        } else {
          this.$toast(data.message)
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
</style>
