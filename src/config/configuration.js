import Vue from 'vue'
import filters from '@/filters'
import backend from '../api/api'
import api from '../api/index'
import 'normalize.css'
import components from './components'
import { Toast, Loading, Swipe, SwipeItem, Lazyload, Icon, Row, Col, Popup, Tabbar, TabbarItem, Tab, Tabs, List } from 'vant'
import menuIcon from './menuIcon'
Vue.config.productionTip = false

Vue.prototype.$menuIcon = menuIcon
Vue.use(Toast).use(Loading).use(Icon).use(Popup)
Vue.use(Swipe).use(SwipeItem).use(Row).use(Col)
Vue.use(Tabbar).use(TabbarItem).use(List)
Vue.use(Tab).use(Tabs)
Vue.use(api, backend)
Vue.use(filters)
Vue.use(menuIcon)
Vue.use(components)
Vue.use(Lazyload, {
  loading: require('@/assets/images/placeholderImg.png'),
  error: require('@/assets/images/placeholderImg.png')
})
