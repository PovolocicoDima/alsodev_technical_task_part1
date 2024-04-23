import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    isLoggedIn: false,
    userName: '',
    autModalIsOpen: false,
  }),
  getters: {
    userIsLoggedIn: (state) => state.isLoggedIn,
    getUserName: (state) => state.userName,
    isAuthModalOpen: (state) => state.autModalIsOpen,
  },
  actions: {
    logIn(login) {
      localStorage.setItem('user', JSON.stringify(login))
      this.userName = login.login
      this.isLoggedIn = true
    },
    logOut() {
      localStorage.removeItem('user')
      this.userName = ''
      this.isLoggedIn = false
    },
    toggleModalOpen() {
      this.autModalIsOpen = !this.autModalIsOpen
    },
    checkIsLoggedIn() {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user) {
        this.logIn(user)
      }
    },
  },
})
