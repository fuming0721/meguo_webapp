import './mixin'
import Vue from 'vue'
import router from '@/router'
import filters from '@/filters'
import backend from '@/api/api'
import api from '@/api'
import 'normalize.css'
import components from './components'
import deviceType from './device'
import bridge from './bridge'
import { Toast, Loading, Swipe, SwipeItem, Lazyload, Icon, Popup, Tabbar, TabbarItem, Tab, Tabs, List, Notify } from 'vant'
import menuIcon from './menuIcon'
import VueClipboard from 'vue-clipboard2'
import cache from '@/plugins/cache'
import AuthPlugin from '@/plugins/auth'

Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.use(Toast).use(Loading).use(Icon).use(Popup)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Tabbar).use(TabbarItem).use(List)
Vue.use(Tab).use(Tabs).use(Notify)
Vue.use(api, backend)
Vue.use(AuthPlugin, { router })
Vue.use(filters)
Vue.use(menuIcon)
Vue.use(components)
Vue.use(Lazyload, {
  loading: require('@/assets/images/placeholderImg.png'),
  error: require('@/assets/images/placeholderImg.png')
})

const showLoading = () => {
  Toast.loading({
    message: '加载中...',
    duration: 0,
    mask: true,
    forbidClick: true
  })
}

Vue.prototype.$menuIcon = menuIcon
Vue.prototype.$deviceType = deviceType
Vue.prototype.$bridge = bridge
Vue.prototype.$showLoading = showLoading
Vue.prototype.$cache = cache
