<template>
  <Header title="Issued Credentials" :line="true"> </Header>

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
      :verified="true"
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
    />
  </div>
</template>
<script setup lang="ts">
import Header from "../../components/Header.vue";
import CredentialCard from "../../components/CredentialCard.vue";
import switzerlandLogo from "../../assets/switzerland.png";
import uzhLogo from "../../assets/uzh-acronym.svg";
import sanitasLogo from "../../assets/Sanitas_Logo_RGB_black.png";
import router from "../../router";

function navigateTo(routeName) {
  router.push({ name: routeName });
}

const navigateToDetail = (credentialId) => {
  router.push({
    name: "issuer-credential-details",
    params: { id: credentialId },
  });
};
</script>

<style scoped>
.credentials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 32px;
  padding: 32px 24px;
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
