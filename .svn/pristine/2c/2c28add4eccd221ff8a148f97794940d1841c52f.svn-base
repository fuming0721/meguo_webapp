<template>
  <div class="list">
    <nav-bar>
      <div slot="rightIcon" v-if="newGoodsList.length">
        <van-icon name="delete" class="delete" v-if="!isChoosing" @click="isChoosing=true"/>
        <span @click="cancelDelete" v-else class="cancel">取消</span>
      </div>
    </nav-bar>
    <goods-list-vertical fetch="footprintLists" @done="onDone">
      <van-checkbox-group v-model="result">
        <div v-for="(list, index) in newGoodsList" :key="'list' + index">
          <p class="browsingTime positionCenter">{{(list.time * 1000) | dateformat2}}</p>
          <goods-item-history v-for="(item, itemIndex) in list.goodsList" :key="itemIndex" :item="item" :index="index">
            <div class="deleteItem" :class="{isChoosing: isChoosing}">
              <van-checkbox :name="item.browsing_history.history_id" :key="item.browsing_history.history_id" ref="checkboxes" />
            </div>
          </goods-item-history>
        </div>
      </van-checkbox-group>
    </goods-list-vertical>
    <transition name="slide">
      <div class="deleteBox positionCenter" v-if="isChoosing">
        <div class="deleteall">
          <van-icon name="delete" />
          <button :disabled="allloading" class="deleteAllBtn" @click="deleteAll"><van-loading v-if="allloading" class="loading" />删除全部</button>
        </div>
        <button class="deleteBtn" @click="deleteSome" :disabled="!result.length || loading">
          <van-loading v-if="loading" class="loading" />删除
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import GoodsItemHistory from '@/components/GoodsItemHistory'
export default {
  components: {
    GoodsItemHistory
  },
  data () {
    return {
      params: {},
      newGoodsList: [],
      result: [],
      isChoosing: false,
      loading: false,
      allGoodsList: [],
      allloading: false
    }
  },
  activated () {
    this.isChoosing = false
  },
  methods: {
    onDone (data) {
      this.allGoodsList = data
      this.setNewOrder()
    },
    setNewOrder () {
      let allBrowsingTimeArr = this.allGoodsList.map(item => item.browsing_history.history_created_time)
      let browsingTimeLits = Array.from(new Set(allBrowsingTimeArr))
      this.newGoodsList = browsingTimeLits.map(item => {
        return {
          time: item,
          goodsList: this.allGoodsList.filter(v => v.browsing_history.history_created_time === item)
        }
      })
    },
    cancelDelete () {
      this.isChoosing = false
      this.result = []
      this.isChoosing = false
      this.setNewOrder()
    },
    deleteAll () {
      this.allloading = true
      this.$api('removeFootprint', {
        type: 2
      }).then(({ data }) => {
        this.allloading = false
        this.$toast(data.message)
        if (data.success) {
          this.newGoodsList = []
          this.isChoosing = false
        }
      })
    },
    deleteSome () {
      this.loading = true
      this.$api('removeFootprint', {
        type: 1,
        history_id: this.result.join(',')
      }).then(({ data }) => {
        this.loading = false
        this.$toast(data.message)
        if (data.success) {
          this.isChoosing = false
          this.result.forEach(item => {
            this.allGoodsList.splice(this.allGoodsList.findIndex(arrItem => arrItem.browsing_history.history_id === item), 1)
          })
          this.setNewOrder()
          this.isChoosing = false
        }
      })
    }
  }
}
</script>
<style lang="less" type="text/less" scoped>
  .loading{
    width: 30px !important;
    height: 30px !important;
    margin: 0 10px 0 !important;
  }
  .deleteAllBtn{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    &:disabled{
      color: #999;
    }
  }
  .deleteBtn{
    width: 140px;
    height: 60px;
    background-color: @base_font_color;
    border-radius: 60px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    &:disabled{
      opacity: 0.6;
    }
    &:active{
      opacity: 0.8;
    }
  }
  .deleteall{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &>p{
      margin-left: 20px;
    }
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: all .6s ease;
  }
  .slide-enter, .slide-leave-to{
    transform: translateY(100px);
    opacity: 0;
  }
  .deleteBox{
    height: 100px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    border-top: 2px solid #ddd;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  .list{
    padding-top: 80px;
    padding-bottom: 100px;
  }
  .browsingTime{
    height: 60px;
    line-height: 60px;
    padding: 0 10px;
    font-size: 26px;
    width: 100%;
    position: sticky;
    top: 80px;
    z-index: 90;
    background-color: #f2f2f2;
  }
  .isChoosing{
    width: 40px !important;
  }
  .deleteItem{
    height: 100%;
    width: 0px;
    display: flex;
    transition: all 100ms linear;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    margin-left: -10px;
    flex-shrink: 0;
  }
  .cancel{
    font-size: 26px;
  }
  .delete{
    font-size: 28px !important;
  }
</style>
