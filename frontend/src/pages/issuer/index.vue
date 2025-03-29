<template>
  <div class="issuer-welcome-container">
    <div class="content-wrapper">
      <!-- Hero section with SVG illustration -->
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Welcome to the Issuer Portal</h1>
          <p class="hero-subtitle">
            Your gateway to creating, signing, and managing verifiable
            credentials
          </p>
        </div>
        <div class="svg-container">
          <img
            :src="authenticity"
            alt="Credential Authentication"
            class="authenticity-svg"
          />
        </div>
      </div>

      <!-- Information section -->
      <div class="info-section">
        <h2>Your Role as a Credential Issuer</h2>
        <p class="info-text">
          As an issuer, you have the authority to create and sign verifiable
          credentials, ensuring their authenticity and validity in the
          credential ecosystem.
        </p>

        <!-- Process steps -->
        <div class="process-container">
          <h3>The Credential Issuance Process</h3>
          <ul class="process-steps">
            <li class="process-step">
              <div class="step-icon">
                <PhEnvelopeSimple :size="24" weight="fill" />
              </div>
              <div class="step-content">
                <h4>Receive Credential Requests</h4>
                <p class="text-secondary">
                  Review incoming requests from individuals or organizations
                </p>
              </div>
            </li>
            <li class="process-step">
              <div class="step-icon">
                <PhMagnifyingGlass :size="24" weight="fill" />
              </div>
              <div class="step-content">
                <h4>Verify Request Validity</h4>
                <p class="text-secondary">
                  Ensure all information is accurate and meets requirements
                </p>
              </div>
            </li>
            <li class="process-step">
              <div class="step-icon">
                <PhSignature :size="24" weight="fill" />
              </div>
              <div class="step-content">
                <h4>Sign with Organization Key</h4>
                <p class="text-secondary">
                  Apply cryptographic signatures to validate the credential
                </p>
              </div>
            </li>
            <li class="process-step">
              <div class="step-icon">
                <PhPaperPlaneTilt :size="24" weight="fill" />
              </div>
              <div class="step-content">
                <h4>Issue Credential</h4>
                <p class="text-secondary">
                  Deliver the signed credential to the requester
                </p>
              </div>
            </li>
            <li class="process-step">
              <div class="step-icon">
                <PhProhibit :size="24" weight="fill" />
              </div>
              <div class="step-content">
                <h4>Manage Revocations</h4>
                <p class="text-secondary">
                  Revoke credentials when necessary to maintain system integrity
                </p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Call to action -->
        <div class="cta-section">
          <p class="cta-text">Ready to start managing credentials?</p>
          <button class="primary-button">View Pending Requests</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import authenticity from "../../assets/authenticity-gradient.svg";
import {
  PhEnvelopeSimple,
  PhMagnifyingGlass,
  PhSignature,
  PhPaperPlaneTilt,
  PhProhibit,
} from "@phosphor-icons/vue";
</script>

<style scoped>
.issuer-welcome-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 80px); /* Adjust based on header size */
}

.content-wrapper {
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  margin: 0 auto;
  text-align: left;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  gap: 2rem;
}

.hero-content {
  flex: 1;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
  font-weight: 700;
  text-align: left;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-primary);
  opacity: 0.9;
  text-align: left;
}

.svg-container {
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.authenticity-svg {
  width: 140px; /* Made the SVG about half the size */
  height: auto;
}

.info-section {
  padding: 1rem 0;
}

.info-section h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: var(--color-text-primary);
  text-align: left;
}

.info-text {
  margin-bottom: 2rem;
  font-size: 1rem;
  color: var(--color-text-primary);
  max-width: 800px;
  line-height: 1.6;
  text-align: left;
}

.process-container {
  margin: 2rem 0;
}

.process-container h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-primary);
  text-align: left;
}

.process-steps {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.step-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  color: var(--color-text-primary);
  flex-shrink: 0;
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

.cta-section {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.cta-text {
  font-size: 1.2rem;
  color: var(--color-text-primary);
  text-align: left;
}

.primary-button {
  background: linear-gradient(90deg, #4776e6 0%, #8e54e9 100%);
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  color: var(--color-text-primary);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Responsive styling */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
  }

  .svg-container {
    justify-content: flex-start;
    margin-bottom: 1rem;
  }
}
</style>
