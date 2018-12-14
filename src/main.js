import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import '@/config/configuration'

var env = process.env.VUE_APP_BASE_API
console.log(env)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
