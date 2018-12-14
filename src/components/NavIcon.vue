<template>
  <router-link class="navIcon" :to="iconItem.url">
    <icon :name="iconItem.icon" width="60%"></icon>
    <span class="navIconTitle">{{iconItem.name}}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    iconItem: {
      require: true,
      type: Object
    }
  }
}
</script>

<style lang="less" type="text/less" scope>
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
</style>
