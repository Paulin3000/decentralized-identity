<template>
  <DataDisplayLayout :show-go-back="false">
    <template #header>
      <DataDisplayHeader
        title="New Credential Request "
        subtitle="Review and verify the details of this credential request before proceeding with issuance."
      ></DataDisplayHeader>
    </template>

    <template #content>
      <div class="request-section">
        <DataContainer title="Credential Information">
          <DataField label="Holder" :value="credential.holder" />
          <DataField label="Holder DID"
            ><DIDAddress
              address="did:ethr:0x7834ACE28B1050685201A64B09A576B14F31"
              show-icon="true"
              icon="verified"
          /></DataField>
          <DataField label="Issuer" value="University of Zürich" />
          <DataField label="Issuer DID"
            ><DIDAddress
              address="did:ethr:0x4A0E8C1F1E262F5F9A9E4B7E520CB5DD7FE"
              show-icon="true"
              icon="verified"
          /></DataField>
          <DataField
            label="Date of Request"
            value="April 30, 2025"
            :is-last="true"
          />
        </DataContainer>

        <DataContainer title="Credential Data">
          <DataField label="First Name" value="John" />
          <DataField label="Last Name" value="Appleseed" />
          <DataField label="Date of Birth" value="April 1, 1990" />
          <DataField label="Student ID" value="18-187-369" />
          <DataField label="Course" value="Ethics in Artificial Intelligence" />
          <DataField label="Semester" value="Spring 2025" />
          <DataField label="Final Grade" value="5.5" />
          <DataField label="ECTS" value="6" />
          <DataField
            label="Instructor"
            value="Prof. Dr. Emma Steinmann"
            :isLast="true"
          />
        </DataContainer>

        <CredentialVerifier mode="issuer" @verified="isVerified = true" />

        <SignatureField
          signer-name="University of Zürich"
          :disabled="!isVerified"
          @signed="isSigned = true"
        />

        <FeedbackModal
          type="success"
          title="Credential Approved"
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
            :disabled="!isVerified || !isSigned"
          >
            Approve
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
import { ref } from "vue";
import DIDAddress from "../../components/data-display/inputs-DataField/DIDAddress.vue";
import IconButton from "../../components/buttons/IconButton.vue";
import { PhCheck, PhX } from "@phosphor-icons/vue";
import FeedbackModal from "../../components/FeedbackModal.vue";
import switzerlandLogo from "../../assets/switzerland.png";
import { useRouter } from "vue-router";
import CredentialVerifier from "../../components/data-display/verify/CredentialVerifier.vue";
import SignatureField from "../../components/data-display/SignatureField.vue";
import BaseButton from "../../components/buttons/BaseButton.vue";

const router = useRouter();
const showApprovedFeedbackModal = ref(false);
const showRejectedFeedbackModal = ref(false);
const isVerified = ref(false);
const isSigned = ref(false);

const credential = ref({
  id: "asdf",
  type: "National ID",
  subheading: "Government of Switzerland",
  verified: true,
  holder: "John Appleseed",
  issuer: "Swiss Federal Office",
  expiryDate: "2028-06-30",
  logoUrl: switzerlandLogo,
  logoContainerColor: "var(--color-pink)",
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
