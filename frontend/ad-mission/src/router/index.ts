import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/userAuth',
      name: 'userAuth',
      component: () => import('../views/UserAuth.vue')
    }
  ]
})

export default router
