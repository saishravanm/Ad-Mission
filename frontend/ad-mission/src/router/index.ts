import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/event_list',
      name: 'event list',
      component: () => import('../components/EventList.vue')
    },
    {
      path: '/seat_list',
      name: 'seat list',
      component: () => import('../views/SeatListView.vue')
    },
    {
      path: '/userAuth',
      name: 'userAuth',
      component: () => import('../views/UserAuth.vue')
    }
  ]
})

export default router
