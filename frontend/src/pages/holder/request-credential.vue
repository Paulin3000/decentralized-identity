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
          <DataField label="Credential Type" value="..."></DataField>
          <DataField
            label="Issuer DID"
            value="..."
            :is-last="true"
            :has-info-icon="true"
          ></DataField>
        </DataContainer>
        <DataContainer>
          <DataField
            label="Your DID"
            value="did:ethr:0xA1B2C3D4E5F67890ABCDEF1234567890ABC"
            :has-verified-icon="true"
            :has-info-icon="true"
          ></DataField>
          <DataField label="Additional Documents" value="..."></DataField>
          <DataField label="Message" value="..." :is-last="true"></DataField>
        </DataContainer>
        <DataContainer>
          <DataField
            label="Your DID"
            value="did:ethr:0xA1B2C3D4E5F67890ABCDEF1234567890ABC"
            :has-verified-icon="true"
            :has-info-icon="true"
          ></DataField>
          <DataField label="Issuer DID" value="..." :has-info-icon="true">
            <InputField type="did"> </InputField>
          </DataField>
          <DataField label="Additional Documents">
            <uploadButton>upload Credentials or Documents</uploadButton>
          </DataField>
          <DataField
            label="Message"
            value="..."
            :is-last="true"
            :has-info-icon="true"
            ><StatusTag status="revoked"
          /></DataField>
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
import UploadButton from "../../components/data-display/inputs/uploadButton.vue";
</script>

<style scoped>
.request-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
</style>
