import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cart: [],
    cartModalIsOpen: false,
  }),
  getters: {
    isCartModalOpen: (state) => state.cartModalIsOpen,
    cartItemCount: (state) => state.cart.length,
    getTotalPrice: (state) => {
      return state.cart.reduce((total, item) => {
        const productPrice = item.price * item.count
        return total + productPrice
      }, 0)
    },
    getCart: (state) => state.cart,
  },
  actions: {
    addToCart(product) {
      const existingProduct = this.cart.find((item) => item.id === product.id)
      if (existingProduct) {
        existingProduct.count++
      } else {
        this.cart.push({
          id: product.id,
          count: 1,
          name: product.name,
          price: product.price,
        })
      }
      this.saveCartToLocalStorage()
    },
    removeFromCart(productId) {
      const index = this.cart.findIndex((item) => item.id === productId)
      if (index !== -1) {
        this.cart.splice(index, 1)
        this.saveCartToLocalStorage()
      }
    },
    reduceCount(productId) {
      const existingProduct = this.cart.find((item) => item.id === productId)
      if (existingProduct && existingProduct.count > 1) {
        existingProduct.count--
      } else {
        this.removeFromCart(productId)
      }
      this.saveCartToLocalStorage()
    },
    saveCartToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    loadCartFromLocalStorage() {
      const cart = JSON.parse(localStorage.getItem('cart'))
      if (cart) {
        this.cart = cart
      }
    },
    toggleModalOpen() {
      this.cartModalIsOpen = !this.cartModalIsOpen
    },
  },
})
