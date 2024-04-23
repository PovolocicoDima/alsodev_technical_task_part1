<script setup>
import { useCartStore } from '@/store/useCartStore'

const cartStore = useCartStore()

defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="food-row">
    <span class="food-name">{{ product.name }}</span>
    <strong class="food-price">{{ product.price }} ₽</strong>
    <div class="food-counter">
      <button class="counter-button" @click="cartStore.reduceCount(product.id)">
        -
      </button>
      <span class="counter">{{ product.count }}</span>
      <button class="counter-button" @click="cartStore.addToCart(product)">
        +
      </button>
    </div>
  </div>
</template>
