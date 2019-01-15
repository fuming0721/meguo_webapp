<template>
  <div class="editor_item_videoBox">
    <div class="videoImg" @click="showVideo = true">
      <img v-lazy="videoInfo.pic" alt="">
      <icon class="playIcon" name="icon_item-play-butto" />
    </div>
    <ul class="goodsList">
      <EditorItemVideoGoodsItem v-for="(item, index) in goodsInfo" :key="index" :item="item" />
    </ul>
    <van-popup v-model="showVideo">
      <video-player v-if="showVideo" class="video-player vjs-custom-skin my_video" ref="videoPlayer" :playsinline="true" :options="playerOptions" />
    </van-popup>
  </div>
</template>
<script>
import EditorItemVideoGoodsItem from './EditorItemVideoGoodsItem.vue'
export default {
  props: ['material'],
  components: {
    EditorItemVideoGoodsItem
  },
  data () {
    return {
      showVideo: false,
      playerOptions: {}
    }
  },
  methods: {
  },
  mounted () {
    this.playerOptions = {
      playbackRates: [0.7, 1.0, 1.5, 2.0],
      ref: 'videoPlayer',
      autoplay: true,
      muted: false,
      loop: false,
      preload: 'auto',
      language: 'zh-CN',
      aspectRatio: '1:1',
      fluid: true,
      sources: [{
        type: 'video/mp4',
        src: this.videoInfo.url
      }],
      poster: this.videoInfo.pic,
      width: 750,
      notSupportedMessage: '此视频暂无法播放，请稍后再试',
      controlBar: {
        timeDivider: true,
        durationDisplay: true,
        remainingTimeDisplay: false,
        fullscreenToggle: false
      }
    }
  },
  computed: {
    videoInfo () {
      const [videoItem] = this.material.filter(item => item.type === 'v')
      return videoItem
    },
    goodsInfo () {
      return this.material.filter(item => item.type === 'goods')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .editor_item_videoBox{
    width: 100%;
  }
  .videoImg{
    width: 100%;
    margin: 20px 0;
    position: relative;
    &>img{
      width: 100%;
    }
  }
  .playIcon{
    position: absolute;
    top: calc(50% - 60px);
    left: calc(50% - 60px);
    width: 120px;
    opacity: 0.8;
  }
  .my_video{
    width: 750px;
    background-color: transparent;
  }
  .closeBtn{
    position: fixed;
    bottom: -100px;
    left: 50%;
    font-size: 40px;
    color: #fff;
  }
</style>
