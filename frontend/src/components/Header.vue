<template>
  <header class="page-header">
    <h1 class="page-title">{{ title }}</h1>
    <p v-if="subtitle" class="page-subtitle">{{ subtitle }}</p>
    <div v-if="$slots.actions" class="header-actions">
      <slot name="actions"></slot>
    </div>
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.page-header {
  margin-bottom: 2rem;
  width: 100%;
}

.page-title {
  text-align: left;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  text-align: left;
  opacity: 0.7;
  margin-top: 0;
  margin-bottom: 1rem;
}

.header-actions {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
}
</style>
