<template>
  <div>
    <Header title="Requests"></Header>
    <div>
      <div>
        <button @click="$router.push(`/verifier/requests/certification-id-1`)">
          New Request!
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
