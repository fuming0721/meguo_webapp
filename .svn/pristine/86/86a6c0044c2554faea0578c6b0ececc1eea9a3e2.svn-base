<template>
  <div class="editor_picBox">
    <div class="editor_pic_item" v-for="(item, index) in material" :key="index" @click="imagePreview(item.type, index, item.goods_detail)">
      <div class="itemPic" v-if="item.type == 'goods'">
        <img class="img" v-lazy="item.pic" alt="">
        <div class="vipBox" v-if="$auth.userInfo.success && $auth.userInfo && ($auth.userInfo.memberLevel == 3 || $auth.userInfo.memberLevel == 2)"> <!--白金-->
          <tag-price :item="item.goods_detail.extension" type="short"/>
        </div>
        <div class="price">￥{{item.goods_detail.extension.price}}</div>
        <div class="isOver" v-if="item.goods_detail.end_time < timeSet()">活动结束</div>
      </div>
      <div class="itemPic" v-else>
        <img class="img" v-lazy="item.pic" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import { ImagePreview } from 'vant'
export default {
  props: ['material'],
  data () {
    return {
      swiperCurrent: 0
    }
  },
  methods: {
    imagePreview (type, index, goods) {
      if (type === 'goods' && goods) {
        this.$router.push({ path: `/detail/${goods.id}` })
      } else {
        ImagePreview({
          images: this.material.map(item => item.pic),
          startPosition: index
        })
      }
    },
    timeSet () {
      let time = Date.parse(new Date()).toString()
      return Number(time.substring(0, 10))
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .editor_picBox{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }
  .itemPic{
    width: 220px;
    height: 220px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img{
    max-width: 100%;
    max-height: 100%;
  }
  .editor_pic_item {
    margin: 8px;
    position: relative;
  }
  .nullImg{
    width: 220px;
    height: 0px;
  }
  .vipBox{
    position: absolute;
    top: 5px;
    left: 5px;
  }
  .price{
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: rgba(242, 60, 78, 0.8);
    border-radius: 8px 0 8px 0;
    color: #fff;
    font-size: 20px;
    padding: 4px 8px;
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
</style>
