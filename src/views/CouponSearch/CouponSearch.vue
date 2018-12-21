<template>
  <div class="CouponSearch">
    <div class="CouponSearch_top">
      <div class="topBox">
        <nav>
          <img class="conponsearchTitle" src="@/assets/images/v4_search.png" alt="">
          <router-link to="/searchhelp">
            <van-icon name="question" class="toDes" />
          </router-link>
        </nav>
        <div class="topBoxText">
          <p class="topBoxTitle">今日发现 <span class="conponNum">{{ conponNum }}</span> 张优惠券</p>
          <p class="topBoxSubTitle">—— 买前先搜券，购物更划算 ——</p>
        </div>
        <ul class="v3_searchnav">
          <li class="v3_searchitem"
              v-for="(item, index) in shopArr"
              :key="index"
              @click="changeShopSource(item.type)"
              :class="{'crrentShop': item.type == searchSource}">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="search">
        <div class="search_input">
          <input class="inputBox" placeholder="输入关键词或粘贴商品标题" v-model="searchValue" @keyup.enter="searchStart"/>
          <button class="inputBtn" @click="searchStart">搜索</button>
          <van-icon name="clear" class="v3_clearValue" v-show="searchValue.length>0" @click="searchValue=''" />
        </div>
      </div>
    </div>
    <menu-list />
  </div>
</template>

<script>
import menuList from './children/menuList.vue'
export default {
  components: {
    menuList
  },
  data () {
    return {
      conponNum: 0,
      shopArr: [
        { name: '搜淘宝', index: 0, type: 'taobao' },
        { name: '搜天猫', index: 1, type: 'tmall' }
      ],
      searchSource: 'taobao',
      searchValue: ''
    }
  },
  mounted () {
    // eslint-disable-next-line
    if (!!sessionStorage.num) {
      this.conponNum = sessionStorage.num
    } else {
      this.conponNum = Math.floor(Math.random() * (6999999 - 3000000 + 1) + 3000000)
      sessionStorage.num = this.conponNum
    }
  },
  methods: {
    changeShopSource (shop) {
      this.searchSource = shop
    },
    searchStart () {
      if (this.searchValue) {
      } else {
        this.$toast('请输入搜索关键词')
      }
    }
  }
}
</script>
<style lang="less" type="text/less" scoped>
  .CouponSearch {
    width: 100%;
    padding-bottom: 100px;
  }
  .CouponSearch_top {
    background-image: url("../../assets/images/v4_bg2.png");
    background-position: center;
    background-size: cover;
  }
  .topBox {
    height: 440px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .topBox > nav {
    color: #fff;
    padding: 20px 0;
    width: 100%;
    font-size: 36px;
    text-align: center;
    position: absolute;
    top: 0;
  }
  .conponsearchTitle {
    height: 40px;
    margin: 0 auto;
  }
  .topBoxText {
    width: 100%;
  }
  .topBoxText > p {
    text-align: center;
    color: #fff;
  }
  .topBoxTitle {
    font-size: 36px;
  }

  .conponNum {
    font-size: 48px;
    font-weight: bolder;
    color: #fff !important;
  }
  .topBoxSubTitle {
    font-size: 24px;
    margin-top: 10px;
  }
  .toDes {
    position: absolute;
    right: 20px;
    font-size: 32px;
    color: #fff;
    top: 24px;
  }
  .v3_searchnav {
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    position: absolute;
    bottom: 0;
  }
  .v3_searchitem {
    width: 33%;
    text-align: center;
    font-size: 32px;
    height: 100%;
    line-height: 72px;
    color: #fff;
  }
  .crrentShop {
    color: #333 !important;
    background-image: url("../../assets/images/shopActive.png");
    background-position: inherit;
    background-size: cover;
  }
  .search {
    width: 100%;
    height: 200px;
    padding: 0 20px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
  }
  .search_input {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    border: 2px solid #FFA6AA;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
  }
  .inputBox {
    height: 100%;
    background-color: #fff;
    flex-grow: 1;
    font-size: 28px;
    color: #666;
    line-height: 72px;
    padding: 0 60px 0 20px;
    border: none;
  }
  .inputBtn:active {
    opacity: 0.8;
  }
  .inputBtn {
    width: 160px;
    height: 100%;
    background-color: #FF4B75;
    text-align: center;
    line-height: 72px;
    color: #fff;
    font-size: 28px;
    border: none;
  }
  .v3_clearValue {
    position: absolute;
    right: 180px;
    font-size: 36px;
    top: 20px;
    color: #999;
  }
</style>
