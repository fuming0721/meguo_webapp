import Vue from 'vue'
import Vuex from 'vuex'
import device from './modules/device'
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app: 222
  },
  modules: {
    device,
    user
  }
})
