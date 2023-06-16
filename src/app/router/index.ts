import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('pages/UserList.vue'),
    },
    {
        path: '/PaymentInfo',
        component: () => import('pages/PaymentInfo.vue'),
    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('pages/PageNotFound.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})

export default router
