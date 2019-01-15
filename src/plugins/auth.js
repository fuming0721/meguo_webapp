import Vue from 'vue'
const AuthPlugin = Vue.extend({
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    this.updateUserInfo()
  },
  methods: {
    async guard (to, from, next) {
      if (this.$deviceType.isMeguoApp) {
        const userInfoData = await this.updateUserInfo()
        this.userInfo = userInfoData.data
        this.$bridge.registerhandler('reEnterH5', () => {
          this.updateUserInfo().then(({ data }) => {
            this.userInfo = data
            if (!this.userInfo.success && to.matched.some(record => record.meta.requiresAuth)) {
              this.$bridge.callhandler('close')
            } else {
              next()
            }
          })
        })
      }
      if (to.matched.some(record => record.meta.requiresAuth)) {
        let userInfo = await this.updateUserInfo()
        if (!userInfo.data.success) {
          this.$deviceType.isMeguoApp ? this.$bridge.callhandler('login') : next({ path: '/login', query: { redirect: to.fullPath } })
        } else {
          next()
        }
      } else {
        next()
      }
    },
    async updateUserInfo () {
      try {
        const userInfo = await this.$api('receiveUserInfo', { t: new Date().getTime() })
        this.userInfo = userInfo.data
        return userInfo
      } catch (error) {
        throw error
      }
    },

    async login (type, params) {
      try {
        const resData = await this.$api(type, params)
        const userInfoData = await this.updateUserInfo()
        this.userInfo = userInfoData.data
        return resData
      } catch (error) {
        throw error
      }
    },
    async logout () {
      const resData = await this.$api('logout')
      const userInfoData = await this.updateUserInfo()
      this.userInfo = userInfoData.data
      return resData
    }
  }
})

export default {
  install (Vue, { router }) {
    const $auth = new AuthPlugin()
    Vue.prototype.$auth = $auth
    if (router) {
      router.beforeEach($auth.guard)
    }
  }
}
