<template>
  <DataDisplayLayout :show-go-back="true">
    <template #header>
      <DataDisplayHeader
        title="Playground"
        subtitle="Very nice description"
        :show-back-button="false"
      />
    </template>
    <template #content>
      <p class="text-large text-primary">Blablabal</p>
    </template>
  </DataDisplayLayout>
</template>
<script setup lang="ts">
import DataDisplayLayout from "../layouts/DataDisplayLayout.vue";
import DataDisplayHeader from "../components/DataDisplayHeader.vue";
</script>
