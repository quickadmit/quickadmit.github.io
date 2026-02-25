<template>
  <div class="book-demo-wrapper">

    <!-- HEADER SECTION (Minimal, not hero-heavy) -->
    <div class="demo-header reveal" ref="header">
      <h1 class="demo-title">
        Book a Personalized Demo
      </h1>
      <p class="demo-subtitle">
        See how QuickAdmit streamlines admissions, accelerates verification,
        and improves operational visibility — all in one platform.
      </p>
    </div>

    <!-- VALUE PROPS -->
    <div class="demo-benefits columns is-variable is-6 reveal" ref="benefits">
      <div class="column">
        <div class="benefit-card">
          <b-icon pack="fas" icon="clock"></b-icon>
          <h3>30-Minute Walkthrough</h3>
          <p>Focused demo tailored to your facility and workflows.</p>
        </div>
      </div>

      <div class="column">
        <div class="benefit-card">
          <b-icon pack="fas" icon="chart-line"></b-icon>
          <h3>Revenue Visibility</h3>
          <p>Understand EIV, payer logic, and intake acceleration tools.</p>
        </div>
      </div>

      <div class="column">
        <div class="benefit-card">
          <b-icon pack="fas" icon="shield-alt"></b-icon>
          <h3>Compliance Ready</h3>
          <p>HIPAA-aligned workflows and secure verification automation.</p>
        </div>
      </div>
    </div>

    <!-- MAIN SCHEDULER CARD -->
    <div class="demo-card reveal" ref="scheduler">
      <iframe src="https://meetings-na2.hubspot.com/bspircu/demo-call-round-robin" frameborder="0"
        scrolling="no"></iframe>
    </div>

    <!-- TRUST FOOTER -->
    <div class="trust-text reveal" ref="trust">
      <p>
        Explore how your facility can accelerate admissions, increase reimbursement confidence, and reduce
        administrative friction — all in a single conversation.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: "BookDemoView",
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(this.$refs.header);
    observer.observe(this.$refs.benefits);
    observer.observe(this.$refs.scheduler);
    observer.observe(this.$refs.trust);
  }
};
</script>

<style scoped>
/* HERO SECTION */
.demo-hero {
  padding: 5rem 2rem 4rem 2rem;
  background: linear-gradient(135deg, #0A1A2F 0%, #162B4A 60%, #3E6EDC 100%);
  border-radius: 28px;
  margin-bottom: 4rem;
  color: #FFFFFF;
}

.hero-content {
  max-width: 850px;
  margin: 0 auto;
  text-align: center;
}

.demo-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  letter-spacing: -0.5px;
}

.demo-subtitle {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #DCE6FF;
  margin-bottom: 2rem;
}

.hero-badges {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-size: 0.95rem;
}

.hero-badges span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.hero-badges b-icon {
  color: #7b5cff;
}

/* PAGE WRAPPER */
.book-demo-wrapper {
  background: #F4F7FA;
  min-height: 100vh;
  padding: 5rem 2rem;
  text-align: center;
}

/* HEADER */
.demo-header {
  max-width: 800px;
  margin: 0 auto 3rem auto;
}

.demo-title {
  font-size: 2.4rem;
  font-weight: 800;
  color: #0A1E43;
  margin-bottom: 1rem;
}

.demo-subtitle {
  font-size: 1.1rem;
  color: #4A5568;
  line-height: 1.7;
}

/* BENEFITS */
.demo-benefits {
  max-width: 1100px;
  margin: 0 auto 3rem auto;
}

.benefit-card {
  background: #FFFFFF;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.05);
  transition: transform 0.25s ease;
}

.benefit-card:hover {
  transform: translateY(-6px);
}

.benefit-card b-icon {
  color: #7b5cff;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.benefit-card h3 {
  font-weight: 700;
  color: #0A1E43;
  margin-bottom: 0.5rem;
}

.benefit-card p {
  font-size: 0.95rem;
  color: #5C6F89;
}

/* SCHEDULER CARD */
.demo-card {
  width: 100%;
  margin: 0 auto 2rem auto;
  background: #FFFFFF;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
}

.demo-card iframe {
  width: 100%;
  height: 650px;
  border-radius: 16px;
  border: 1px solid #E6EDF7;
}

/* TRUST TEXT */
.trust-text {
  margin-top: 2rem;
  font-size: 0.95rem;
  color: #718096;
}

/* REVEAL ANIMATION */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ===================================== */
/* TABLET (≤ 1024px) */
/* ===================================== */
@media screen and (max-width: 1024px) {

  .book-demo-wrapper {
    padding: 4rem 1.5rem;
  }

  .demo-title {
    font-size: 2.1rem;
  }

  .demo-subtitle {
    font-size: 1.05rem;
  }

  .demo-card {
    padding: 1.5rem;
  }

  .demo-card iframe {
    height: 600px;
  }
}


/* ===================================== */
/* MOBILE (≤ 768px) */
/* ===================================== */
@media screen and (max-width: 768px) {

  /* Reduce outer padding so content takes screen */
  .book-demo-wrapper {
    padding: 2.5rem 1rem;
  }

  /* Header tighter */
  .demo-header {
    margin-bottom: 2rem;
  }

  .demo-title {
    font-size: 1.8rem;
    line-height: 1.3;
  }

  .demo-subtitle {
    font-size: 1rem;
  }

  /* Stack benefit cards nicely */
  .demo-benefits {
    margin-bottom: 2rem;
  }

  .benefit-card {
    padding: 1.25rem;
    border-radius: 16px;
  }

  /* MAIN IMPROVEMENT: Frame takes most space */
  .demo-card {
    padding: 1rem;
    border-radius: 18px;
    margin-bottom: 1.5rem;
  }

  .demo-card iframe {
    height: 75vh;
    /* 👈 makes iframe take most screen */
    min-height: 500px;
    border-radius: 12px;
  }

  .trust-text {
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }
}


/* ===================================== */
/* SMALL MOBILE (≤ 480px) */
/* ===================================== */
@media screen and (max-width: 480px) {

  .book-demo-wrapper {
    padding: 2rem 0.75rem;
  }

  .demo-title {
    font-size: 1.6rem;
  }

  .demo-card {
    padding: 0.75rem;
  }

  .demo-card iframe {
    height: 80vh;
    /* even more immersive on small screens */
    min-height: 450px;
  }

}
</style>
