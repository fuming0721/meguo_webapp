<template>
  <li class="navIcon" @click="iconClick">
    <icon :name="iconItem.app_icon" width="60%" v-if="iconItem.isSvg"></icon>
    <img class="goodsType_icon" :src="iconItem.app_icon" v-else alt="">
    <span class="navIconTitle">{{iconItem.name}}</span>
  </li>
</template>

<script>
export default {
  props: {
    iconItem: {
      require: true,
      type: Object
    }
  },
  methods: {
    iconClick () {
      this.$emit('iconClick', this.iconItem)
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .navIcon{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .navIconTitle{
    font-size: 24px;
    margin-top: 20px;
  }
  .goodsType_icon{
    width: 96px;
  }
</style>
