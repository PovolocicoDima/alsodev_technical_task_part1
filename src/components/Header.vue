<script setup>
import { ref, computed } from 'vue'
import Logo from './ui/Logo.vue'
import InputAdress from './ui/InputAdress.vue'
import Button from './ui/Button.vue'
import { useUserStore } from '../store/useUserStore'
import { useCartStore } from '../store/useCartStore'

const userStore = useUserStore()
const cartStore = useCartStore()
const userName = ref(null)

const cartItemCount = computed(() => cartStore.cartItemCount)
const userNameText = computed(() => {
  if (userStore.getUserName) {
    userName.value
      ? (userName.value.style.display = 'block')
      : (userName.value.style.display = 'none')
    return userStore.getUserName
  }
})
const userIsLoggedIn = computed(() => userStore.userIsLoggedIn)

const logOut = () => {
  userStore.logOut()
  userName.value.style.display = 'none'
}
</script>

<template>
  <div class="container">
    <header class="header">
      <Logo />
      <InputAdress />
      <div class="buttons">
        <Button
          v-if="!userIsLoggedIn"
          label="Войти"
          class="button button-primary button-auth"
          iconClass="button-auth-svg"
          @click="userStore.toggleModalOpen"
        />
        <span class="user-name" ref="userName"> {{ userNameText }}</span>
        <Button
          v-if="userIsLoggedIn"
          class="button"
          :label="`Корзина ${cartItemCount > 0 ? cartItemCount : ''}`"
          iconClass="button-cart-svg"
          id="cart-button"
          @click="cartStore.toggleModalOpen"
        />
        <Button
          v-if="userIsLoggedIn"
          label="Выйти"
          iconClass="button-out-svg"
          class="button button-primary"
          @click="logOut"
        />
      </div>
    </header>
  </div>
</template>
