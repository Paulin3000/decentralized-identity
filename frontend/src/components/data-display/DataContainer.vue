<template>
  <div class="data-container-wrapper">
    <div class="header-container">
      <h3 v-if="title" class="container-title">{{ title }}</h3>
      <div v-if="subtitle" class="subtitle-container">
        <component
          :is="subtitleIcon"
          :weight="iconWeight"
          :size="iconSize"
          color="var(--color-text-secondary)"
        />
        <span class="text-sm text-text-secondary">{{ subtitle }} </span>
      </div>
    </div>

    <div class="data-container" :class="{ secondary: variant === 'secondary' }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { PhLock } from "@phosphor-icons/vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary"].includes(value),
  },
  subtitle: {
    type: String,
    default: "",
  },
  subtitleIcon: {
    type: [Object, null],
    default: null,
  },
  iconSize: {
    type: Number,
    default: 16,
  },
  iconWeight: {
    type: String,
    default: "fill",
  },
});
</script>

<style scoped>
.data-container-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
}

.header-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.container-title {
  margin: 0;
  text-align: left;
  padding-left: 4px;
  padding-right: 1rem;
  /*width: 300px;*/
}

.data-container {
  background: var(--color-container);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 1.5rem 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  width: 100%;
}
.data-container.secondary {
  background: var(--color-container-secondary);
}

.subtitle-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
