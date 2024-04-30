<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ModalAuth from './components/modals/ModalAuth.vue'
import ModalCart from './components/modals/ModalCart.vue'
import { onMounted } from 'vue'
import { useUserStore } from './store/useUserStore'
import { useCartStore } from './store/useCartStore'

const userStore = useUserStore()
const cartStore = useCartStore()

onMounted(() => {
  userStore.checkIsLoggedIn()
  cartStore.loadCartFromLocalStorage()
})
</script>

<template>
  <Header />
  <router-view />
  <Footer />
  <ModalAuth />
  <ModalCart />
</template>

<style>
@import './assets/css/normalize.css';
@import './assets/css/style.css';
</style>
