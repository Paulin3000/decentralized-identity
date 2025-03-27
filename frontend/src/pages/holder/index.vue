<template>
  <div>
    <Header title="Holder"> </Header>
  </div>
  <button @click="$router.push({ name: 'holder-credentials' })">
    View All
  </button>
</template>
<script setup lang="ts">
import Header from "../../components/Header.vue";
</script>
