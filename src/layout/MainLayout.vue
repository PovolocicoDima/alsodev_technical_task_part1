<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import MainContent from '@/components/MainContent.vue'
import ModalCart from '@/components/modals/ModalCart.vue'
import ModalAuth from '@/components/modals/ModalAuth.vue'
import { onMounted } from 'vue'
import { useUserStore } from '@/store/useUserStore'

const userStore = useUserStore()

onMounted(() => {
  userStore.checkIsLoggedIn()
})
</script>

<template>
  <Header />
  <MainContent />
  <Footer />
  <ModalCart />
  <ModalAuth />
</template>
