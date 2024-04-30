<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAllPartnersStore } from '../store/useAllPartners'
import { usePartnerStore } from '../store/usePartner'
import ProductCard from './ProductCard.vue'
import Button from './ui/Button.vue'

const route = useRoute()
const partnerStore = usePartnerStore()
const allPartnersStore = useAllPartnersStore()
const partnersMenu = ref(null)
const partnerInfo = computed(() => partnerStore.getPartnerInfo)

onMounted(async () => {
  if (!allPartnersStore.partners.length) {
    await allPartnersStore.fetchPartners()
  }
  await partnerStore.fetchPartner(route.params.id)
  partnersMenu.value = partnerStore.menu[route.params.id]
  const info = allPartnersStore.partners.find((partner) => {
    const name = partner.products.split('.')[0]
    return route.params.id === name
  })

  partnerStore.setInfo(info)
})
</script>

<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading">
          <h2 class="section-title restaurant-title">
            {{ partnerInfo?.name }}
          </h2>
          <div class="card-info">
            <div class="rating">{{ partnerInfo?.stars }}</div>
            <div class="price">От {{ partnerInfo?.price }} ₽</div>
            <div class="category">{{ partnerInfo?.kitchen }}</div>
          </div>
          <!-- /.card-info -->

          <div class="card-sort">
            <Button
              label="По возрастаню"
              class="button button-primary button-auth"
              @click="partnerStore.sortAscending"
            />
            <Button
              label="По убыванию"
              class="button button-primary button-auth"
              @click="partnerStore.sortDescending"
            />
          </div>
        </div>

        <div class="cards cards-menu">
          <ProductCard
            v-for="product in partnersMenu"
            :key="product.id"
            :product="product"
          />
        </div>
      </section>
    </div>
  </main>
</template>
