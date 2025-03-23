<template>
  <button class="go-back-button text-base" @click="handleBack">
    ← Go Back
  </button>
</template>

<script setup>
import router from "../router/index.js";

function handleBack() {
  router.back();
}
</script>

<style scoped>
.go-back-button {
  padding: 0.55rem 1.5rem;
  cursor: pointer;
  color: var(--color-primary);
  font-weight: var(--font-medium);
}

.go-back-button:hover {
  opacity: 0.8;
}
</style>
