<script setup>
import { computed, watch, ref, reactive } from 'vue'
import { useUserStore } from '../../store/useUserStore'

const userStore = useUserStore()
const modalAuth = ref(null)
const userForm = reactive({
  login: null,
  password: null,
})
const isAuthModalOpen = computed(() => userStore.isAuthModalOpen)
const submitAuthForm = (e) => {
  e.preventDefault()
  userStore.logIn(userForm)
  userStore.toggleModalOpen()
}
watch(isAuthModalOpen, (state, oldState) => {
  if (state) {
    modalAuth.value.classList.add('is-open')
  } else {
    modalAuth.value.classList.remove('is-open')
  }
})
</script>

<template>
  <div class="modal-auth" ref="modalAuth">
    <div class="modal-dialog modal-dialog-auth">
      <button class="close-auth" @click="userStore.toggleModalOpen">
        &times;
      </button>
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
