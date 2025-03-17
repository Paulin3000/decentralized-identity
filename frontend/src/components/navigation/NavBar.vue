<template>
  <nav class="navbar">
    <div class="navbar-left">
      <div class="flex items-center">
        <span class="text-lg font-bold tracking-wide"> MyLogo </span>
      </div>

      <ul class="nav-list">
        <!-- Dynamic navigation items based on current role -->
        <template v-if="currentRole === 'holder'">
          <NavItem
            :icon="PhWallet"
            text="My Credentials"
            :isActive="isActiveRoute('holder-credentials')"
            @click="navigateTo('holder-credentials')"
          />
          <NavItem
            :icon="PhQuestion"
            text="Sharing"
            :isActive="isActiveRoute('holder-sharing')"
            @click="navigateTo('holder-sharing')"
          />
        </template>

        <template v-else-if="currentRole === 'issuer'">
          <NavItem
            :icon="PhQuestion"
            text="Issue Credentials"
            :isActive="isActiveRoute('issuer-issue')"
            @click="navigateTo('issuer-issue')"
          />
          <NavItem
            :icon="PhQuestion"
            text="Templates"
            :isActive="isActiveRoute('issuer-templates')"
            @click="navigateTo('issuer-templates')"
          />
        </template>

        <template v-else-if="currentRole === 'verifier'">
          <NavItem
            :icon="PhQuestion"
            text="Verify"
            :isActive="isActiveRoute('verifier-verify')"
            @click="navigateTo('verifier-verify')"
          />
          <NavItem
            :icon="PhQuestion"
            text="Requests"
            :isActive="isActiveRoute('verifier-requests')"
            @click="navigateTo('verifier-requests')"
          />
        </template>

        <!-- Common navigation items for all roles -->
        <NavItem
          :icon="PhGearSix"
          text="Settings"
          :isActive="isActiveRoute('settings')"
          @click="navigateTo('settings')"
        />
        <NavItem
          :icon="PhQuestion"
          text="Help"
          :isActive="isActiveRoute('help')"
          @click="navigateTo('help')"
        />
      </ul>
    </div>

    <!-- Right section: Profile + Dropdown -->
    <div class="profile-container">
      <button class="profile-button" @click="toggleProfileMenu">
        <component :is="getRoleIcon(currentRole)" :size="24" :weight="'bold'" />
        <span class="profile-text">{{ currentRole }}</span>
      </button>

      <!-- Profile dropdown -->
      <transition name="fade">
        <div v-if="showProfileMenu" class="profile-dropdown">
          <ProfileDropdown
            :current-role="currentRole"
            @switch-role="switchRole"
            @close="showProfileMenu = false"
          />
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
  PhWallet,
  PhGearSix,
  PhQuestion,
  PhUser,
  PhBuildings,
  PhMagnifyingGlass,
} from "@phosphor-icons/vue";

import NavItem from "./NavItem.vue";
import ProfileDropdown from "./ProfileDropdown.vue";

const props = defineProps({
  currentRole: {
    type: String,
    default: "holder",
    validator: (value) => ["holder", "issuer", "verifier"].includes(value),
  },
});

const router = useRouter();
const route = useRoute();
const showProfileMenu = ref(false);

function toggleProfileMenu() {
  showProfileMenu.value = !showProfileMenu.value;
}

function isActiveRoute(name) {
  return route.name === name;
}

function navigateTo(routeName) {
  router.push({ name: routeName });
}

function switchRole(role) {
  // Navigate to the main page of the selected role
  router.push({ path: `/${role}` });
  showProfileMenu.value = false;
}

function getRoleIcon(role) {
  switch (role) {
    case "holder":
      return PhUser;
    case "issuer":
      return PhBuildings;
    case "verifier":
      return PhMagnifyingGlass;
    default:
      return PhUser;
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--color-secondary);
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Simple fade transition for the dropdown */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
