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
    },
    {
      path: '/event_creation',
      name: 'eventCreation',
      component: () => import('../views/EventCreationPage.vue')
    },
    {
      path: '/updateUserInfo',
      name: 'updateUserInfo',
      component: () => import('../views/UpdateUserInfo.vue')
    }
  ]
})

export default router
