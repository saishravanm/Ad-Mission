import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'payment',
      component: () => import('../../src/components/Payment.vue')
    }
  ]
})

export default router
