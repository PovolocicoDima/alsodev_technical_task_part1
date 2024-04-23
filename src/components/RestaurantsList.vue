<script setup>
import RestaurantCard from '@/components/RestaurantCard.vue'
import ProductCard from '@/components/ProductCard.vue'
import { useAllPartnersStore } from '@/store/useAllPartners'
import { computed, onMounted, ref, watch } from 'vue'
const allPartnersStore = useAllPartnersStore()
const partnersData = computed(() => allPartnersStore.partners)
const foundProduct = computed(() => allPartnersStore.getProductFoundStatus)
const getProductFoundList = computed(() =>
  allPartnersStore.getProductFoundList.flatMap((a) => a)
)
const searchQuery = ref('')

onMounted(async () => {
  await Promise.allSettled([
    allPartnersStore.fetchPartners(),
    allPartnersStore.fetchDB(),
  ])
})

watch(searchQuery, (state, oldState) => {
  if (state) {
    allPartnersStore.findSome(state)
  } else {
    allPartnersStore.setPartners(allPartnersStore.db.partners)
    allPartnersStore.disableProductMode()
  }
})
</script>

<template>
  <section class="restaurants">
    <div class="section-heading">
      <h2 class="section-title">Рестораны</h2>
      <label class="search" for="search">
        <input
          id="search"
          type="text"
          v-model="searchQuery"
          class="input input-search"
          placeholder="Поиск блюд и ресторанов"
        />
      </label>
    </div>
    <div class="cards cards-restaurants">
      <RestaurantCard
        v-for="partner in partnersData"
        :key="partner.id"
        :partner="partner"
      />

      <ProductCard
        v-if="foundProduct"
        v-for="product in getProductFoundList"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>
