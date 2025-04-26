<template>
  <BaseButton
    :variant="variant"
    :is-active="isActive"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <template v-if="iconLeft" #icon-left>
      <span class="icon" :style="{ transform: `rotate(${iconRotation}deg)` }">
        <component :is="iconLeft" :size="iconSize" :weight="iconWeight" />
      </span>
    </template>

    <slot>{{ text }}</slot>

    <template v-if="iconRight" #icon-right>
      <span class="icon" :style="{ transform: `rotate(${iconRotation}deg)` }">
        <component :is="iconRight" :size="iconSize" :weight="iconWeight" />
      </span>
    </template>
  </BaseButton>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";

defineProps({
  text: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "primary",
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  iconLeft: {
    type: [Object, null],
    default: null,
  },
  iconRight: {
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

defineEmits(["click"]);
</script>

<style scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
}
</style>
