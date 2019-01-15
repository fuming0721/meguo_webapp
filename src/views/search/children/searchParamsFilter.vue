<template>
  <div class="searchParamsFilter positionCenter">
    <ul class="filterNav" id="poop" >
      <li :class="{ItemActive:navParams.sort=='default'}">
        <button @click="handlerFilter('default')" :disabled="navParams.sort=='default'">综合</button>
      </li>
      <li :class="{ItemActive:navParams.sort=='volume'}">
        <button @click="handlerFilter('volume')" :disabled="navParams.sort=='volume'">销量</button>
      </li>
      <li @click="handlerFilter(priceSort)" :class="{ItemActive:navParams.sort=='priceU' || navParams.sort=='priceD'}">
        <button>价格</button>
        <span class="upAndDown">
          <van-icon class-prefix="icon" name="up" class="priceIcon priceIconUp" :class="{priceSort:priceSort=='priceD'}"/>
          <van-icon class-prefix="icon" name="down" class="priceIcon" :class="{priceSort:priceSort=='priceU'}"/>
        </span>
      </li>
      <li @click="moreFilter">筛选 <van-icon name="filter" class="filterIcon" class-prefix="icon" /></li>
    </ul>
    <div class="coupon">
      <van-switch-cell size="40px" v-model="checked" title="优先展示优惠券商品" active-color="#B0EE72" @change="$emit('navParamsChange', navParams)" />
    </div>
    <van-popup v-model="showMoreFilter" position="bottom"  overlay-class="searchOverLay">
      <div class="moreFilter">
        <p class="title">价格区间（元）</p>
        <ul class="filterItem">
          <li @click="setFilterParams(0, 59)" :class="{priceActive: priceIndex==0}">0-59</li>
          <li @click="setFilterParams(60, 99)" :class="{priceActive: priceIndex==1}">60-99</li>
          <li @click="setFilterParams(100, '')" :class="{priceActive: priceIndex==2}">100元以上</li>
        </ul>
        <ul class="filterItem2">
          <li><input type="number" placeholder="最低价" v-model.number="searchParams.start_price" @input="setPrice"></li>
          <li><input type="number" placeholder="最高价" v-model.number="searchParams.end_price" @input="setPrice"></li>
        </ul>
        <p class="title">其他选项</p>
        <ul class="filterItem">
          <li @click="needFreeShipment" :class="{isActived:searchParams.need_free_shipment == 1}">包邮</li>
          <li @click="is_overseas" :class="{isActived:searchParams.is_overseas == 1}">海外商品</li>
          <li @click="include_good_rate" :class="{isActived:searchParams.include_good_rate == 1}">好评优选</li>
        </ul>
        <ul class="summit">
          <li @click="resetParams">重置</li>
          <li class="confirm" @click="sumbit">确定</li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      sortType: 'default',
      priceSort: 'priceU',
      showMoreFilter: false,
      priceIndex: -1,
      checked: true,
      navParams: {
        coupon: 1,
        sort: 'default'
      },
      searchParams: {
        start_price: '',
        end_price: '',
        need_free_shipment: 0,
        is_overseas: 0,
        include_good_rate: 0
      }
    }
  },
  created () {
  },
  methods: {
    handlerFilter (v) {
      this.showMoreFilter = false
      if (v === 'priceU' || v === 'priceD') {
        // eslint-disable-next-line
        this.navParams.sort = v === 'priceD' ?  'priceU' : 'priceD'
        this.priceSort = this.navParams.sort
      } else {
        this.navParams.sort = v
      }
      this.$emit('navParamsChange', this.navParams)
    },
    moreFilter () {
      this.showMoreFilter = true
    },
    setFilterParams (startPrice, endPrice) {
      this.searchParams.start_price = startPrice
      this.searchParams.end_price = endPrice
      switch (startPrice) {
        case 0:
          this.priceIndex = 0
          break
        case 60:
          this.priceIndex = 1
          break
        case 100:
          this.priceIndex = 2
          break
      }
    },
    setPrice () {
      this.priceIndex = -1
    },
    resetParams () {
      this.priceIndex = -1
      this.searchParams.start_price = ''
      this.searchParams.start_price = ''
      this.searchParams.end_price = ''
      this.searchParams.need_free_shipment = 0
      this.searchParams.is_overseas = 0
      this.searchParams.include_good_rate = 0
    },
    needFreeShipment () {
      this.searchParams.need_free_shipment = this.searchParams.need_free_shipment === 0 ? 1 : 0
    },
    is_overseas () {
      this.searchParams.is_overseas = this.searchParams.is_overseas === 0 ? 1 : 0
    },
    include_good_rate () {
      this.searchParams.include_good_rate = this.searchParams.include_good_rate === 0 ? 1 : 0
    },
    sumbit () {
      this.showMoreFilter = false
      this.$emit('searchFilterParams', this.searchParams)
    }
  },
  watch: {
    checked (v) {
      this.navParams.coupon = v ? 1 : 0
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .confirm {
    color: @base_font_color;
  }
  .summit{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    box-shadow: 0 0px 20px 0 rgba(0, 0, 0, 0.1);
    height: 80px;
    margin-top: 30px;
    &>li{
      width: 50%;
      height: 100%;
      text-align: center;
      line-height: 80px;
    }
  }
  .filterItem2{
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &>li{
      width: 330px;
      height: 60px;
      color: #939393;
      text-align: center;
      border-radius: 8px;
      background-color: #F8F8F8;
      &>input{
        width: 330px;
        height: 60px;
        color: #939393;
        line-height: 60px;
        background-color: #F8F8F8;
        text-align: center;
        &::placeholder{
          color: #e0e0e0 !important;
        }
      }
    }
  }
  .filterItem{
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &>li{
      height: 60px;
      width: 210px;
      color: #939393;
      text-align: center;
      line-height: 60px;
      border-radius: 8px;
      background-color: #F8F8F8;
    }
  }
  .title{
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    padding: 0 20px;
    color: #939393;
  }
  .searchParamsFilter{
    width: 100%;
    height: 160px;
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 999;
  }
  .filterNav{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    &>li{
      width: 25%;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26px;
    }
  }
  .priceIcon{
    font-size: 26px;
  }
  .ItemActive{
    font-size: 26px;
    color: @base_font_color;
  }
  .priceIcon{
    color: @base_font_color;
  }
  .priceSort{
    color: #999;
  }
  .filterIcon {
    font-size: 26px;
    color: @base_font_color;
  }
  .upAndDown{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 5px;
  }
  .priceIconUp{
    margin-bottom: -12px;
  }
  .moreFilter{
    width: 100%;
    height: 500px;
    background-color: #fff;
  }
  .priceActive, .isActived{
    background-color: #FFE2E5 !important;
    color: #F23C4E !important;
  }
  .coupon{
    height: 80px;
  }
</style>
