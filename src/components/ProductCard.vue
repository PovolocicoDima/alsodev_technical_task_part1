<script setup>
import Button from '@/components/ui/Button.vue'
import { useCartStore } from '@/store/useCartStore.js'

const cartStore = useCartStore()
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card">
    <img :src="`/${product.image}`" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ product.name }}</h3>
      </div>
      <div class="card-info">
        <div class="ingredients">{{ product.description }}</div>
      </div>
      <div class="card-buttons">
        <Button
          class="button button-primary button-add-cart"
          label="В корзину"
          iconClass="button-cart-svg"
          @click="cartStore.addToCart(product)"
        />
        <strong class="card-price-bold">{{ product.price }} ₽</strong>
      </div>
    </div>
  </div>
</template>
