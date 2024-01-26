import type { RouteRecordRaw } from 'vue-router'

export const customerRoute: RouteRecordRaw[] = [
  {
    path: '/customer',
    name: 'customer',
    component: () => import('../views/customer.vue'),
    // meta: { label: 'ລູກຄ້າ' }
  }
]