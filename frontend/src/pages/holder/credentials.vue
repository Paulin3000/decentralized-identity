<template>
  <div>
    <Header title="Credentials"> </Header>
  </div>

  <div class="credentials-grid">
    <CredentialCard
      type="National ID"
      subheading="Government of Switzerland"
      :verified="true"
      holder="John Appleseeed"
      issuer="Swiss Federal Office"
      expiryDate="2028-06-30"
      logoUrl="/placeholder-logo.svg"
    />
    <CredentialCard
      type="Certification"
      subheading="Project Management Institute"
      :verified="false"
      holder="John Appleseeed"
      issuer="PMI Global"
      expiryDate="2025-09-18"
      logoUrl="/pmi-logo.svg"
    />

    <CredentialCard
      type="Driver's License"
      subheading="Department of Transportation"
      :verified="true"
      holder="John Appleseeed"
      issuer="Federal Transport Authority"
      expiryDate="2027-03-15"
      logoUrl="/placeholder-logo.svg"
    />
    <CredentialCard
      type="Health Insurance"
      subheading="National Healthcare System"
      :verified="true"
      holder="John Appleseeed"
      issuer="Swiss Health Insurance"
      expiryDate="2023-12-31"
      logoUrl="/placeholder-logo.svg"
    />
    <CredentialCard
      type="University Degree"
      subheading="ETH Zurich"
      :verified="true"
      holder="John Appleseeed"
      issuer="ETH Zurich University"
      expiryDate="2099-01-01"
      logoUrl="/placeholder-logo.svg"
    />
  </div>
</template>
<script setup lang="ts">
import Header from "../../components/Header.vue";
import CredentialCard from "../../components/CredentialCard.vue";
</script>

<style scoped>
.credentials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 32px;
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
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
