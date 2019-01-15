<template>
  <div class="goodsAction positionCenter">
    <div v-if="$route.name=='detail'">
      <div class="collection" @click="collectionClick(1)" v-if="!is_favorite">
        <van-icon name="star-o" class="collectionStar"></van-icon>
        <P>收藏</P>
      </div>
      <div class="collection istCollection" @click="collectionClick(2)" v-else>
        <van-icon name="star-o" class="collectionStar"></van-icon>
        <P>已收藏</P>
      </div>
    </div>
    <div class="orderBtnBox">
      <button :class="orderType" :disabled="orderDisabled" @click="orderBuy">{{orderBtn}}</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsDetailData: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      orderType: '',
      orderDisabled: true,
      is_favorite: this.goodsDetailData.is_favorite
    }
  },
  methods: {
    orderBuy () {
      this.$emit('buy')
    },
    timeSet () {
      let time = Date.parse(new Date()).toString()
      return Number(time.substring(0, 10))
    },
    collectionClick (type) {
      if (!this.$auth.userInfo.success) {
        this.$deviceType.isMeguoApp ? this.$bridge.callhandler('login') : this.$router.push('/login?redirect=' + this.$route.fullPath)
      } else {
        this.collection(type)
      }
    },
    async collection (type) {
      let pramas = { type: type, tid: this.goodsDetailData.id }
      const isFavorite = await this.$api('favorite', pramas)
      this.$toast(isFavorite.data.message)
      if (isFavorite.data.success) {
        if (isFavorite.data.code === 0) {
          this.is_favorite = false
        } else {
          this.is_favorite = true
        }
      }
    }
  },
  computed: {
    /* eslint-disable */
    orderBtn () {
      if (this.timeSet() < this.goodsDetailData.start_time) {
        this.orderDisabled = true
        this.orderType = 'notBegin'
        return `即将开始`
      } else if (this.timeSet() > this.goodsDetailData.end_time) {
        this.orderDisabled = true
        this.orderType = 'isOver'
        return `活动结束`
      } else {
        this.orderDisabled = false
        this.orderType = 'now'
        let extension = this.goodsDetailData.extension
        if (this.$auth.userInfo.memberLevel === 2 && extension.white_commission > 0) {
          return `返￥${extension.white_commission} | 立即购买`
        } else if (this.$auth.userInfo.memberLevel === 3 && extension.white_commission > 0) {
          return `返￥${extension.black_commission} | 立即购买`
        } else {
          return '立即购买'
        }
      }
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .goodsAction{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: #fff;
    box-shadow: 0 0px 20px 3px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .collection{
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 24px;
    color: #666;
  }
  .collectionStar{
    font-size: 32px;
    margin-bottom: 10px;
  }
  .istCollection{
    color: @base_font_color;
  }
  .orderBtnBox{
    flex-grow: 1;
    height: 100%;
    padding: 10px 20px;
    &>button{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 80px;
      color: #fff;
      font-size: 26px;
    }
    &:active{
      opacity: 0.8;
    }
  }
  .notBegin{
     background: -moz-linear-gradient(left, #9DDA47 0%, #5FAA2D 100%);
     background: -webkit-linear-gradient(left, #9DDA47 0%, #5FAA2D 100%);
     background: -o-linear-gradient(left, #9DDA47 0%, #5FAA2D 100%);
     background: -ms-linear-gradient(left, #9DDA47 0%, #5FAA2D 100%);
     background: linear-gradient(to right, #9DDA47 0%, #5FAA2D 100%);
   }
  .isOver{
    background: -moz-linear-gradient(left, #858585 0%, #616161 100%);
    background: -webkit-linear-gradient(left, #858585 0%, #616161 100%);
    background: -o-linear-gradient(left, #858585 0%, #616161 100%);
    background: -ms-linear-gradient(left, #858585 0%, #616161 100%);
    background: linear-gradient(to right, #858585 0%, #616161 100%);
  }
  .now {
    background: -moz-linear-gradient(left, #FAD55E 0%, #FF3C01 100%);
    background: -webkit-linear-gradient(left, #FAD55E 0%, #FF3C01 100%);
    background: -o-linear-gradient(left, #FAD55E 0%, #FF3C01 100%);
    background: -ms-linear-gradient(left, #FAD55E 0%, #FF3C01 100%);
    background: linear-gradient(to right, #FAD55E 0%, #FF3C01 100%);
  }
</style>
