<template>
  <div
    class="credential-card"
    :class="[backgroundColor, { glowy: glowy }]"
    @click="handleClick"
  >
    <div class="card-header">
      <div class="header-content">
        <h4 class="text-left">{{ type }}</h4>
        <p class="text-small credential-subheading" :style="greyThemeTextStyle">
          {{ subheading }}
        </p>
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
          <span class="data-label" :style="greyThemeTextStyle">Holder</span>
          <span class="data-value">{{ holder }}</span>
        </div>
        <div class="data-row">
          <span class="data-label" :style="greyThemeTextStyle">Issuer</span>
          <span class="data-value">{{ issuer }}</span>
        </div>
        <div class="data-row">
          <span class="data-label" :style="greyThemeTextStyle">Expiry</span>
          <span class="data-value">{{ formatDate(expiryDate) }}</span>
        </div>
      </div>

      <!-- logo -->
      <div class="logo-container" v-if="logoUrl" :style="logoContainerStyle">
        <img :src="logoUrl" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import router from "../router/index.js";

const emit = defineEmits(["credential-click"]);

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
  colorTheme: {
    type: String,
    default: "grey",
    validator: (value) =>
      ["yellow", "orange", "pink", "purple", "blue", "grey"].includes(value),
  },

  glowy: {
    type: Boolean,
    default: false,
  },
});

const handleClick = () => {
  emit("credential-click", props.id);
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const backgroundColor = computed(() => {
  return props.colorTheme ? `background-${props.colorTheme}` : "";
});

const greyThemeTextStyle = computed(() => {
  return props.colorTheme === "grey"
    ? { color: "var(--color--text-primary)" }
    : {};
});

const logoContainerStyle = computed(() => {
  if (!props.colorTheme) return {};

  const colorMap = {
    yellow: "var(--color-yellow)",
    orange: "var(--color-orange)",
    pink: "var(--color-pink)",
    purple: "var(--color-purple)",
    blue: "var(--color-blue)",
  };

  return { backgroundColor: colorMap[props.colorTheme] };
});
</script>

<style scoped>
.credential-card {
  width: 340px;
  height: 215px;

  /*
  background: radial-gradient(
    circle at top left,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.01) 100%
  );

   */
  /*
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.01) 0%,
    rgba(255, 255, 255, 0.12) 50%,
    rgba(255, 255, 255, 0.01) 100%
  );

   */

  border: 1px solid #393939;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  position: relative;
  cursor: pointer;
}

.background-yellow {
  background: linear-gradient(
    135deg,
    rgba(255, 214, 0, 0.6) 0%,
    rgba(255, 173, 51, 0.6) 50%,
    rgba(255, 233, 125, 0.6) 100%
  );
}

.background-orange {
  background: linear-gradient(
    135deg,
    rgba(255, 122, 0, 0.6) 0%,
    rgba(255, 153, 51, 0.6) 50%,
    rgba(255, 179, 102, 0.6) 100%
  );
}

.background-pink {
  background: linear-gradient(
    135deg,
    rgba(255, 59, 136, 0.75) 0%,
    rgba(209, 102, 255, 0.75) 50%,
    rgba(158, 106, 255, 0.75) 100%
  );
}

.background-purple {
  background: linear-gradient(
    135deg,
    rgba(211, 0, 197, 0.75) 0%,
    rgba(165, 35, 230, 0.75) 50%,
    rgba(135, 56, 255, 0.75) 100%
  );
}

.background-blue {
  background: linear-gradient(
    135deg,
    rgba(122, 77, 255, 0.75) 0%,
    rgba(91, 107, 255, 0.75) 50%,
    rgba(79, 179, 255, 0.75) 100%
  );
}

.background-grey {
  background: linear-gradient(
    135deg,
    rgba(80, 80, 85, 0.3) 0%,
    rgba(105, 105, 110, 0.3) 50%,
    rgba(130, 130, 140, 0.3) 100%
  );
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

.credential-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.005) 10%,
    rgba(255, 255, 255, 0.16) 50%,
    rgba(255, 255, 255, 0.005) 90%
  );
  pointer-events: none; /* This allows clicks to pass through to the card */
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
  color: var(--color-background);
  text-align: left;
  font-weight: var(--font-medium);
}

.status-tag {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
}

.status-verified {
  /*background-color: rgba(16, 185, 129, 0.5);*/
  /*background-color: var(--color-background);*/
  background-color: rgba(12, 15, 20, 0.75);
  color: var(--color-good);
}

.status-revoked {
  /*background-color: rgba(239, 68, 68, 0.3);*/
  background-color: rgba(12, 15, 20, 0.75);
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
  color: var(--color-background);
  grid-column: 1;
  text-align: left;
  font-weight: var(--font-medium);
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
  background-color: var(--color-orange); /* default color */
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 28px;
}
</style>
