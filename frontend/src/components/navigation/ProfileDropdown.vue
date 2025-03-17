<template>
  <div class="py-2">
    <div
      class="px-4 py-2 text-sm font-semibold text-white opacity-80"
      style="border-bottom: 1px solid var(--color-primary-opacity-low)"
    >
      Switch Roles
    </div>

    <ul class="flex flex-col mt-2">
      <NavItem text="Holder" :icon="holderIcon" @click="onClick('holder')" />
      <NavItem text="Issuer" :icon="issuerIcon" @click="onClick('issuer')" />
      <NavItem
        text="Verifier"
        :icon="verifierIcon"
        @click="onClick('verifier')"
      />
    </ul>
  </div>
</template>

<script setup>
import NavItem from "./NavItem.vue";
import { PhQuestion } from "@phosphor-icons/vue";

const emit = defineEmits(["close"]);

// Example icons for roles
const holderIcon = PhQuestion;
const issuerIcon = PhQuestion;
const verifierIcon = PhQuestion;

function onClick(role) {
  // handle role switching logic here

  emit("close");
}
</script>

<style scoped>
/* Adjust spacing or style as desired */
</style>
