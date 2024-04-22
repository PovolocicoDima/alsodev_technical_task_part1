<script setup>
import { ref } from 'vue'
import Logo from '@/components/ui/Logo.vue'
import InputAdress from '@/components/ui/InputAdress.vue'
import Button from '@/components/ui/Button.vue'

const modalAuth = ref(null)
const isModalOpen = ref(false)

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
  if (isModalOpen.value) {
    modalAuth.value.classList.add('is-open')
  } else {
    modalAuth.value.classList.remove('is-open')
  }
}
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
          @click="toggleModal"
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

  <div class="modal-auth" ref="modalAuth">
    <div class="modal-dialog modal-dialog-auth">
      <button class="close-auth" @click="toggleModal">&times;</button>
      <form id="logInForm">
        <fieldset class="modal-body">
          <legend class="modal-title">Авторизация</legend>
          <label class="label-auth">
            <span>Логин</span>
            <input id="login" type="text" />
          </label>
          <label class="label-auth">
            <span>Пароль</span>
            <input id="password" type="password" />
          </label>
        </fieldset>
        <!-- /.modal-body -->
        <div class="modal-footer">
          <div class="footer-buttons">
            <button class="button button-primary button-login" type="submit">
              Войти
            </button>
          </div>
        </div>
      </form>
      <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>
