import LoadingContainer from '@/components/LoadingContainer'
import TagPrice from '@/components/TagPrice'
import SvgIcon from 'vue2-svg-icon/Icon.vue'
import GoodsListVertical from '@/components/GoodsListVertical'
import NavBar from '@/components/NavBar'
import BackTop from '@/components/BackTop'
export default {
  install (Vue) {
    Vue.component('LoadingContainer', LoadingContainer)
    Vue.component('icon', SvgIcon)
    Vue.component('TagPrice', TagPrice)
    Vue.component('GoodsListVertical', GoodsListVertical)
    Vue.component('NavBar', NavBar)
    Vue.component('BackTop', BackTop)
  }
}
