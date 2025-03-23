<template>
  <div class="input-field">
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input"
      :placeholder="placeholder"
      :disabled="disabled"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "Enter value",
  },
  type: {
    type: String,
    default: "text",
    validator: (val) => ["text", "did"].includes(val),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

defineEmits("update:modelValue");
</script>

<style scoped>
.input-field {
  position: relative;
  width: 100%;
  display: flex;
}

.input {
  width: 100%;
  padding: 8px 12px;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text-primary);
  font-size: var(--text-base);
  transition: border-color 0.2s;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.input::placeholder {
  color: #707070;
}
</style>
