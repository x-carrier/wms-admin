import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'userManage',
  component: RouterView,
  children: [
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/userManage/user/index.vue')
    },
    {
      path: '/role',
      name: 'role',
      component: () => import('@/views/userManage/role/index.vue')
    },
    {
      path: '/permission',
      name: 'permission',
      component: () => import('@/views/userManage/permission/index.vue')
    }
  ]
}

export default routes
