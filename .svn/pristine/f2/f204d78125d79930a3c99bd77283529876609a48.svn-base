<template>
  <div class="team">
    <nav-bar />
    <goods-list-vertical fetch="commendFans" :pramas="params" @done="onDone" >
      <userInfoItem  v-for="(item, index) in fansList" :key="index"  :userInfo="{ avatar: item.user_info.avatar,
                                                                                  username: item.user_info.username,
                                                                                  mobile: item.user_info.mobile,
                                                                                  time: item.add_time,
                                                                                  memberLevel: item.member_level }" />
    </goods-list-vertical>
  </div>
</template>

<script>
import userInfoItem from '@/components/UserInfoItem'
export default {
  components: {
    userInfoItem
  },
  data () {
    return {
      params: {
        uid: this.$route.query.id
      },
      fansList: []
    }
  },
  mounted () {
  },
  methods: {
    onDone (data) {
      this.fansList = data
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .team{
    min-height: 100vh;
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .myLeader{
    height: 200px;
    background-color: #fff;
    margin-top: 20px;
  }
  .title{
    height: 100px;
    font-size: 28px;
    font-weight: bolder;
    padding: 0 30px;
    line-height: 100px;
    border-bottom: 1px solid #f2f2f2;
  }
  .nav{
    margin-top: 20px;
  }
  .totleFans{
    position: fixed;
    bottom: 0;
    background-color: @base_font_color;
    color: #fff;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &>li{
      height: 80px;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &>.line{
      width: 1px !important;
      height: 40px;
      background-color: #fff;
    }
  }
</style>
