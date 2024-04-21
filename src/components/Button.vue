<script setup>
const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button>
    <span :class="iconClass"></span>
    <span class="button-text">{{ label }}</span>
  </button>
</template>

<style scoped>
.button-primary .button-auth-svg {
  width: 24px;
  height: 24px;
  background-color: #fff;
  -webkit-mask: url('@/assets/img/icon/user.svg') no-repeat 50% 50%;
  mask: url('@/assets/img/icon/user.svg') no-repeat 50% 50%;
  background-repeat: no-repeat;
}

.button-primary:hover .button-auth-svg {
  background-color: #595959;
}

.button .button-cart-svg {
  width: 24px;
  height: 24px;
  background-color: #595959;
  -webkit-mask: url('@/assets/img/icon/shopping-cart.svg') no-repeat 50% 50%;
  mask: url('@/assets/img/icon/shopping-cart.svg') no-repeat 50% 50%;
  background-repeat: no-repeat;
}

.button-primary .button-cart-svg {
  background-color: #fff;
}

.button:hover .button-cart-svg {
  background-color: #fff;
}
.button-primary:hover .button-cart-svg {
  background-color: #595959;
}

@media (max-width: 480px) {
  .button-out-svg {
    width: 24px;
    height: 24px;
    background-color: #fff;
    -webkit-mask: url('@/assets/img/icon/logout.svg') no-repeat 50% 50%;
    mask: url('@/assets/img/icon/logout.svg') no-repeat 50% 50%;
    background-repeat: no-repeat;
    -webkit-mask-size: 20px;
    mask-size: 20px;
  }
}
</style>
