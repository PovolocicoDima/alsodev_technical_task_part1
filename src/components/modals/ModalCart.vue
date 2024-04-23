<script setup>
import { watch, computed, ref } from 'vue'
import { useCartStore } from '@/store/useCartStore'
const cartStore = useCartStore()

const modalCart = ref(null)
const isCartModalOpen = computed(() => cartStore.isCartModalOpen)
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
        <div class="food-row">
          <span class="food-name">Ролл угорь стандарт</span>
          <strong class="food-price">250 ₽</strong>
          <div class="food-counter">
            <button class="counter-button">-</button>
            <span class="counter">1</span>
            <button class="counter-button">+</button>
          </div>
        </div>
        <!-- /.foods-row -->
        <div class="food-row">
          <span class="food-name">Ролл угорь стандарт</span>
          <strong class="food-price">250 ₽</strong>
          <div class="food-counter">
            <button class="counter-button">-</button>
            <span class="counter">1</span>
            <button class="counter-button">+</button>
          </div>
        </div>
        <!-- /.foods-row -->
        <div class="food-row">
          <span class="food-name">Ролл угорь стандарт</span>
          <strong class="food-price">250 ₽</strong>
          <div class="food-counter">
            <button class="counter-button">-</button>
            <span class="counter">1</span>
            <button class="counter-button">+</button>
          </div>
        </div>
        <!-- /.foods-row -->
        <div class="food-row">
          <span class="food-name">Ролл угорь стандарт</span>
          <strong class="food-price">250 ₽</strong>
          <div class="food-counter">
            <button class="counter-button">-</button>
            <span class="counter">1</span>
            <button class="counter-button">+</button>
          </div>
        </div>
        <!-- /.foods-row -->
      </div>
      <!-- /.modal-body -->
      <div class="modal-footer">
        <span class="modal-pricetag">1250 ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary">Оформить заказ</button>
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
