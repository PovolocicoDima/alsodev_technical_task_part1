<script setup></script>

<template>
  <label class="address">
    <input
      type="text"
      class="input input-address"
      placeholder="Адрес доставки"
    />
  </label>
</template>

<style scoped>
.input {
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 8px 8px 35px;
  background-repeat: no-repeat;
  background-position: left 11px center;
}

.input-address {
  width: 100%;
  background-image: url(../img/icon/home.svg);
}

@media (max-width: 578px) {
  .input-address {
    margin-top: 15px;
    order: 5;
    flex: 1;
  }
}
</style>
