<template>
  <DataDisplayLayout :show-go-back="true">
    <template #header>
      <PageHeader
        title="Request New Credential"
        subtitle="Send a request to a trusted issuer to claim your credential."
      ></PageHeader>
    </template>

    <template #content>
      <div class="request-section">
        <DataContainer>
          <DataField label="Credential Type" value="..." has-status="true">
            <InputField type="text" placeholder="Enter credential type" />
          </DataField>
          <DataField label="Issuer DID" :is-last="true"
            ><InputField
              type="did"
              placeholder="Enter Issuer DID"
              v-model="issuerDID"
          /></DataField>
        </DataContainer>
        <DataContainer>
          <DataField label="Your DID">
            <DIDAddress
              address="did:ethr:0xA1B2C3D4E5F67890ABCDEF1234567890ABC"
              :show-icon="true"
              icon="verified"
            ></DIDAddress>
          </DataField>
          <DataField label="Additional Documents">
            <LinkButton>Attach Credentials or Documents</LinkButton>
          </DataField>
          <DataField label="Message" is-last="true">
            <InputField type="text" placeholder="Enter message" />
          </DataField>
        </DataContainer>
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
import InputField from "../../components/data-display/inputs/InputField.vue";
import LinkButton from "../../components/data-display/inputs/LinkButton.vue";
import { ref } from "vue";
import DIDAddress from "../../components/data-display/inputs/DIDAddress.vue";

const issuerDID = ref("");
const trustStatus = ref(null);

const handleTrustStatus = (status) => {
  trustStatus.value = status;
  console.log("Trust status updated:", status);
};
</script>

<style scoped>
.request-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
</style>
