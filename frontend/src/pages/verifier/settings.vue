<template>
  <DataDisplayLayout :show-go-back="false">
    <template #header>
      <h1 class="header">Settings</h1>
    </template>
    <template #content>
      <div class="settings-section">
        <DataContainer title="Identity">
          <dataField label="Your Role" value="Credential Holder"></dataField>
          <dataField label="Your Decentralized ID" :is-last="true">
            <DIDAddress
              address="did:ethr:0x7834ACE28B1050685201A64B09A576B14F33"
              show-icon="true"
              icon="verified"
            />
          </dataField>
        </DataContainer>

        <DataContainer title="Security & Privacy">
          <dataField label="Biometric Login" value="Enable FaceID"></dataField>
          <dataField label="PIN Protection" value="Change PIN"></dataField>
          <dataField label="Backup and Recovery" value="Backup Credentials">
          </dataField>
          <dataField
            label="Backup Status"
            value="Last backup: March 30, 2025"
          ></dataField>
          <dataField label="Private Key" :is-last="true">
            <LinkButton>Reveal Private Key</LinkButton>
          </dataField>
        </DataContainer>

        <DataContainer title="Preferences">
          <dataField label="Language" value="English"></dataField>
          <dataField label="Time & Date Format" value="en-US"></dataField>
          <dataField label="Theme" value="Dark" :is-last="true"> </dataField>
        </DataContainer>

        <DataContainer title="Help & Transparency">
          <dataField label="About your DID">
            <LinkButton
              >Learn how your decentralized identity works.</LinkButton
            >
          </dataField>
          <dataField label="Trusted Issuer List">
            <LinkButton>View Trusted Issuers</LinkButton>
          </dataField>
          <dataField label="Legal Information" :is-last="true">
            <LinkButton>Terms of Use & Privacy Policy </LinkButton>
          </dataField>
        </DataContainer>
      </div>
    </template>
  </DataDisplayLayout>
</template>
<script setup lang="ts">
import DataDisplayLayout from "../../layouts/DataDisplayLayout.vue";
import DataContainer from "../../components/data-display/DataContainer.vue";
import DataField from "../../components/data-display/DataField.vue";
import DIDAddress from "../../components/data-display/inputs-DataField/DIDAddress.vue";
import LinkButton from "../../components/data-display/inputs-DataField/LinkButton.vue";
</script>

<style scoped>
.header {
  padding: 2rem 0;
}
.settings-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
}
</style>
