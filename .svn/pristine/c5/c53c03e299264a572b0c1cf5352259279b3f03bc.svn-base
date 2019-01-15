<template>
  <div class="sellerInfo" v-if="seller">
    <div class="sellerbox_name">
      <img :src="seller.shop_icon" alt="">
      <div class="seller_shop">
        <div class="seller_shop_name">{{seller.shop_name}}</div>
        <div class="seller_shop_icon">
          <img v-if="seller.credit_level==1"
               src="https://img.alicdn.com/imgextra/i3/62752115/TB2Lj08k8mWBuNkSndVXXcsApXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==2"
               src="https://img.alicdn.com/imgextra/i2/62752115/TB2xZxKk2iSBuNkSnhJXXbDcpXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==3"
               src="https://img.alicdn.com/imgextra/i1/62752115/TB2cP48k8mWBuNkSndVXXcsApXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==4"
               src="https://img.alicdn.com/imgextra/i3/62752115/TB2_wcvtmBYBeNjy0FeXXbnmFXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==5"
               src="https://img.alicdn.com/imgextra/i2/62752115/TB2zNCAk98YBeNkSnb4XXaevFXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==6"
               src="https://img.alicdn.com/imgextra/i2/62752115/TB2dZO_thSYBuNjSsphXXbGvVXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==7"
               src="https://img.alicdn.com/imgextra/i3/62752115/TB2EslKk2iSBuNkSnhJXXbDcpXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==8"
               src="https://img.alicdn.com/imgextra/i3/62752115/TB2PtGutgmTBuNjy1XbXXaMrVXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==9"
               src="https://img.alicdn.com/imgextra/i3/62752115/TB2cozhtbuWBuNjSszgXXb8jVXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==10"
               src="https://img.alicdn.com/imgextra/i3/62752115/TB26.v6tkSWBuNjSszdXXbeSpXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==11"
               src="https://img.alicdn.com/imgextra/i4/62752115/TB2tZCStkKWBuNjy1zjXXcOypXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==12"
               src="https://img.alicdn.com/imgextra/i4/62752115/TB2oUz6tkSWBuNjSszdXXbeSpXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==13"
               src="https://img.alicdn.com/imgextra/i1/62752115/TB27057tbGYBuNjy0FoXXciBFXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==14"
               src="https://img.alicdn.com/imgextra/i3/62752115/TB28Yvrtb1YBuNjSszhXXcUsFXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==15"
               src="https://img.alicdn.com/imgextra/i4/62752115/TB2nRLuteOSBuNjy0FdXXbDnVXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==16"
               src="https://img.alicdn.com/imgextra/i3/62752115/TB2CRQMtmtYBeNjSspkXXbU8VXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==17"
               src="https://img.alicdn.com/imgextra/i3/62752115/TB2YS6GthSYBuNjSspjXXX73VXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==18"
               src="https://img.alicdn.com/imgextra/i3/62752115/TB2qBqYtXGWBuNjy0FbXXb4sXXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==19"
               src="https://img.alicdn.com/imgextra/i1/62752115/TB2LefutXuWBuNjSspnXXX1NVXa-62752115.gif" alt="">
          <img v-else-if="seller.credit_level==20"
               src="https://img.alicdn.com/imgextra/i1/62752115/TB2obDKteuSBuNjy1XcXXcYjFXa-62752115.gif" alt="">
        </div>
      </div>
    </div>
    <ul class="seller_score">
      <li>宝贝描述: {{seller.item_score}}
        <span class="high" v-if="seller.item_level==1">高</span>
        <span class="ping" v-else-if="seller.item_level==0">平</span>
        <span class="low" v-else-if="seller.item_level==-1">低</span>
      </li>
      <li>卖家服务: {{seller.service_score}}
        <span class="high" v-if="seller.service_level==1">高</span>
        <span class="ping" v-else-if="seller.service_level==0">平</span>
        <span class="low" v-else-if="seller.service_level==-1">低</span>
      </li>
      <li>物流服务: {{seller.delivery_score}}
        <span class="high" v-if="seller.delivery_level==1">高</span>
        <span class="ping" v-else-if="seller.delivery_level==0">平</span>
        <span class="low" v-else-if="seller.delivery_level==-1">低</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    seller: {
      type: Object,
      require: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    qugoumai () {

    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .sellerInfo {
    background-color: #fff;
    margin-bottom: 20px;
    padding: 20px;
    padding-bottom: 0;
  }
  .sellerbox_name {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0 20px;
    height: 160px;
    & > img {
      width: 120px;
      height: 120px;
      flex-shrink: 0;
      margin-right: 20px;
    }
  }
  .seller_shop {
    flex-grow: 1;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    padding: 10px 0;
  }
  .seller_shop_name {
    font-size: 26px;
    color: #666;
  }
  .seller_shop_icon {
    font-size: 26px;
    color: #666;
    & > img {
      height: 30px;
    }
  }
  .seller_score {
    padding: 16px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid #f2f2f2;
    & > li {
      width: 33%;
      font-size: 22px;
      border-right: 2px dashed #ddd;
      text-align: center;
      &:last-child{
        border: none;
      }
      & > span {
        display: inline-block;
        color: #fff;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 20px;
        border: none;
      }
      & > .high {
        background-color: #F0110A;
      }
      & > .ping {
        background-color: #FFB400;
      }
      & > .low {
        background-color: #417505;
      }
    }
  }
</style>
