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
  bestGoods (params) {
    return axios.get('/threads/goods-collection', { params: params }) // 聚好货
  },
  couponGetingRanking (params) {
    return axios.get('/threads/coupon-received-rank', { params: params }) // 领券排行榜
  },
  volumeRanking (params) {
    return axios.get('/threads/volume-rank', { params: params }) // 热卖排行榜
  },
  receiveUserInfo (params) {
    return axios.get('/user/info', { params: params }) // 热卖排行榜
  },
  login (params) {
    return axios.get('/user/login', { params: params }) // 登录
  },
  logout () {
    return axios.get('/user/logout') // 登出
  },
  lottery_detail () {
    return axios.get('/user/lottery-detail') // 红包详情
  },
  lottery_red_package () {
    return axios.get('/user/lottery-red-package') // 红包抽奖
  },
  wechat_numberUrl () {
    return axios.get('/user/wechat-number') // 获取微信校验码
  },
  agent_fans (params) {
    return axios.get('/user/agent-fans', { params: params }) // 粉丝数量
  },
  effective_fans () {
    return axios.get('/user/effective-fans') // 会员升级粉丝信息
  },
  upgrade_level () {
    return axios.get('/user/upgrade-level') // 会员升级
  },
  pib (params) {
    return axios.post('/threads/is-favorite', qs.stringify(params))
  }
}
