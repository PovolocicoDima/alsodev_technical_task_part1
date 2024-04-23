<script setup>
import { ref, reactive, computed } from 'vue'
import Logo from '@/components/ui/Logo.vue'
import InputAdress from '@/components/ui/InputAdress.vue'
import Button from '@/components/ui/Button.vue'
import { useUserStore } from '@/store/useUserStore'

const userStore = useUserStore()
const modalAuth = ref(null)
const userName = ref(null)
const isModalOpen = ref(false)

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
  if (isModalOpen.value) {
    modalAuth.value.classList.add('is-open')
  } else {
    modalAuth.value.classList.remove('is-open')
  }
}
const userForm = reactive({
  login: null,
  password: null,
})

const userNameText = computed(() => userStore.getUserName)
const userIsLoggedIn = computed(() => userStore.userIsLoggedIn)

const submitAuthForm = (e) => {
  e.preventDefault()
  userStore.logIn(userForm)
  userName.value.style.display = 'block'
  toggleModal()
}

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
          @click="toggleModal"
        />
        <span class="user-name" ref="userName"> {{ userNameText }}</span>
        <Button
          v-if="userIsLoggedIn"
          class="button"
          label="Корзина"
          iconClass="button-cart-svg"
          id="cart-button"
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

  <div class="modal-auth" ref="modalAuth">
    <div class="modal-dialog modal-dialog-auth">
      <button class="close-auth" @click="toggleModal">&times;</button>
      <form id="logInForm" @submit="submitAuthForm">
        <fieldset class="modal-body">
          <legend class="modal-title">Авторизация</legend>
          <label class="label-auth">
            <span>Логин</span>
            <input id="login" type="text" v-model="userForm.login" />
          </label>
          <label class="label-auth">
            <span>Пароль</span>
            <input id="password" type="password" v-model="userForm.password" />
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
