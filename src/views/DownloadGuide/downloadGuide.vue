<template>
  <div class="downloadGuide">
    <van-swipe class="dlBox" :autoplay="4000" :show-indicators="false">
      <van-swipe-item v-for="(item, index) in imgArr" :key="index">
        <img class="dlBox_img" :src="item" alt="">
      </van-swipe-item>
    </van-swipe>
    <div class="bottomB">
      <img src="@/assets/images/Floating-layer.png" alt="">
      <div class="bottomBfont">
        <span>无广告</span>
        <span>无病毒</span>
        <span>有保障</span>
      </div>
    </div>
    <div class="contenBox">
      <div class="contentTop">
        <img src="@/assets/images/doenloadLogo.png" alt="">
        <div class="contentTopNma">
          <p class="appName">聚多多优惠</p>
          <div class="appInfo">
            <div class="appStar">
              <van-icon v-for="index in 5" name="star" :key="index"></van-icon>
            </div>
            <div class="appDownloadNum">（705万人下载）</div>
          </div>
        </div>
      </div>
      <div class="contentInfo">
        ——买前先搜券，购物更划算——
      </div>

      <div class="info">
        实时更新淘宝折扣商品、无门槛优惠券；更有9块9包邮，品牌折扣，大牌特卖，各种特价秒杀好货等你来！
      </div>

      <button class="dBtn" @click="goDownload">立即免费下载</button>
    </div>

    <div v-show="showMask" class="mask" @click="showMask=false">
      <img src="@/assets/images/download-app-pop-ups.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgArr: [
        'https://img.alicdn.com/imgextra/i4/62752115/TB2o67cA.R1BeNjy0FmXXb0wVXa-62752115.jpg',
        'https://img.alicdn.com/imgextra/i1/62752115/TB2dIqmsOCYBuNkSnaVXXcMsVXa-62752115.jpg',
        'https://img.alicdn.com/imgextra/i4/62752115/TB2rG89clgXBuNjt_hNXXaEiFXa-62752115.jpg',
        'https://img.alicdn.com/imgextra/i2/62752115/TB2kDepjOMnBKNjSZFoXXbOSFXa-62752115.jpg',
        'https://img.alicdn.com/imgextra/i1/62752115/TB2KRi3jQ7mBKNjSZFyXXbydFXa-62752115.jpg'
      ],
      showMask: false
    }
  },
  mounted () {
  },
  methods: {
    goDownload () {
      if (this.$deviceType.isIos && this.$deviceType.isWeibo) {
        this.showMask = true
      } else if (this.$deviceType.isAndroid) {
        window.location.href = 'https://images.meguo.com/app-download/miguo.apk'
      } else {
        window.location.href = 'https://itunes.apple.com/cn/app/id1041367433?mt=8'
      }
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(93, 93, 93, 0.65);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
  }

  .mask > img {
    margin-top: 60px;
  }

  .dBtn {
    height: 80px;
    width: 100%;
    border: none;
    background-color: #6ABF09;
    text-align: center;
    line-height: 80px;
    border-radius: 8px;
    color: #fff;
    font-size: 30px;
  }

  .info {
    font-size: 24px;
    line-height: 1.5;
  }

  .contentInfo {
    width: 100%;
    text-align: center;
    color: #FF1A46;
    font-size: 28px;
    font-weight: bold;
  }

  .contentTop > img {
    width: 100px;
    height: 100px;
    margin: 0;
    margin-right: 40px;
  }

  .appDownloadNum {
    font-size: 20px;
  }
  .appStar {
    height: 23px;
    line-height: 23px;
  }
  .appStar > i {
    color: #FF962F;
    font-size: 20px;
  }

  .appName {
    width: 100%;
    color: #333;
    font-weight: bolder;
    font-size: 36px;
    margin-bottom: 12px;
  }

  .appInfo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .downloadGuide {
    height: 100%;
    width: 100%;
    position: relative;
  }

  .bottomB {
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  .bottomB > img {
    width: 100%;
  }

  .bottomBfont {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
  }

  .bottomBfont > span {
    font-size: 26px;
    color: #fff;
    margin: 0 20px;
  }

  .contenBox {
    height: 500px;
    width: 80%;
    border-radius: 16px;
    background-color: rgba(255, 255, 255, 0.9);
    position: absolute;
    bottom: 80px;
    left: 10%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 34px 52px;
    box-sizing: border-box;
  }

  .contentTop {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .contentTop > .contentTopNma {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
</style>
