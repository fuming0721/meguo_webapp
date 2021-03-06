import './mixin'
import Vue from 'vue'
import jsonp from 'jsonp'
import router from '@/router'
import filters from '@/filters'
import backend from '@/api/api'
import api from '@/api'
import axios from 'axios'
import 'normalize.css'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import components from './components'
import deviceType from './device'
import bridge from './bridge'
import { Toast, Loading, Swipe, SwipeItem, Lazyload, Icon, Popup, Tabbar, TabbarItem, Tab, Tabs, List, Notify, Collapse, CollapseItem, Field, Cell, CellGroup, Dialog, SwitchCell, Checkbox, CheckboxGroup } from 'vant'
import menuIcon from './menuIcon'
import VueClipboard from 'vue-clipboard2'
import cache from '@/plugins/cache'
import AuthPlugin from '@/plugins/auth'
import VideoPlayer from 'vue-video-player'

Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.use(Toast).use(Loading).use(Icon).use(Popup).use(SwitchCell)
Vue.use(Swipe).use(SwipeItem).use(Cell).use(CellGroup)
Vue.use(Tabbar).use(TabbarItem).use(List).use(Field).use(Checkbox).use(CheckboxGroup)
Vue.use(Tab).use(Tabs).use(Notify).use(Collapse).use(CollapseItem).use(Dialog)
Vue.use(api, backend)
Vue.use(AuthPlugin, { router })
Vue.use(filters)
Vue.use(menuIcon)
Vue.use(components)
Vue.use(VideoPlayer)
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
Vue.prototype.$jsonp = jsonp
Vue.prototype.$showLoading = showLoading
Vue.prototype.$cache = cache
Vue.prototype.$asiox = axios
