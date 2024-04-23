import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/MainContent.vue'),
  },
  {
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('@/components/RestaurantContent.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
