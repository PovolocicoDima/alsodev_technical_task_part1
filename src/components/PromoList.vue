<script setup>
import Promo from './Promo.vue'
</script>

<template>
  <section class="container-promo">
    <Promo>
      <template #title>
        <h1 class="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
      </template>
      <template #text>
        <p class="promo-text">
          Блюда из любимого ресторана привезет курьер в перчатках, маске и с
          антисептиком
        </p>
      </template>
    </Promo>
  </section>
</template>
