import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/event_list',
      name: 'event list',
      component: () => import('../views/EventListPage.vue')
    },
    {
      path: '/seat_list',
      name: 'seat list',
      component: () => import('../components/SeatListView.vue')
    },
    {
      path: '/userAuth',
      name: 'userAuth',
      component: () => import('../views/UserAuth.vue')
    }
  ]
})

export default router
