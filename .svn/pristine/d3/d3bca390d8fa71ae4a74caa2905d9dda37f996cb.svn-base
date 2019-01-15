<template>
  <div class="fansItem">
    <userInfoItem :userInfo="userInfo" />
    <ul class="fansInfo">
      <li class="fansInfoItme">
        <span>{{item.deal_order_total}}</span>
        <p>出单量（笔）</p>
      </li>
      <li class="line"></li>
      <li class="fansInfoItme" @click="seeAllCommendFans">
        <span>{{item.direct_fans_total}}</span>
        <p>推荐用户</p>
        <van-icon class="arrow" v-if="item.direct_fans_total>0" name="arrow" />
      </li>
    </ul>
  </div>
</template>

<script>
import userInfoItem from '@/components/UserInfoItem'
export default {
  components: {
    userInfoItem
  },
  props: {
    item: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      itemData: {},
      userInfo: {}
    }
  },
  methods: {
    seeAllCommendFans () {
      // eslint-disable-next-line
      this.item.direct_fans_total > 0 ? this.$router.push(`./fans?id=${this.item.user_info.id}&title=${this.item.user_info.username}`) : ''
    }
  },
  watch: {
    item: {
      handler (v) {
        this.itemData = v
        this.userInfo = {
          avatar: v.user_info.avatar,
          username: v.user_info.username,
          time: v.add_time,
          mobile: v.user_info.mobile,
          memberLevel: v.member_level
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .fansItem{
    height: 200px;
    margin-bottom: 20px;
    background-color: #fff;
  }
  .fansInfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
  }
  .fansInfoItme{
    width: 50%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    color: #666;
    &>span{
      font-weight: bolder;
    }
    &>p{
      font-size: 20px;
      margin-top: 14px;
    }
  }
  .line{
    height: 50px;
    width: 1px;
    flex-grow: 0;
    background-color: #ddd;
  }
  .arrow{
    position: absolute;
    right: 60px;
  }
</style>
