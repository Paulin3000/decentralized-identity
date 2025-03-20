<template>
  <div class="credential-detail-page">
    <Header :title="credential.type" :showBackButton="true" />

    <div class="credential-detail-content">
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
        />
      </div>

      <div class="details-section">
        <DataContainer title="Credential Information">
          <DataField
            label="Holder"
            :value="credential.holder"
            description="The entity that owns this credential"
          />
          <DataField
            label="Holder DID"
            value="did:example:holder123456789"
            description="Decentralized identifier of the credential holder"
          />
          <DataField
            label="Issuer"
            :value="credential.issuer"
            description="The entity that issued this credential"
          />
          <DataField
            label="Issuer DID"
            value="did:example:issuer987654321"
            description="Decentralized identifier of the credential issuer"
          />
          <DataField
            label="Issuance Date"
            value="Jan 15, 2023"
            description="Date when this credential was issued"
          />
          <DataField
            label="Expiry Date"
            :value="formatDate(credential.expiryDate)"
            description="Date when this credential will expire"
            :isLast="true"
          />
        </DataContainer>

        <DataContainer title="Credential Data">
          <DataField
            label="First Name"
            value="John"
            description="Legal first name as per government ID"
          />
          <DataField
            label="Last Name"
            value="Appleseed"
            description="Legal last name as per government ID"
          />
          <DataField
            label="Date of Birth"
            value="April 1, 1990"
            description="Date of birth as per government records"
          />
          <DataField
            label="Nationality"
            value="Swiss"
            description="Country of citizenship"
            :isLast="true"
          />
        </DataContainer>

        <DataContainer title="Verification History">
          <DataField
            label="Last Verification"
            value="May 12, 2023"
            description="Date when this credential was last verified"
          />
          <DataField
            label="Verification Method"
            value="Blockchain Consensus"
            description="The method used to verify this credential"
            :isLast="true"
          />
        </DataContainer>
      </div>
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
  logoUrl: "/placeholder-logo.svg",
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
.credential-detail-page {
  padding: 20px;
}

.credential-detail-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
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
