<template>
  <div class="data-display-layout">
    <GoBackButton v-if="showGoBack" class="back-button-container" />
    <div class="header-container">
      <slot name="header" />
    </div>
    <div class="content-container">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import GoBackButton from "../components/GoBackButton.vue";
import PageHeader from "../components/PageHeader.vue";

const props = defineProps({
  showGoBack: { type: Boolean, default: false },
});

const router = useRouter();
</script>

<style scoped>
.data-display-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.back-button-container {
  position: absolute;
  left: 0;
  top: 1rem;
}
.header-container {
  width: 100%;
  max-width: 850px;
  padding-bottom: 1.5rem;
}

.content-container {
  width: 100%;
  max-width: 850px;
  gap: 1.5rem;
}

/* Add responsive styling for smaller screens */
@media (max-width: 1200px) {
  .back-button-container {
    top: -2rem;
  }
}
</style>
