<template>
  <section class="trust-section">
    <div class="container">
      <h3 class="trust-title">BUILT FOR MODERN HEALTHCARE TEAMS</h3>

      <div class="marquee">
        <div class="marquee-track">
          <div v-for="role in duplicatedRoles" :key="role.name + Math.random()" class="partner-item">
            <b-icon :icon="role.icon" size="is-medium" class="partner-icon" />
            <span class="partner-name">{{ role.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TrustSection',
  data() {
    return {
      roles: [
        { name: 'Admissions Teams', icon: 'user-md' },
        { name: 'Revenue Cycle Managers', icon: 'chart-line' },
        { name: 'Care coordinators', icon: 'tasks' },
        { name: 'Intake Specialists', icon: 'clipboard-check' },
        { name: 'Substance abuse and Mental Health Specific', icon: 'hospital' }
      ]
    };
  },
  computed: {
    duplicatedRoles() {
      return [...this.roles, ...this.roles]; // duplicate for seamless loop
    }
  }
};

</script>

<style scoped>
.trust-section {
  background-color: var(--soft-off-white);
  padding: 4rem 1.5rem;
  text-align: center;
}

/* 🔤 Typography following your design spec */
.trust-title {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: #8A8D9F;
  /* Muted brown-grey from image */
  margin-bottom: 3rem;
  text-transform: uppercase;
}

/* 🏢 Logo Grid Layout */
.trust-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  opacity: 0.7;
  /* Initial muted state */
  transition: opacity 0.3s ease;
}

.trust-logos:hover {
  opacity: 1;
}

.partner-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #9AA0B5;
  /* Muted/help text color from your spec */
  transition: color 0.3s ease;
  cursor: default;
}

.partner-item:hover {
  color: var(--text-primary);
}

.partner-icon {
  font-size: 1.5rem;
}

.partner-name {
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
}

/* Mobile Responsiveness */
@media screen and (max-width: 768px) {
  .trust-logos {
    gap: 2rem;
  }

  .partner-item {
    flex: 1 1 40%;
    /* Show 2 per row on mobile */
    justify-content: center;
  }
}

.marquee {
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-top: 2rem;
}

.marquee-track {
  display: flex;
  gap: 3rem;
  width: max-content;
  animation: scrollLeft 25s linear infinite;
}

/* Smooth Infinite Scroll */
@keyframes scrollLeft {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

/* Pause on hover (very premium feel) */
.marquee:hover .marquee-track {
  animation-play-state: paused;
}

/* Item styling */
.partner-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  white-space: nowrap;
  color: #9AA0B5;
  font-weight: 600;
  transition: transform 0.3s ease, color 0.3s ease;
}

.partner-item:hover {
  transform: scale(1.05);
  color: var(--text-primary);
}

.partner-icon {
  font-size: 1.4rem;
}
</style>