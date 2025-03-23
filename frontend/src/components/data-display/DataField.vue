<template>
  <div class="data-field">
    <div class="field-label text-base">
      {{ label }}
    </div>

    <div class="value-container">
      <component
        :is="PhSealCheck"
        weight="fill"
        color="var(--color-good)"
        size="16"
        v-if="hasVerifiedIcon"
      />
      <div class="value-inner-container text-base">
        <slot>{{ value }}</slot>
      </div>
    </div>

    <button class="info-button" v-if="hasInfoIcon">
      <component :is="PhInfo" size="16" />
    </button>
  </div>
  <div class="field-divider" v-if="!isLast"></div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
  isLast: {
    type: Boolean,
    default: false,
  },
  hasInfoIcon: {
    type: Boolean,
    default: false,
  },
  hasVerifiedIcon: {
    type: Boolean,
    default: false,
  },
  hasDescription: {},
});

import { PhInfo, PhSealCheck } from "@phosphor-icons/vue";
</script>

<style scoped>
.data-field {
  display: flex;
  flex-direction: row;
  position: relative;
}

.field-label {
  font-weight: var(--font-semibold);
  text-align: left;
  width: 100%;
  max-width: 250px;
  padding-left: 0.6rem;
}

.value-inner-container {
  word-break: break-word;
  right: 0.6rem;
  text-align: left;
  width: 100%;
}

.value-container {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding-right: 3rem;
}

.info-button {
  position: absolute;
  right: 0;
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.field-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
