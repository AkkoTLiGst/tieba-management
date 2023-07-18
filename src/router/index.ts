import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: () => import('../views/login.vue'),
        name: 'login'
    },
    {
        path: '/',
        component: () => import('../views/home.vue'),
        name: 'home'
    },
    {
        path: '/403',
        component: () => import('../views/403.vue'),
        name: '403'
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const isLogin = localStorage.getItem('adminToken');
    if(!isLogin && to.path !== '/login'){
        next('/login');
    }else {
        next();
    }
})