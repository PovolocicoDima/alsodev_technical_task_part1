<script setup>
import { watch, computed, ref } from 'vue'
import { useCartStore } from '../../store/useCartStore'
import CartItem from '../CartItem.vue'

const cartStore = useCartStore()
const modalCart = ref(null)
const isCartModalOpen = computed(() => cartStore.isCartModalOpen)
const cart = computed(() => cartStore.getCart)
const getTotalPrice = computed(() => cartStore.getTotalPrice)
const cartItemCount = computed(() => cartStore.cartItemCount)

watch(isCartModalOpen, (state, oldState) => {
  if (state) {
    modalCart.value.classList.add('is-open')
  } else {
    modalCart.value.classList.remove('is-open')
  }
})
</script>

<template>
  <div class="modal modal-cart" ref="modalCart">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button class="close" @click="cartStore.toggleModalOpen">
          &times;
        </button>
      </div>
      <!-- /.modal-header -->
      <div class="modal-body">
        <template v-if="cartItemCount > 0">
          <CartItem
            v-for="product in cart"
            :key="product.id"
            :product="product"
          />
        </template>
        <template v-else>Корзина пуста</template>

        <!-- /.foods-row -->
      </div>
      <!-- /.modal-body -->
      <div class="modal-footer">
        <span class="modal-pricetag">{{ getTotalPrice }} ₽</span>
        <div class="footer-buttons">
          <button
            class="button button-primary"
            @click="cartStore.toggleModalOpen"
          >
            Оформить заказ
          </button>
          <button class="button clear-cart" @click="cartStore.toggleModalOpen">
            Отмена
          </button>
        </div>
      </div>
      <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>
