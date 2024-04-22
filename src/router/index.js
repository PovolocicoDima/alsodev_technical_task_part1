import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layout/MainLayout.vue'),
    name: 'Home',
  },
  {
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('@/layout/RestaurantLayout.vue'),
    // middleware => () => {
    //   const allowedPartnerNames = [
    //     'food-band',
    //     'gusi-lebedi',
    //     'palki-skalki',
    //     'pizza-burger',
    //     'pizza-plus',
    //     'tanuki',
    //   ]
    // }
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
