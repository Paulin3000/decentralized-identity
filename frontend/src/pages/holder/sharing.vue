<template>
  <DataDisplayLayout :show-go-back="true">
    <template #header>
      <div class="card-section">
        <CredentialCard
          class="credential-card"
          :class="{ 'move-to-right': shouldMove }"
          :id="credential.id"
          :type="credential.type"
          :subheading="credential.subheading"
          :verified="credential.verified"
          :holder="credential.holder"
          :issuer="credential.issuer"
          :expiryDate="credential.expiryDate"
          :logoUrl="credential.logoUrl"
          :color-theme="credential.colorTheme"
          :glowy="true"
        />
        <img
          :src="illustration"
          class="illustration"
          :class="{ 'show-illustration': showIllustration }"
          alt="send to verifier"
        />
      </div>
    </template>
    <template #content>
      <div class="data-section">
        <DataContainer
          title="Verifier Information"
          variant="secondary"
          subtitle="Enter the verifier's details or contact them if you don't have their DID."
          :subtitle-icon="PhInfo"
        >
          <DataField label="Verifier Name">
            <InputField
              placeholder="Enter Name"
              type="text"
              :model-value="verifierName"
            >
            </InputField>
          </DataField>
          <DataField label="Verifier DID" :is-last="true">
            <InputField
              placeholder="Enter DID"
              type="did"
              v-model="verifierDID"
              @trust-status="handleTrustStatus"
            >
            </InputField>
          </DataField>
        </DataContainer>

        <DataContainer
          title="Credential Information"
          subtitle="These fields are required and will always be shared with the verifier.
"
          :subtitle-icon="PhInfo"
        >
          <SelectableDataField
            label="Credential Type"
            :value="credential.type"
            v-model="selectedFields.credentialType"
            required
          />
          <SelectableDataField
            label="Issuer Name"
            :value="credential.issuer"
            v-model="selectedFields.issuerName"
            :required="true"
          />
          <SelectableDataField
            label="Issuer DID"
            :value="credential.issuerDid"
            v-model="selectedFields.issuerDID"
            :required="true"
          />
          <SelectableDataField
            label="Holder Name"
            :value="credential.holder"
            v-model="selectedFields.holderName"
            :required="true"
          />
          <SelectableDataField
            label="Holder DID"
            :value="credential.holderDid"
            v-model="selectedFields.holderDID"
            :required="true"
          />
          <SelectableDataField
            label="Issued On"
            :value="credential.issuanceDate"
            v-model="selectedFields.issuedOn"
            :required="true"
          />
          <SelectableDataField
            label="Expires On"
            :value="credential.expiryDate"
            v-model="selectedFields.expiresOn"
            :required="true"
          />
          <SelectableDataField
            label="Status"
            :value="credential.verified ? 'Verified' : 'Revoked'"
            v-model="selectedFields.status"
            :required="true"
          />
        </DataContainer>

        <DataContainer
          title="Share Credential Data"
          subtitle="Select which additional credential details you'd like to share with the verifier.
"
          :subtitle-icon="PhInfo"
          v-if="credential && credential.additionalData"
        >
          <template v-if="credential && credential.additionalData">
            <SelectableDataField
              v-for="(value, key) in credential.additionalData"
              :key="key"
              :label="formatLabel(key)"
              :value="value"
              v-model="selectedFields[key]"
            />
          </template>
        </DataContainer>

        <div class="buttons-container">
          <IconButton
            variant="outline-primary"
            :icon-left="PhX"
            @click="handleCancel"
          >
            Cancel
          </IconButton>
          <IconButton
            variant="primary"
            :icon-left="PhPaperPlaneTilt"
            icon-weight="fill"
            @click="handleSendCredential"
          >
            Send Credential
          </IconButton>
        </div>
      </div>
    </template>
  </DataDisplayLayout>

  <FeedbackModal
    type="success"
    title="Credential Sent"
    message="Your credential has been sent successfully. You will be notified once it's processed."
    :is-visible="showFeedbackModal"
    @close="closeFeedbackModal"
  >
    <template #left>
      <BaseButton variant="secondary" @click="closeFeedbackModal"
        >Continue</BaseButton
      >
    </template>
  </FeedbackModal>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import DataContainer from "../../components/data-display/DataContainer.vue";
import DataField from "../../components/data-display/DataField.vue";
import CredentialCard from "../../components/CredentialCard.vue";
import switzerlandLogo from "../../assets/switzerland.png";
import router from "../../router/index.js";
import { PhInfo, PhPaperPlaneTilt, PhX } from "@phosphor-icons/vue";
import StatusTag from "../../components/data-display/inputs-DataField/StatusTag.vue";
import DataDisplayLayout from "../../layouts/DataDisplayLayout.vue";
import DIDAddress from "../../components/data-display/inputs-DataField/DIDAddress.vue";
import IconButton from "../../components/buttons/IconButton.vue";
import FeedbackModal from "../../components/FeedbackModal.vue";
import BaseButton from "../../components/buttons/BaseButton.vue";
import InputField from "../../components/data-display/inputs-DataField/InputField.vue";
import SelectableDataField from "../../components/data-display/SelectableDataField.vue";
import illustration from "../../assets/illustrations/send-to-verifier.png";
import { getCredentialById } from "../../stores/credentialStore.js";

const route = useRoute();
const credentialId = computed(() => route.params.id);
const credential = ref({});
const showFeedbackModal = ref(false);

const verifierName = ref("");
const verifierDID = ref("");

const shouldMove = ref(false);
const showIllustration = ref(false);

onMounted(() => {
  const credentialData = getCredentialById(credentialId.value);

  if (credentialData) {
    credential.value = credentialData;
  } else {
    console.error(`Credential with ID ${credentialId.value} not found`);
    // Optionally redirect to a 404 page or back to credentials list
    router.push({ name: "holder-credentials" });
  }
});

const selectedFields = ref({
  credentialType: false,
  issuerName: false,
  issuerDID: false,
  holderName: false,
  holderDID: false,
  issuedOn: false,
  expiresOn: false,
  status: false,
});

if (credential.value && credential.value.additionalData) {
  Object.keys(credential.value.additionalData).forEach((key) => {
    selectedFields.value[key] = false;
  });
}

// Helper function to format the field labels from camelCase
function formatLabel(key) {
  // Convert camelCase to Title Case with spaces
  return key
    .replace(/([A-Z])/g, " $1") // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
    .trim(); // Remove any extra spaces
}

onMounted(() => {
  // Small delay before starting animation
  setTimeout(() => {
    shouldMove.value = true;

    // Show illustration after the card has moved (adjust timing as needed)
    setTimeout(() => {
      showIllustration.value = true;
    }, 200); // 1 second delay after card starts moving
  }, 100);
});

const handleSendCredential = () => {
  showFeedbackModal.value = true;
};

const closeFeedbackModal = () => {
  showFeedbackModal.value = false;
  router.back();
};

const handleCancel = () => {
  console.log("Request cancelled");
  router.back();
};

const handleTrustStatus = (status) => {
  if (status && status.type === "trusted") {
    verifierName.value = "University of Zürich";
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
</script>

<style scoped>
.card-section {
  display: flex;
  width: 100%;
  position: relative;
  padding: 4rem 0;
  min-height: calc(215px + 8rem);
}

.credential-card {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition:
    left 100ms ease-out,
    transform 100ms ease-out;

  pointer-events: none;
  z-index: 1;
}

.move-to-right {
  transform: translateX(-120%);
}

.illustration {
  max-width: 300px;
  height: auto;
  object-fit: contain;
  position: absolute;
  right: 9%;
  top: 30%;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.show-illustration {
  opacity: 1;
}

.data-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4rem;
}

.buttons-container {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
  padding-right: 0.5rem;
}

:deep(.data-container:has(> div[class*="selectable-data-field"])) {
  gap: 0.7rem;
}
</style>
