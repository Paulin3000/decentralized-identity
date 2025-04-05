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
      id="national-id-1"
      type="National ID"
      subheading="Government of Switzerland"
      :verified="true"
      holder="John Appleseeed"
      issuer="Swiss Federal Office"
      expiryDate="2028-06-30"
      :logoUrl="switzerlandLogo"
      color-theme="pink"
      @credentialClick="navigateToDetail"
    />
    <CredentialCard
      id="degree-id-1"
      type="University Degree"
      subheading="ETH Zurich"
      :verified="true"
      holder="John Appleseeed"
      issuer="ETH Zurich University"
      expiryDate="2099-01-01"
      :logoUrl="uzhLogo"
      color-theme="blue"
      @credentialClick="navigateToDetail"
    />
    <CredentialCard
      id="drivers-license-id-1"
      type="Driver's License"
      subheading="Department of Transportation"
      :verified="false"
      holder="John Appleseeed"
      issuer="Strassenverkehrsamt"
      expiryDate="2027-03-15"
      :logoUrl="switzerlandLogo"
      color-theme="pink"
      @credentialClick="navigateToDetail"
    />
    <CredentialCard
      id="health-insurance-id-1"
      type="Health Insurance"
      subheading="National Healthcare System"
      :verified="true"
      holder="John Appleseeed"
      issuer="Sanitas"
      :logoUrl="sanitasLogo"
      color-theme="orange"
      @credentialClick="navigateToDetail"
      expiry-date="2027-03-15"
    />

    <!--    <CredentialCard-->
    <!--      id="certification-id-1"-->
    <!--      type="Certification"-->
    <!--      subheading="Project Management Institute"-->
    <!--      :verified="false"-->
    <!--      holder="John Appleseeed"-->
    <!--      issuer="PMI Global"-->
    <!--      expiryDate="2025-09-18"-->
    <!--      @credentialClick="navigateToDetail"-->
    <!--    />-->
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
import switzerlandLogo from "../../assets/switzerland.png";
import uzhLogo from "../../assets/uzh-acronym.svg";
import sanitasLogo from "../../assets/Sanitas_Logo_RGB_black.png";
import IconButton from "../../components/buttons/IconButton.vue";
import { PhLock, PhPlus } from "@phosphor-icons/vue";
import router from "../../router";
import PageHeader from "../../components/PageHeader.vue";

/*
function navigateTo(routeName) {
  router.push({ name: routeName });
}

 */
function navigateTo(routeName) {
  router
    .push({ name: routeName })
    .catch((err) => {
      if (err.name !== "NavigationDuplicated") {
        throw err;
      }
    })
    .then(() => {
      // Force component update if needed
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
