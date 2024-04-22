<script setup>
import { usePartnerStore } from '@/store/usePartner'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'

const route = useRoute()

const partnerStore = usePartnerStore()
const partnersMenu = ref(null)
const partnerData = computed(() =>
  partnerStore.getPartnersData(route.params.name)
)

onMounted(async () => {
  await partnerStore.fetchPartner(route.params.id)
  partnersMenu.value = partnerStore.menu[route.params.id]
})
</script>

<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading">
          <h2 class="section-title restaurant-title">
            {{ route.params.name }}
          </h2>
          <div class="card-info">
            <div class="rating">{{ partnerData?.stars }}</div>
            <div class="price">От {{ partnerData?.price }} ₽</div>
            <div class="category">{{ partnerData?.kitchen }}</div>
          </div>
          <!-- /.card-info -->
        </div>

        <div class="cards cards-menu">
          <ProductCard
            v-for="menu in partnersMenu"
            :key="menu.id"
            :menu="menu"
          />
        </div>
      </section>
    </div>
  </main>
</template>
