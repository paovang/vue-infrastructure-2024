import type { RouteRecordRaw } from 'vue-router'

export const ownerHouseRoute: RouteRecordRaw[] = [
  {
    path: '/owner/house',
    name: 'owner.house',
    component: () => import('../views/ListHouse.vue'),
    meta: { label: 'house' }
  },
  {
    path: '/owner/add/house',
    name: 'owner.add.house',
    component: () => import('../views/AddHouse.vue'),
    meta: { label: 'add.house' }
  }
]