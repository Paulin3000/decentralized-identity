<template>
  <div class="profile-dropdown-container">
    <div class="profile-dropdown-header">Switch Roles</div>

    <ul class="role-list">
      <NavItem
        text="Holder"
        :icon="PhUser"
        :isActive="currentRole === 'holder'"
        @click="switchRole('holder')"
      />
      <NavItem
        text="Issuer"
        :icon="PhBuildings"
        :isActive="currentRole === 'issuer'"
        @click="switchRole('issuer')"
      />
      <NavItem
        text="Verifier"
        :icon="PhMagnifyingGlass"
        :isActive="currentRole === 'verifier'"
        @click="switchRole('verifier')"
      />
    </ul>
  </div>
</template>

<script setup>
import NavItem from "./NavItem.vue";
import { PhUser, PhBuildings, PhMagnifyingGlass } from "@phosphor-icons/vue";

const props = defineProps({
  currentRole: {
    type: String,
    default: "holder",
  },
});

const emit = defineEmits(["switch-role", "close"]);

function switchRole(role) {
  if (role !== props.currentRole) {
    emit("switch-role", role);
  }
  emit("close");
}
</script>

<style scoped>
.profile-dropdown-container {
  padding: 0.5rem 0;
}

.profile-dropdown-header {
  padding: 0.5rem 1rem;
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: white;
  opacity: 0.8;
  border-bottom: 1px solid var(--color-primary-opacity-low);
}

.role-list {
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
}
</style>
