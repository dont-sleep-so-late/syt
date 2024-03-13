import { createRouter, createWebHistory } from "vue-router";
//createRouter方法，用于创建路由器实例
export default createRouter({
    //路由的模式设置
    history: createWebHistory(),
    //管理路由
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hosiptal',
            component: () => import('@/pages/hospital/index.vue')
        },
    ],
    //滚动行为
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})