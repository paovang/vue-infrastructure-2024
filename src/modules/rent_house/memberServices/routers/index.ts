import type { RouteRecordRaw } from 'vue-router'

export const realEstateServiceRoute: RouteRecordRaw[] = [
  {
    path: '/real/estate/services',
    name: 'real.estate.services',
    component: () => import('../views/ListRealEstateService.vue'),
    meta: { label: 'ຄ່າບໍລິການ' }
  }
]