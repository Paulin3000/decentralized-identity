<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isVisible" class="feedback-modal-overlay" @click="onClose">
        <div class="feedback-modal" @click.stop>
          <div class="feedback-icon" :class="type">
            <component
              :is="icon"
              size="64"
              weight="regular"
              :color="iconColor"
            />
          </div>
          <h2 class="feedback-heading" :class="type">{{ title }}</h2>
          <p class="feedback-message">{{ message }}</p>
          <IconButton variant="secondary" @click="onClose">
            {{ buttonText }}
          </IconButton>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed } from "vue";
import IconButton from "./buttons/IconButton.vue";
import { PhCheckCircle, PhXCircle } from "@phosphor-icons/vue";

const props = defineProps({
  type: {
    type: String,
    default: "success",
    validator: (value) => ["success", "error"].includes(value),
  },
  title: {
    type: String,
    default: "Success",
  },
  message: {
    type: String,
    default: "",
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
  buttonText: {
    type: String,
    default: "Continue",
  },
});

const emit = defineEmits(["close"]);

const onClose = () => {
  emit("close");
};

const icon = computed(() => {
  return props.type === "success" ? PhCheckCircle : PhXCircle;
});

const iconColor = computed(() => {
  return props.type === "success" ? "var(--color-good)" : "var(--color-bad)";
});
</script>

<style scoped>
.feedback-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  backdrop-filter: blur(4px);
}

.feedback-modal {
  background-color: var(--color-background);
  border-radius: 16px;
  padding: 2rem;
  max-width: 430px;
  width: 90%;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feedback-icon {
  margin-bottom: 1.5rem;
}

.feedback-heading {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.feedback-heading.success {
  color: var(--color-good);
}

.feedback-heading.error {
  color: var(--color-bad);
}

.feedback-message {
  margin-bottom: 2rem;
  line-height: 1.5;
  color: var(--color-text-secondary);
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
