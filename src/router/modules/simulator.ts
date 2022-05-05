import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'simulator',
  component: RouterView,
  children: [
    {
      path: '/plc',
      name: 'plc',
      component: () => import('@/views/simulator/plc/index.vue')
    },
    {
      path: '/ptl',
      name: 'ptl',
      component: () => import('@/views/simulator/ptl/index.vue')
    },
    {
      path: '/scan',
      name: 'scan',
      component: () => import('@/views/simulator/scan/index.vue')
    }
  ]
}

export default routes
