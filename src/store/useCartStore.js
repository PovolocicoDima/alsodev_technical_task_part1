import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    totalCount: 0,
    cartModalIsOpen: false,
  }),
  getters: {
    isCartModalOpen: (state) => state.cartModalIsOpen,
  },
  actions: {
    setItemToCart(itemId) {
      const cart = JSON.parse(localStorage.getItem('cart'))
      cart.push(itemId)
      localStorage.setItem('cart', JSON.stringify(cart))
    },
    removeItemFromCart(itemId) {
      const cart = JSON.parse(localStorage.getItem('cart'))
      const newCart = cart.filter((i) => i.id !== itemId)
      localStorage.setItem('cart', JSON.stringify(newCart))
    },
    toggleModalOpen() {
      this.cartModalIsOpen = !this.cartModalIsOpen
    },
    getTotalCount() {
      const cart = JSON.parse(localStorage.getItem('cart'))
      this.totalCount = cart.reduce((acc, item) => acc + item.price, 0)
    },
  },
})
