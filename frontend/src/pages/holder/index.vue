<template>
  <div>
    <h1>Holder</h1>
    <div>
      <div>
        <button @click="$router.push({ name: 'holder-credentials' })">
          View All
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "../../components/Header.vue";
import CredentialCard from "../../components/CredentialCard.vue";
</script>

<style scoped></style>
