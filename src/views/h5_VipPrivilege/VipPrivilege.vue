<template>
  <div class="VipPrivilege">
    <nav-bar />
    <div class="userbox">
      <userAvatar />
    </div>
    <div class="fansInfo">
      <div class="fansNub">
        <span class="fansNum">{{fansInfo.first}}</span>
        <p>有效直属粉丝</p>
      </div>
      <div class="centerLine"></div>
      <div class="fansNub">
        <span class="fansNum">{{fansInfo.second}}</span>
        <p>有效推荐粉丝</p>
      </div>
    </div>
    <template v-if="!$auth.userInfo.is_operator">
      <div class="vip_des2">
        <p>Hi，{{$auth.userInfo.username}}！</p>
        <div class="LevelIntroduction" v-html="levelIntroduction"></div>
      </div>

      <div class="vip_des">
        <p class="vip_title"><span>升级条件</span></p>
        <div class="desList" v-html="upgradeConditions"></div>
        <p class="sub_des">（有效粉丝定义：须在4个月内自买或者分享出单数量≥1）</p>
      </div>
    </template>
    <template v-else>
      <div class="is_operator">Hi，尊贵的{{$auth.userInfo.username}}！，您已是运营商，无须任何升级</div>
    </template>
    <div class="upgradeBtn positionCenter" v-if="!$auth.userInfo.is_operator" :class="{isAboveIhphoneX: $deviceType.isAboveIPhoneX}">
      <button @click="upgrade" :disabled="fansInfo.is_applying || hasClick || sending || fansInfo.is_applying"><van-loading class="loading" v-if="sending" type="spinner"/>{{btnText}}</button>
    </div>
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
      fansInfo: {
        first: 0,
        second: 0,
        is_applying: false
      },
      btnText: '免费升级',
      hasClick: false,
      sending: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getFansInfo()
    })
  },
  methods: {
    async getFansInfo () {
      try {
        const effectiveFansInfo = await this.$api('effective_fans')
        this.fansInfo = effectiveFansInfo.data
        this.btnText = this.fansInfo.is_applying ? '审核中' : '免费升级'
      } catch (err) {
        this.$notify(err)
      }
    },
    async upgrade () {
      try {
        this.sending = true
        const upgradeInfo = await this.$api('upgrade_level')
        this.sending = false
        this.$toast(upgradeInfo.data.message)
        if (upgradeInfo.data.success) {
          this.hasClick = false
          this.getFansInfo()
        } else {
          this.hasClick = true
          this.btnText = upgradeInfo.data.message
        }
      } catch (err) {
        this.$notify(err)
      }
    }
  },
  computed: {
    // eslint-disable-next-line
    levelIntroduction () {
      switch (this.$auth.userInfo.memberLevel) {
        case 1:
          return `您当前是普通会员<br>
                  晋升为白金会员后，您将获得自买省钱，分享赚钱的权益<br>
                  同时您的粉丝购物下单，您也可以获得佣金收益`
        case 2:
          return `您当前是白金会员<br>
                  晋升为黑金会员后，您自买省钱，分享赚钱的收益将会大增<br>
                  同时，我们将会提供您协助运营增加粉丝数量和佣金收入`
        case 3:
          return `您当前是黑金会员<br>
                  晋升为运营商后，您享有自买省钱，分享赚钱的权益<br>
                  同时，您将获得您下面所有粉丝（直接与间接粉丝）购物佣金额外奖励，会大力提升收入哦`
      }
    },
    // eslint-disable-next-line
    upgradeConditions () {
      switch (this.$auth.userInfo.memberLevel) {
        case 1:
          return `<span style="color:#000; width: 10px;">•</span> 邀请有效直属粉丝≥3人<br>`
        case 2:
          return `<span style="color:#000;">•</span> 邀请有效直属粉丝≥80人<br>
                  <span style="color:#000;">•</span> 有效推荐粉丝（直属粉丝的粉丝）≥160人`
        case 3:
          return `<span style="color:#000";>•</span> 邀请有效直属粉丝中黑金会员≥15人<br>
                  <span style="color:#000;">•</span> 有效推荐粉丝中黑金会员（直属粉丝的粉丝）≥160人`
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .loading{
    width: 30px !important;
    height: 30px !important;
    margin-right: 20px !important;
    color: #FFEC00 !important;
  }
  .is_operator{
    margin-top: 40px;
    font-size: 24px;
    text-align: center;
  }
  .upgradeBtn{
    height: 100px;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #FFEC00;
    display: flex;
    justify-content: center;
    align-items: center;
    &>button{
      font-size: 28px;
      width: 90%;
      height: 75%;
      background-color: #000;
      border-radius: 8px;
      display: flex;
      color: #FFEC00;
      justify-content: center;
      align-items: center;
      &:active{
        opacity: 0.8;
      }
      &:disabled{
        background-color: #B1B1B1;
      }
    }
  }
  .userbox {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: -moz-linear-gradient(left, #C86DD7 0%, #3023AE 100%);
    background: -webkit-linear-gradient(left, #C86DD7 0%, #3023AE 100%);
    background: -o-linear-gradient(left, #C86DD7 0%, #3023AE 100%);
    background: -ms-linear-gradient(left, #C86DD7 0%, #3023AE 100%);
    background: linear-gradient(to right, #C86DD7 0%, #3023AE 100%);
  }

  .userinfo {
    width: 100%;
    height: 270px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
  }

  .fansInfo{
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 20px solid #f2f2f2;
  }
  .centerLine{
    height: 80px;
    background-color: #f2f2f2;
    width: 2px;
  }
  .fansNub{
    height: 120px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 22px;
    color: #666;
  }
  .fansNum{
    font-size: 36px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  .desList{
    padding: 30px 20px;
    box-sizing: border-box;
    font-size: 26px;
    line-height: 1.5;
    color: #F5A624;
    line-height:2;
  }
  .vip_des2{
    padding: 30px;
    &>p{
      line-height: 1.5;
      font-size: 28px;
      margin-bottom: 10px;
    }
    .LevelIntroduction{
      font-size: 24px;
      line-height: 1.5;
    }
  }

  .vip_des {
    padding-top: 20px;
  }

  .vip_title {
    position: relative;
    text-align: center;
    font-size: 28px;
    height: 40px;
  }

  .vip_title > span {
    position: absolute;
    z-index: 9;
    padding: 0 44px;
    line-height:40px;
    left: calc(50% - 100px);
    background-color: #fff;
  }

  .vip_title:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #e3e3e3;
    left: 0;
    top: 50%;
    z-index: 0;
  }

  .VipPrivilege{
    min-height: 100vh;
    padding-top: 80px;
    background-color: #fff;
  }
  .sub_des{
    font-size: 24px;
    padding-left: 20px;
  }
</style>
