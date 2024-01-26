import type { RouteRecordRaw } from 'vue-router'

export const userRoute: RouteRecordRaw[] = [
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user.vue'),
    // meta: { label: 'ລູກຄ້າ' }
  }
]