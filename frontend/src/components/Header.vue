<template>
  <div class="header">
    <div class="header-subcontainer">
      <div class="heading">
        <h1>{{ title }}</h1>
      </div>
      <div class="button-container">
        <slot></slot>
      </div>
    </div>
    <div class="divider-line" v-if="line"></div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { PhLock } from "@phosphor-icons/vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  line: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.header {
  padding: 2rem 1rem 0;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
}

.header-subcontainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3rem;
  width: 100%;
}

.button-container {
  display: flex;
  align-items: center;
}

.divider-line {
  width: 100%;
  height: 1px;
  background: #e5e7eb;
}
</style>
