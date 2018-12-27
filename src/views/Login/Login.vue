<template>
  <div class="loginPage">
    <button @click="login">登录</button>
    <button @click="logout">退出登录</button>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    login () {
      this.$auth.login().then(({ data }) => {
        this.$toast(data.message)
        if (data.success) {
          this.$router.replace(this.$route.query.redirect || '/')
        } else {
          this.$auth.clear()
        }
      })
    },
    logout () {
      this.$auth.logout().then(({ data }) => {
        this.$toast(data.message)
      })
    }
  }
}
</script>
<style lang="less" type="text/less" scoped>
  .loginPage{
    height: 100vh;
  }
</style>
