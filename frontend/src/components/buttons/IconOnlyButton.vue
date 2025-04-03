<template>
  <button class="icon-only-button" :class="[variant]" @click="onClick">
    <span class="icon" :style="{ transform: `rotate(${iconRotation}deg)` }">
      <component :is="icon" :size="iconSize" :weight="iconWeight" />
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "danger"].includes(value),
  },
  icon: {
    type: [Object, null],
    default: null,
  },
  iconSize: {
    type: Number,
    default: 24,
  },
  iconWeight: {
    type: String,
    default: "bold", // options: thin, light, regular, bold, fill, duotone
  },
  iconRotation: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["click"]);

const onClick = (event) => {
  emit("click", event);
};
</script>

<style scoped>
.icon-only-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 50px;
}

.primary {
  color: var(--color-primary);
  background: rgba(73, 92, 248, 0.4);
}

.primary:hover {
  background: rgba(73, 92, 248, 0.6);
}

.danger {
  background: rgb(239, 68, 68, 0.6);
  color: rgb(255, 106, 106);
}

.danger:hover {
  background: rgb(239, 68, 68, 0.8);
}
</style>
