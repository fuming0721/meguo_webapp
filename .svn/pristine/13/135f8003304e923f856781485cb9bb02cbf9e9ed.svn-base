<template>
  <div class="registered">
    <nav-bar />
    <div class="form">
      <LoginAreaInput placeholder="手机号码" leftIcon="contact" v-model.trim="params.mobile" :value="params.mobile" type="text" inputType="getCode" action="register" />
      <LoginAreaInput placeholder="验证码" leftIcon="info-o" v-model.trim="params.code" :value="params.code" type="text"/>
      <LoginAreaInput placeholder="设置6-15位字符密码" leftIcon="more-o" v-model.trim="params.password" :value="params.password" type="password"/>
      <LoginAreaInput placeholder="输入邀请码" leftIcon="cash-back-record" v-model.trim="params.invitation_code" :value="params.invitation_code" type="text"/>
      <button @click="registered" class="registeredBtn" :disabled="!params.mobile.length || !params.code.length || !params.password.length || loading" ><van-loading class="loginloading" v-if="loading" />注 册</button>
      <p class="warn">注册代表你已同意<a href="#">注册协议</a>和<a href="#">隐私协议</a></p>
    </div>
    <otherWay />
  </div>
</template>
<script>
import LoginAreaInput from './children/LoginAreaInput'
import otherWay from './children/OtherWayLogin.vue'
export default {
  data () {
    return {
      params: {
        mobile: '',
        code: '',
        password: '',
        invitation_code: ''
      },
      loading: false
    }
  },
  components: {
    LoginAreaInput,
    otherWay
  },
  methods: {
    registered () {
      this.loading = true
      if (this.params.password > 15 || this.params.password < 6) {
        this.loading = false
        this.$toast('请设置6-15位字符密码')
      } else {
        this.$api('register', this.params).then(({ data }) => {
          this.$toast(data.message)
          if (data.success) {
            setTimeout(() => {
              this.loading = false
              this.$router.replace(`/loginaccount?redirect=${this.$route.query.redirect || '/'}`)
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

<!--Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .registered{
    padding-top: 80px;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .form{
    width: 100%;
    padding: 40px 60px;
  }
  .registeredBtn{
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
  .warn{
    font-size: 24px;
    text-align: center;
    margin-top: 40px;
    &>a{
      color: #5A8AF5;
    }
  }
</style>
