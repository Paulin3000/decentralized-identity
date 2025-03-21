<template>
  <li class="nav-item" @click="$emit('click')">
    <component
      v-if="icon"
      :is="icon"
      :size="iconSize"
      :weight="isActive ? 'fill' : iconWeight"
    />
    <span class="text-sm font-medium">
      {{ text }}
    </span>
  </li>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  icon: {
    // from phosphor-vue or pass null
    type: [Object, null],
    default: null,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  iconSize: {
    type: Number,
    default: 20,
  },
  iconWeight: {
    type: String,
    default: "bold", // 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
  },
});
</script>

<style scoped>
.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: var(--color-text-primary);
}
.nav-item:hover {
  background-color: var(--color-nav-hover);
}
</style>
