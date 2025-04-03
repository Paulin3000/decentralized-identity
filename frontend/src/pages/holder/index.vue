<template>
  <div class="issuer-onboarding-container">
    <div class="header-section">
      <h1 class="main-title">Mask Identity</h1>
      <div class="lead-text">
        Your Decentralized Identity App. Securely manage verified credentials
        under your control for a private, seamless online experience.
      </div>
      <IconButton
        variant="special"
        :icon-right="PhArrowRight"
        @click="navigateTo('holder-credentials')"
        >Get Started
      </IconButton>

      <!--      <div class="gradient-line"></div>-->
    </div>

    <div class="process-container">
      <div class="illustration-container">
        <img :src="holderIllu" class="illustration" alt="Illustration" />
      </div>

      <div class="steps-container">
        <ul class="process-steps">
          <li class="process-step">
            <PhFileText :size="30" weight="fill" />
            <div class="step-content">
              <h4>Request Credentials</h4>
              <p class="text-secondary">
                Submit credential requests to trusted institutions with required
                documents
              </p>
            </div>
          </li>
          <li class="process-step">
            <PhDownload :size="30" weight="fill" />
            <div class="step-content">
              <h4>Receive Credentials</h4>
              <p class="text-secondary">
                Accept and download approved credentials from issuing
                organizations
              </p>
            </div>
          </li>
          <li class="process-step">
            <PhWallet :size="30" weight="fill" />
            <div class="step-content">
              <h4>Manage Wallet</h4>
              <p class="text-secondary">
                Store and organize your credentials securely in your digital
                wallet
              </p>
            </div>
          </li>
          <li class="process-step">
            <PhPaperPlaneTilt :size="30" weight="fill" />
            <div class="step-content">
              <h4>Share Credentials</h4>
              <p class="text-secondary">
                Selectively share credentials with verifiers while maintaining
                privacy
              </p>
            </div>
          </li>
          <li class="process-step">
            <PhCheck :size="30" weight="bold" />
            <div class="step-content">
              <h4>Access Services</h4>
              <p class="text-secondary">
                Use verified credentials to access services and opportunities
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  PhPaperPlaneTilt,
  PhFileText,
  PhDownload,
  PhWallet,
  PhCheck,
  PhArrowRight,
} from "@phosphor-icons/vue";
import holderIllu from "../../assets/illustrations/holder-phone.png";
import IconButton from "../../components/buttons/IconButton.vue";
import router from "../../router/index.js";

function navigateTo(routeName) {
  router.push({ name: routeName });
}
</script>

<style scoped>
.issuer-onboarding-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 128px);
  max-width: 1200px;
  max-height: 1000px;
  margin: 0 auto; /* Center the container */
  padding: 1rem 1rem 2rem;
  justify-content: space-around; /* Distributes space between header and process */
}

.header-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 3.5rem 1rem;
}

.main-title {
  font-size: var(--text-5xl);
  text-align: center;
  margin-bottom: 1.5rem;
}

.lead-text {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
  font-size: var(--text-xl);
  line-height: var(--leading-relaxed);
  color: var(--color-text-secondary);
  padding: 0 1.5rem;
}

.gradient-line {
  width: 160px;
  height: 4px;
  background: linear-gradient(
    to right,
    var(--color-yellow),
    var(--color-orange),
    var(--color-pink),
    var(--color-purple),
    var(--color-blue)
  );
  border-radius: 2px;
}

.process-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.illustration-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.illustration {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
  transform: translateX(2.5rem) translateY(-2.5rem);
}

.steps-container {
  flex: 1;
  padding-left: 2rem;
}

.process-steps {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.step-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: left;
}

.step-content h4 {
  margin: 0;
  font-size: 1.1rem;
  color: var(--color-text-primary);
}

.text-secondary {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .process-container {
    flex-direction: column;
    gap: 2rem;
  }

  .illustration-container {
    margin-bottom: 1rem;
  }

  .illustration {
    max-width: 200px;
  }
}
</style>
