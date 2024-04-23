<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  partner: {
    type: Object,
    required: true,
  },
})

const restaurantKey = computed(() => props.partner.products.split('.')[0])
const goToRestaurantPage = () => {
  router.push({
    name: 'restaurant',
    params: { id: restaurantKey.value, name: props.partner.name },
  })
}
</script>

<template>
  <div class="card card-restaurant" @click="goToRestaurantPage">
    <img :src="partner.image" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ partner.name }}</h3>
        <span class="card-tag tag">{{ partner.time_of_delivery }}мин</span>
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="rating">{{ partner.stars }}</div>
        <div class="price">От {{ partner.price }} ₽</div>
        <div class="category">{{ partner.kitchen }}</div>
      </div>
      <!-- /.card-info -->
    </div>
  </div>
</template>
