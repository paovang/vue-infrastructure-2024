import type { RouteRecordRaw } from 'vue-router'

export const addressRoute: RouteRecordRaw[] = [
  {
    path: '/country',
    name: 'country',
    component: () => import('../views/ListCountry.vue'),
    meta: { label: 'ປະເທດ' }
  }
]