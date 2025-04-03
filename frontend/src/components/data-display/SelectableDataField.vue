<template>
  <div
    class="selectable-data-field"
    :class="{
      'selectable-data-field--required': isRequired,
      'selectable-data-field--selected': isSelected,
      'selectable-data-field--disabled': isRequired,
      'selectable-data-field--enabled': !isRequired && !isSelected,
    }"
    @click="handleClick"
  >
    <div class="selectable-data-field__status">
      <div class="status-circle" :class="statusCircleClass">
        <PhCheck
          v-if="isSelected || isRequired"
          size="16"
          weight="bold"
          class="icon"
        />
      </div>
    </div>
    <div class="selectable-data-field__content">
      <div class="selectable-data-field__label">
        {{ label }}
      </div>
      <div class="selectable-data-field__value">
        <slot>{{ value }}</slot>
      </div>
    </div>
    <div class="selectable-data-field__indicator" v-if="isRequired">
      <span class="required-tag">Required</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { PhCheck } from "@phosphor-icons/vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const isRequired = computed(() => props.required);
const isSelected = computed(() => !isRequired.value && props.modelValue);

const statusCircleClass = computed(() => {
  if (isRequired.value) return "status-circle--required";
  if (isSelected.value) return "status-circle--selected";
  return "status-circle--initial";
});

const handleClick = () => {
  if (!isRequired.value) {
    emit("update:modelValue", !props.modelValue);
  }
};
</script>

<style scoped>
.selectable-data-field {
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 16px;
  border-radius: 1.25rem;
  margin-bottom: 0;
  transition: all 0.15s ease;
  cursor: pointer;
  border: 1px solid #858a94;
  position: relative;
}

.selectable-data-field--required {
  background-color: rgba(73, 92, 248, 0.05);
  border: 1px solid rgba(73, 92, 248, 0.6);
  cursor: default;
}

.selectable-data-field--selected {
  background-color: rgba(73, 92, 248, 0.1);
  border: 1px solid var(--color-primary);
  box-shadow: inset 0 0 0 1px var(--color-primary);
}

.selectable-data-field--enabled:hover {
  /*background-color: rgba(255, 255, 255, 0.05);*/
  border: 1px solid var(--color-primary);
  box-shadow: inset 0 0 0 1px var(--color-primary);
}

.selectable-data-field__status {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
}

.status-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #e0e0e0;
  background-color: transparent;
  transition: all 0.2s ease;
}

.status-circle--required {
  border-color: var(--color-primary);
  background-color: var(--color-primary);
  opacity: 0.5;
}

.status-circle--selected {
  border-color: var(--color-primary);
  background-color: var(--color-primary);
}

.status-circle--initial {
  border-color: white;
}

.selectable-data-field__content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.selectable-data-field__label {
  font-size: 16px;
  font-weight: var(--font-semibold);
  margin-bottom: 4px;
}

.selectable-data-field__value {
  font-size: 14px;
  color: var(--color-text-secondary);
}

.selectable-data-field__indicator {
  display: flex;
  align-items: center;
}

.required-tag {
  font-size: 12px;
  font-weight: var(--font-medium);
  color: var(--color-primary);
  background-color: rgba(73, 92, 248, 0.1);
  padding: 4px 8px;
  border-radius: 12px;
  border: 1px solid var(--color-primary);
}

.icon {
  color: var(--color-container);
}
</style>
