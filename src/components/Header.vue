<script setup>
import Logo from '@/components/Logo.vue'
import InputAdress from '@/components/InputAdress.vue'
import Button from '@/components/Button.vue'
</script>

<template>
  <div class="container">
    <header class="header">
      <Logo />
      <InputAdress />
      <div class="buttons">
        <span class="user-name"></span>
        <Button
          class="button button-primary button-auth"
          label="Войти"
          iconClass="button-auth-svg"
        />
        <Button
          class="button button-cart"
          label="Корзина"
          iconClass="button-cart-svg"
          id="cart-button"
        />
        <Button
          label="Выйти"
          iconClass="button-out-svg"
          class="button button-primary button-out"
        />
      </div>
    </header>
  </div>
</template>
