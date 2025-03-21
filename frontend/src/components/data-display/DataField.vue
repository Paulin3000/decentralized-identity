<template>
  <div class="data-field">
    <div class="field-label text-base">
      {{ label }}
    </div>
    <div class="field-value text-base">
      <slot>{{ value }}</slot>
    </div>
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
});
</script>

<style scoped>
.data-field {
  display: flex;
  flex-direction: row;
}

.field-label {
  font-weight: var(--font-semibold);
  text-align: left;
  width: 260px;
  padding-left: 0.6rem;
}

.field-value {
  word-break: break-word;
  right: 0.6rem;
}

.field-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
