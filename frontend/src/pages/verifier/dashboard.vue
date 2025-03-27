<template>
  <div>
    <Header title="Verifier Dashboard"> </Header>
  </div>
  <button
    @click="
      $router.push({
        name: 'verifier-request-detail',
        params: { id: 'certification-id-1' },
      })
    "
  >
    New Request!
  </button>
</template>
<script setup lang="ts">
import Header from "../../components/Header.vue";
</script>
