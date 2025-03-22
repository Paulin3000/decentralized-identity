<template>
  <div class="credential-detail-page">
    <div class="top-container">
      <GoBackButton class="back-button-container" />

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
          :logo-container-color="credential.logoContainerColor"
        />
      </div>
    </div>

    <div class="details-section">
      <DataContainer title="Credential Information">
        <DataField label="Holder" :value="credential.holder" />
        <DataField
          label="Holder DID"
          value="did:ethr:0xA1B2C3D4E5F67890ABCDEF1234567890ABC"
          :has-verified-icon="true"
        />
        <DataField label="Issuer" :value="credential.issuer" />
        <DataField
          label="Issuer DID"
          value="did:ethr:0xA1B2C3D4E5F67890ABCDEF1234567890ABC"
          :has-verified-icon="true"
        />
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

      <DataContainer title="Verification History">
        <DataField label="Last Verification" value="May 12, 2023" />
        <DataField
          label="Verification Method"
          value="Blockchain Consensus"
          :isLast="true"
        />
      </DataContainer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Header from "../../components/Header.vue";
import DataContainer from "../../components/data-display/DataContainer.vue";
import DataField from "../../components/data-display/DataField.vue";
import CredentialCard from "../../components/CredentialCard.vue";
import switzerlandLogo from "../../assets/switzerland.png";
import router from "../../router/index.js";
import { PhSealCheck } from "@phosphor-icons/vue";
import StatusTag from "../../components/things/StatusTag.vue";
import GoBackButton from "../../components/things/GoBackButton.vue";

const route = useRoute();
const credentialId = route.params.id;

const credential = ref({
  id: credentialId,
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
</script>

<style scoped>
.top-container {
  display: flex;
  align-items: start;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
}

.back-button-container {
  position: absolute;
  left: 0;
  top: 1rem;
}

.details-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 1rem 7rem;
}

.card-section {
  display: flex;
  justify-content: center;
}

.details-section {
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
}
</style>
