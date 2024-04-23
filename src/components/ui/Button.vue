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
