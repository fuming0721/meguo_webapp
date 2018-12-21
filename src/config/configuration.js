import './mixin'
import Vue from 'vue'
import filters from '@/filters'
import backend from '../api/api'
import api from '../api/index'
import 'normalize.css'
import components from './components'
import deviceType from './device'
import bridge from './bridge'
import { Toast, Loading, Swipe, SwipeItem, Lazyload, Icon, Popup, Tabbar, TabbarItem, Tab, Tabs, List, Notify } from 'vant'
import menuIcon from './menuIcon'
Vue.config.productionTip = false

Vue.prototype.$menuIcon = menuIcon
Vue.prototype.$deviceType = deviceType
Vue.prototype.$bridge = bridge
Vue.use(Toast).use(Loading).use(Icon).use(Popup)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Tabbar).use(TabbarItem).use(List)
Vue.use(Tab).use(Tabs).use(Notify)
Vue.use(api, backend)
Vue.use(filters)
Vue.use(menuIcon)
Vue.use(components)
Vue.use(Lazyload, {
  loading: require('@/assets/images/placeholderImg.png'),
  error: require('@/assets/images/placeholderImg.png')
})
Toast.setDefaultOptions({
  mask: true,
  duration: 0,
  forbidClick: true
})
