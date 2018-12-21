import LoadingContainer from '@/components/LoadingContainer'
import TagPrice from '@/components/TagPrice'
import SvgIcon from 'vue2-svg-icon/Icon.vue'
import GoodsListVertical from '@/components/GoodsListVertical'
import GoodsItem from '@/components/GoodsItem'
import GoodsItemChannel from '@/components/GoodsItemChannel'
import NavBar from '@/components/NavBar'
import BackTop from '@/components/BackTop'
export default {
  install (Vue) {
    Vue.component('LoadingContainer', LoadingContainer)
    Vue.component('TagPrice', TagPrice)
    Vue.component('icon', SvgIcon)
    Vue.component('GoodsItem', GoodsItem)
    Vue.component('GoodsItemChannel', GoodsItemChannel)
    Vue.component('GoodsListVertical', GoodsListVertical)
    Vue.component('NavBar', NavBar)
    Vue.component('BackTop', BackTop)
  }
}
