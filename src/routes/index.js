import { createRouter, createWebHistory } from  'vue-router';
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

export default router