<template>
  <div class="page-header">
    <div class="header-container">
      <h2>{{ title }}</h2>
      <p v-if="subtitle" class="subtitle-container">
        <component
          :is="subtitleIcon"
          :weight="iconWeight"
          color="var(--color-text-tertiary)"
        />
        <span class="text-base">{{ subtitle }}</span>
      </p>
      <!-- info box -->
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

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
    default: "",
  },
  iconWeight: {
    type: String,
    default: "fill",
  },
});
</script>

<style scoped>
.page-header {
  padding: 1rem 1rem 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.header-container {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  width: 800px;
}

.subtitle-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
