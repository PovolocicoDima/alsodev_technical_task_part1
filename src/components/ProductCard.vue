<script setup>
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'

defineProps({
  menu: {
    type: Object,
    required: true,
  },
})

const modalCart = ref(null)
const isModalOpen = ref(false)

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
  if (isModalOpen.value) {
    modalCart.value.classList.add('is-open')
  } else {
    modalCart.value.classList.remove('is-open')
  }
}
</script>

<template>
  <div class="card">
    <img :src="`/${menu.image}`" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ menu.name }}</h3>
      </div>
      <div class="card-info">
        <div class="ingredients">{{ menu.description }}</div>
      </div>
      <div class="card-buttons">
        <Button
          class="button button-primary button-add-cart"
          label="В корзину"
          iconClass="button-cart-svg"
          @click="toggleModal"
        />
        <strong class="card-price-bold">{{ menu.price }} ₽</strong>
      </div>
    </div>
  </div>

  <div class="modal modal-cart" ref="modalCart">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button class="close">&times;</button>
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
          <button class="button clear-cart" @click="toggleModal">Отмена</button>
        </div>
      </div>
      <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>
