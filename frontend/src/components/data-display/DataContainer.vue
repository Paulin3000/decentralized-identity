<template>
  <div class="data-container-wrapper">
    <h3 v-if="title" class="container-title">{{ title }}</h3>
    <div class="data-container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.data-container-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.container-title {
  margin: 0;
  text-align: left;
  padding-left: 4px;
  width: 100%;
}

.data-container {
  background: var(--color-container);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.5rem 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  width: 100%;
}
</style>
