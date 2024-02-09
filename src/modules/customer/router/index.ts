import type { RouteRecordRaw } from 'vue-router'

export const customerRoute: RouteRecordRaw[] = [
  {
    path: '/customers',
    name: 'customers',
    component: () => import('../views/customer.vue'),
    // meta: { label: 'ລູກຄ້າ' }
  }
]