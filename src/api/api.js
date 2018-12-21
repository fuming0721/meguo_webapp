import axios from './http'
import qs from 'qs'

export default {
  getHomeData () {
    return axios.all([
      axios.get('/threads/carousel-pic'), // banner
      axios.get('/threads/today-must-browse'), // 今日必逛
      axios.get('/threads/volume-rank') // 销量排行
    ])
  },
  goodsList (params) {
    return axios.get('/threads/good-lists', { params: params }) // 所有商品列表
  },
  albumList (params) {
    return axios.get('/threads/album-list', { params: params }) // 专辑列表
  },
  subCategoryNav (params) {
    return axios.get('/threads/sub-category', { params: params }) // 分类页图标
  },
  timeBuyTimeStatus (params) {
    return axios.get('/threads/time-status', { params: params }) // 限时抢购时间nav
  },
  timeBuy (params) {
    return axios.get('/threads/time-buy', { params: params }) // 限时抢购
  },
  halfOffTimeStatus (params) {
    return axios.get('/threads/half-off-status', { params: params }) // 半价精选时间nav
  },
  halfOff (params) {
    return axios.get('/threads/half-off', { params: params }) // 半价抢购
  },
  bigCoupon (params) {
    return axios.get('/threads/big-coupon', { params: params }) // 大额优惠券
  },
  pib (params) {
    return axios.post('/threads/is-favorite', qs.stringify(params))
  }
}
