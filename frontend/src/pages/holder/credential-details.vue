<template>
  <DataDisplayLayout :show-go-back="true">
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
      <div class="details-section">
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

        <DataContainer title="Verification History">
          <DataField label="Last Verification" value="May 12, 2023" />
          <DataField
            label="Verification Method"
            value="Blockchain Consensus"
            :isLast="true"
          />
        </DataContainer>
      </div>
    </template>
  </DataDisplayLayout>
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
import StatusTag from "../../components/data-display/inputs/StatusTag.vue";
import GoBackButton from "../../components/GoBackButton.vue";
import DataDisplayLayout from "../../layouts/DataDisplayLayout.vue";
import DIDAddress from "../../components/data-display/inputs/DIDAddress.vue";

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
  colorTheme: "pink",
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
.card-section {
  display: flex;
  justify-content: center;
  width: 100%;
}

.details-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.5rem;
}
</style>
