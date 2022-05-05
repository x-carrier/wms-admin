import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
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

export default routes
