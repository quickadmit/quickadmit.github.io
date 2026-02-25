<template>
  <section class="ready-section reveal" :class="{ 'is-visible': isVisible }" ref="readyCard">
    <div class="container">
      <div class="ready-card">
        <div class="content has-text-centered">
          <h2 class="ready-title mb-4">
            Ready to automate your admission <br class="is-hidden-mobile" /> workflow?
          </h2>

          <p class="ready-subtext mb-6">
            Join Hundreds of healthcare facilities using QuickAdmit <br class="is-hidden-mobile" /> to admit on the
            first call.
          </p>

          <div class="ready-action">
            <b-button type="is-light" class="btn-ready-pill" @click="$router.push({ name: 'BookDemoView' })">
              Book a Demo
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ReadySection',
  data() {
    return {
      isVisible: false
    };
  },
  mounted() {
    this.initObserver();
  },
  methods: {
    initObserver() {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.isVisible = true;
        }
      }, { threshold: 0.3 });

      observer.observe(this.$refs.readyCard);
    }
  }
};
</script>

<style scoped>
.ready-section {
  background-color: var(--soft-off-white);
  padding: 6rem 1.5rem;
}

/* 🎨 Card Styling */
.ready-card {
  background-color: #0f0f14;
  /* Specific Deep Navy from your Hero spec */
  padding: 5rem 2rem;
  border-radius: 40px;
  /* Large rounded corners for the premium look */
  box-shadow: 0 20px 40px rgba(10, 22, 51, 0.2);
}

/* 🔤 Typography */
.ready-title {
  color: #FFFFFF;
  font-size: 2.5rem;
  font-weight: 700;
  font-style: italic;
  line-height: 1.2;
}

.ready-subtext {
  color: #DADBF2;
  /* Muted navbar-style text color */
  font-size: 1.15rem;
  font-style: italic;
  line-height: 1.6;
}

/* 🔘 Pill Button Style */
.btn-ready-pill {
  background-color: #7B5CFF !important;
  /* Muted Grey-Blue from image */
  color: #FFFFFF !important;
  font-weight: 700;
  font-style: italic;
  font-size: 1.25rem;
  padding: 1.2rem 4rem !important;
  height: auto !important;
  border-radius: 100px !important;
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-ready-pill:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(10, 22, 51, 0.15);
  background-color: #6847F5 !important;
}

/* 🎬 Animation Logic */
.reveal {
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: scale(1);
}

/* Mobile Adjustments */
@media screen and (max-width: 768px) {
  .ready-card {
    padding: 3rem 1.5rem;
    border-radius: 24px;
  }

  .ready-title {
    font-size: 1.75rem;
  }

  .btn-ready-pill {
    width: 100%;
    padding: 1rem 2rem !important;
  }
}
</style>