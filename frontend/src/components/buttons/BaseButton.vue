<template>
  <button
    class="base-btn"
    :class="[variant, { active: isActive, disabled: disabled }]"
    :disabled="disabled"
    @click="onClick"
  >
    <slot name="icon-left"></slot>
    <span class="btn-content"><slot /></span>
    <slot name="icon-right"></slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "danger", "secondary", "outline-primary"].includes(value),
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const onClick = (event) => {
  if (!props.disabled) {
    emit("click", event);
  }
};
</script>

<style scoped>
.base-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 25px;
  transition: all 0.2s ease;
  cursor: pointer;
  white-space: nowrap;
  min-width: 120px;
}

.btn-content {
  font-weight: var(--font-bold);
  font-size: var(--text-base);
  letter-spacing: 0.025em;
}

.primary {
  background-color: var(--color-primary);
  color: var(--color-text-primary);
  border: 2px solid transparent;
}

.primary:hover {
  background-color: var(--color-primary-dark);
}

.danger {
  background-color: var(--color-bad);
  color: white;
  border: 2px solid transparent;
}

.danger:hover {
  background-color: var(--color-bad-dark);
}

.secondary {
  background-color: var(--color-secondary);
  color: var(--color-text-primary);
  border: 2px solid transparent;
}

.secondary:hover {
  background-color: var(--color-secondary-dark);
}

.outline-primary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.outline-primary:hover {
  background-color: var(--color-primary-opacity-low);
}
.outline-primary.active {
  background-color: var(--color-primary);
  color: var(--color-text-primary);
}

/* Disabled state */
.base-btn.disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}
</style>
