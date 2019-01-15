import moment from 'moment'
export default {
  install (Vue) {
    Vue.filter('formatMoney', value => parseFloat(value).toFixed(2))
    Vue.filter('over10000', value => value < 10000 ? value : parseFloat(value / 10000).toFixed(1) + '万')
    Vue.filter('formatnum', value => Math.round(value))
    Vue.filter('activity_type', value => value === '1' ? '聚划算' : '淘抢购')
    Vue.filter('mall_id', value => {
      switch (value) {
        case 1:
          return '天猫'
        case 2:
        case 0:
          return '淘宝'
        case 7:
          return '京东'
      }
    })
    Vue.filter('dateformat', (dataStr, pattern = 'YYYY-MM-DD') => {
      return moment(dataStr).format(pattern)
    })
    Vue.filter('dateformat2', (dataStr, pattern = 'YYYY年MM月DD日') => {
      return moment(dataStr).format(pattern)
    })
    Vue.filter('timeformat', (dataStr, pattern = 'YYYY-MM-DD HH:mm') => {
      return moment(dataStr).format(pattern)
    })
    Vue.filter('postage', value => value === 0 ? '不包邮' : '包邮')
  }
}
