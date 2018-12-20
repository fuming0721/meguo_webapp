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
  goodList (params) {
    return axios.get('/threads/good-lists', { params: params })
  },
  albumList (params) {
    return axios.get('/threads/album-list', { params: params })
  },
  subCategoryNav (params) {
    return axios.get('/threads/sub-category', { params: params })
  },
  pib (params) {
    return axios.post('/threads/is-favorite', qs.stringify(params))
  }
}
