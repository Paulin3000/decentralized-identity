<template>
  <DataDisplayLayout :show-go-back="false">
    <template #header>
      <DataDisplayHeader
        title="New Credential Request "
        subtitle="Check the credential details to verify their authenticity and validity before you accept them. Verification is based on trusted records from the issuer."
      ></DataDisplayHeader>
    </template>

    <template #content>
      <div class="request-section">
        <DataContainer title="Credential Information">
          <DataField label="Holder" :value="credential.holder" />
          <DataField label="Holder DID"
            ><DIDAddress
              :address="credential.holderDid"
              show-icon="true"
              icon="verified"
          /></DataField>
          <DataField label="Issuer" :value="credential.issuer" />
          <DataField label="Issuer DID"
            ><DIDAddress
              :address="credential.issuerDid"
              show-icon="true"
              icon="verified"
          /></DataField>
          <DataField
            label="Issuance Date"
            :value="formatDate(credential.issuanceDate)"
          />
          <DataField
            label="Expiry Date"
            :value="formatDate(credential.expiryDate)"
          />
          <DataField label="Status" :isLast="true">
            <status-tag :status="credential.verified ? 'verified' : 'revoked'">
              {{ credential.verified ? "Verified" : "Revoked" }}
            </status-tag>
          </DataField>
        </DataContainer>

        <DataContainer title="Credential Data" v-if="credential.additionalData">
          <template
            v-for="(value, key) in credential.additionalData"
            :key="key"
          >
            <DataField
              :label="
                key
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, (str) => str.toUpperCase())
              "
              :value="value"
              :isLast="Object.keys(credential.additionalData).pop() === key"
            />
          </template>
        </DataContainer>

        <CredentialVerifier @verified="isVerified = true" />

        <FeedbackModal
          type="success"
          title="Credential Accepted"
          message="The credential request has been verified and approved. The holder will be notified."
          :is-visible="showApprovedFeedbackModal"
          @close="closeFeedbackModal"
        >
          <template #left>
            <BaseButton variant="secondary" @click="closeFeedbackModal"
              >Continue</BaseButton
            >
          </template>
        </FeedbackModal>
        <FeedbackModal
          type="error"
          title="Credential Rejected"
          message="This credential request has been rejected. The holder will be notified about this decision."
          :is-visible="showRejectedFeedbackModal"
          @close="closeFeedbackModal"
        >
          <template #left>
            <BaseButton variant="secondary" @click="closeFeedbackModal"
              >Continue</BaseButton
            >
          </template>
        </FeedbackModal>

        <div class="buttons-container">
          <IconButton
            variant="outline-primary"
            :icon-left="PhX"
            @click="handleReject"
          >
            Reject
          </IconButton>
          <IconButton
            variant="primary"
            :icon-left="PhCheck"
            @click="handleApprove"
            :disabled="!isVerified"
          >
            Accept
          </IconButton>
        </div>
      </div>
    </template>
  </DataDisplayLayout>
</template>

<script setup>
import DataDisplayHeader from "../../components/DataDisplayHeader.vue";
import DataContainer from "../../components/data-display/DataContainer.vue";
import DataField from "../../components/data-display/DataField.vue";
import DataDisplayLayout from "../../layouts/DataDisplayLayout.vue";
import StatusTag from "../../components/data-display/inputs-DataField/StatusTag.vue";
import { ref } from "vue";
import DIDAddress from "../../components/data-display/inputs-DataField/DIDAddress.vue";
import IconButton from "../../components/buttons/IconButton.vue";
import { PhCheck, PhX } from "@phosphor-icons/vue";
import FeedbackModal from "../../components/FeedbackModal.vue";
import { useRouter } from "vue-router";
import CredentialVerifier from "../../components/data-display/verify/CredentialVerifier.vue";
import BaseButton from "../../components/buttons/BaseButton.vue";
import uzhLogo from "../../assets/uzh-acronym.svg";

const router = useRouter();
const showApprovedFeedbackModal = ref(false);
const showRejectedFeedbackModal = ref(false);
const isVerified = ref(false);

const credential = ref({
  id: "degree-id-1",
  type: "University Degree",
  subheading: "University of Zurich",
  verified: true,
  holder: "John Appleseeed",
  holderDid: "did:ethr:0x7834ACE28B1050685201A64B09A576B14F31",
  issuer: "University of Zurich",
  issuerDid: "did:ethr:0x4A0E8C1F1E262F5F9A9E4B7E520CB5DD7FE",
  expiryDate: "January 1, 2099",
  logoUrl: uzhLogo,
  colorTheme: "blue",
  issuanceDate: "July 6, 2025",
  additionalData: {
    firstName: "John",
    lastName: "Appleseed",
    degree: "Bachelor of Science",
    field: "Computer Science",
    graduationDate: "April 30, 2025",
    gpa: "5.25/6.0",
  },
  verification: {
    lastVerified: "July 16, 2025",
    method: "did:ethr:0x4A0E8C1F1E262F5F9A9E4B7E520CB5DD7FE",
  },
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const handleApprove = () => {
  showApprovedFeedbackModal.value = true;
};

const handleReject = () => {
  showRejectedFeedbackModal.value = true;
};

const closeFeedbackModal = () => {
  showApprovedFeedbackModal.value = false;
  showRejectedFeedbackModal.value = false;
  router.push("/verifier/requests");
};
</script>

<style scoped>
.request-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.75rem;
}
.buttons-container {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
  padding-right: 0.5rem;
}
</style>
