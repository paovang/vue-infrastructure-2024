import { customerRoute } from './../modules/rent_house/customer/routers/index';
import { userRoute } from '../modules/users/router/index.route';
import { dashboardRoute } from '../modules/dashboard/router/dashboard.route'
import { addressRoute } from '../modules/address/router/address.route';
import { createRouter, createWebHistory } from 'vue-router'
import { authRoute } from '@/modules/auth/routers/index';
import { homeRoute } from '@/modules/homepage/routers/index';
import { authGuard } from '@/common/guards/auth.guard';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/admin',
            component: () => import('@/components/layouts/AppLayout.vue'),
            children: [
                ...dashboardRoute,
                ...userRoute,
                ...customerRoute,
                ...addressRoute
            ]
        },
        ...authRoute,
        ...homeRoute
    ],
  })

//   authGuard(router)

export default router