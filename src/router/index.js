import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/App.vue'),
    name: 'Home',
    exact: true,
  },
  {
    path: '/partners/:partnerName',
    exact: true,
    component: () => import('@/components/PartnerCard.vue'),
    props: true,
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
