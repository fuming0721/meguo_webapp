<template>
  <div class="goodsInfo">
    <div class="goosInfoTitle">
      <icon :name="iconName" :w="36" :h="36"></icon>
      <span class="title">{{goodsDetailData.title}}</span>
    </div>
    <div class="priceInfo">
      <div class="priceInfoLeft">
        <div class="priceInfoTag">折扣价</div>
        <div>￥{{goodsDetailData.extension.price}}</div>
      </div>
      <div class="vipBox" v-if="$auth.userInfo.success && $auth.userInfo && ($auth.userInfo.memberLevel == 3 || $auth.userInfo.memberLevel == 2)" @click="toVipprivilege"> <!--白金-->
        <tag-price :item="goodsDetailData.extension" v-if="goodsDetailData.extension" />
        <tag-price :item="goodsDetailData.extension" v-if="goodsDetailData.extension" type="ifSvip" />
      </div>
    </div>
    <div class="moreInfo">
      <span>售价<del>￥{{goodsDetailData.extension.origin_price}}</del></span>
      <span>销量{{goodsDetailData.extension.volume}}</span>
      <span>运费：{{goodsDetailData.extension.is_postage | postage}}</span>
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
  methods: {
    toVipprivilege () {
      this.$router.push('/vipprivilege')
    }
  },
  computed: {
    // eslint-disable-next-line
    iconName () {
      switch (this.goodsDetailData.extension.mall_id) {
        case 1:
          return 'tianmao'
        case 2:
        case 0:
          return 'taobao'
        case 7:
          return 'jingdong'
      }
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .goodsInfo {
    background-color: #fff;
    border-top: 2px solid #f2f2f2;
    border-bottom: 2px solid #f2f2f2;
    padding: 20px;
    margin-bottom: 20px;
  }
  .goosInfoTitle{
    min-height: 45px;
    max-height: 90px;
    font-size: 30px;
    color: #333;
    font-weight: bold;
    line-height: 1.5;
    overflow: hidden;
  }
  .title{
    margin-left: 10px;
  }
  .vipBox{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .priceInfo{
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .priceInfoLeft{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
    color: @base_font_color;
  }
  .priceInfoTag{
    font-size: 18px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    border-radius: 6px;
    padding: 0 5px;
    margin-bottom: -4px;
    background-color: @base_font_color;
  }
  .moreInfo{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    color: #666;
  }
</style>
