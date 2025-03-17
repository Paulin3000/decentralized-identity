<template>
  <nav class="navbar">
    <div class="navbar-left">
      <div class="flex items-center">
        <span class="text-lg font-bold tracking-wide"> MyLogo </span>
      </div>

      <ul class="nav-list">
        <NavItem
          :icon="PhWallet"
          text="Credentials"
          :isActive="currentPage === 'credentials'"
          @click="goTo('credentials')"
        />
        <NavItem
          :icon="PhGearSix"
          text="Settings"
          :isActive="currentPage === 'settings'"
          @click="goTo('settings')"
        />
        <NavItem
          :icon="PhQuestion"
          text="Help"
          :isActive="currentPage === 'help'"
          @click="goTo('help')"
        />
      </ul>
    </div>

    <!-- Right section: Profile + Dropdown -->
    <div class="relative">
      <button
        class="flex items-center gap-2 px-4 py-2 rounded-md transition-colors"
        style="
          background-color: var(--color-secondary);
          color: var(--color-text-primary);
        "
        @click="toggleProfileMenu"
      >
        <component :is="profileIcon" :size="24" :weight="'bold'" />
        <span class="text-sm font-medium"> Profile </span>
      </button>

      <!-- Profile dropdown -->
      <transition name="fade">
        <div
          v-if="showProfileMenu"
          class="absolute right-0 mt-2 w-48 rounded-md shadow-lg"
          style="background-color: var(--color-secondary)"
        >
          <ProfileDropdown @close="showProfileMenu = false" />
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

import { PhWallet, PhGearSix, PhQuestion } from "@phosphor-icons/vue";

import NavItem from "./NavItem.vue";
import ProfileDropdown from "./ProfileDropdown.vue";

const currentPage = ref("credentials"); // or use a router-based approach
const showProfileMenu = ref(false);

const profileIcon = PhQuestion; // or pass this in via props

function toggleProfileMenu() {
  showProfileMenu.value = !showProfileMenu.value;
}

function goTo(page) {
  currentPage.value = page;
  // Your routing logic here, e.g.:
  // router.push({ name: page })
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
