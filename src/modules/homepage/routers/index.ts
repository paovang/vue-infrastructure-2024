import type { RouteRecordRaw } from 'vue-router'

export const homeRoute: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/loyout/LayoutHome.vue'),
    children: [
      {
        path: '',
        name: 'home.house',
        component: () => import('../views/ListHouse.vue'), 
      },
    ]
  }
]