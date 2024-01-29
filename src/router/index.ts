import { customerRoute } from './../modules/customer/router/index';
import { userRoute } from '../modules/users/router/index.route';
import { dashboardRoute } from '../modules/dashboard/router/dashboard.route'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/components/layouts/AppLayout.vue'),
            children: [
                ...dashboardRoute,
                ...userRoute,
                ...customerRoute
            ]
        }
    ],
  })

export default router