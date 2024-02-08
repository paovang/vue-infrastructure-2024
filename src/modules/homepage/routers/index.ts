import type { RouteRecordRaw } from 'vue-router'

export const homeRoute: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/loyout/LayoutHome.vue'),
    children: [
      {
        path: '',
        name: 'house',
        component: () => import('../views/ListHouse.vue'), 
      },
      {
        path: '/detail/:id',
        name: 'detail.house',
        component: () => import('../views/DetailHouse.vue'), 
      },
    ]
  }
]