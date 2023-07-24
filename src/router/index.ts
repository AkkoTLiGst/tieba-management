import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/system',
    },
    {
        path: '/login',
        component: () => import('../views/login.vue'),
        name: 'login'
    },
    {
        path: '/',
        component: () => import('../views/home.vue'),
        name: 'home',
        children: [
            {
                path: '/system',
                name: 'system',
                component: () => import('../views/systemHomePage.vue'),
                meta: {
                    title: '系统首页'
                }
            },
            {
                path: '/message',
                name: 'message',
                component: () => import('../views/message.vue'),
                meta: {
                    title: '通知消息'
                }
            },
            {
                path: '/postBar',
                name: 'postBar',
                component: () => import('../views/postBarManage.vue'),
                meta: {
                    title: '贴吧管理'
                }
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/userManage.vue'),
                meta: {
                    title: '用户管理'
                }
            },
            {
                path: '/posts',
                name: 'posts',
                component: () => import('../views/postsManage.vue'),
                meta: {
                    title: '帖子管理'
                }
            },
            {
                path: '/message',
                name: 'message',
                component: () => import('../views/message.vue'),
                meta: {
                    title: '通知消息'
                }
            },
            {
                path: '/charts',
                name: 'charts',
                component: () => import('../views/charts.vue'),
                meta: {
                    title: '数据图表'
                }
            },
            {
                path: '/threeJs',
                name: 'threeJs',
                component: () => import('../views/threeJs.vue'),
                meta: {
                    title: 'three.js建模'
                }
            }
        ]
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