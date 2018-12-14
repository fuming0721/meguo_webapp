import LoadingContainer from '@/components/LoadingContainer'
import TagPrice from '@/components/TagPrice'
import SvgIcon from 'vue2-svg-icon/Icon.vue'
export default {
  install (Vue) {
    Vue.component('LoadingContainer', LoadingContainer)
    Vue.component('icon', SvgIcon)
    Vue.component('TagPrice', TagPrice)
  }
}
