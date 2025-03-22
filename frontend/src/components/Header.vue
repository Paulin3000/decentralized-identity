<template>
  <div class="page-header">
    <div class="header-container">
      <h1>{{ title }}</h1>

      <!-- Action button area -->
      <slot></slot>
    </div>

    <p v-if="subtitle" class="subtitle-container">
      <component
        :is="subtitleIcon"
        :weight="iconWeight"
        color="var(--color-text-tertiary)"
      />
      <span class="text-sm text-text-tertiary">{{ subtitle }}</span>
    </p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { PhLock } from "@phosphor-icons/vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
  subtitleIcon: {
    type: Object,
    default: () => PhLock,
  },
  iconWeight: {
    type: String,
    default: "fill",
  },
});
</script>

<style scoped>
.page-header {
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1.5rem;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.subtitle-container {
  margin: 0.5rem 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}
</style>
