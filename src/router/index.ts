import { createRouter, createWebHistory } from "vue-router";
//createRouter方法，用于创建路由器实例
export default createRouter({
  //路由的模式设置
  history: createWebHistory(),
  //管理路由
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("@/pages/home/index.vue"),
    },
    {
      path: "/hospital",
      component: () => import("@/pages/hospital/index.vue"),
      children: [
        {
          path: "register",
          component: () => import("@/pages/hospital/register/index.vue"),
        },
        {
          path: "close",
          component: () => import("@/pages/hospital/close/index.vue"),
        },
        {
          path: "detail",
          component: () => import("@/pages/hospital/detail/index.vue"),
        },
        {
          path: "notice",
          component: () => import("@/pages/hospital/notice/index.vue"),
        },
        {
          path: "search",
          component: () => import("@/pages/hospital/search/index.vue"),
        },
        {
          path: "register_step_1",
          component: () =>
            import("@/pages/hospital/register/register_step_1.vue"),
        },
      ],
    },
    {
      path: "/wxlogin",
      component: () => import("@/pages/wxlogin/index.vue"),
    },
  ],
  //滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});
