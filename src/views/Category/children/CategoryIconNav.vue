<template>
  <ul class="iconNav">
    <template v-for="(item, index) in iconList">
      <icon-link class="icon_Item" :iconItem="item" :key="index"  @iconClick="iconClick"  v-if="index < showNum"/>
    </template>
    <template v-if="isOver8">
      <li class="arrowLi" v-if="showNum > 7" @click="showNum = 7">
        <van-icon class="arrow" name="arrow-left"></van-icon>
        <span>收起</span>
      </li>
      <li class="arrowLi" v-else @click="showNum = 100">
        <van-icon class="arrow" name="arrow"></van-icon>
        <span>展开</span>
      </li>
    </template>
  </ul>
</template>
<script>
import IconLink from '@/components/IconLink'
export default {
  props: {
    iconList: {
      type: Array,
      require: true
    }
  },
  data: function () {
    return {
      showNum: 7,
      isOver8: false
    }
  },
  components: {
    IconLink
  },
  created () {
    if (this.iconList.length <= 8) {
      this.isOver8 = false
      this.showNum = 8
    } else {
      this.isOver8 = true
      this.showNum = 7
    }
  },
  methods: {
    iconClick (item) {
      this.$router.push({ path: 'subcategory', query: { id: item.id, title: item.name } })
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .iconNav{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 80px;
    background-color: #fff;
  }
  .icon_Item{
    width: 187.5px;
    height: 187.5px;
  }
  .arrowLi{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 187.5px;
    height: 187.5px;
    font-size: 24px;
  }
  .arrow{
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: @base_font_color;
    color: #fff;
    font-size: 30px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
</style>
