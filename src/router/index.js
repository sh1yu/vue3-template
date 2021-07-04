import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from "@/layout/Layout"
import Login from "@/views/Login.vue"
import Home from "@/views/Home.vue"

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    meta: {title: "登录", requireAuth: false},
    component: Login
  },
  {
    path: '/home',
    meta: {title: "工作台", requireAuth: true},
    component: Layout,
    icon: "el-icon-s-home",
    redirect: '/home',
    children: [
      {
        path: "/home",
        name: "工作台",
        icon: "el-icon-s-home",
        meta: {title: "工作台", requireAuth: true},
        component: Home
      }
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
