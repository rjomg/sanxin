import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import ShopDecoration from '@/pages/ShopDecoration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/decoration',
      name: 'ShopDecoration',
      component: ShopDecoration
    }
  ]
})
