<template>
  <div class="input-field">
    <input
      :type="type"
      :value="modelValue"
      @input="handleInput"
      class="input"
      :placeholder="placeholder"
      :disabled="disabled"
    />

    <div v-if="type === 'did'" class="message-container">
      <div v-if="type === 'did' && trustStatus">
        <template v-if="trustStatus.type === 'trusted'">
          <div class="message-inner-container">
            <component
              :is="PhSealCheck"
              :size="16"
              weight="fill"
              style="color: var(--color-good)"
            ></component>
            <p class="message-text" style="color: var(--color-good)">
              {{ trustStatus.message }}
            </p>
          </div>
        </template>
        <template v-else-if="trustStatus.type === 'unknown'">
          <div class="message-inner-container">
            <component
              :is="PhWarning"
              :size="16"
              weight="fill"
              style="color: var(--color-warning)"
            ></component>
            <p class="message-text" style="color: var(--color-warning)">
              {{ trustStatus.message }}
            </p>
          </div>
        </template>
        <template v-else-if="trustStatus.type === 'suspicious'">
          <div class="message-inner-container">
            <component
              :is="PhXCircle"
              :size="16"
              weight="fill"
              style="color: var(--color-bad)"
            ></component>
            <p class="message-text" style="color: var(--color-bad)">
              {{ trustStatus.message }}
            </p>
          </div>
        </template>
      </div>
      <template v-if="!trustStatus">
        <div class="message-inner-container">
          <p class="message-text" style="color: var(--color-text-secondary)">
            DIDs are verified automatically for your security
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { PhSealCheck, PhWarning, PhXCircle } from "@phosphor-icons/vue";

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

const emit = defineEmits(["update:modelValue", "trust-status"]);
const trustStatus = ref(null);

const checkDIDTrust = (did) => {
  if (!did) return null;

  // mock implementation with the first letter of the DID after "did:ethr:Ox"
  const parts = did.split(":");
  if (parts.length < 3) return null;

  const address = parts[2];
  if (!address || address.length < 1) return null;

  const firstChar = address.charAt(2).toUpperCase();

  if (firstChar === "A") {
    return {
      type: "trusted",
      message: "This DID belongs to a trusted issuer",
    };
  } else if (firstChar === "B") {
    return {
      type: "unknown",
      message: "This DID is not recognized",
    };
  } else if (firstChar === "C") {
    return {
      type: "suspicious",
      message: "Warning: This DID is flagged as suspicious",
    };
  } else {
    return {
      type: "unknown",
      message: "Cannot verify this DID",
    };
  }
};

const handleInput = (event) => {
  const newValue = event.target.value;
  emit("update:modelValue", newValue);

  if (props.type === "did") {
    const status = checkDIDTrust(newValue);
    trustStatus.value = status;
    emit("trust-status", status);
    console.log(status);
  }
};

// if model value changes because without the user typing
watch(
  () => props.modelValue,
  (newValue) => {
    if (props.type === "did") {
      trustStatus.value = checkDIDTrust(newValue);
      emit("trust-status", trustStatus.value);
    }
  },
  { immediate: true },
);
</script>

<style scoped>
.input-field {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  padding: 8px 12px;
  border-radius: 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text-primary);
  font-size: var(--text-base);
  transition: border-color 300ms ease-in-out;
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
}
.input:hover {
  outline: none;
  border-color: var(--color-primary);
}

.input::placeholder {
  color: #707070;
}

.message-container {
  height: 30px;
  display: flex;
  align-items: flex-end;
}

.message-inner-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
}
.message-text {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
}
</style>
