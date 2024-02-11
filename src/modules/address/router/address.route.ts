import { roleGuard } from '@/common/guards/role.guard'
import type { RouteRecordRaw } from 'vue-router'

export const addressRoute: RouteRecordRaw[] = [
  {
    path: '/country',
    name: 'country',
    component: () => import('../views/ListCountry.vue'),
    meta: { 
      label: 'sidebar.country',
      requiredRoles: ['SuperAdmin']
    },
    beforeEnter: roleGuard
  },
  {
    path: '/province',
    name: 'province',
    component: () => import('../views/ListProvince.vue'),
    meta: { 
      label: 'sidebar.province',
      requiredRoles: ['SuperAdmin']
    },
    beforeEnter: roleGuard
  },
  {
    path: '/district',
    name: 'district',
    component: () => import('../views/ListDistrict.vue'),
    meta: { 
      label: 'sidebar.district',
      requiredRoles: ['SuperAdmin']
    },
    beforeEnter: roleGuard
  }
]