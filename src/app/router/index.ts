import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('pages/MainPage.vue'),
        children: [
            {
                path: '/',
                component: () => import('pages/Users.vue'),
            },
            {
                path: '/PaymentInfo/:id',
                component: () => import('pages/PaymentInfo.vue'),
            }
        ]
    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('pages/PageNotFound.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL), //Since there is no way to configure the server, Hash is used, not HistoryAPI.
    routes,
})

export default router
