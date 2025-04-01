<template>
  <div class="status-tag" :class="statusClass">
    <component
      v-if="showIcon"
      :is="statusIcon"
      :size="iconSize"
      weight="fill"
    ></component>
    <span class="text-sm">{{ statusText }}</span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { PhSealCheck, PhXCircle } from "@phosphor-icons/vue";

const props = defineProps({
  status: {
    type: String,
    required: true,
    validator: (val) => ["verified", "revoked"].includes(val),
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  iconSize: {
    type: Number,
    default: 16,
  },
});

const statusClass = computed(() => {
  return `status-${props.status}`;
});

const statusIcon = computed(() => {
  return props.status === "verified" ? PhSealCheck : PhXCircle;
});

const statusText = computed(() => {
  return props.status === "verified" ? "Verified" : "Revoked";
});
</script>

<style scoped>
.status-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 1rem;
  font-weight: var(--font-semibold);
}

.status-verified {
  background-color: rgba(25, 200, 120, 0.1);
  color: var(--color-good, #19c878);
}

.status-revoked {
  background-color: rgba(239, 68, 68, 0.1);
  color: var(--color-bad);
}
</style>
