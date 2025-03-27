<template>
  <div class="verification-item" :class="statusClass">
    <div class="verification-icon">
      <div class="status-circle" :class="`status-circle-${status}`">
        <PhCheck
          v-if="status === 'verified'"
          size="16"
          weight="bold"
          class="icon"
        />
        <PhX
          v-else-if="status === 'failed'"
          size="16"
          weight="bold"
          class="icon"
        />
        <div v-else-if="status === 'verifying'" class="verifying-spinner"></div>
        <!-- Empty circle for initial state -->
      </div>
    </div>
    <div class="verification-content">
      <h4 class="verification-title">{{ title }}</h4>
      <p class="verification-description">{{ description }}</p>
    </div>
    <div class="verification-status">
      <span
        v-if="status !== 'pending'"
        class="status-text"
        :class="`status-text-${status}`"
      >
        {{ statusText }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { PhCheck, PhX } from "@phosphor-icons/vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    validator: (val) =>
      ["verified", "failed", "verifying", "initial"].includes(val),
  },
});

const statusClass = computed(() => {
  return `status-${props.status}`;
});

const statusText = computed(() => {
  switch (props.status) {
    case "verified":
      return "Verified";
    case "failed":
      return "Failed";
    case "verifying":
      return "Verifying...";
    case "initial":
      return "Blockchain Verification";
    default:
      return "";
  }
});
</script>

<style scoped>
.verification-item {
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 16px;
  border-radius: 1.25rem;
  margin-bottom: 12px;
  transition: all 0.3s ease;
}

.verification-icon {
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
}

.status-circle-verified {
  border-color: var(--color-good);
  background-color: var(--color-good);
}

.status-circle-failed {
  border-color: var(--color-bad);
  background-color: var(--color-bad);
}

.status-circle-initial .status-circle-verifying {
  border-color: white;
}

.verification-content {
  flex-grow: 1;
  text-align: left;
}

.verification-title {
  font-size: 16px;
  font-weight: var(--font-semibold);
  margin: 0 0 4px 0;
}

.verification-description {
  font-size: 14px;
  color: var(--color-text-secondary);
  margin: 0;
}

.verification-status {
  white-space: nowrap;
}

.status-text {
  font-size: 14px;
  font-weight: var(--font-medium);
}

.status-text-verified {
  color: var(--color-good);
}

.status-text-failed {
  color: var(--color-bad);
}

.status-text-verifying {
  color: var(--color-text-secondary);
}
.status-text-initial {
  color: var(--color-text-secondary);
}

.status-verified {
  background-color: rgba(0, 200, 0, 0.1);
  border: 1px solid var(--color-good);
}

.status-failed {
  background-color: rgba(255, 0, 0, 0.1);
  border: 1px solid var(--color-bad);
}

.status-verifying,
.status-initial {
  border: 1px solid #e5e7eb;
}

.verifying-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spinner 1s ease-in-out infinite;
}

.icon {
  color: var(--color-container);
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
/* Updated CSS for pulse effects */
@keyframes pulse-green {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 200, 0, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(0, 200, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 200, 0, 0);
  }
}

@keyframes pulse-red {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
  }
}

.status-verified {
  animation: pulse-green 1s ease-in-out;
}
.status-failed {
  animation: pulse-red 1s ease-in-out;
}
</style>
