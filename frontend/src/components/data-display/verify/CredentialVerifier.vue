<template>
  <DataContainer title="Credential Verification">
    <div class="verification-items">
      <VerificationItem
        v-for="(item, index) in verificationItems"
        :key="index"
        :title="item.title"
        :description="item.description"
        :status="item.status"
      />

      <div class="bottom-container">
        <div>
          <div class="verification-result" v-if="isVerified">
            <PhSealCheck
              v-if="allVerified"
              size="24"
              weight="fill"
              class="summary-icon icon-good"
            />
            <PhWarning
              v-else
              size="24"
              weight="fill"
              class="summary-icon icon-bad"
            />
            <span
              class="summary-text"
              :class="allVerified ? 'text-good' : 'text-bad'"
            >
              {{ allVerified ? "Verified" : "Verification Failed" }}
            </span>
          </div>
        </div>

        <IconButton
          :disabled="isVerifying || isVerified"
          variant="primary"
          :icon-left="PhShieldCheck"
          icon-weight="fill"
          @click="startVerification"
        >
          Verify Now
        </IconButton>
      </div>
    </div>
  </DataContainer>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  PhShieldCheck,
  PhCheckCircle,
  PhWarning,
  PhSealCheck,
} from "@phosphor-icons/vue";
import IconButton from "../../../components/buttons/IconButton.vue";
import VerificationItem from "./VerificationItem.vue";
import DataContainer from "../DataContainer.vue";

const isVerifying = ref(false);
const isVerified = ref(false);

const verificationItems = ref([
  {
    title: "Issuer's Signature",
    description: "Is the credential signed by the expected issuer?",
    status: "initial",
  },
  {
    title: "Credential Hash",
    description: "Does the credential match its on-chain hash?",
    status: "initial",
  },
  {
    title: "Expiration Date",
    description: "Is the credential still valid and not expired?",
    status: "initial",
  },
  {
    title: "Revocation Status",
    description: "Has this credential been revoked by the issuer?",
    status: "initial",
  },
  {
    title: "DID Verification",
    description: "Is the holder’s DID registered and not blacklisted?",
    status: "initial",
  },
]);

const emit = defineEmits(["verified"]);

const allVerified = computed(() => {
  return (
    isVerified.value &&
    verificationItems.value.every((item) => item.status === "verified")
  );
});

async function startVerification() {
  isVerifying.value = true;

  verificationItems.value.forEach((item) => {
    item.status = "verifying";
  });

  for (let i = 0; i < verificationItems.value.length; i++) {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 500),
    );

    const success = Math.random() > 0.2;
    verificationItems.value[i].status = success ? "verified" : "failed";
  }

  isVerifying.value = false;
  isVerified.value = true;

  emit("verified");
}
</script>

<style scoped>
.verification-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.bottom-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 52px;
}

.verification-result {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding-left: 0.5rem;
}
.summary-icon.icon-good {
  color: var(--color-good);
}

.summary-icon.icon-bad {
  color: var(--color-bad);
}

.summary-text {
  font-weight: var(--font-semibold);
  font-size: 16px;
}

.text-good {
  color: var(--color-good);
}

.text-bad {
  color: var(--color-bad);
}
</style>
