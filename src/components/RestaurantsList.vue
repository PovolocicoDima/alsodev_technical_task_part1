<script setup>
import PartnerCard from '@/components/PartnerCard.vue'
import { useAllPartnersStore } from '@/store/useAllPartners'
import { onMounted, ref } from 'vue'
const allPartnersStore = useAllPartnersStore()
const partnersData = ref(null)

onMounted(async () => {
  await allPartnersStore.fetchPartners()
  partnersData.value = allPartnersStore.partners
})
</script>

<template>
  <section class="restaurants">
    <div class="section-heading">
      <h2 class="section-title">Рестораны</h2>
      <label class="search">
        <input
          type="text"
          class="input input-search"
          placeholder="Поиск блюд и ресторанов"
        />
      </label>
    </div>
    <div class="cards cards-restaurants">
      <PartnerCard
        v-for="partner in partnersData"
        :key="partner.id"
        :partner="partner"
      />
    </div>
  </section>
</template>
