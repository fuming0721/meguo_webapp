import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { index: 0, keepAlive: true, title: '聚多多优惠—聪明你的消费' },
      component: () => import('@/views/Home/Home.vue')
    },
    {
      path: '/baoyou',
      name: 'baoyou',
      meta: { index: 1, keepAlive: true, title: '9.9包邮' },
      component: () => import('@/views/Baoyou/Baoyou.vue')
    },
    {
      path: '/zhongcao',
      name: 'zhongcao',
      meta: { index: 2, keepAlive: true, title: '小编种草' },
      component: () => import('@/views/ZhongCao/ZhongCao.vue')
    },
    {
      path: '/couponsearch',
      name: 'couponsearch',
      meta: { index: 3, keepAlive: true, title: '搜券' },
      component: () => import('@/views/CouponSearch/CouponSearch.vue')
    },
    {
      path: '/my',
      name: 'my',
      meta: { index: 4, keepAlive: true, title: '我' },
      component: () => import('@/views/My/My.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
