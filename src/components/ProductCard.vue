<script setup>
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
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="ingredients">{{ menu.description }}</div>
      </div>
      <!-- /.card-info -->
      <div class="card-buttons">
        <button class="button button-primary button-add-cart">
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">{{ menu.price }} ₽</strong>
      </div>
    </div>
    <!-- /.card-text -->
  </div>
</template>
