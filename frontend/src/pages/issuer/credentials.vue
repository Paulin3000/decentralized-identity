<template>
  <Header title="Issued Credentials" :line="true"> </Header>

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
</template>
<script setup lang="ts">
import Header from "../../components/Header.vue";
import CredentialCard from "../../components/CredentialCard.vue";
import router from "../../router";
import { onMounted, ref } from "vue";
import { getAllIssuerCredentials } from "../../stores/credentialStore.js";

const credentials = ref([]);

onMounted(() => {
  credentials.value = getAllIssuerCredentials();
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
      if (router.currentRoute.value.name === routeName) {
        window.location.reload();
      }
    });
}

const navigateToDetail = (credentialId) => {
  router.push({
    name: "issuer-credential-details",
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

/* Responsive adjustments */
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
