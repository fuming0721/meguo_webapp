<template>
  <div class="userAvatar">
    <div class="userIconBox">
      <img class="userIcon" :src="$auth.userInfo.avatar" alt="">
      <icon class="user_level_icon" :name="iconName" />
    </div>
    <p class="userName">{{$auth.userInfo.username}}</p>
  </div>
</template>
<script>
export default {
  computed: {
    // eslint-disable-next-line
    iconName () {
      switch (this.$auth.userInfo.memberLevel) {
        case 1:
          return 'icon_user-level-gene'
        case 2:
          return 'icon_user-level-plat'
        case 3:
          return 'icon_user-level-blac'
        default:
          return 'placeholder'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .userAvatar{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .userIconBox{
    position: relative;
  }
  .userIcon{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
  }
  .user_level_icon{
    width: 34px;
    position: absolute;
    right: 5px;
    bottom: 5px;
  }
  .userName {
    text-align: center;
    font-size: 28px;
    color: #FFEC00;
    margin: 20px 0 10px;
  }
</style>
