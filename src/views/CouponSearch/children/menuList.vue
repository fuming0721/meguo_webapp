<template>
  <div class="goodsType">
    <p class="goodsType_title">
      <van-icon name="category" class="fenlei" class-prefix="icon" />商品分类
    </p>
    <ul class="goodsType_list">
      <icon-link class="goodsType_listItem" v-for="(item, index) in $menuIcon" :iconItem="item" :key="index"  @iconClick="iconClick" />
    </ul>
  </div>
</template>
<script>
import IconLink from '@/components/IconLink'
export default {
  data: function () {
    return {
    }
  },
  components: {
    IconLink
  },
  methods: {
    iconClick (item) {
      this.$router.push({ path: 'category', query: { id: item.id, title: item.name } })
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .goodsType_listItem > p {
    font-size: 24px;
    margin-top: 10px;
  }

  .goodsType_listItem {
    width: 187.5px;
    height: 187.5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .goodsType_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
  .fenlei {
    font-size: 32px;
    color: #FFA2A7;
    margin-right: 10px;
  }
  .goodsType_title {
    width: 100%;
    text-align: left;
    padding: 20px;
    display: flex;
    align-items: center;
    font-size: 28px;
    color: #333;
  }
  .goodsType {
    width: 100%;
    background-color: #fff;
  }
</style>
