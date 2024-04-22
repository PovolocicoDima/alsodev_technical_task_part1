<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({
  partner: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <router-link :to="{}">
    <div class="card card-restaurant">
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
  </router-link>
</template>
