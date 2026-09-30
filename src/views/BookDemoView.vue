<template>
  <section class="booking-page">
    <div class="booking-shell">
      <div class="scheduler-card" :class="{ 'is-ready': schedulerLoaded }">
        <div class="scheduler-loading" :class="{ 'is-hidden': schedulerLoaded }" aria-hidden="true">
          <div class="loading-heading"></div>
          <div class="loading-copy"></div>
          <div class="loading-layout">
            <div class="loading-calendar">
              <span v-for="day in 35" :key="day"></span>
            </div>
            <div class="loading-times">
              <span v-for="time in 6" :key="time"></span>
            </div>
          </div>
        </div>

        <iframe
          src="https://meetings-na2.hubspot.com/bspircu/demo-call-round-robin"
          title="Schedule a QuickAdmit demo"
          frameborder="0"
          scrolling="yes"
          loading="eager"
          @load="showScheduler"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BookDemoView",
  data() {
    return {
      schedulerLoaded: false,
      schedulerReadyTimer: null,
    };
  },
  beforeUnmount() {
    window.clearTimeout(this.schedulerReadyTimer);
  },
  methods: {
    showScheduler() {
      window.clearTimeout(this.schedulerReadyTimer);
      this.schedulerReadyTimer = window.setTimeout(() => {
        this.schedulerLoaded = true;
      }, 2600);
    },
  },
};
</script>

<style scoped>
.booking-page {
  min-height: calc(100vh - 64px);
  padding: 34px 24px 48px;
  background:
    radial-gradient(circle at 12% 12%, rgba(124, 77, 222, .08), transparent 28%),
    radial-gradient(circle at 88% 4%, rgba(173, 139, 244, .1), transparent 25%),
    #f8f6fc;
}

.booking-shell {
  width: min(1180px, 100%);
  margin: 0 auto;
}

.scheduler-card {
  position: relative;
  min-height: 760px;
  overflow: hidden;
  border: 1px solid var(--qa-border);
  border-radius: 18px;
  background: white;
  box-shadow: var(--qa-shadow-card);
}

.scheduler-card iframe {
  display: block;
  width: 100%;
  height: 760px;
  border: 0;
  background: white;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity .45s ease, transform .45s ease;
}

.scheduler-card.is-ready iframe {
  opacity: 1;
  transform: translateY(0);
}

.scheduler-loading {
  position: absolute;
  z-index: 2;
  inset: 0;
  padding: 56px;
  background: white;
  opacity: 1;
  visibility: visible;
  transition: opacity .35s ease, visibility .35s ease;
  pointer-events: none;
}

.scheduler-loading.is-hidden {
  opacity: 0;
  visibility: hidden;
}

.loading-heading,
.loading-copy,
.loading-calendar span,
.loading-times span {
  position: relative;
  overflow: hidden;
  background: #f0edf5;
}

.loading-heading::after,
.loading-copy::after,
.loading-calendar span::after,
.loading-times span::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, transparent 20%, rgba(255,255,255,.78) 48%, transparent 76%);
  content: "";
  transform: translateX(-100%);
  animation: scheduler-shimmer 1.6s ease-in-out infinite;
}

.loading-heading {
  width: min(340px, 70%);
  height: 26px;
  border-radius: 8px;
}

.loading-copy {
  width: min(470px, 88%);
  height: 12px;
  margin-top: 14px;
  border-radius: 6px;
}

.loading-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(210px, .55fr);
  gap: 28px;
  margin-top: 48px;
}

.loading-calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12px;
  padding: 24px;
  border: 1px solid #ece8f1;
  border-radius: 14px;
}

.loading-calendar span {
  aspect-ratio: 1;
  border-radius: 9px;
}

.loading-times {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.loading-times span {
  height: 48px;
  border-radius: 10px;
}

@keyframes scheduler-shimmer {
  to { transform: translateX(100%); }
}

@media (max-width: 768px) {
  .booking-page { padding: 18px 12px 30px; }
  .scheduler-card { min-height: 790px; border-radius: 14px; }
  .scheduler-card iframe { height: 790px; }
  .scheduler-loading { padding: 30px 22px; }
  .loading-layout { grid-template-columns: 1fr; gap: 18px; margin-top: 34px; }
  .loading-calendar { gap: 8px; padding: 16px; }
  .loading-times { display: grid; grid-template-columns: repeat(2, 1fr); }
}

@media (prefers-reduced-motion: reduce) {
  .scheduler-card iframe, .scheduler-loading { transition: none; }
  .loading-heading::after, .loading-copy::after, .loading-calendar span::after, .loading-times span::after { animation: none; }
}
</style>
