<template>
  <DataDisplayLayout :show-go-back="true">
    <template #header>
      <DataDisplayHeader
        title="Request New Credential"
        subtitle="Send a request to a trusted issuer to claim your credential."
      ></DataDisplayHeader>
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
            <LinkButton :icon="PhPaperclip"
              >Attach Credentials or Documents</LinkButton
            >
          </DataField>
          <DataField label="Message" is-last="true">
            <InputField type="text" placeholder="Enter message" />
          </DataField>
        </DataContainer>

        <SignatureField :disabled="!issuerDID" @signed="signed = true" />

        <FeedbackModal
          type="success"
          title="Request Sent"
          message="Your credential request has been sent to the issuer. You will be notified once it's processed."
          :is-visible="showFeedbackModal"
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
            @click="handleCancel"
          >
            Cancel
          </IconButton>
          <IconButton
            variant="primary"
            :icon-left="PhPaperPlaneTilt"
            icon-weight="fill"
            :disabled="!issuerDID || !signed"
            @click="handleSendRequest"
          >
            Send Request
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
import InputField from "../../components/data-display/inputs-DataField/InputField.vue";
import LinkButton from "../../components/data-display/inputs-DataField/LinkButton.vue";
import { ref } from "vue";
import DIDAddress from "../../components/data-display/inputs-DataField/DIDAddress.vue";
import IconButton from "../../components/buttons/IconButton.vue";
import { PhPaperclip, PhPaperPlaneTilt, PhX } from "@phosphor-icons/vue";
import router from "../../router/index.js";
import FeedbackModal from "../../components/FeedbackModal.vue";
import SignatureField from "../../components/data-display/SignatureField.vue";
import BaseButton from "../../components/buttons/BaseButton.vue";

const issuerDID = ref("");
const trustStatus = ref(null);
const showFeedbackModal = ref(false);
const signed = ref(false);

const handleSendRequest = () => {
  console.log("Sending credential request...");
  showFeedbackModal.value = true;
};

const closeFeedbackModal = () => {
  showFeedbackModal.value = false;
  router.back();
};

const handleCancel = () => {
  console.log("Request cancelled");
  router.back();
};
</script>

<style scoped>
.request-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
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
