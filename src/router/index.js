import Vue from 'vue'
import Router from 'vue-router'
import bridge from '@/config/bridge'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      meta: { rank: 10, title: '错误' },
      component: () => import('@/views/Error/Error')
    },
    {
      path: '/',
      name: 'home',
      meta: { rank: 1, showTabbar: true, title: '聚多多优惠—聪明你的消费' },
      component: () => import('@/views/Home/Home.vue')
    },
    {
      path: '/baoyou',
      name: 'baoyou',
      meta: { rank: 1, showTabbar: true, title: '9.9包邮' },
      component: () => import('@/views/Baoyou/Baoyou.vue')
    },
    {
      path: '/zhongcao',
      name: 'zhongcao',
      meta: { rank: 1, showTabbar: true, title: '小编种草' },
      component: () => import('@/views/ZhongCao/ZhongCao.vue')
    },
    {
      path: '/couponsearch',
      name: 'couponsearch',
      meta: { rank: 1, showTabbar: true, title: '搜券' },
      component: () => import('@/views/CouponSearch/CouponSearch.vue')
    },
    {
      path: '/my',
      name: 'my',
      meta: { rank: 1, title: '我' },
      component: () => import('@/views/My/My.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      meta: { rank: 10, title: '详情页' },
      component: () => import('@/views/Detail/Detail.vue')
    },
    {
      path: '/album',
      name: 'album',
      meta: { rank: 2, title: '专辑' },
      component: () => import('@/views/Album/Album.vue')
    },
    {
      path: '/category',
      name: 'category',
      meta: { rank: 2 },
      component: () => import('@/views/Category/Category.vue')
    },
    {
      path: '/subcategory',
      name: 'subcategory',
      meta: { rank: 3 },
      component: () => import('@/views/Category_sub/SubCategory.vue')
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
    bridge.callhandler('setTitle', to.meta.title)
    document.title = to.meta.title
  } else {
    bridge.callhandler('setTitle', to.query.title)
    document.title = to.query.title
  }
  next()
})

export default router
