<template>
  <div class="editor_avatar">
    <img class="avatar" :src="user.avatar" alt="">
    <div class="user">
      <p class="userName">{{user.username}}</p>
      <p class="pTime">{{created_time}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    },
    created_time: {
      type: String
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .editor_avatar {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .avatar{
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    margin-right: 20px;
  }
  .user{
    padding: 4px 0;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }
  .userName{
    font-size: 28px;
    color: #666;
  }
  .pTime{
    font-size: 24px;
    color: #999;
  }
</style>
