<template>

  <section class="hero-container">
    <div class="hero-content container">

      <!-- ✨ Small Pill Banner -->
      <div class="hero-banner">
        ✨ Now supporting 1500+ payers
      </div>

      <!-- 🏷 Headline -->
      <h1 class="hero-title">
        Admit patients on the first call
        <br />
        <span>Verify eligibility instantly, 24/7</span>
      </h1>

      <!-- 📝 Subtext -->
      <p class="hero-subtext">
        Eliminate manual hold times, slash denial rates, and have answers instantly.
        <br class="is-hidden-mobile" />
        Experience real-time eligibility checks without delays.
      </p>

      <!-- 🚀 CTA -->
      <div class="hero-action">
        <b-button type="is-primary" class="btn-hero-pill" @click="$router.push({ name: 'BookDemoView' })">
          Book a Demo
        </b-button>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
};
</script>

<style scoped>
/* 🌌 HERO — FULL PRODUCTS STYLE */
.hero-container {
  background: linear-gradient(135deg, #0B0C14 0%, #1A1735 45%, #6A4DFF 100%);
  padding: 6rem 1.5rem;
  text-align: center;
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
}

/* ✨ Glow Accent (Same Spirit as Products Page) */
.hero-container::after {
  content: "";
  position: absolute;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgba(123, 92, 255, 0.28), transparent 70%);
  top: -160px;
  right: -160px;
  filter: blur(10px);
}

/* ✨ Small Pill Banner */
.hero-banner {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(135deg, #F5F2FF, #ECE6FF);
  color: #7B5CFF;

  font-size: 0.85rem;
  font-weight: 600;

  padding: 0.45rem 1.1rem;
  border-radius: 999px;

  margin-bottom: 1.8rem;

  box-shadow: 0 4px 12px rgba(123, 92, 255, 0.25);
  border: 1px solid rgba(123, 92, 255, 0.18);
}

/* 🏷 HERO TITLE */
.hero-title {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.6px;
  margin-bottom: 1.8rem;
  color: #FFFFFF;
}

.hero-title span {
  color: #9F87FF;
  /* Bright SaaS Purple Accent */
}

/* 📝 SUBTEXT */
.hero-subtext {
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  color: #D6D9F2;
  font-weight: 400;
  line-height: 1.7;
  max-width: 760px;
  margin: 0 auto 2.8rem auto;
}

/* 🚀 CTA BUTTON */
.btn-hero-pill {
  background-color: #7B5CFF !important;
  color: #FFFFFF !important;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1.05rem;

  padding: 0.95rem 3.2rem !important;
  border-radius: 999px !important;
  border: none;

  box-shadow: 0 10px 30px rgba(123, 92, 255, 0.45);
  transition: all 0.25s ease;
}

.btn-hero-pill:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 14px 36px rgba(123, 92, 255, 0.55);
  background-color: #6847F5 !important;
}

.btn-hero-pill:active {
  transform: scale(0.98);
}

/* ✨ Small Pill Banner Floating Animation */
@keyframes floatBanner {
  0% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(-4px);
  }

  50% {
    transform: translateY(0);
  }

  75% {
    transform: translateY(-2px);
  }

  100% {
    transform: translateY(0);
  }
}

.hero-banner {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(135deg, #F5F2FF, #ECE6FF);
  color: #7b5cff;

  font-size: 0.85rem;
  font-weight: 600;

  padding: 0.45rem 1.1rem;
  border-radius: 999px;

  margin-bottom: 1.8rem;

  box-shadow: 0 4px 12px rgba(123, 92, 255, 0.25);
  border: 1px solid rgba(123, 92, 255, 0.18);

  /* 🎬 Continuous Floating Animation */
  animation: floatBanner 3s ease-in-out infinite;
}

/* 📱 MOBILE */
@media screen and (max-width: 768px) {
  .hero-container {
    padding: 4rem 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtext {
    font-size: 1rem;
  }

  .hero-banner {
    font-size: 0.75rem;
  }

  .btn-hero-pill {
    width: 100%;
    max-width: 260px;
  }
}
</style>