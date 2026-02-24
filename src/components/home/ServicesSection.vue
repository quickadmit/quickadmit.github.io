<template>
  <section class="services-section">
    <div class="container">
      <div v-for="(service, index) in services" :key="index"
        :class="['service-card box reveal', { 'is-visible': visibleCards.includes(index) }]" :ref="'card-' + index">
        <div class="columns is-vcentered" :class="{ 'is-reversed-mobile': index % 2 !== 0 }">

          <div class="column is-6 px-6" :class="index % 2 !== 0 ? 'order-2' : ''">
            <div :class="['icon-box mb-4', service.iconClass]">
              <b-icon pack="fas" :icon="service.icon" size="is-medium" type="is-white">
              </b-icon>

            </div>
            <h2 class="service-title" style="color: #7B5CFF;">
              {{ service.title }}
            </h2>
            <p class="service-desc" v-html="service.description"></p>
          </div>

          <div class="column is-6">
            <div class="image-wrapper">
              <div class="image-stack">
                <img v-for="(img, imgIndex) in service.image" :key="imgIndex" :src="img" :alt="service.title"
                  class="stack-img" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
// 1. Import all assets at the top (Vite handles the paths/hashing)
import part1 from '../../assets/part1.png'
import part2 from '../../assets/part2.png'
import listInq from '../../assets/list_inq.png'
import blanketVob from '../../assets/blanket_vob_img.png'
export default {
  name: 'ServicesSection',
  data() {
    return {
      visibleCards: [],
      services: [
        {
          title: "No More Manual Payer Calls",
          icon: "shield-alt", // ✅ valid FA icon
          iconClass: "accent-blue",
          description: `<p>
End the Hold Music Forever. Stop wasting valuable hours waiting for a representative to pick up. QuickAdmit bypasses the phone lines with direct API connections to over 1,500 insurance payers.
</p>

<p>
Get an instant "Green-Light" verification in under 5 seconds, 24/7/365. By automating the heavy lifting, your admissions team can focus on what matters most: the client on the other end of the phone.
</p>`,
          image: [
            part1,
            part2
          ]
        },
        {
          title: "Centralized Admission Intelligence",
          icon: "network-wired", // ✅ valid FA icon
          iconClass: "accent-blue",
          description: `<p>
Ditch the fragmented spreadsheets and sticky notes for a single source of truth. QuickAdmit centralizes every incoming inquiry into a unified, high-velocity dashboard.
</p>

<p>
Track real-time status and move patients from "first call" to "admitted" without a single referral falling through the cracks — all within a secure, 100% HIPAA-compliant environment.
</p>`,
          image: [listInq]
        },
        {
          title: "Zero Missed Opportunities",
          icon: "chart-line",
          iconClass: "accent-teal",
          description: `<p>
With Custom Logic Alerts highlighting critical data in the colors of your choice, and Expected Insurance Value (EIV) providing financial clarity upfront, you can move a lead through the pipeline with total confidence.
</p>

<p>
Our mission is to maximize your occupancy and improve patient access to care by turning a "first answer" into a successful admission faster than ever before.
</p>`,
          image: [blanketVob]
        }
      ]
    };
  },
  mounted() {
    this.initScrollReveal();
  },
  methods: {
    initScrollReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('ref-index'));
            if (!this.visibleCards.includes(index)) {
              this.visibleCards.push(index);
            }
          }
        });
      }, { threshold: 0.2 });

      this.services.forEach((_, index) => {
        const el = this.$refs['card-' + index][0];
        el.setAttribute('ref-index', index);
        observer.observe(el);
      });
    }
  }
};
</script>
<style scoped>
/* =============================== */
/* Reveal Animation */
/* =============================== */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* =============================== */
/* Section Layout */
/* =============================== */
.services-section {
  background-color: var(--soft-off-white);
  padding: 6rem 1.5rem;
}

.service-card {
  background-color: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  margin-bottom: 4rem;
  overflow: hidden;
}

/* =============================== */
/* Icon */
/* =============================== */
.icon-box {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.accent-blue,
.accent-teal {
  background-color: #312f32;
}

/* =============================== */
/* Text */
/* =============================== */
.service-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #7b5cff;
}

.service-desc {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

/* =============================== */
/* Images (Desktop Overlap) */
/* =============================== */
.image-wrapper {
  position: relative;
  padding: 2rem;
}

.image-stack {
  position: relative;
  width: 100%;
}

/* Base image style */
.stack-img {
  width: 85%;
  border-radius: 16px;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.12);
  transition: transform 0.4s ease;
}

/* First image behaves normally */
.stack-img:first-child {
  position: relative;
  z-index: 2;
}

/* Second image overlaps only if exists */
.stack-img:last-child:not(:only-child) {
  position: absolute;
  top: 120px;
  left: 60px;
  z-index: 1;
}

/* Hover effect */
.service-card:hover .stack-img {
  transform: translateY(-4px);
}

/* =============================== */
/* Desktop Layout Tweaks */
/* =============================== */
@media screen and (min-width: 769px) {
  .order-2 {
    order: 2;
  }
}

/* =============================== */
/* Tablet (≤ 1023px) */
/* =============================== */
@media screen and (max-width: 1023px) {
  .services-section {
    padding: 4rem 1.5rem;
  }

  .service-card {
    margin-bottom: 3rem;
  }

  .column {
    padding: 1.5rem !important;
  }
}

/* =============================== */
/* Mobile (≤ 768px) */
/* =============================== */
@media screen and (max-width: 768px) {

  .services-section {
    padding: 3rem 1rem;
  }

  .service-card {
    margin-bottom: 2rem;
    border-radius: 16px;
  }

  .columns {
    margin: 0;
  }

  .column {
    padding: 1rem !important;
  }

  .service-title {
    font-size: 1.5rem;
  }

  .service-desc {
    font-size: 1rem;
  }

  /* Remove overlap on mobile */
  .stack-img {
    position: relative !important;
    width: 100%;
    top: auto !important;
    left: auto !important;
    margin-bottom: 1rem;
  }

  .image-wrapper {
    padding: 1rem;
  }

  .is-reversed-mobile {
    display: flex;
    flex-direction: column-reverse;
  }
}

/* =============================== */
/* Small Mobile (≤ 480px) */
/* =============================== */
@media screen and (max-width: 480px) {

  .services-section {
    padding: 2.5rem 0.75rem;
  }

  .service-title {
    font-size: 1.35rem;
  }

  .service-desc {
    font-size: 0.95rem;
  }

  .image-wrapper {
    padding: 0.75rem;
  }
}

/* Move second overlapped image slightly higher */
.service-card:first-child .stack-img:last-child:not(:only-child) {
  top: 50px;
  /* was 120px → now higher */
  left: 60px;
}

/* Optional: lift the whole image wrapper slightly */
.service-card:first-child .image-wrapper {
  padding-top: 1rem;
  /* reduce top padding */
}
</style>