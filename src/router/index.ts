import { createRouter, createWebHashHistory, RouteRecordRaw, RouterView } from 'vue-router'
import Layout from '@/layout/index.vue'
import dataRouters from './modules/data'
import simulatorRouters from './modules/simulator'
import userManageRouters from './modules/userManage'

const routes:RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '', // 为空则为默认子路由
        name: 'Home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'data',
        component: RouterView,
        children: [
          {
            path: '/sku',
            name: 'sku',
            component: () => import('@/views/data/sku/index.vue')
          },
          {
            path: '/box',
            name: 'box',
            component: () => import('@/views/data/box/index.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
