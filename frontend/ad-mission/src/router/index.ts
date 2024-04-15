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
<<<<<<< Updated upstream
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
=======
    }, 
    {
      path: '/transaction',
      name: 'transaction',
      component: () => import('../views/transactionPage.vue')
>>>>>>> Stashed changes
    }
  ]
})

export default router
