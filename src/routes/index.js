import { createRouter, createWebHistory } from  'vue-router';
import { useUserStore } from '@/store/index';

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginPage.vue"), // 코드 스플리팅
  },
  {
    path: "/signup",
    component: () => import("@/views/SignupPage.vue"),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("@/views/MainPage.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/add",
    name: "Add",
    component: () => import("@/views/PostAddPage.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/post/:id",
    component: () => import("@/views/PostEditPage.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFoundPage.vue"),
  },
];

const router = createRouter({
    history: createWebHistory(), // # 히스토리 제거
    routes
})

router.beforeEach((to, from, next) => {
  const userStoer = useUserStore();
  if (to.meta.auth && !userStoer.isLogin) {
    next('/login');
    return;
  }
  console.log(to);
  next();
});


export default router