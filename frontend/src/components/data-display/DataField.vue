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
      <div class="field-value text-base">
        <slot>{{ value }}</slot>
      </div>
    </div>

    <button class="info-button" v-if="hasIcon">
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
  hasIcon: {
    type: Boolean,
    default: false,
  },
  hasVerifiedIcon: {
    type: Boolean,
    default: false,
  },
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
  width: 260px;
  min-width: 260px;
  padding-left: 0.6rem;
}

.field-value {
  word-break: break-word;
  right: 0.6rem;
  text-align: left;
}

.value-container {
  display: flex;
  align-items: center;
  gap: 8px;
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
