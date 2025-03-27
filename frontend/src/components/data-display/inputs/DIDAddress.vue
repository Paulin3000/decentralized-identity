<template>
  <div class="did-address">
    <span class="text-base did-text">{{ address }}</span>
    <component
      v-if="icon"
      :is="icon"
      :size="16"
      weight="fill"
      :color="iconColor"
    ></component>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { PhSealCheck, PhWarning, PhXCircle } from "@phosphor-icons/vue";

const props = defineProps({
  address: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: null,
    validator: (value) => ["verified", "unknown", "suspicious"].includes(value),
  },
});

const icon = computed(() => {
  if (props.icon === "verified") {
    return PhSealCheck;
  } else if (props.icon === "unknown") {
    return PhWarning;
  } else if (props.icon === "suspicious") {
    return PhXCircle;
  }
  return null;
});

const iconColor = computed(() => {
  if (props.icon === "verified") {
    return "var(--color-good)";
  } else if (props.icon === "unknown") {
    return "var(--color-warning)";
  } else if (props.icon === "suspicious") {
    return "var(--color-bad)";
  }
  return "white";
});
</script>

<style scoped>
.did-address {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.did-text {
  word-break: break-all;
  overflow-wrap: break-word;
  hyphens: auto;
  min-width: 0;
  text-align: left;
}
</style>
