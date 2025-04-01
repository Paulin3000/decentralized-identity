<template>
  <div class="signature-field" :class="{ 'is-signed': isSigned }">
    <div class="signature-header">
      <h4 class="signature-title">Digital Signature</h4>
      <div class="signature-action">
        <IconButton
          v-if="!isSigned"
          @click="signDocument"
          variant="primary"
          :disabled="isSigningInProgress || disabled"
          :icon-left="PhSignature"
          icon-weight="bold"
        >
          <span v-if="!isSigningInProgress">Sign Document</span>
          <div v-else class="spinner-container">
            <div class="signing-spinner"></div>
          </div>
        </IconButton>

        <div v-else class="signed-indicator">
          <PhCheckCircle :size="20" weight="fill" />
          <span>Signed</span>
        </div>
      </div>
    </div>

    <div
      v-if="isSigned"
      class="signature-content"
      :class="{ 'signature-appear': isSigned }"
    >
      <div class="signature-info">
        <div class="signature-row">
          <div class="signature-label">Signer:</div>
          <div class="signature-value">{{ signerName }}</div>
        </div>
        <div class="signature-row">
          <div class="signature-label">Signed on:</div>
          <div class="signature-value">{{ formattedSignatureDate }}</div>
        </div>
        <div class="signature-row">
          <div class="signature-label">Signature:</div>
          <div class="signature-value signature-hash">{{ signatureHash }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from "vue";
import { PhSignature, PhCheckCircle, PhKey } from "@phosphor-icons/vue";
import IconButton from "../buttons/IconButton.vue";

const props = defineProps({
  signerName: {
    type: String,
    default: "John Appleseed",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["signed"]);

const isSigned = ref(false);
const isSigningInProgress = ref(false);
const signatureDate = ref(null);
const signatureHash = ref("");

const formattedSignatureDate = computed(() => {
  if (!signatureDate.value) return "";
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(signatureDate.value);
});

function generateSignatureHash() {
  const chars = "0123456789abcdef";
  let hash = "0x";
  for (let i = 0; i < 64; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return hash;
}

async function signDocument() {
  isSigningInProgress.value = true;

  // Simulate signing process
  await new Promise((resolve) => setTimeout(resolve, 1000));

  signatureDate.value = new Date();
  signatureHash.value = generateSignatureHash();
  isSigned.value = true;
  isSigningInProgress.value = false;

  emit("signed", {
    date: signatureDate.value,
    signature: signatureHash.value,
  });

  // Wait a little to ensure the DOM is updated with new content
  await nextTick();

  // Scroll to show the signature information
  setTimeout(() => {
    const el = document.querySelector(".signature-content");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 100); // Small delay to allow CSS transitions to start
}
</script>

<style scoped>
.signature-field {
  border: 1px solid #e5e7eb;
  border-radius: 1.5rem;
  padding: 2rem 20px;
  margin: 16px 0;
  transition: all 0.3s ease;
  overflow: hidden;
  width: 100%;
}

.signature-field.is-signed {
  border-color: var(--color-primary);
  box-shadow: 0 0 12px rgba(73, 92, 248, 0.2);
  animation: pulse 1s ease-in-out;
}

.signature-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-left: 0.6rem;
}

.signature-title {
  font-size: 16px;
  font-weight: var(--font-semibold);
}

.sign-button:hover {
  background-color: var(--color-primary-dark, #3d5afe);
}

.sign-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.signed-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-good, #4caf50);
  font-weight: var(--font-medium);
}

.signature-content {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
  opacity: 0;
  max-height: 0;
  transition: all 0.5s ease;
  padding-left: 0.6rem;
}

.signature-appear {
  opacity: 1;
  max-height: 500px;
}

.signature-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 1rem;
}

.signature-row {
  display: flex;
  gap: 16px;
}

.signature-label {
  font-weight: var(--font-semibold);
  min-width: 100px;
  color: var(--color-text-secondary);
  text-align: left;
}

.signature-value {
  color: var(--color-text-primary);
  word-break: break-all;
}

.signature-hash {
  font-family: monospace;
  padding: 4px 8px;
  background-color: rgba(3, 92, 248, 0.2);
  border-radius: 4px;
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 122px;
}
.signing-spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid currentColor;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spinner-rotation 1s linear infinite;
  vertical-align: middle;
}

@keyframes spinner-rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(73, 92, 248, 0.4);
  }
  70% {
    box-shadow: 0 0 0 30px rgba(73, 92, 248, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(73, 92, 248, 0);
  }
}
</style>
