<template>
  <div class="layout">
    <NavBar :current-role="currentRole" />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavBar from "../components/navigation/NavBar.vue";

const route = useRoute();

// Determine current role based on the route path
const currentRole = computed(() => {
  const path = route.path;
  if (path.startsWith("/holder")) return "holder";
  if (path.startsWith("/issuer")) return "issuer";
  if (path.startsWith("/verifier")) return "verifier";
  return "holder"; // Default
});
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
</style>
