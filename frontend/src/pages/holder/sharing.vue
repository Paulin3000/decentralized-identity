<template>
  <DataDisplayLayout :show-go-back="false">
    <template #header>
      <div class="card-section">
        <CredentialCard
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
            value="Certificate"
            v-model="selectedFields.credentialType"
            required
          />
          <SelectableDataField
            label="Issuer Name"
            value="University of Zürich"
            v-model="selectedFields.issuerName"
            :required="true"
          />
          <SelectableDataField
            label="Issuer DID"
            value="did:ethr:0xA1B2C3D4E5F67890ABCDEF1234567890ABC"
            v-model="selectedFields.issuerDID"
            :required="true"
          />
          <SelectableDataField
            label="Holder Name"
            value="Joe Appleseed"
            v-model="selectedFields.holderName"
            :required="true"
          />
          <SelectableDataField
            label="Holder DID"
            value="did:ethr:0xA1B2C3D4E5F67890ABCDEF1234567890ABC"
            v-model="selectedFields.holderDID"
            :required="true"
          />
          <SelectableDataField
            label="Issued On"
            value="April 1, 2020"
            v-model="selectedFields.issuedOn"
            :required="true"
          />
          <SelectableDataField
            label="Expires On"
            value="July 12, 2032"
            v-model="selectedFields.expiresOn"
            :required="true"
          />
          <SelectableDataField
            label="Status"
            value="Verified"
            v-model="selectedFields.status"
            :required="true"
          />
        </DataContainer>

        <DataContainer
          title="Share Credential Data"
          subtitle="Select which additional credential details you'd like to share with the verifier.
"
          :subtitle-icon="PhInfo"
        >
          <SelectableDataField
            label="Date of Birth"
            value="September 12, 1990"
            v-model="selectedFields.dateOfBirth"
          />
          <SelectableDataField
            label="Course Completed"
            value="Ethics in AI"
            v-model="selectedFields.courseCompleted"
          />
          <SelectableDataField
            label="Final Grade"
            value="5.5 / 6.0"
            v-model="selectedFields.finalGrade"
          />
          <SelectableDataField
            label="ECTS"
            value="2"
            v-model="selectedFields.ects"
          />
          <SelectableDataField
            label="Instructor"
            value="Prof. Sample"
            v-model="selectedFields.instructor"
          />
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
import { onMounted, ref } from "vue";
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

const route = useRoute();
const credentialId = route.params.id;
const showFeedbackModal = ref(false);

const verifierName = ref("");
const verifierDID = ref("");

const credential = ref({
  id: credentialId,
  type: "National ID",
  subheading: "Government of Switzerland",
  verified: true,
  holder: "John Appleseed",
  issuer: "Swiss Federal Office",
  expiryDate: "2028-06-30",
  logoUrl: switzerlandLogo,
  colorTheme: "pink",
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
  dateOfBirth: false,
  courseCompleted: false,
  finalGrade: false,
  ects: false,
  instructor: false,
});

onMounted(() => {
  // Fetch/update credential details as needed
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
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 4rem 0;
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
