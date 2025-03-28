<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div class="navbar-left">
        <div class="flex items-center">
          <button @click="navigateToHome" class="logo-button">
            <img :src="maskLogo" class="logo" alt="Logo" />
          </button>
        </div>

        <!-- Holder -->
        <ul class="nav-list">
          <template v-if="currentRole === 'holder'">
            <NavItem
              :icon="PhWallet"
              text="My Credentials"
              :isActive="isActiveRoute('holder-credentials')"
              @click="navigateTo('holder-credentials')"
            />
            <NavItem
              :icon="PhPaperPlaneTilt"
              text="Sharing"
              :isActive="isActiveRoute('holder-sharing')"
              @click="navigateTo('holder-sharing')"
            />
            <NavItem
              :icon="PhGearSix"
              text="Settings"
              :isActive="isActiveRoute('holder-settings')"
              @click="navigateTo('holder-settings')"
            />
            <NavItem
              :icon="PhQuestion"
              text="Help"
              :isActive="isActiveRoute('holder-help')"
              @click="navigateTo('holder-help')"
            />
          </template>

          <!-- Issuer -->
          <template v-else-if="currentRole === 'issuer'">
            <NavItem
              :icon="PhSquaresFour"
              text="Dashboard"
              :isActive="isActiveRoute('issuer-dashboard')"
              @click="navigateTo('issuer-dashboard')"
            />
            <NavItem
              :icon="PhEnvelopeSimple"
              text="Requests"
              :isActive="isActiveRoute('issuer-requests')"
              @click="navigateTo('issuer-requests')"
            />
            <NavItem
              :icon="PhIdentificationCard"
              text="Credentials"
              :isActive="isActiveRoute('issuer-credentials')"
              @click="navigateTo('issuer-credentials')"
            />
            <NavItem
              :icon="PhGearSix"
              text="Settings"
              :isActive="isActiveRoute('issuer-settings')"
              @click="navigateTo('issuer-settings')"
            />
            <NavItem
              :icon="PhQuestion"
              text="Help"
              :isActive="isActiveRoute('issuer-help')"
              @click="navigateTo('issuer-help')"
            />
          </template>

          <!-- Verifier -->
          <template v-else-if="currentRole === 'verifier'">
            <NavItem
              :icon="PhSquaresFour"
              text="Dashboard"
              :isActive="isActiveRoute('verifier-dashboard')"
              @click="navigateTo('verifier-dashboard')"
            />
            <NavItem
              :icon="PhEnvelopeSimple"
              text="Requests"
              :isActive="isActiveRoute('verifier-requests')"
              @click="navigateTo('verifier-requests')"
            />
            <NavItem
              :icon="PhGearSix"
              text="Settings"
              :isActive="isActiveRoute('verifier-settings')"
              @click="navigateTo('verifier-settings')"
            />
            <NavItem
              :icon="PhQuestion"
              text="Help"
              :isActive="isActiveRoute('verifier-help')"
              @click="navigateTo('verifier-help')"
            />
          </template>
        </ul>
      </div>

      <!-- Right section: Profile + Dropdown -->
      <div class="profile-container">
        <button class="profile-button" @click="toggleProfileMenu">
          <component
            :is="getRoleIcon(currentRole)"
            :size="24"
            :weight="'bold'"
          />
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
  PhEnvelopeSimple,
  PhPaperPlaneTilt,
  PhBank,
  PhSquaresFour,
  PhShieldCheck,
  PhIdentificationCard,
} from "@phosphor-icons/vue";

import NavItem from "./NavItem.vue";
import ProfileDropdown from "./ProfileDropdown.vue";
import maskLogo from "../../assets/MaskLogo.svg";

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
      return PhBank;
    case "verifier":
      return PhShieldCheck;
    default:
      return PhUser;
  }
}

function navigateToHome() {
  router.push({ path: `/${props.currentRole}` });
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--color-background);
  z-index: 100;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  height: 64px;
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

.profile-container {
  position: relative;
}

.profile-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #ffffff;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.profile-button:hover {
  background-color: var(--color-nav-hover);
}

.profile-text {
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: capitalize;
}

.profile-dropdown {
  position: absolute;
  top: 110%; /* Position right below the button */
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  margin-top: 0.5rem;
  background-color: var(--color-background);
  border: 2px solid var(--color-primary-opacity-low);
  border-radius: 1rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 60;
  overflow: hidden;
}

.logo {
  width: 4rem;
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
