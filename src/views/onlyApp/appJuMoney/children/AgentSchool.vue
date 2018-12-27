<template>
  <div class="agentSchool">
      <router-link class="info" :to="item.url" v-for="(item, index) in schoolList" :key="index">
        <img class="info_icon" :src="item.icon" alt="">
        <div class="info_title">
          <div>{{item.title}}</div>
          <p>{{item.subTitle}}</p>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      schoolList: [
        {
          url: '/',
          icon: require('@/assets/images/icon-sign-in-index.png'),
          title: '云发单（免费）',
          subTitle: '你建群 帮你躺赚'
        },
        {
          url: '/',
          icon: require('@/assets/images/icon-Cabbage-sale.png'),
          title: '聚赚商学院',
          subTitle: '学技巧 赚更多'
        }
      ]
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" type="text/less" scoped>
  .agentSchool{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 160px;
    background-color: #fff;
    margin-bottom: 2px;
  }
  .info_title{
    font-size: 28px;
  }
  .info_title>p{
    font-size: 24px;
    margin-top: 5px;
    color: #999;
  }
  .info_icon{
    width: 80px;
    margin: 0 20px 0
  }
  .info{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
  }
  .info:first-child{
    border-right: 2px solid #f2f2f2;
  }
</style>
