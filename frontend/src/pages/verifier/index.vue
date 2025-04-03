<template>
  <div class="issuer-onboarding-container">
    <div class="header-section">
      <h1 class="main-title">Verifier Portal</h1>
      <div class="gradient-line"></div>
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
              <h4>Receive Verification Requests</h4>
              <p class="text-secondary">
                Accept incoming verification requests from credential holders
              </p>
            </div>
          </li>
          <li class="process-step">
            <PhShieldCheck :size="30" weight="fill" />
            <div class="step-content">
              <h4>Verify on Blockchain</h4>
              <p class="text-secondary">
                Validate credential authenticity against blockchain registry
              </p>
            </div>
          </li>
          <li class="process-step">
            <PhShieldCheck :size="30" weight="fill" />
            <div class="step-content">
              <h4>Check Revocation Status</h4>
              <p class="text-secondary">
                Confirm the credential has not been revoked or expired
              </p>
            </div>
          </li>
          <li class="process-step">
            <PhCheck :size="30" weight="bold" />
            <div class="step-content">
              <h4>Approve or Reject</h4>
              <p class="text-secondary">
                Make final decision based on verification results and service
                requirements
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
  PhMagnifyingGlass,
  PhClockCountdown,
  PhCheckCircle,
  PhShieldCheck,
  PhEnvelopeSimple,
} from "@phosphor-icons/vue";
import illustration from "../../assets/illustrations/verifier.png";
</script>

<style scoped>
.issuer-onboarding-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
}

.header-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  padding: 3rem 1rem 1rem;
}

.main-title {
  font-size: var(--text-5xl);
  text-align: center;
  margin-bottom: 1.5rem;
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
  align-items: flex-start;
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
  transform: translateX(2rem) translateY(-1.5rem);
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
