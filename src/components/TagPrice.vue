<template>
  <div class="tag_box" v-if="item">
    <div class="tag_item svipTag" :class="{short: type=='short'}" v-if="vip && type=='ifSvip' && item.black_commission !=0">{{tagName}}{{item.black_commission | formatMoney}}</div>
    <div class="tag_item vipTag" :class="{short: type=='short'}" v-if="vip && type!='ifSvip' && item.white_commission !=0">{{tagName}}{{item.white_commission | formatMoney}}</div>
    <div class="tag_item svipTag" :class="{short: type=='short'}" v-if="svip && type!='ifSvip' && item.white_commission !=0">{{tagName}}{{item.white_commission | formatMoney}}</div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String
    },
    item: {
      require: true,
      type: Object,
      default: () => {}
    }
  },
  mounted () {
  },
  computed: {
    vip () {
      // eslint-disable-next-line
      return this.$auth.userInfo.success && this.$auth.userInfo && this.$auth.userInfo.memberLevel == 2 ? true : false
    },
    svip () {
      // eslint-disable-next-line
      return this.$auth.userInfo.success && this.$auth.userInfo && this.$auth.userInfo.memberLevel == 3 ? true : false
    },
    tagName () {
      if (this.type === 'ifSvip') {
        return this.$deviceType.isWeixin ? '升级省￥' : '升级赚￥'
      } else if (this.type === 'short') {
        return this.$deviceType.isWeixin ? '省￥' : '赚￥'
      } else {
        return this.$deviceType.isWeixin ? '自买省￥' : '分享赚￥'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .tag_box{
    margin-right: 10px;
    &:last-child{
      margin-right: 0;
    }
  }
  .tag_item{
    width: 160px;
    height: 30px;
    border-radius: 30px;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .short{
    width: 120px;
  }
  .vipTag{
     background: -moz-linear-gradient(left, #FAD961 0%, #FF5C00 100%);
     background: -webkit-linear-gradient(left, #FAD961 0%, #FF5C00 100%);
     background: -o-linear-gradient(left, #FAD961 0%, #FF5C00 100%);
     background: -ms-linear-gradient(left, #FAD961 0%, #FF5C00 100%);
     background: linear-gradient(to right, #FAD961 0%, #FF5C00 100%);
   }
  .svipTag{
    background: -moz-linear-gradient(left, #C86DD7 0%, #3023AE 100%);
    background: -webkit-linear-gradient(left, #C86DD7 0%, #3023AE 100%);
    background: -o-linear-gradient(left, #C86DD7 0%, #3023AE 100%);
    background: -ms-linear-gradient(left, #C86DD7 0%, #3023AE 100%);
    background: linear-gradient(to right, #C86DD7 0%, #3023AE 100%);
  }
</style>
