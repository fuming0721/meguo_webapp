export default {
  install (Vue) {
    Vue.filter('formatMoney', value => parseFloat(value).toFixed(2))
    Vue.filter('over10000', value => value < 10000 ? value : parseFloat(value / 10000).toFixed(1) + '万')
    Vue.filter('formatnum', value => Math.round(value))
    Vue.filter('activity_type', value => value === '1' ? '聚划算' : '淘抢购')
    Vue.filter('mall_id', value => value === '1' ? '天猫' : '淘宝')
  }
}
