<template>
  <div class="banner">
    <div class="bannerMain" v-if="picNoVideo">
      <img class="bannerImg" v-lazy="goodsDetailData.thread_img" alt="">
    </div>

    <div class="bannerMain" v-else-if="picsNoVideo">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in goodsDetailData.cover_pic" :key="index">
          <img class="bannerImg" v-lazy="item" alt="" @click="imagePreview">
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="bannerMain" v-else-if="picsHaveVideo">
      <video-player class="video-player vjs-custom-skin my_video" ref="videoPlayer" :playsinline="true" :options="playerOptions" v-if="sourceIndex == 0" />
      <van-swipe :autoplay="3000" @change="onChange" :show-indicators="false" v-else>
        <van-swipe-item v-for="(item, index) in goodsDetailData.cover_pic" :key="index">
          <img class="bannerImg" v-lazy="item" alt="" @click="imagePreview">
        </van-swipe-item>
      </van-swipe>
      <ul class="fm_indicators">
        <li @click="sourceChange(0)" :class="{sourceCurrent: sourceIndex == 0}">视频</li>
        <li v-if="sourceIndex == 0" @click="sourceChange(1)">图片</li>
        <li v-else-if="sourceIndex == 1" :class="{sourceCurrent: sourceIndex == 1}">{{ swiperCurrent + 1 }}/{{goodsDetailData.cover_pic.length}}</li>
      </ul>
    </div>

    <div class="bannerMain" v-else-if="picHaveVideo">
      <video-player class="video-player vjs-custom-skin my_video" ref="videoPlayer" :playsinline="true" :options="playerOptions" />
    </div>
  </div>
</template>
<script>
import { ImagePreview } from 'vant'
export default {
  props: {
    goodsDetailData: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        ref: 'videoPlayer',
        autoplay: false,
        muted: false,
        loop: false,
        preload: 'auto',
        language: 'zh-CN',
        aspectRatio: '1:1',
        fluid: true,
        sources: [{
          type: 'video/mp4',
          src: this.goodsDetailData.video_link
        }],
        poster: this.goodsDetailData.thread_img,
        width: 750,
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: false
        }
      },
      swiperCurrent: 0,
      sourceIndex: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.picsHaveVideo || this.picHaveVideo) {
        document.body.addEventListener('scroll', this.playerSet, false)
      }
    })
  },
  methods: {
    playerSet () {
      if (this.sourceIndex === 0) {
        // eslint-disable-next-line
        window.pageYOffset > 750 ? this.$refs.videoPlayer.player.pause() : ''
      }
    },
    onChange (index) {
      this.swiperCurrent = index
    },
    imagePreview () {
      ImagePreview({
        images: this.goodsDetailData.cover_pic,
        startPosition: this.swiperCurrent
      })
    },
    sourceChange (index) {
      this.swiperCurrent = 0
      this.sourceIndex = index
    }
  },
  computed: {
    picNoVideo () {
      return this.goodsDetailData.is_video < 1 && this.goodsDetailData.cover_pic.length < 1
    },
    picsNoVideo () {
      return this.goodsDetailData.is_video < 1 && this.goodsDetailData.cover_pic.length > 0
    },
    picsHaveVideo () {
      return this.goodsDetailData.is_video > 0 && this.goodsDetailData.cover_pic.length > 0
    },
    picHaveVideo () {
      return this.goodsDetailData.is_video > 0 && this.goodsDetailData.cover_pic.length < 1
    }
  },
  beforeDestroy () {
    document.body.removeEventListener('scroll', this.playerSet, false)
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .banner{
    height: 750px;
    width: 750px;
    background-color: #fff;
  }
  .bannerImg{
    width: 750px;
    height: 750px;
  }
  .bannerMain{
    position: relative;
  }
  .fm_indicators{
    position: absolute;
    display: flex;
    width: 210px;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    bottom: 80px;
    left: calc(50% - 110px);
    & > li {
      width: 90px;
      height: 40px;
      border-radius: 40px;
      background-color: #fff;
      color: #333;
      text-align: center;
      line-height: 40px;
      font-size: 24px;
      box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.2);
    }
  }
  .sourceCurrent{
    color: #fff !important;
    background: -moz-linear-gradient(left, #FF8866 0%, #DD2C1A 100%);
    background: -webkit-linear-gradient(left, #FF8866 0%, #DD2C1A 100%);
    background: -o-linear-gradient(left, #FF8866 0%, #DD2C1A 100%);
    background: -ms-linear-gradient(left, #FF8866 0%, #DD2C1A 100%);
    background: linear-gradient(to right, #FF8866 0%, #DD2C1A 100%);
  }
</style>
