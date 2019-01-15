<template>
  <div class="otherWay">
    <p>—————— 第三方登录 ——————</p>
    <div class="otherWayIcon">
      <van-icon name="qq" class-prefix="icon" class="icon" @click="otherWayLogin('qq')" />
      <van-icon name="taobao" class-prefix="icon" class="icon" @click="otherWayLogin('taobao')" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      account: ''
    }
  },
  methods: {
    otherWayLogin (name) {
      window.location.href = `${this.$asiox.defaults.baseURL}/user/auth?type=${name}&redirect_uri=${this.$route.query.redirect}`
    }
  }
}
</script>
<style lang="less" type="text/less" scoped>
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
