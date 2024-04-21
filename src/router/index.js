import { createRouter, createWebHistory } from 'vue-router'
import Partner from '@/components/Partner.vue'
import App from '@/App.vue'

const routes = [
  { path: '/', component: App, name: 'Home' },
  { path: '/partners/:partnerName', component: Partner },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
