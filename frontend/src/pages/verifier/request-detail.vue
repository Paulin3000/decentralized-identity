<template>
  <DataDisplayLayout :show-go-back="true">
    <template #header>
      <PageHeader
        title="New Credential Request "
        subtitle="Send a request to a trusted issuer to claim your credential."
      ></PageHeader>
    </template>

    <template #content>
      <div class="request-section">
        <DataContainer title="Credential Information">
          <DataField label="Holder" :value="credential.holder" />
          <DataField label="Holder DID"
            ><DIDAddress
              address="did:ethr:0xA1B2C3D4E5F67890ABCDEF1234567890ABC"
              show-icon="true"
              icon="verified"
          /></DataField>
          <DataField label="Issuer" :value="credential.issuer" />
          <DataField label="Issuer DID"
            ><DIDAddress
              address="did:ethr:0xA1B2C3D4E5F67890ABCDEF1234567890ABC"
              show-icon="true"
              icon="verified"
          /></DataField>
          <DataField label="Issuance Date" value="Jan 15, 2023" />
          <DataField
            label="Expiry Date"
            :value="formatDate(credential.expiryDate)"
          />
          <DataField label="Status" :isLast="true">
            <status-tag status="verified">Revoked</status-tag>
          </DataField>
        </DataContainer>

        <DataContainer title="Credential Data">
          <DataField label="First Name" value="John" />
          <DataField label="Last Name" value="Appleseed" />
          <DataField label="Date of Birth" value="April 1, 1990" />
          <DataField label="Nationality" value="Swiss" :isLast="true" />
        </DataContainer>

        <CredentialVerifier @verified="isVerified = true" />

        <FeedbackModal
          type="success"
          title="Credential Approved"
          message="The credential request has been verified and approved. The holder will be notified."
          :is-visible="showApprovedFeedbackModal"
          @close="closeFeedbackModal"
        />
        <FeedbackModal
          type="error"
          title="Credential Rejected"
          message="This credential request has been rejected. The holder will be notified about this decision."
          :is-visible="showRejectedFeedbackModal"
          @close="closeFeedbackModal"
        />

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
            Approve
          </IconButton>
        </div>
      </div>
    </template>
  </DataDisplayLayout>
</template>

<script setup>
import PageHeader from "../../components/PageHeader.vue";
import DataContainer from "../../components/data-display/DataContainer.vue";
import DataField from "../../components/data-display/DataField.vue";
import DataDisplayLayout from "../../layouts/DataDisplayLayout.vue";
import StatusTag from "../../components/data-display/inputs/StatusTag.vue";
import { onMounted, ref } from "vue";
import DIDAddress from "../../components/data-display/inputs/DIDAddress.vue";
import IconButton from "../../components/buttons/IconButton.vue";
import { PhCheck, PhX } from "@phosphor-icons/vue";
import FeedbackModal from "../../components/FeedbackModal.vue";
import switzerlandLogo from "../../assets/switzerland.png";
import { useRouter } from "vue-router";
import CredentialVerifier from "../../components/data-display/verify/CredentialVerifier.vue";

const router = useRouter();
const showApprovedFeedbackModal = ref(false);
const showRejectedFeedbackModal = ref(false);
const isVerified = ref(false);

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

onMounted(() => {
  // Fetch/update credential details as needed
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
