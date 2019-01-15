<template>
  <div class="orderItem">
    <div class="titleLine">
      <div class="titleBox">
        <van-icon :name="iconName" :color="iconColor" class="titleIcon" class-prefix="icon" />
        <span>{{title}}</span>
        <van-icon name="question" @click="$emit('whatSthis')"/>
      </div>
      <van-icon name="arrow" class="arrow" @click="$emit('jump')" />
    </div>
    <ul class="content">
      <li class="content_item">
        <p class="titleNum">付款笔数</p>
        <p class="num">{{item.paidNum || 0}}</p>
      </li>
      <li class="line"></li>
      <li class="content_item">
        <p class="titleNum">预估收入</p>
        <p class="num">{{(item.forecastEarnings || 0) | formatMoney}}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    iconName: {
      type: String,
      require: true
    },
    iconColor: {
      type: String,
      require: true
    }
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .orderItem{
    width: 100%;
    height: 220px;
    margin-bottom: 20px;
  }
  .titleLine{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 30px;
    background-color: #fff;
  }
  .titleBox{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &>span{
      font-size: 26px;
      margin: 0 10px;
    }
  }
  .content{
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    margin-top: 1px;
  }
  .content_item{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
  }
  .titleIcon{
    font-size: 44px;
  }
  .arrow{
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    font-size: 36px;
  }
  .titleNum{
    margin-bottom: 10px;
    color: #666;
    font-size: 22px;
  }
  .num{
    color: #333;
    font-size: 28px;
    font-weight: bolder;
  }
  .line{
    height: 60%;
    width: 1px;
    background-color: #ddd;
  }
</style>
