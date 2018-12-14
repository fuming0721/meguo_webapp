<template>
<div class="swiper">
  <van-swipe class="homeSwiper" :autoplay="3000" :width=710 :height=280>
    <van-swipe-item class="swiperItem" v-for="(image, index) in swiperImgs" :key="index">
      <a :href="image.link_url">
        <img class="homeSwiperImg" :src="image.pic_url"/>
      </a>
    </van-swipe-item>
  </van-swipe>
</div>
</template>

<script>
export default {
  name: 'swiper',
  props: {
    swiperImgs: {
      require: true,
      type: Array
    }
  }
}
</script>

<style lang="less" type="text/less" scope>
  .homeSwiper, .swiperItem {
    border-radius: 8px;
  }
  .homeSwiperImg {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
  }
  .swiper {
    padding: 10px 20px 10px;
    background-color: #fff;
    margin-top: 80px;
  }
</style>
