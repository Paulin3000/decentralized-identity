<template>
  <div class="issuer-onboarding-container">
    <div class="header-section">
      <h1 class="main-title">Issuer Portal</h1>
      <div class="lead-text">
        Welcome to your secure credential management hub. Efficiently receive,
        verify, sign, and issue digital credentials while maintaining the
        highest standards of trust and security.
      </div>
      <IconButton
        variant="special"
        :icon-right="PhArrowRight"
        @click="navigateTo('issuer-dashboard')"
        >Dashboard
      </IconButton>
    </div>

    <div class="process-container">
      <div class="illustration-container">
        <img :src="illustration" class="illustration" alt="Illustration" />
      </div>

      <div class="steps-container">
        <ul class="process-steps">
          <li class="process-step">
            <PhEnvelopeSimple :size="30" weight="fill" />
            <div class="step-content">
              <h4>Receive Credential Requests</h4>
              <p class="text-secondary">
                Review incoming requests from individuals or organizations
              </p>
            </div>
          </li>
          <li class="process-step">
            <PhShieldCheck :size="30" weight="fill" />
            <div class="step-content">
              <h4>Verify Request Validity</h4>
              <p class="text-secondary">
                Ensure all information is accurate and meets requirements
              </p>
            </div>
          </li>
          <li class="process-step">
            <PhSignature :size="30" weight="bold" />
            <div class="step-content">
              <h4>Sign with Organization Key</h4>
              <p class="text-secondary">
                Apply cryptographic signatures to validate the credential
              </p>
            </div>
          </li>
          <li class="process-step">
            <PhPaperPlaneTilt :size="30" weight="fill" />
            <div class="step-content">
              <h4>Issue Credential</h4>
              <p class="text-secondary">
                Deliver the signed credential to the requester
              </p>
            </div>
          </li>
          <li class="process-step">
            <PhProhibit :size="30" weight="fill" />
            <div class="step-content">
              <h4>Manage Revocations</h4>
              <p class="text-secondary">
                Revoke credentials when necessary to maintain system integrity
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
  PhArrowRight,
  PhEnvelopeSimple,
  PhShieldCheck,
  PhSignature,
  PhProhibit,
} from "@phosphor-icons/vue";
import illustration from "../../assets/illustrations/issuer.png";
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
  margin: 0 auto;
  padding: 1rem 1rem 2rem;
  justify-content: space-around;
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
  max-width: 370px;
  height: auto;
  object-fit: contain;
  transform: translateY(-3rem) translateX(2rem);
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
