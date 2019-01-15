<template>
  <li class="goodsItem"  @click="$router.push({ path: '/detail/' + item.tid })">
    <div class="goodsItem_img">
      <img v-lazy="item.pic" alt="">
      <div class="isOver" v-if="item.goods_detail.end_time < timeSet()">活动结束</div>
    </div>
    <div class="goodsRight">
      <p>{{item.goods_detail.title}}</p>
      <div class="goodsMoreInfo">
        <div class="goodsPriceBox">
          <div class="price">￥{{item.price}}</div>
          <div class="vipBox" v-if="$auth.userInfo.success && $auth.userInfo && ($auth.userInfo.memberLevel == 3 || $auth.userInfo.memberLevel == 2)"> <!--白金-->
            <tag-price :item="item.goods_detail.extension" type="short"/>
          </div>
        </div>
        <button class="go">去看看</button>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    item: {
      require: true,
      type: Object
    }
  },
  methods: {
    timeSet () {
      let time = Date.parse(new Date()).toString()
      return Number(time.substring(0, 10))
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .goodsList{
    width: 100%;
  }
  .goodsItem{
    width: 100%;
    height: 140px;
    padding: 10px;
    background-color: #f2f2f2;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:last-child{
      margin-bottom: 0;
    }
  }
  .goodsItem_img{
    width: 120px;
    height: 120px;
    position: relative;
    margin-right: 10px;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    &>img{
      max-width: 100%;
      max-height: 100%;
      border-radius: 8px;
    }
  }
  .isOver{
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px;
  }
  .goodsRight{
    flex-grow: 1;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    &>p{
      font-size: 24px;
      color: #666;
      line-height: 1.5;
      max-height: 72px;
      overflow: hidden;
    }
  }
  .goodsMoreInfo{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .goodsPriceBox{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .price{
    font-size: 24px;
    color: @base_font_color;
    margin-right: 20px;
  }
  .go{
    width: 120px;
    height: 40px;
    background-color: @base_font_color;
    color: #fff;
    font-size: 22px;
    border-radius: 8px;
  }
</style>
