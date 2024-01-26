import { customerRoute } from './../modules/customer/router/index';
import { userRoute } from '../modules/users/router/index.route';
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    routes: [
        {
            path: '/',
            name: '',
            component: () => import('@/components/HelloWorld.vue')
        },
        ...userRoute,
        ...customerRoute
    ],
    history: createWebHistory()
})

export default router