<template>
  <button class="upload-button">
    <component :is="icon" weight="bold" size="20" />
    <span class="text">
      <slot>{{ text }}</slot>
    </span>
  </button>
</template>

<script setup>
import { PhPaperclip } from "@phosphor-icons/vue";

defineProps({
  text: {
    type: String,
    default: "",
  },
  icon: {
    type: Object,
    default: PhPaperclip,
  },
});
</script>

<style scoped>
.upload-button {
  cursor: pointer;
  color: var(--color-primary);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
}

.text {
  color: var(--color-primary);
  font: var(--text-base);
  font-weight: var(--font-medium);
}

.upload-button:hover {
  opacity: 0.8; /* same as go back button */
}
</style>
