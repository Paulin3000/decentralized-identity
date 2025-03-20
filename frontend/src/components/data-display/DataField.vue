<template>
  <div class="data-field">
    <div class="field-label text-base">
      {{ label }}
    </div>
    <div class="field-content">
      <div class="field-value text-base">
        <slot>{{ value }}</slot>
      </div>
      <div
        v-if="description"
        class="field-description text-sm text-text-tertiary"
      >
        {{ description }}
      </div>
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
  description: {
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
  align-items: flex-start;
  padding: 10px 0;
}

.field-label {
  font-weight: var(--font-semibold);
  text-align: left;
  width: 200px;
  margin-right: 10px;
}

.field-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: left;
}

.field-value {
  word-break: break-word;
  margin-bottom: 4px;
}

.field-description {
  line-height: 1.4;
}

.field-divider {
  margin-top: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
