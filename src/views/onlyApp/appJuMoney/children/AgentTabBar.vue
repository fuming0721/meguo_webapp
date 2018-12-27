<template>
  <ul class="agentTabbar positionCenter" :class="{isAboveIhphoneX: $deviceType.isAboveIPhoneX}">
    <li class="tabbarItem" v-for="(item, index) in tabbar" :key="index" @click="jump(item.url)">
      <img class="tabbaeIcon" :src="item.icon" alt="">
      <div class="tabbarItemName">{{item.name}}</div>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      tabbar: [
        {
          name: '推荐',
          icon: require('@/assets/images/tabbar1.png'),
          url: ''
        }, {
          name: '精选文案',
          icon: require('@/assets/images/tabbar2.png'),
          url: 'share'
        }, {
          name: '裂变赚',
          icon: require('@/assets/images/tabbar3.png'),
          url: 'invite'
        }, {
          name: '收益',
          icon: require('@/assets/images/tabbar4.png'),
          url: 'commission'
        }, {
          name: '团队',
          icon: require('@/assets/images/tabbar5.png'),
          url: 'fans'
        }
      ]
    }
  },
  methods: {
    jump (url) {
      this.$bridge.callhandler(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tabbaeIcon {
    width: 40px;
    margin-top: 10px;
  }

  .tabbarItem {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
  }

  .agentTabbar {
    height: 100px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    z-index: 9999;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
  .tabbarItemName{
    color: #333;
    margin-top: 10px;
  }
</style>
