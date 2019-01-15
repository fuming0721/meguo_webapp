<template>
  <div class="userInfoitem">
    <div class="userInfo">
      <div class="userIcon">
        <img :src="userInfo.avatar" alt="">
        <icon class="user_level_icon" :name="iconName" v-if="userInfo.memberLevel" />
      </div>
      <div class="userName">
        <p>{{userInfo.username}} <span v-if="userInfo.mobile">({{userInfo.mobile}})</span></p>
        <p class="time" v-if="userInfo.invitation">邀请码：{{userInfo.invitation}}</p>
        <p class="time" v-else>{{userInfo.time * 1000 | timeformat}}</p>
      </div>
    </div>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    userInfo: {
      type: Object,
      require: true
    }
  },
  computed: {
    // eslint-disable-next-line
    iconName () {
      switch (this.userInfo.memberLevel) {
        case 1:
          return 'icon_user-level-gene'
        case 2:
          return 'icon_user-level-plat'
        case 3:
          return 'icon_user-level-blac'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .userInfoitem{
    border-bottom: 1px solid #f2f2f2;
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #fff;
  }
  .userInfo{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
  }
  .userIcon{
    margin-right: 14px;
    position: relative;
    &>img{
      width: 80px;
      height: 80px;
      flex-shrink: 0;
      border-radius: 80px;
    }
  }
  .userName{
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    font-size: 24px;
    color: #000;
  }
  .time{
    color: #999;
  }
  .user_level_icon{
    width: 28px;
    position: absolute;
    right: 0px;
    bottom: 2px;
  }
</style>
