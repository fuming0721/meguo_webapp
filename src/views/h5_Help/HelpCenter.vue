<template>
  <loading-container class="helpPage" fetch="helpCateList" :params="params" @done="onDone">
    <nav-bar />
    <div class="content">
      <div class="leftNav">
        <button class="leftNav_item" v-for="(item, index) in navList" :class="{'leftNav_item_active':navActiveIndex==item.id}"
                @click="navTap(item.id)" :disabled="navActiveIndex==item.id" :key="index">
          <img :src="item.icon" alt="">
          <p>{{item.name}}</p>
        </button>
      </div>
      <van-collapse v-model="activeNames" v-if="helpArticleList.length" class="helpArtcle" accordion>
        <van-collapse-item class="helpArtcleItem" v-for="(item, index) in helpArticleList" :title="item.title" :name="index" :key="index">
          <div v-html="item.content" class="itemContent"></div>
        </van-collapse-item>
      </van-collapse>
      <div class="noArtcle" v-else>除了你，我是真的一无所有…</div>
    </div>
  </loading-container>
</template>
<script>
export default {
  data () {
    return {
      params: {
        channel: this.$route.query.channel || 2
      },
      navList: [],
      navActiveIndex: 0,
      helpArticleList: [],
      noArtcle: '',
      activeNames: -1
    }
  },
  methods: {
    onDone ({ data }) {
      this.navList = data.result
      this.navActiveIndex = data.result[0].id
      this.navTap(data.result[0].id)
    },
    async navTap (id) {
      this.activeNames = -1
      this.navActiveIndex = id
      const helpDetail = await this.$api('helpDetail', { cid: id })
      this.helpArticleList = helpDetail.data.success ? helpDetail.data.result : []
    }
  }
}
</script>
<style lang="less" scope>
  .itemContent{
    line-height: 1.5;
    font-size: 24px;
    color: #999;
    padding: 10px;
  }
  .helpPage {
    padding-top: 80px;
    height: 100vh;
  }
  .noArtcle{
    flex-grow: 1;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
  }
  .helpArtcle{
    height: 100%;
    flex-grow: 1;
    background-color: #fff;
  }
  .leftNav {
    height: 100%;
    overflow-y: scroll;
    width: 200px;
    flex-shrink: 0;
  }

  .leftNav_item {
    width: 200px;
    background-color: transparent;
    border: none;
    height: 200px;
    border-bottom: 2px solid #E2E2E2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    box-sizing: border-box;
  }

  .leftNav_item > img {
    width: 80px;
    height: 80px;
    border-radius: 80px;
    margin-bottom: 10px;
  }

  .leftNav_item > p {
    font-size: 24px;
    color: #595959;
  }

  .leftNav_item_active:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px 40px 20px 0;
    border-color: transparent #fff transparent transparent;
    position: absolute;
    right: -6px;
  }
</style>
