<template>
  <Header title="My Credentials" :line="true">
    <IconButton
      :icon-left="PhPlus"
      variant="primary"
      @click="navigateTo('request-credential')"
      >Claim New Credential</IconButton
    >
  </Header>

  <div class="credentials-grid">
    <CredentialCard
      v-for="credential in credentials"
      :key="credential.id"
      :id="credential.id"
      :type="credential.type"
      :subheading="credential.subheading"
      :verified="credential.verified"
      :holder="credential.holder"
      :issuer="credential.issuer"
      :expiryDate="credential.expiryDate"
      :logoUrl="credential.logoUrl"
      :color-theme="credential.colorTheme"
      @credentialClick="navigateToDetail"
    />
  </div>
  <div class="info-container">
    <component :is="PhLock" weight="fill" color="var(--color-text-secondary)" />
    <span class="text-sm text-text-secondary"
      >All your credentials are securely stored on your device, not on a public
      server.
    </span>
  </div>
</template>
<script setup lang="ts">
import Header from "../../components/Header.vue";
import CredentialCard from "../../components/CredentialCard.vue";
import IconButton from "../../components/buttons/IconButton.vue";
import { PhLock, PhPlus } from "@phosphor-icons/vue";
import router from "../../router";
import { onMounted, ref } from "vue";
import { getAllCredentials } from "../../stores/credentialStore.js";

const credentials = ref([]);

onMounted(() => {
  credentials.value = getAllCredentials();
});

function navigateTo(routeName) {
  router
    .push({ name: routeName })
    .catch((err) => {
      if (err.name !== "NavigationDuplicated") {
        throw err;
      }
    })
    .then(() => {
      // force component update if needed
      if (router.currentRoute.value.name === routeName) {
        window.location.reload();
      }
    });
}

const navigateToDetail = (credentialId) => {
  router.push({
    name: "holder-credential-details",
    params: { id: credentialId },
  });
};
</script>

<style scoped>
.info-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 3rem;
}

.credentials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 32px;
  padding: 0 1.5rem 2rem;
  max-width: 1200px;
  margin: auto;
}

@media (min-width: 1200px) {
  .credentials-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .credentials-grid {
    gap: 24px;
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .credentials-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 12px;
  }
}
</style>
