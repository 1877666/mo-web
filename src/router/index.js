import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: ()=>import('@/layout/index.vue'),
    meta:{
      title:'首页'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('@/views/login.vue'),
    meta:{
      title:'登陆'
    }
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
