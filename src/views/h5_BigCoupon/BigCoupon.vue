<template>
  <div class="channelBox" :class="{NavBarInApp: $deviceType.isMeguoApp}">
    <nav-bar />
    <img class="banner" src="https://img.alicdn.com/imgextra/i4/62752115/O1CN01FY0rgX1RUi9tlPxvl-62752115.png" alt="">
    <van-tabs :line-width="100" @click="tabChange" :swipe-threshold="4">
      <van-tab v-for="(item, index) in menuIcons" :key="index" :title="item.id.toString()">
        <span slot="title" class="navItemName">{{item.name}}</span>
      </van-tab>
    </van-tabs>
    <goods-list-vertical fetch="bigCoupon" :pramas="pramas" @done="onDone">
      <goods-item-channel v-for="(item, index) in goodsList" :key="index" :item="item">
        <span class="goodsItem_tag" v-if="item.extension.activity_id!=0" slot="activity_type">{{item.extension.activity_id | activity_type}}</span>
        <tag-price slot="subContent" type="share">
          分享赚￥{{item.extension.commission | formatMoney}}
        </tag-price>
        <button class="buyNow" slot="buyBtn">立即购买</button>
      </goods-item-channel>
    </goods-list-vertical>
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      pramas: {
        cid: '0'
      },
      goodsList: []
    }
  },
  mounted () {
  },
  methods: {
    tabChange (index, id) {
      this.pramas.cid = id
    },
    onDone (data) {
      this.goodsList = data
    }
  },
  computed: {
    menuIcons () {
      const featured = [{ 'id': 0, 'name': '精选' }]
      return [...featured, ...this.$menuIcon]
    }
  }
}
</script>
<style lang="less" type="text/less" scoped>
  .channelBox{
    padding-top: 80px;
  }
</style>
