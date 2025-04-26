<template>
  <div class="layout">
    <NavBar :current-role="currentRole" />
    <div class="container">
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import NavBar from "../components/navigation/NavBar.vue";

const route = useRoute();

// determine current role based on the route path
const currentRole = computed(() => {
  const path = route.path;
  if (path.startsWith("/holder")) return "holder";
  if (path.startsWith("/issuer")) return "issuer";
  if (path.startsWith("/verifier")) return "verifier";
  return "holder";
});
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  flex: 1;
}

.main-content {
  width: 100%;
}
</style>
