<template>
  <DataDisplayLayout :show-go-back="true">
    <template #header>
      <PageHeader
        title="Request Credential"
        subtitle="Send a request to a trusted issuer to claim your credential."
      ></PageHeader>
    </template>

    <template #content>
      <div class="request-section">
        <DataContainer>
          <DataField label="Credential Type" value="asdfasdf"></DataField>
          <DataField
            label="Issuer DID"
            value="asdfasdf"
            :is-last="true"
          ></DataField>
        </DataContainer>
        <DataContainer>
          <DataField label="Your DID" value="asdfasdf"></DataField>
          <DataField label="Credential Type" value="asdfasdf"></DataField>
          <DataField
            label="Issuer DID"
            value="asdfasdf"
            :is-last="true"
          ></DataField>
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
</script>

<style scoped>
.request-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
</style>
