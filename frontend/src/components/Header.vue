<template>
  <header class="page-header">
    <!-- Top section: Back button, Title & Actions -->
    <div class="header-top">
      <div class="header-left">
        <button v-if="showBackButton" @click="handleBack" class="back-button">
          <!-- Use your preferred icon component or SVG here -->
          <component :is="PhArrowLeft" />
        </button>
        <h1 class="page-title">{{ title }}</h1>
      </div>
      <div class="header-right" v-if="$slots.actions">
        <slot name="actions" />
      </div>
    </div>

    <!-- Subtitle -->
    <p v-if="subtitle" class="page-subtitle">{{ subtitle }}</p>

    <!-- Info section: could be for data security or any other information -->
    <div v-if="infoText || $slots.info" class="header-info">
      <!-- Use your preferred icon component or SVG here -->
      <InfoIcon class="info-icon" />
      <span class="info-text">
        <slot name="info">
          {{ infoText }}
        </slot>
      </span>
    </div>
  </header>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { PhArrowLeft } from "@phosphor-icons/vue";
import router from "../router/index.js";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
  showBackButton: {
    type: Boolean,
    default: false,
  },
  infoText: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["back"]);

function handleBack() {
  router.back();
}
</script>

<style scoped>
.page-header {
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.back-button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
}

.back-button .icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--color-text-primary);
}

.page-title {
  margin: 0;
  text-align: left;
}

.header-right {
  display: flex;
  gap: 1rem;
}

.page-subtitle {
  margin: 0.5rem 0 1rem;
  color: var(--color-text-secondary);
  text-align: left;
}

.header-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: var(--color-text-tertiary);
}

.header-info .info-icon {
  width: 1rem;
  height: 1rem;
}
</style>
