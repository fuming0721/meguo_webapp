<template>
  <div class="navBar positionCenter" v-if="!$deviceType.isMeguoApp">
    <van-icon name="arrow-left" class="navBar_left" @click="back" />
    <p class="navBar_title">{{$route.meta.title || $route.query.title || title}}</p>
    <div class="navBar_right" @click="navBar_right_click"></div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      require: true,
      type: String
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    navBar_right_click () {
      this.$emit('navBar_right_click')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .navBar{
    height: 80px;
    background-color: #fff;
    width: 100%;
    position: fixed;
    top: 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
  }
  .navBar_left{
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    flex-shrink: 0;
  }
  .navBar_title{
    font-size: 30px;
  }
  .navBar_right{
    width: 80px;
    height: 80px;
    flex-shrink: 0;
  }
</style>
