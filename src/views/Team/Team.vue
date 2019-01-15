<template>
  <div class="team">
    <nav-bar />
    <SearchForm @searchStart="fansSearch" :loading="searchLoading" placeholder="输入手机号或昵称查询" />
    <div class="myLeader" v-if="this.$auth.userInfo.upperInfo">
      <div class="title">您的推荐人</div>
      <UserInfoItem :userInfo="upperInfo" />
    </div>

    <van-tabs class="nav" v-model="params.type" :line-width="250" :swipe-threshold="4" :sticky="true">
      <van-tab v-for="(item, index) in teamNav" :key="index" :title="item" />
    </van-tabs>
    <goods-list-vertical fetch="getMyTeam" :pramas="params" @done="onDone" >
      <FansItem v-for="(item, index) in fansList" :key="index" :item="item" :index="index"  />
    </goods-list-vertical>

    <ul class="totleFans positionCenter">
      <li>我的粉丝：{{$auth.userInfo.fansNum.son}}个</li>
      <li class="line"></li>
      <li>推荐粉丝：{{$auth.userInfo.fansNum.grandSon}}个</li>
    </ul>
  </div>
</template>

<script>
import UserInfoItem from '@/components/UserInfoItem.vue'
import SearchForm from '@/components/SearchForm.vue'
import FansItem from './children/FansItem.vue'
export default {
  components: {
    UserInfoItem,
    SearchForm,
    FansItem
  },
  data () {
    return {
      teamNav: ['全部粉丝', '直属粉丝', '推荐粉丝'],
      params: {
        type: 0
      },
      fansList: [],
      searchLoading: false,
      upperInfo: {}
    }
  },
  mounted () {
    this.upperInfo = this.$auth.userInfo.upperInfo ? {
      avatar: this.$auth.userInfo.upperInfo.avatar,
      username: this.$auth.userInfo.upperInfo.username,
      memberLevel: this.$auth.userInfo.upperInfo.memberLevel,
      invitation: this.$auth.userInfo.upperInfo.invitation
    } : {}
  },
  methods: {
    onDone (data) {
      this.fansList = data
    },
    fansSearch (keyword) {
      this.searchLoading = true
      this.$api('searchMyFans', {
        keyword: keyword
      }).then(({ data }) => {
        this.searchLoading = false
        if (data.success) {
          this.fansList = [data.result]
          console.log(this.fansList)
        } else {
          this.$toast(data.message)
        }
      })
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .team{
    min-height: 100vh;
    padding-top: 100px;
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
