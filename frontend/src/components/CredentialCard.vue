<template>
  <div
    class="credential-card"
    :class="{ glowy: glowy }"
    @click="navigateToDetail"
  >
    <div class="card-header">
      <div class="header-content">
        <h4 class="text-left">{{ type }}</h4>
        <p class="text-small credential-subheading">{{ subheading }}</p>
      </div>
      <div
        class="status-tag"
        :class="{ 'status-verified': verified, 'status-revoked': !verified }"
      >
        <span>{{ verified ? "Verified" : "Revoked" }}</span>
      </div>
    </div>

    <!-- card body -->
    <div class="card-body">
      <div class="credential-data">
        <div class="data-row">
          <span class="data-label">Holder</span>
          <span class="data-value">{{ holder }}</span>
        </div>
        <div class="data-row">
          <span class="data-label">Issuer</span>
          <span class="data-value">{{ issuer }}</span>
        </div>
        <div class="data-row">
          <span class="data-label">Expiry</span>
          <span class="data-value">{{ formatDate(expiryDate) }}</span>
        </div>
      </div>

      <!-- logo -->
      <div v-if="logoUrl" class="logo-container" :style="logoContainerStyle">
        <img :src="logoUrl" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import router from "../router/index.js";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: true,
  },
  holder: {
    type: String,
    required: true,
  },
  issuer: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String,
    required: true,
  },
  logoUrl: {
    type: String,
    default: false,
  },
  logoContainerColor: {
    type: String,
    default: null,
  },
  glowy: {
    type: Boolean,
    default: false,
  },
});

const navigateToDetail = () => {
  router.push(`/holder/credentials/${props.id}`);
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const logoContainerStyle = computed(() => {
  return props.logoContainerColor
    ? { backgroundColor: props.logoContainerColor }
    : {};
});
</script>

<style scoped>
.credential-card {
  width: 340px;
  height: 215px;
  /*
  box-shadow:
    0 0 0 1px var(--color-yellow),
    1 1 0 2px var(--color-orange),
    2 2 0 3px var(--color-pink),
    3 3 0 4px var(--color-purple),
    4 4 0 5px var(--color-blue);*/

  background: radial-gradient(
    circle at top left,
    rgba(255, 255, 255, 0.11) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.01) 100%
  );

  border: 1px solid #393939;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  position: relative;
  cursor: pointer;
}

.credential-card:hover {
  transform: scale(1.02);
}

.credential-card.glowy {
  box-shadow: 0 0 20px rgba(73, 92, 248, 0.3);
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;
}

.credential-card.glowy:hover {
  box-shadow: 0 0 25px rgba(73, 92, 248, 0.6);
}

/* gradient at the left side */
/*
.credential-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 6px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    var(--color-yellow),
    var(--color-orange),
    var(--color-pink),
    var(--color-purple),
    var(--color-blue)
  );
  opacity: 0.8;
  pointer-events: none;
  border-radius: 0 6px 6px 0;
}*/

.card-header {
  padding: 20px 20px 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.header-content {
  flex: 1;
}

.credential-subheading {
  margin: 4px 0 0;
  color: var(--color-text-secondary);
  text-align: left;
}

.status-tag {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
}

.status-verified {
  background-color: var(--color-good-dark);
  color: var(--color-good);
}

.status-revoked {
  background-color: rgba(239, 68, 68, 0.1);
  color: rgb(239, 68, 68);
}

.card-body {
  padding: 16px 20px;
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.credential-data {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.data-row {
  margin-bottom: 5px;
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
}

.data-label {
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  grid-column: 1;
  text-align: left;
}

.data-value {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-primary);
  grid-column: 2;
  text-align: left;
}

.logo-container {
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: var(--color-blue); /* default color */
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 28px;
}
</style>
