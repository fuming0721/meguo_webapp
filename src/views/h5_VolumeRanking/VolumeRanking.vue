<template>
  <div class="channelBox">
    <nav-bar />
    <img class="banner" src="https://img.alicdn.com/imgextra/i2/62752115/O1CN01tFIA5A1RUi9oWhIEr-62752115.png" alt="">
    <van-tabs :line-width="100" @click="tabChange" :swipe-threshold="4">
      <van-tab v-for="(item, index) in menuIcons" :key="index" :title="JSON.stringify(item)">
        <span slot="title" class="navItemName">{{item.name}}</span>
      </van-tab>
    </van-tabs>
    <goods-list-vertical fetch="volumeRanking" :pramas="pramas" @done="onDone">
      <goods-item-channel v-for="(item, index) in goodsList" :key="index" :item="item">
        <span class="goodsItem_tag" v-if="item.extension.activity_id!=0 && index > 99" slot="activity_type">{{item.extension.activity_id | activity_type}}</span>
        <tag-ranking slot="rankingTag" :index="index + 1" v-if="index < 100" />
        <tag-price slot="subContent" :item="item.extension" v-if="item.extension" />
        <span slot="buyBtn" class="couponReceivedNum" v-if="pramas.type == 2">热卖{{item.extension.volume_today | over10000}}件</span>
        <span slot="buyBtn" class="couponReceivedNum" v-else>热卖{{item.extension.volume_twohour | over10000}}件</span>
      </goods-item-channel>
    </goods-list-vertical>
  </div>
</template>

<script>
import tagRanking from '@/components/TagRanking'
export default {
  components: {
    tagRanking
  },
  data () {
    return {
      pramas: {
        cid: '0',
        type: '1'
      },
      goodsList: []
    }
  },
  methods: {
    tabChange (index, item) {
      let itemParams = JSON.parse(item)
      this.pramas.cid = itemParams.id
      this.pramas.type = itemParams.type
    },
    onDone (data) {
      this.goodsList = data
    }
  },
  computed: {
    menuIcons () {
      const moreNavList = [{ id: 0, type: 1, name: '实时热卖' }, { id: -1, type: 2, name: '全天热卖' }]
      return [...moreNavList, ...this.$menuIcon]
    }
  }
}
</script>
<style lang="less" type="text/less" scoped>
  .channelBox{
    padding-top: 80px;
  }
</style>
