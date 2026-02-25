<template>
  <div class="contact-outer-wrapper">

    <div class="contact-main-card columns is-variable is-8 is-multiline">
    
        <div class="column is-12">
<h1 class="qa-display-title">Let’s Connect</h1>
        <p class="qa-display-subtitle">
            Let’s simplify your admissions process. <br>
            Whether you’re exploring QuickAdmit or need support, we’re here for you.
        </p>
        </div>
      <!-- LEFT INFO SECTION -->
      <div class="column is-6 left-info reveal" ref="leftInfo">
        <div class="info-box-container">

          <div class="info-item-card">
            <div class="info-icon">
              <b-icon pack="fas" icon="comments"></b-icon>
            </div>
            <div class="info-content">
              <label>Sales Inquiries</label>
              <span>Discover how QuickAdmit modernizes admissions.</span>
              <a href="mailto:info@quickadmit.com">info@quickadmit.com</a>
            </div>
          </div>

          <div class="info-item-card">
            <div class="info-icon">
              <b-icon pack="fas" icon="circle-info"></b-icon>
            </div>
            <div class="info-content">
              <label>Support</label>
              <span>Help with your account or platform usage.</span>
              <a href="mailto:support@quickadmit.com">support@quickadmit.com</a>
            </div>
          </div>

          <div class="info-item-card">
            <div class="phone-icon">
              <b-icon pack="fas" icon="phone"></b-icon>
            </div>
            <div class="info-content">
              <label>Phone</label>
              <span>(800) 995 - 7776</span>
              <small>Mon–Fri, 9am–5pm EST</small>
            </div>
          </div>

        </div>
      </div>

      <!-- RIGHT CTA SECTION -->
      <div class="column is-6 reveal" ref="ctaCard">
        <div class="cta-inner-card">

          <div class="response-badge">
            ⚡ Average response time: under 1 business day
          </div>

          <h2 class="cta-heading">Experience Effortless Verification</h2>
          <p class="cta-text">
            See how QuickAdmit streamlines verification, accelerates admissions,
            and improves revenue visibility tailored to your workflows.
          </p>

          <div class="cta-buttons">
            <b-button
              type="is-primary"
              class="btn-message"
              @click="$router.push({ name: 'BookDemoView' })">
              Book a Demo
            </b-button>

            <b-button
              type="is-light"
              class="btn-secondary"
              tag="a"
              href="mailto:info@quickadmit.com">
              Email Sales
            </b-button>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "ContactView",
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

    observer.observe(this.$refs.leftInfo);
    observer.observe(this.$refs.ctaCard);
  }
};
</script>

<style scoped>
/* OUTER WRAPPER */
.contact-outer-wrapper {
  background-color: #F4F7FA;
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
}

/* MAIN CARD */
.contact-main-card {
  background: #F9FBFF;
  border-radius: 24px;
  max-width: 1100px;
  width: fit-content;
  padding: 3rem;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.05);
}

/* LEFT INFO */
.qa-display-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0A1E43;
  margin-bottom: 1rem;
}


.qa-display-subtitle {
  display: block;          /* ensure it spans full container width */
  width: 100%;             /* take full width available */
  font-size: 1.1rem;
  color: #4A5568;
  line-height: 1.6;        /* readable spacing */
}

/* INFO CARDS */
.info-item-card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.info-content label {
  font-weight: 700;
  color: #0A1E43;
  display: block;
}

.info-content span {
  font-size: 0.85rem;
  color: #718096;
  display: block;
  margin-bottom: 0.25rem;
}

.info-content a {
  color: #7b5cff;
  font-size: 0.9rem;
  text-decoration: underline;
}

.info-icon b-icon,
.phone-icon b-icon {
  color: #7b5cff;
  font-size: 1.4rem;
}

/* CTA CARD */
.cta-inner-card {
  background: #FFFFFF;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  text-align: left;
  position: relative;
  overflow: hidden;
  
}

/* Glow */
.cta-inner-card::before {
  content: "";
  position: absolute;
  inset: -40%;
  background: radial-gradient(circle at top right,
      rgba(123, 92, 255, 0.25),
      transparent 60%);
  z-index: 0;
}

.cta-inner-card * {
  position: relative;
  z-index: 1;
}

/* Badge */
.response-badge {
  display: inline-block;
  background: rgba(123, 92, 255, 0.1);
  color: #7b5cff;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}

/* CTA Text */
.cta-heading {
  font-size: 1.6rem;
  font-weight: 700;
  color: #0A1E43;
  margin-bottom: 1rem;
}

.cta-text {
  color: #4A5568;
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* Buttons */
.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn-message {
  background-color: #7b5cff !important;
  border-color: transparent;
  color: white !important;
  font-weight: 600;
  border-radius: 8px;
}

.btn-secondary {
  border-radius: 8px;
  font-weight: 600;
}


/* Reveal Animation */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.response-badge {
  display: inline-block;
  background: rgba(123, 92, 255, 0.1);
  color: #7b5cff;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(123, 92, 255, 0.15);

  animation: badgeFloat 3.5s ease-in-out infinite;
}

/* ✨ Gentle up-down motion */
@keyframes badgeFloat {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-4px); }
  100% { transform: translateY(0); }
}

/* Tablet */
@media screen and (max-width: 1023px) {
  .contact-main-card {
    padding: 2rem;
  }

  .column.is-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

/* Mobile */
@media screen and (max-width: 768px) {
  .contact-main-card {
    padding: 1.25rem;
  }

  .qa-display-title {
    font-size: 1.8rem;
  }
.qa-display-subtitle {
    max-width: 100%;       /* on mobile, use full width */
    font-size: 1rem;       /* slightly smaller */
  }

  .cta-inner-card {
    padding: 1.5rem;
     margin-top: 10px;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn-message,
  .btn-secondary {
    width: 100%;
  }
}
</style>