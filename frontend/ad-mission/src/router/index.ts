import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/userAuth',
      name: 'userAuth',
      component: () => import('../views/UserAuth.vue')
    },
    {
      path: '/updateUserInfo',
      name: 'updateUserInfo',
      component: () => import('../views/UpdateUserInfo.vue')
    }
  ]
})

export default router
