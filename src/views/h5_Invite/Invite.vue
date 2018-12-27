<template>
  <div class="invitePage">
    <nav-bar />
    <div class="invite_top">
      <img class="invite_top_btn" @click="invite" src="https://img.alicdn.com/imgextra/i4/62752115/TB20tiTsVuWBuNjSszbXXcS7FXa-62752115.gif" alt="">
    </div>
    <p class="item_title">邀请好友签到，轻松赚钱</p>
    <div class="item_content">
      <p class="contentTitle">【邀请如何赚钱？】</p>
      <div class="contentText">
        邀请好友成为您的粉丝，Ta签到你可以获得积分奖励；Ta再邀请的粉丝进行签到，您还可获得积分奖励。
        邀请越多，坐等赚钱，长期收益，稳赚不赔。
      </div>
      <p class="contentTitle">【邀请小技巧】</p>
      <ul class="contentText">
        <li>1、邀请您的家人、朋友、同学同事成功率最高；</li>
        <li>2、分享到3个以上的微信群/QQ群，成功邀请的几率提升200%；</li>
        <li>3、可以告诉好友：注册本App不但购物省钱，每天签到还可以赚钱，邀请好友可以赚更多，并且连续签到可以抽现金红包。</li>
      </ul>
    </div>
    <p class="item_title">邀请记录</p>
    <div class="invite_list">
      <van-tabs animated swipeable>
        <van-tab title="邀请达人">
          <svip-ranking />
        </van-tab>
        <van-tab title="我的邀请">
          <my-invitation />
        </van-tab>
      </van-tabs>
    </div>
    <div class="inviteNow" @click="invite">立即开始邀请</div>
  </div>
</template>

<script>
import SvipRanking from './children/SvipRanking.vue'
import MyInvitation from './children/MyInvitation.vue'
export default {
  data () {
    return {
      isFirst: 0,
      isSec: 1
    }
  },
  components: {
    MyInvitation,
    SvipRanking
  },
  created () {
  },
  methods: {
    invite () {
      if (this.$deviceType.isMeguoApp) {
        this.$bridge.callhandler('yaoQingZhuan')
      } else {
        this.$router.push('/invitefriends')
      }
    }
    //      togold(){
    //        if (this.$store.state.isAndroidApp || this.$store.state.isiOSApp) {
    //          this.$bridge.callhandler('toMyGold')
    //        } else {
    //          if (sessionStorage.getItem('isLogin') == 'false') {
    //            this.$router.push('/login')
    //          } else {
    //            this.$router.push('/mygold')
    //          }
    //        }
    //      },
    //      tomyfans(){
    //        if (this.$store.state.isAndroidApp || this.$store.state.isiOSApp) {
    //          this.$bridge.callhandler('toMyFans')
    //        } else {
    //          if (sessionStorage.getItem('isLogin') == 'false') {
    //            this.$router.push('/login')
    //          } else {
    //            this.$router.push('/fans')
    //          }
    //        }
    //      },
    //    fetchFansData () {
    //      this.$axios.get(this.$store.state.agentData.fansUrl, {
    //        params: {
    //          type: 1
    //        }
    //      }).then(resp => {
    //        if (resp.status == 200) {
    //          this.myFansArr = resp.data.lists
    //        }
    //      }).catch(error => {
    //        this.showError(error)
    //      })
    //    },
    //    getAgentStatus(){
    //      this.$axios.get(this.agentStatus).then(res => {
    //        this.agentStatusNum = res.data.status
    //        Indicator.close()
    //      }).catch(error => {
    //        this.showError(error)
    //      })
    //    },
    //    isLogin(){
    //      var _this = this;
    //      if (this.$store.state.isAndroidApp || this.$store.state.isiOSApp) {
    //        this.$bridge.callhandler('getToken', null, function (response) {
    //          _this.token = response;
    //          var formData = new FormData();
    //          formData.append('token', response);
    //          _this.$axios.post(_this.$store.state.logintokenUrl, formData).then(function (resp) {
    //            if (resp.data) {
    //              _this.isLogined = true;
    //              _this.fetchFansData()
    //            } else {
    //              _this.isLogined = false
    //              _this.$bridge.callhandler('login')
    //            }
    //          }).catch(function (error) {
    //
    //          })
    //        })
    //      }
    //    },
  },
  //    computed: mapState({
  //      windowIsShow: state => state.windowIsShow
  //    }),
  watch: {
    //    windowIsShow: function (oldV, newV) {
    //      if (this.$store.state.isAndroidApp || this.$store.state.isiOSApp) {
    //        var _this = this;
    //        if (newV) {
    //          this.isSec = 100;
    //        } else {
    //          this.isFirst = 100;
    //          if (this.isFirst = this.isSec) {
    //            _this.$bridge.callhandler('setTitle', '邀请好友')
    //            _this.$bridge.callhandler('getToken', null, function (response) {
    //              _this.token = response;
    //              var formData = new FormData();
    //              formData.append('token', response);
    //              _this.$axios.post(_this.$store.state.logintokenUrl, formData).then(function (resp) {
    //                if (resp.data) {
    //                  _this.isLogined = true;
    //                  _this.fetchFansData()
    //                  _this.getAgentStatus()
    //                }
    //              }).catch(function (error) {
    //
    //              })
    //            })
    //          }
    //        }
    //      }
    //    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .invitePage{
    padding-top: 80px;
  }
  .invite_top {
    width: 100%;
    height: 500px;
    background-image: url("https://img.alicdn.com/imgextra/i2/62752115/TB2t7uUs1uSBuNjSsziXXbq8pXa-62752115.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
  }
  .invite_top_btn{
    width: 60%;
    margin-bottom: 20px;
  }
  .item_title {
    height: 80px;
    line-height: 80px;
    padding-left: 20px;
    box-sizing: border-box;
    background-color: #fff;
    margin-bottom: 2px;
    font-size: 28px;
  }
  .item_content {
    background-color: #fff;
    margin-bottom: 20px;
  }
  .contentTitle {
    line-height: 80px;
    font-size: 28px;
    text-align: center;
    font-weight: bold;
  }
  .contentText {
    font-size: 28px;
    padding: 20px 30px;
    line-height: 1.5;
    box-sizing: border-box;
  }
  .inviteNow{
    height: 80px;
    background-color: #61B900;
    margin-top: 20px;
    font-size: 32px;
    line-height: 80px;
    text-align: center;
    color: #fff;
  }
</style>
