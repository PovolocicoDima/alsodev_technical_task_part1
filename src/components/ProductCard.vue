<script setup>
import Button from '@/components/ui/Button.vue'

defineProps({
  menu: {
    type: Object,
    required: true,
  },
})
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
</template>
