<template>
  <NavBar />
  <div class="container">
    <header class="p-8">
      <h1>Button Examples</h1>

      <div class="button-container">
        <IconButton
          variant="primary"
          text="Claim New Credential"
          :iconLeft="PhPlus"
        />
        <BaseButton variant="secondary">Cancel</BaseButton>

        <IconButton
          variant="outline-primary"
          text="Signe"
          :iconLeft="PhKey"
          icon-weight="fill"
          icon-rotation="45"
        />

        <IconButton variant="danger" text="Reject" :iconLeft="PhProhibit" />

        <!--        &lt;!&ndash; Danger Button (Red) &ndash;&gt;-->
        <!--        <IconButton variant="danger" text="Delete" :iconLeft="Trash" />-->

        <!--        &lt;!&ndash; Outlined Button (Cancel) &ndash;&gt;-->
        <!--        <IconButton variant="outline" text="Cancel" :iconLeft="X" />-->

        <!--        &lt;!&ndash; Button with icon on right &ndash;&gt;-->
        <!--        <IconButton text="Next" variant="primary" :iconRight="ArrowRight" />-->

        <!--        &lt;!&ndash; Button with icons on both sides &ndash;&gt;-->
        <!--        <IconButton-->
        <!--          text="Navigate"-->
        <!--          variant="outline-primary"-->
        <!--          :iconLeft="ArrowLeft"-->
        <!--          :iconRight="ArrowRight"-->
        <!--          :isActive="true"-->
        <!--        />-->
      </div>
    </header>
  </div>
</template>

<script setup>
import IconButton from "./components/buttons/IconButton.vue";
import { PhCheck, PhPlus, PhKey, PhProhibit } from "@phosphor-icons/vue";
import BaseButton from "./components/buttons/BaseButton.vue";
import NavBar from "./components/navigation/NavBar.vue";
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

@media (min-width: 640px) {
  .button-container {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
