<template>
  <div class="products-page">
    <header class="products-hero reveal" :class="{ 'is-visible': isHeaderVisible }" ref="header">
      <div class="container has-text-centered">
        <h1 class="header-title mb-4">
          The QuickAdmit Product Suite
        </h1>
        <p class="header-subtitle">
          Comprehensive tools designed to eliminate administrative friction and
          prioritize patient care.
        </p>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div v-for="(product, index) in productSuite" :key="index" class="product-card-wrapper reveal"
          :class="{ 'is-visible': visibleCards.includes(index) }" :ref="'product-' + index">
          <div class="product-card box" :style="{
            boxShadow: '0 12px 30px rgba(15,15,20,0.06), 0 3px 8px rgba(15,15,20,0.04)',
            borderColor: product.accent + '30'
          }">
            <div class="columns is-vcentered" :class="{ 'is-reversed': index % 2 !== 0 }">
              <!-- TEXT (Primary) -->
              <div class="column is-7 px-6">
                <span class="product-badge" :style="{
                  background: product.accent + '15',
                  color: product.accent
                }">{{ product.type }}</span>
                <h2 class="product-title" :style="{ color: product.accent }">
                  {{ product.title }}
                </h2>
                <p class="product-description" v-html="product.description"></p>

              </div>

              <!-- IMAGE (Secondary) -->
              <div class="column is-5">
                <div class="product-image-container">
                  <img :src="product.image" :alt="product.title" class="product-ui-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import admitImg from "../assets/admit_img.png"
import vobImg from "../assets/vob_img.png"
import reportImg from "../assets/report_img.png"
import alertImg from "../assets/alert_img.png"
import securityImg from "../assets/security_img.png"
import phoneImg from "../assets/phone_img.png"
import reimbImg from "../assets/reimb_img.png"

export default {
  name: "ProductsView",
  data() {
    return {
      isHeaderVisible: false,
      visibleCards: [],
      productSuite: [
        {
          title: "Inquiries & Lead Management",
          type: "Core Platform",
          accent: "#7B5CFF",
          description:
            `Uptime You Can Depend On.<br/>
  Centralize your intake process with a system designed for maximum reliability,
  By leveraging redundant payer connections, QuickAdmit eliminates the risk of single-point failures,
  If one connection goes down, our system automatically reroutes to ensure your inquiries and eligibility checks never stall,
  keeping your admissions pipeline moving 24/7.`,
          image: admitImg,
        },
        {
          title: "Blanket VOBs",
          type: "Coverage Intelligence",
          accent: "#7B5CFF",
          description:
            `Uncover Hidden Coverage Instantly.<br/>
Our Blanket VOB tool is a powerful discovery engine,
By running a patient’s basic details—Name, DOB, and SSN—against an expansive database of hundreds of payers,
we identify both active and inactive coverage.
This deep-search capability ensures you find the primary, secondary, or forgotten policies,
making sure a patient's care is properly funded.`,
          image: vobImg,
        },
        {
          title: "Reimbursement & EIV",
          type: "Revenue Intelligence",
          accent: "#7B5CFF",
          description:
            `Stop Rolling the Dice on Admissions.<br/>
Go beyond basic verification with Expected Insurance Value (EIV).
Our reimbursement features allow you to see what a policy is likely to pay before the patient even walks through the door.
By integrating EIV into your workflow, your facility can move from "guessing" to making accurate financial projections,
ensuring every admission is backed by a clear understanding of its economic impact.`,
          image: reimbImg,
        },
        {
          title: "Custom Logic Alerts",
          type: "Workflow Automation",
          accent: "#7B5CFF",
          description:
            `Visual Intelligence at a Glance.<br/>
Take the guesswork out of the VOB,
Your team can set custom triggers for specific criteria—such as out-of-network flags, high-deductible warnings, or specific plan types,
When these criteria are met, the VOB is automatically highlighted in a color of your choosing,
This visual shorthand allows your intake team to "scan and understand" critical data in seconds.`,
          image: alertImg,
        },
        {
          title: "Data & Insights",
          type: "Analytics & Reporting",
          accent: "#7B5CFF",
          description:
            `Reporting & Data Export<br/>
Your Data, Your Way.
QuickAdmit puts your data in your hands,
While we keep the tool lean and fast, our Reporting feature allows teams to export all VOB and Blanket VOB data into comprehensive datasets,
By moving your information into your preferred analysis tools, you can manipulate the data to uncover deep insights, track trends, and build custom visualizations,
that drive your facility's unique strategy.`,
          image: reportImg,
        },
        {
          title: "Mobile-First Admissions",
          type: "Anywhere Access",
          accent: "#7B5CFF",
          description:
            `Speed at the Point of Care.<br/>
In a fast-paced facility, the best decisions aren't always made behind a desk,
QuickAdmit is built for mobility, giving your team full access to inquiries, Blanket VOBs, and EIV data from any tablet or smartphone,
Whether you’re meeting a family in the lobby, coordinating in the field, or out of the office,
our mobile-optimized interface ensures you have the power to verify, alert, and admit without ever being tethered to a workstation.`,
          image: phoneImg,
        },
        {
          title: "Security & Compliance",
          type: "Trust & Security",
          accent: "#7B5CFF",
          description:
            `Data Security You Can Trust.<br/>
In the healthcare industry, data integrity is non-negotiable,
QuickAdmit is built on a foundation of rigorous security protocols to ensure that sensitive patient information—including SSNs and clinical data—is protected at every touchpoint.<br/>
HIPAA Compliant: Our platform is fully engineered to meet and exceed HIPAA standards, ensuring the privacy and security of Protected Health Information (PHI),
We maintain strict administrative, physical, and technical safeguards.<br/>
SSL Encrypted: All data transmitted between your team and our servers is protected by high-level SSL (Secure Sockets Layer) encryption.
This creates a secure "tunnel" for your data, making it unreadable to unauthorized parties.`,
          image: securityImg,
        },
      ],
    };
  },
  mounted() {
    this.initObserver();
  },
  methods: {
    initObserver() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target === this.$refs.header) {
                this.isHeaderVisible = true;
              } else {
                const index = parseInt(
                  entry.target.getAttribute("data-index")
                );
                if (!this.visibleCards.includes(index)) {
                  this.visibleCards.push(index);
                }
              }
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(this.$refs.header);

      this.productSuite.forEach((_, index) => {
        const el = this.$refs["product-" + index][0];
        el.setAttribute("data-index", index);
        observer.observe(el);
      });
    },
  },
};
</script>

<style scoped>
/* 🌌 HERO */
.products-hero {
  background: linear-gradient(135deg, #0B0C14 0%, #1A1735 45%, #6A4DFF 100%);
  padding: 5rem 1rem;
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
}

.products-hero::after {
  content: "";
  position: absolute;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgba(123, 92, 255, 0.28), transparent 70%);
  top: -160px;
  right: -160px;
  filter: blur(8px);
}

/* HERO TEXT */
.header-title {
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: -0.8px;
  line-height: 1.15;
}

.header-subtitle {
  font-size: 1.2rem;
  color: #E2E6FF;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

.header-title,
.header-subtitle {
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
}

.products-hero::after {
  animation: floatGlow 8s ease-in-out infinite;
}

@keyframes floatGlow {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(12px);
  }
}

/* 📦 CARD */
.product-card {
  position: relative;
  border-radius: 20px !important;
  background: #FFFFFF !important;
  border: 1px solid #E8EBF5 !important;
  box-shadow:
    0 12px 30px rgba(15, 15, 20, 0.06),
    0 3px 8px rgba(15, 15, 20, 0.04) !important;
  padding: 2.5rem !important;
  transition: all 0.35s ease;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 20px 45px rgba(15, 15, 20, 0.10),
    0 6px 14px rgba(15, 15, 20, 0.06);
}

/* Subtle premium glow */
.product-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 20px;
  pointer-events: none;
  opacity: 0.6;
}


/* 🏷 BADGE */
.product-badge {
  display: inline-block;
  background: linear-gradient(135deg, #F3EEFF, #E7E1FF);
  color: #6A4DFF;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  padding: 5px 12px;
  border-radius: 999px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

/* 🔠 TITLE */
.product-title {
  font-size: 1.8rem;
  font-weight: 750;
  color: #0F172A;
  margin-bottom: 1.2rem;
  letter-spacing: -0.4px;
  position: relative;
}

/* 📝 DESC */
.product-description {
  font-size: 1.02rem;
  color: #5F6B7A;
  line-height: 1.8;
}

.product-description {
  /* color: #000000; */
  font-weight: 600;
}

/* 🖼 IMAGE CONTAINER */
.product-image-container {
  background: linear-gradient(145deg, #F9FAFF, #EEF1F9);
  border-radius: 16px;
  padding: 1rem;
  border: 1px solid #EDF0FA;
  max-width: 460px;
  margin: 0 auto;
  text-align: center;
  transition: all 0.35s ease;
}

.product-card:hover .product-image-container {
  transform: scale(1.02);
}

/* 📱 IMAGE */
.product-ui-img {
  width: 84%;
  max-width: 390px;
  margin: 0 auto;
  display: block;
  border-radius: 12px;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.08);
  transition: transform 0.35s ease;
}

.product-card:hover .product-ui-img {
  transform: translateY(-4px);
}

/* 🎬 ANIMATION */
.reveal {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
  transition:
    opacity 0.8s ease,
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* 📐 SPACING */
.section {
  padding: 5rem 1.5rem;
}

.product-card-wrapper {
  margin-bottom: 3rem;
}

/* 🔄 Desktop alternating */
@media screen and (min-width: 769px) {
  .is-reversed {
    flex-direction: row-reverse;
  }
}

/* 📱 MOBILE */
@media screen and (max-width: 768px) {
  .header-title {
    font-size: 2.2rem;
  }

  .product-title {
    font-size: 1.4rem;
  }

  .product-description {
    font-size: 0.95rem;
  }

  .products-hero {
    padding: 3.5rem 1.2rem;
    backdrop-filter: blur(6px);
  }

  .products-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.15);
  }

  .product-card {
    padding: 1.6rem !important;
  }

  .product-ui-img {
    width: 92%;
  }
}
</style>
