import type { RouteRecordRaw } from 'vue-router'

export const addressRoute: RouteRecordRaw[] = [
  {
    path: '/country',
    name: 'country',
    component: () => import('../views/ListCountry.vue'),
    meta: { label: 'ປະເທດ' }
  },
  {
    path: '/province',
    name: 'province',
    component: () => import('../views/ListProvince.vue'),
    meta: { label: 'ເເຂວງ' }
  },
  {
    path: '/district',
    name: 'district',
    component: () => import('../views/ListDistrict.vue'),
    meta: { label: 'ເມືອງ' }
  }
]