<template>
  <li class="nav-item" @click="$emit('click')">
    <div class="icon-container">
      <component
        v-if="icon"
        :is="icon"
        :size="iconSize"
        :weight="isActive ? 'fill' : iconWeight"
      />
      <div v-if="badgeCount > 0" class="notification-badge">
        {{ formatBadgeCount(badgeCount) }}
      </div>
    </div>

    <span class="text-sm font-medium">
      {{ text }}
    </span>
  </li>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  icon: {
    // from phosphor-vue or pass null
    type: [Object, null],
    default: null,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  iconSize: {
    type: Number,
    default: 24,
  },
  iconWeight: {
    type: String,
    default: "bold",
  },
  badgeCount: {
    type: Number,
    default: 0,
  },
});

const formatBadgeCount = (count) => {
  return count > 99 ? "99+" : count;
};
</script>

<style scoped>
.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.icon-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.notification-badge {
  position: absolute;
  top: -7px;
  right: -9px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  background-color: var(--color-bad);
  color: white;
  font-size: 11px;
  font-weight: bold;
  border-radius: 9999px;
  padding: 0 4px;
  box-sizing: border-box;
}
</style>
