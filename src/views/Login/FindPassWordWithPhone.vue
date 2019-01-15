<template>
  <div class="resetpassword">
    <nav-bar />
    <div class="form">
      <LoginAreaInput :disabled="true" leftIcon="phone" v-model.trim="params.mobile" :value="params.mobile" type="text" inputType="getCode" action="findpwd" />
      <LoginAreaInput placeholder="验证码" leftIcon="info-o" v-model.trim="params.code" :value="params.code" type="text" />
      <button class="verification" :disabled="!params.mobile.length|| !params.code.length || loading" @click="check"><van-loading class="loginloading" v-if="loading" />验证身份</button>
    </div>
  </div>
</template>
<script>
import LoginAreaInput from './children/LoginAreaInput'
export default {
  data () {
    return {
      params: {
        mobile: this.$route.query.phone,
        code: '',
        action: 'findpwd'
      },
      loading: false
    }
  },
  components: {
    LoginAreaInput
  },
  mounted () {
  },
  methods: {
    check () {
      this.loading = true
      this.$api('checkMobileCode', this.params).then(({ data }) => {
        console.log(data)
        this.loading = false
        this.$toast(data.message)
        // eslint-disable-next-line
        data.success ? this.$router.replace(`/resetpassword?redirect=${this.$route.query.redirect}&mobile=${this.params.mobile}&code=${this.params.code}`) : ''
      })
    }
  },
  watch: {}
}
</script>

<!--Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .resetpassword{
    padding-top: 80px;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .verification{
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
  .form {
    width: 100%;
    padding: 40px 60px;
  }
</style>
