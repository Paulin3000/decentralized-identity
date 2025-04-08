<template>
  <div class="credential-verifier">
    <h3 class="container-title">Credential Verification</h3>
    <div class="container">
      <div class="verification-items">
        <VerificationItem
          v-for="(item, index) in items"
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
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { PhShieldCheck, PhWarning, PhSealCheck } from "@phosphor-icons/vue";
import IconButton from "../../../components/buttons/IconButton.vue";
import VerificationItem from "./VerificationItem.vue";

const isVerifying = ref(false);
const isVerified = ref(false);
const items = ref([]);

const props = defineProps({
  mode: {
    type: String,
    default: "verifier",
    validator: (value) => ["verifier", "issuer"].includes(value),
  },
});

const verificationItemsVerifier = [
  {
    title: "DID Verification",
    description: "Is the holder’s DID registered and not blacklisted?",
    status: "initial",
  },
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
];

const verificationItemsIssuer = [
  {
    title: "Requestor Identity",
    description: "Is the requestor identity valid and registered?",
    status: "initial",
  },
  {
    title: "Request Signature",
    description: "Is the request properly signed by the requestor?",
    status: "initial",
  },
];

// Initialize items based on mode
function updateItems() {
  // Create deep copies of the arrays to make them reactive
  items.value =
    props.mode === "verifier"
      ? verificationItemsVerifier.map((item) => ({ ...item }))
      : verificationItemsIssuer.map((item) => ({ ...item }));
}

// Call initially and watch for changes
updateItems();
watch(() => props.mode, updateItems);

const emit = defineEmits(["verified"]);

const allVerified = computed(() => {
  return (
    isVerified.value && items.value.every((item) => item.status === "verified")
  );
});

async function startVerification() {
  isVerifying.value = true;

  items.value.forEach((item) => {
    item.status = "verifying";
  });

  for (let i = 0; i < items.value.length; i++) {
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 500),
    );

    const success = Math.random() > 0.0;
    items.value[i].status = success ? "verified" : "failed";
  }

  isVerifying.value = false;
  isVerified.value = true;

  emit("verified");
}
</script>

<style scoped>
.credential-verifier {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
}
.container-title {
  margin: 0;
  text-align: left;
  padding-left: 4px;
  width: 100%;
}

.container {
  background: var(--color-container-secondary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  width: 100%;
}

.verification-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.bottom-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
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
