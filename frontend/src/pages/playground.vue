<template>
  <DataDisplayLayout :show-go-back="true">
    <template #header>
      <PageHeader
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
import PageHeader from "../components/PageHeader.vue";
import DataContainer from "../components/data-display/DataContainer.vue";
import DataField from "../components/data-display/DataField.vue";
</script>
