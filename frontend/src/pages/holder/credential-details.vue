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
        <div class="action-buttons">
          <IconOnlyButton
            :icon="PhPaperPlaneTilt"
            variant="primary"
            @click="navigateTo('holder-sharing')"
          >
          </IconOnlyButton>
          <IconOnlyButton
            :icon="PhTrash"
            variant="danger"
            @click="showDeleteModal = true"
          >
          </IconOnlyButton>
        </div>
      </div>
    </template>
    <template #content>
      <div class="details-section">
        <DataContainer title="Credential Information">
          <DataField label="Holder" :value="credential.holder" />
          <DataField label="Holder DID"
            ><DIDAddress
              :address="credential.holderDid"
              show-icon="true"
              icon="verified"
          /></DataField>
          <DataField label="Issuer" :value="credential.issuer" />
          <DataField label="Issuer DID"
            ><DIDAddress
              :address="credential.issuerDid"
              show-icon="true"
              icon="verified"
          /></DataField>
          <DataField
            label="Issuance Date"
            :value="formatDate(credential.issuanceDate)"
          />
          <DataField
            label="Expiry Date"
            :value="formatDate(credential.expiryDate)"
          />
          <DataField label="Status" :isLast="true">
            <status-tag :status="credential.verified ? 'verified' : 'revoked'">
              {{ credential.verified ? "Verified" : "Revoked" }}
            </status-tag>
          </DataField>
        </DataContainer>

        <DataContainer title="Credential Data" v-if="credential.additionalData">
          <template
            v-for="(value, key) in credential.additionalData"
            :key="key"
          >
            <DataField
              :label="
                key
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, (str) => str.toUpperCase())
              "
              :value="value"
              :isLast="Object.keys(credential.additionalData).pop() === key"
            />
          </template>
        </DataContainer>

        <DataContainer
          title="Verification History"
          v-if="credential.verification"
        >
          <DataField
            label="Last Verification"
            :value="credential.verification.lastVerified"
          />
          <DataField
            label="Verification Method"
            :value="credential.verification.method"
            :isLast="true"
          />
        </DataContainer>
      </div>
    </template>
  </DataDisplayLayout>

  <FeedbackModal
    type="error"
    title="Delete Credential"
    message="Are you sure you want to delete this credential?"
    :is-visible="showDeleteModal"
  >
    <template #left>
      <IconButton variant="secondary" @click="handleCancel">
        Cancel
      </IconButton>
    </template>
    <template #right>
      <IconButton variant="danger" @click="handleDelete"> Delete </IconButton>
    </template>
  </FeedbackModal>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import Header from "../../components/Header.vue";
import DataContainer from "../../components/data-display/DataContainer.vue";
import DataField from "../../components/data-display/DataField.vue";
import CredentialCard from "../../components/CredentialCard.vue";
import switzerlandLogo from "../../assets/switzerland.png";
import router from "../../router/index.js";
import { PhPaperPlaneTilt, PhSealCheck, PhTrash } from "@phosphor-icons/vue";
import StatusTag from "../../components/data-display/inputs-DataField/StatusTag.vue";
import GoBackButton from "../../components/GoBackButton.vue";
import DataDisplayLayout from "../../layouts/DataDisplayLayout.vue";
import DIDAddress from "../../components/data-display/inputs-DataField/DIDAddress.vue";
import IconButton from "../../components/buttons/IconButton.vue";
import IconOnlyButton from "../../components/buttons/IconOnlyButton.vue";
import FeedbackModal from "../../components/FeedbackModal.vue";
import { getCredentialById } from "../../stores/credentialStore.js";

const route = useRoute();
const showDeleteModal = ref(false);

const credentialId = computed(() => route.params.id);
const credential = ref({});

onMounted(() => {
  const credentialData = getCredentialById(credentialId.value);

  if (credentialData) {
    credential.value = credentialData;
  } else {
    console.error(`Credential with ID ${credentialId.value} not found`);
    // Optionally redirect to a 404 page or back to credentials list
    router.push({ name: "holder-credentials" });
  }
});

const handleDelete = () => {
  showDeleteModal.value = false;
  router.back();
};

const handleCancel = () => {
  showDeleteModal.value = false;
};

function navigateTo(routeName) {
  router.push({ name: routeName, params: { id: credential.value.id } });
}

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
  position: relative;
  padding: 4rem 0;
}

.action-buttons {
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  position: absolute;
  right: 0;
  bottom: 0;
}

.details-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4rem;
}
</style>
