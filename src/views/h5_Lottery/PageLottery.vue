<template>
  <div class="lottery">
    <div>
      <img class="topImg" src="https://img.alicdn.com/imgextra/i2/62752115/O1CN011RUi8dwWuKyPh52-62752115.png" alt="">
      <div class="lottery_box">
        <div class="haveRed" v-if="check_Code && firstRed">
          <p>您有一个红包¥{{firstRed}}可提现</p>

          <button @click="getCode('notNow')" v-if="popLoading">加载中...</button>
          <button @click="getCode('notNow')" v-else>立即提现</button>
        </div>
        <div class="lottery_main">
          <ul class="lottery_box_center">
            <li class="lottery_item" v-for="(item, index) in listItem"
                :class="{'currentItem':item.id == currentIndex && item.id != 0, 'noLoad': item.id == 0 && loading, 'isLoading': item.id == -1 && !loading}"
                @click="startLottery(item.id)"
                :key="index">
              <div class="currentDiv"></div>
              <img v-lazy="item.img" alt="">
            </li>
          </ul>
        </div>

        <div class="lottery_info">
          <h3>【抽奖声明】</h3>
          <p>1、我方不会给您以电话、Email、短信等提示您中奖，谨防冒名诈骗；</p>
          <p>2、新人首次红包无须签到即可参与，其余抽红包须每连续3日签到即可参与。</p>
          <p>3、中奖红包您可在个人中心→我的钱包中查看（首次红包直接转账到您的微信中需添加客服）</p>
          <p>4、本活动最终解释权归聚多多优惠APP所有。</p>
        </div>
      </div>

      <div class="msgBox" v-show="showMsgbox" @touchmove.prevent>
        <transition name="msgbox">
          <div v-show="showMsgbox" class="msgbox-center">
            <img src="https://images.meguo.com/miguo-imgextra/20161230/tks.png" alt=""
                 v-if="price==0">
            <div class="moneyInfo" v-else>
              <img src="https://images.meguo.com/miguo-imgextra/20161230/red.png" alt="">
              <div class="moneyNum">{{price}}元</div>
              <div class="withdraw">
                <!--<button v-if="redPacketType==0" class="withdrawWeixin" @click="getCode('isNow')">立即提现到微信</button>-->
                <p class="saveMoney">以上金额已存入到您的钱包</p>
              </div>
            </div>
            <div class="closePop" @click="showMsgbox = false"></div>
          </div>
        </transition>
      </div>

      <div class="msgBox" v-show="showMsgbox2" @touchmove.prevent>
        <transition name="msgbox">
          <div v-show="showMsgbox2" class="msgbox-center center2">
            <img class="pop2img" src="https://img.alicdn.com/imgextra/i4/62752115/O1CN016ET7t91RUi9YHnV0J-62752115.png"
                 alt="">
            <div class="redInfoCenter">
              <div class="v2_center_top">
                <p class="v2_red_title">恭喜您获得微信红包</p>
                <div class="v2_red_price">￥{{firstRed}}</div>
                <div class="v2_red_content">
                  <h4>【如何提现？】</h4>
                  <p> 1、添加客服微信号：{{wechatNum}} → 截屏此图或发送校验码{{check_Code}} → 客服验证后支付红包；</p>
                  <p>2、红包3天内有效，过期无法提现；</p>
                  <p>3、如需帮助、了解更多福利活动，请咨询客服。</p>
                </div>
              </div>
              <div class="v2_center_mid">
                <button class="v2_mid_btn" @click="copy('wechatNum')">复制客服微信号，跳转添加</button>
              </div>
              <div class="v2_center_bottom">
                <button @click="copy('check_Code')">
                  <span>提现校验码：{{check_Code}}</span>
                  <span>一键复制</span>
                </button>
              </div>
            </div>
            <div class="closePop2 iconfont icon-cuox" @click="showMsgbox2 = false"></div>
          </div>
        </transition>
      </div>
      <div class="bottomBtn positionCenter" :class="{isAboveIhphoneX: $deviceType.isAboveIPhoneX}">
        <button class="checkIn b_btn" @click="toNativePage('toUserSignin')">签到</button>
        <button class="tolotteryrecord b_btn" @click="toNativePage('toLotteryList')">抽奖记录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listItem: [],
      startBtn: {
        id: 0,
        name: '-1',
        img: 'https://img.alicdn.com/imgextra/i1/62752115/O1CN011RUi8dgdxddZOUx-62752115.png' // 开始抽奖
      },
      processingBtn: {
        id: -1,
        name: '-1',
        img: 'https://img.alicdn.com/imgextra/i4/62752115/O1CN011RUi8fGFxTlM9sK-62752115.png' // 抽奖中
      },
      currentIndex: 0, // 变黑
      loading: false, // 正在转
      initTime: 50, // 开始时间
      ti: null,
      speed: 18, // 速度
      yesIsyou: 0,
      totleTime: 350, // 总时间
      showMsgbox: false,
      showMsgbox2: false,
      popInfo: 0,
      price: 0,
      redPacketType: null, // 红包type
      check_Code: null,
      checkCode: null, // 微信校验码
      wechatNum: null, // 微信号
      firstRed: null, // 第一次的红包金额
      popLoading: false
    }
  },
  components: {},
  mounted () {
    this.$nextTick(() => {
      this.$deviceType.isMeguoApp ? this.getLottery_detail() : window.location.href = 'http://url.cn/5Qp56rv'
    })
  },
  methods: {
    getLottery_detail () {
      this.$api('lottery_detail').then(({ data }) => {
        if (data.success) {
          let resultList = Object.keys(data.result).map(item => data.result[item])
          resultList.splice(4, 0, JSON.parse(JSON.stringify(this.startBtn)), JSON.parse(JSON.stringify(this.processingBtn)))
          this.listItem = resultList
          if (this.$auth.userInfo.success) {
            this.check_Code = data.check_code
            this.firstRed = data.price
          }
        }
      }).catch(err => {
        console.log(err)
      })
    },
    startLottery () {
      this.$api('lottery_red_package').then(({ data }) => {
        if (data.success) {
          this.loading = true
          this.yesIsyou = data.prize_id
          this.price = data.price
          this.redPacketType = data.redPacketType
          if (this.redPacketType === 0) {
            this.firstRed = data.price
            this.checkCode = data.checkCode
            this.wechatNum = data.wechatNumber
          }
          this.ti = setInterval(this.setSpeed, this.initTime)
        } else {
          this.loading = false
          this.$toast({
            message: data.message
          })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    setSpeed () {
      this.initTime += this.speed
      clearInterval(this.ti)
      // eslint-disable-next-line
      if (this.initTime < this.totleTime || this.currentIndex != this.yesIsyou) {
        // eslint-disable-next-line
        this.currentIndex++ == 8 ? this.currentIndex = 1 : ''
        this.ti = setInterval(this.setSpeed, this.initTime)
      } else {
        // eslint-disable-next-line
        this.redPacketType == 0 ? this.showMsgbox2 = true : this.showMsgbox = true
        this.loading = false
        this.initTime = 0
        // eslint-disable-next-line
        this.check_Code ? '' : this.check_Code = this.checkCode
      }
    },
    getCode (type) {
      this.popLoading = true
      if (type === 'notNow') {
        this.$api('wechat_numberUrl').then(({ data }) => {
          this.wechatNum = data.number
          this.setPop()
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.setPop()
      }
    },
    setPop () {
      this.popLoading = false
      this.showMsgbox = false
      this.showMsgbox2 = true
    },
    copy (e) {
      this.$copyText(this[e]).then(e => {
        const toast = this.$toast({
          duration: 0,
          forbidClick: true,
          message: '复制成功'
        })
        setTimeout(() => {
          toast.clear()
          window.location.href = 'weixin://'
        }, 1000)
      }, e => {
        this.$toast({
          duration: 3000,
          forbidClick: true,
          message: '复制失败，请重新尝试'
        })
      })
    },
    // 去我的记录
    toNativePage (handler) {
      if (handler === 'toUserSignin') {
        this.getAppVersion('toUserSignin')
      } else {
        this.$bridge.callhandler(handler)
      }
    },
    getAppVersion (handler) {
      if (this.comparisonVersion) {
        this.$bridge.callhandler(handler)
      } else {
        // eslint-disable-next-line
        confirm('您的“聚多多优惠”版本太低了，去更新到最新版本吧') ? window.location.href = 'http://url.cn/5Qp56rv' : ''
      }
    },
    // 比较
    comparisonVersion () {
      if (this.$deviceType.isiOSApp) {
        return this.compare(this.$deviceType.iOSAppVersion, '4.4.1')
      } else if (this.$deviceType.isAndroidApp) {
        return this.compare(this.$deviceType.AndroidAppVersion, '4.3.8')
      }
    },
    compare (curV, reqV) {
      if (curV && reqV) {
        // 将两个版本号拆成数字
        let arr1 = curV.split('.')
        let arr2 = reqV.split('.')
        let minLength = Math.min(arr1.length, arr2.length)
        let position = 0
        let diff = 0
        // 依次比较版本号每一位大小，当对比得出结果后跳出循环（后文有简单介绍）
        while (position < minLength && ((diff = parseInt(arr1[position]) - parseInt(arr2[position])) === 0)) {
          position++
        }
        diff = (diff !== 0) ? diff : (arr1.length - arr2.length)
        // 若curV大于reqV，则返回true
        return diff >= 0
      } else {
        // 输入为空
        return false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .v2_center_bottom > button {
    width: 90%;
    height: 98%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    color: #9B9B9B;
    font-size: 26px;
    border: none;
  }

  .v2_red_content {
    color: #fff;
  }

  .v2_center_mid {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 100%;
    flex-shrink: 0;
    padding-bottom: 5%;
    box-sizing: border-box;
  }

  .v2_red_title {
    font-size: 26px;
    height: 60px;
    line-height:60px;
    color: #000;
  }

  .v2_red_price {
    font-size: 80px;
    color: #FF0007;
    font-weight: bolder;
    height: 80px;
  }

  .v2_center_bottom {
    width: 100%;
    height: 11.5%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .v2_red_content {
    flex-grow: 1;
    text-align: left;
    line-height: 1.5;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin-bottom: 30px;
  }

  .v2_red_content > h4 {
    text-align: center;
  }

  .v2_mid_btn {
    height: 70%;
    width: 90%;
    background-color: #1AAD19;
    border: none;
    font-size: 32px;
    color: #fff;
    border-radius: 8px;
  }

  .v2_mid_btn:active {
    opacity: 0.9;
  }

  .v2_center_top {
    flex-grow: 1;
    padding: 20px;
    padding-bottom: 0;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .redInfoCenter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .redInfoCenter {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .noLoad, .isLoading {
    display: none;
  }

  .wechatNum {
    color: #F92A30;
    font-weight: bold;
  }

  .haveRed {
    padding: 30px 20px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .haveRed > button {
    background-color: #1AAD19;
    border: none;
    color: #fff;
    border-radius: 8px;
    font-size: 26px;
    margin-left: 40px;
    width: 160px;
    height: 60px;
    text-align: center;
    line-height: 60px;
  }

  .haveRed > p {
    font-size: 28px;
    color: #fff;
  }

  .code_btn {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .code_btn > button {
    height: 80px;
    width: 90%;
    background-color: #1AAD19;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 32px;
  }

  .code_des {
    padding: 10px;
    box-sizing: border-box;
    color: #666;
  }

  .code_des > h3 {
    font-size: 24px;
    text-align: center;
  }

  .code_des > p {
    font-size: 24px;
  }

  .code_money {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px 0px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 2px dashed #ddd;
  }

  .code_moneyNum {
    font-size: 26px;
    font-weight: bold;
    color: #F92A30;
  }

  .code_moneyTime {
    font-size: 24px;
    color: #999999;
  }

  .code_code {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    margin-top: 10px;
    box-sizing: border-box;
  }

  .code_item {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #ddd;
    font-size: 36px;
    font-weight: bold;
  }

  .code_title {
    padding: 10px 0;
    width: 100%;
    font-size: 26px;
    text-align: center;
    font-weight: bold;
    border-bottom: 2px dashed #F0F0F0;
  }

  .lottery {
    padding-bottom: 80px;
  }

  .topImg {
    width: 100%;
    display: block;
  }

  .lottery_box {
    background-color: #E64135;
  }

  .lottery_main {
    padding: 40px;
  }

  .lottery_box_center {
    background-image: url("https://img.alicdn.com/imgextra/i1/62752115/O1CN011RUi8e4LaYckUYS-62752115.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-between;;
    align-items: center;
    flex-wrap: wrap;
    padding: 6%;
    padding-top: 7%;
    width: 670px;
    height: 670px;
  }

  .lottery_item {
    width: 33%;
    position: relative;
  }

  .lottery_info {
    padding: 30px 30px 80px;
    color: #fff;
    font-size: 24px;
    line-height: 1.5;
  }

  .currentItem > .currentDiv {
    position: absolute;
    width: 92%;
    height: 92%;
    top: 2%;
    left: 4%;
    border-radius: 16px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .msgBox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .msgbox-enter-active {
    animation: bounce-in .1s;
  }

  .msgbox-leave-active {
    animation: bounce-in .1s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  .msgbox-center {
    min-height: 678px;
    width: 600px;
    border-radius: 16px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .closePop {
    position: absolute;
    padding: 30px;
    top: 0px;
    right: 0px;
  }

  .closePop2 {
    position: absolute;
    padding: 1.5% 4%;
    font-size: 24px;
    top: 0px;
    right: 0px;
  }

  .moneyInfo {
    position: relative;
    width: 500px;
    height: 600px;
  }

  .moneyNum {
    position: absolute;
    bottom: 25%;
    color: #fff;
    font-size: 80px;
    width: 100%;
    text-align: center;
  }

  .withdraw {
    position: absolute;
    width: 100%;
    bottom: 5%;
    height: 12.5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .withdrawWeixin {
    width: 90%;
    height: 100%;
    background-color: #1AAD19;
    border: none;
    border-radius: 8px;
    color: #fff;
  }

  .saveMoney {
    font-size: 28px;
    color: #fff;
  }

  .bottomBtn {
    height: 100px;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 99;
  }

  .b_btn {
    width: 45%;
    height: 80px;
    border: none;
    color: #fff;
    border-radius: 8px;
    font-size: 24px;
  }

  .checkIn {
    background-color: @base_font_color;
  }

  .tolotteryrecord {
    background-color: #FFBB33;
  }
</style>
