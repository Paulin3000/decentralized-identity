<template>
  <Header
    title="Issuer Dashboard"
    subtitle="Manage your credential requests and issuances"
  >
  </Header>

  <div class="dashboard-container">
    <div class="dashboard-grid">
      <!-- New Request Card -->
      <div class="request-card gradient-card" @click="goToRequests">
        <div class="card-content">
          <div class="icon-container">
            <PhEnvelopeSimple :size="64" weight="fill" />
          </div>
          <div class="card-text">
            <h3>New Request!</h3>
            <p class="card-description">You have a new credential request</p>
          </div>

          <div class="button-container">
            <IconButton variant="primary" :icon-right="PhArrowRight"
              >View Request
            </IconButton>
          </div>
        </div>
      </div>

      <!--      &lt;!&ndash; Pending Request Card  &ndash;&gt;-->
      <!--      <div class="request-card gradient-card" @click="goToRequests">-->
      <!--        <div class="card-content">-->
      <!--          <div class="icon-container">-->
      <!--            <PhEnvelopeSimple :size="64" weight="fill" />-->
      <!--          </div>-->
      <!--          <div class="card-text">-->
      <!--            <h3>Pending Requests</h3>-->
      <!--            <p class="card-description">-->
      <!--              Review and process credential requests from users-->
      <!--            </p>-->
      <!--          </div>-->
      <!--          <div class="requests-count">5 pending</div>-->
      <!--        </div>-->
      <!--      </div>-->

      <!-- Credentials Card -->
      <div class="request-card gradient-card" @click="goToCredentials">
        <div class="card-content">
          <div class="icon-container">
            <PhIdentificationCard :size="64" weight="fill" />
          </div>
          <div class="card-text">
            <h3>Credentials</h3>
            <p class="card-description">
              Manage and view all issued credentials
            </p>
          </div>
          <div class="requests-count">24 issued</div>
        </div>
      </div>

      <!-- Statistics Card -->
      <div class="request-card gradient-card" :class="{ 'dark-card': true }">
        <div class="card-content">
          <div class="icon-container">
            <PhChartLine :size="64" weight="fill" />
          </div>
          <div class="card-text">
            <h3>Statistics</h3>
          </div>
          <div class="stats-container">
            <div class="stat-item">
              <span class="stat-number">24</span>
              <span class="stat-label">Issued</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">5</span>
              <span class="stat-label">Pending</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">2</span>
              <span class="stat-label">Rejected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  PhEnvelopeSimple,
  PhBell,
  PhArrowRight,
  PhIdentificationCard,
  PhChartLine,
} from "@phosphor-icons/vue";
import Header from "../../components/Header.vue";
import IconButton from "../../components/buttons/IconButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToRequests = () => {
  router.push({ name: "issuer-requests" });
};

const goToCredentials = () => {
  router.push({ name: "issuer-credentials" });
};
</script>

<style scoped>
.dashboard-container {
  padding: 0 20px 20px 20px;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.request-card {
  border-radius: 1rem;
  overflow: hidden;
  height: 250px;
  position: relative;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
}

.request-card:hover {
  /*transform: scale(1.03);*/
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
  /*
  box-shadow:
    0 0 5px rgba(119, 76, 105, 0.5),
    0 0 15px rgba(35, 72, 109, 0.4),
    0 0 25px rgba(37, 106, 97, 0.3);
   */
  border: 1px solid var(--color-text-primary);

  transition: all 0.3s ease;
}

.gradient-card {
  background: var(--color-gradient-credential);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark-card {
  background-color: var(--color-container);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-content {
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.icon-container {
  /*background-color: rgba(255, 255, 255, 0.2);*/
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.card-text {
  text-align: left;
}

h3 {
  margin-top: 0;
  margin-bottom: 8px;
}

.card-description {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
  margin: 0;
}

.button-container {
  margin-top: auto;
}

.requests-count {
  margin-top: auto;
  font-weight: var(--font-semibold);
  font-size: var(--text-lg);
  margin-bottom: 0.75rem;
}

.stats-container {
  display: flex;
  justify-content: space-between;
  margin: auto 0.5rem 0.5rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
}

.stat-label {
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
}
</style>
