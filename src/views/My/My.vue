<template>
  <div class="my">
    <div class="my_top">
      <userAvatar v-if="this.$auth.userInfo"/>
    </div>
    <ul class="balanceBox">
      <li @click="$router.push('/commission')">
        <div class="money"><span>￥</span>{{($auth.userInfo.balance || 0) | formatMoney}}</div>
        <p class="name">佣金收入</p>
      </li>
      <li class="line"></li>
      <li @click="openDialog(incomeDesText)">
        <div class="money"><span>￥</span>{{($auth.userInfo.sign_balance || 0) | formatMoney}}</div>
        <p class="name">签到收入</p>
      </li>
    </ul>
    <img class="downLoadImg" src="https://img.alicdn.com/imgextra/i2/62752115/O1CN01K0xTJz1RUiAeizq40_!!62752115.png" alt="" @click="downLoad">
    <van-cell-group>
      <van-cell title="我的收藏" is-link @click="toPage('/favoriteslist')" />
      <van-cell title="我的足迹" is-link @click="toPage('/footprintlist')" />
      <van-cell title="佣金收入" is-link @click="$router.push('/commission')" />
      <van-cell title="我的团队" is-link @click="toPage('/team')" />
      <van-cell title="邀请粉丝" is-link @click="openDialog(inviteDesText)" />
    </van-cell-group>
    <div class="logout" @click="logout"><van-icon class="seeting" name="setting" />退出登录</div>
  </div>
</template>

<script>
import userAvatar from '@/components/UserAvatar'
export default {
  components: {
    userAvatar
  },
  data () {
    return {
      incomeDesText: {
        title: '签到收入说明',
        message: '签到的积分每日可自动兑换成现金（目前仅支持在APP中签到）'
      },
      inviteDesText: {
        title: '邀请粉丝',
        message: '下载APP后，使用APP邀请好友注册，Ta自购或分享您可获得佣金收入奖励哦。'
      }
    }
  },
  methods: {
    downLoad () {
      window.location.href = 'http://url.cn/5Qp56rv'
    },
    toPage (url) {
      this.$router.push(url)
    },
    openDialog (info) {
      this.$dialog.confirm({
        className: 'myDialog',
        cancelButtonText: '＋',
        title: info.title,
        message: info.message,
        confirmButtonText: '前往APP'
      }).then(() => {
        window.location.href = 'http://url.cn/5Qp56rv'
      }).catch(() => {})
    },
    logout () {
      this.$dialog.confirm({
        title: '',
        className: 'logout',
        message: '是否确定退出登录'
      }).then(() => {
        this.$auth.logout().then(({ data }) => {
          // eslint-disable-next-line
          data.success ? this.$router.replace('/') : ''
          this.$toast(data.message)
        })
      }).catch(() => {})
    }
  }
}
</script>
<style lang="less" type="text/less" scoped>
  .my{
    height: 100vh;
    position: relative;
  }
  .my_top {
    width: 100%;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://img.alicdn.com/imgextra/i4/62752115/O1CN01Fz412Y1RUiAZemAvd_!!62752115.png");
    background-size: contain;
  }
  .balanceBox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    width: 100%;
    background-color: #fff;
    margin-bottom: 20px;
    &>li{
      height: 100%;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 24px;
    }
    .line{
      height: 50%;
      width: 2px;
      background-color: #ddd;
    }
  }
  .money{
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 8px;
    &>span{
      font-size: 24px;
    }
  }
  .downLoadImg{
    width: 100%;
    margin-bottom: 20px;
  }
  .name{
    font-size: 22px;
    margin-top: 6px;
  }
  .logout{
    position: absolute;
    text-align: center;
    right: 40px;
    top: 40px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
  }
  .seeting{
    margin-right: 10px;
  }
</style>
