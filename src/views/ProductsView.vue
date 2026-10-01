<template>
  <div class="products-page">
    <header class="products-hero">
      <div class="products-hero-copy">
        <span class="eyebrow">QuickAdmit products</span>
        <h1>Every answer your admissions team needs, in one place.</h1>
        <p>Move from the first call to an admission-ready decision with payer intelligence, instant coverage answers, reimbursement estimates, census monitoring, and access from any device.</p>
        <router-link to="/book" class="primary-link">Book a demo <i class="fas fa-arrow-right" aria-hidden="true"></i></router-link>
      </div>
      <div class="products-summary" aria-label="QuickAdmit platform summary">
        <div><strong>1,500+</strong><span>Payers available</span></div>
        <div><strong>Seconds</strong><span>To coverage answers</span></div>
        <div><strong>24/7</strong><span>Access from any device</span></div>
      </div>
    </header>

    <main class="products-content">
      <div class="section-intro">
        <span class="eyebrow">The complete platform</span>
        <h2>Built around the admissions journey.</h2>
        <p>Open any product to see the workflow, example response, and the operational detail your team receives.</p>
      </div>

      <div class="product-grid">
        <router-link v-for="product in products" :key="product.title" :to="product.to" class="product-card">
          <span class="product-icon"><i :class="product.icon" aria-hidden="true"></i></span>
          <span class="product-copy">
            <strong>{{ product.title }}</strong>
            <small>{{ product.description }}</small>
          </span>
          <i class="fas fa-arrow-right product-arrow" aria-hidden="true"></i>
        </router-link>
      </div>
    </main>

    <section class="products-cta">
      <div>
        <span class="eyebrow">See QuickAdmit in action</span>
        <h2>Bring instant answers into every intake shift.</h2>
      </div>
      <div class="cta-actions">
        <router-link to="/book" class="primary-link">Book a demo</router-link>
        <router-link to="/contact" class="secondary-link">Contact our team</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProductsView",
  data() {
    return {
      products: [
        {
          title: "Payer intelligence",
          description: "Check live payer availability and use redundant connections to reduce avoidable interruptions.",
          icon: "fas fa-signal",
          to: "/#outages",
        },
        {
          title: "Eligibility inquiries",
          description: "Verify coverage, benefits, patient responsibility, and authorization details in seconds.",
          icon: "fas fa-magnifying-glass",
          to: "/?workflow=inquiry#workflows",
        },
        {
          title: "Blanket VOB",
          description: "Search with patient details to find active policies when the payer or member ID is unknown.",
          icon: "fas fa-shield-halved",
          to: "/?workflow=blanket#workflows",
        },
        {
          title: "Reimbursement estimates",
          description: "Review available expected reimbursement percentages for every level of care.",
          icon: "fas fa-calculator",
          to: "/#reimbursement",
        },
        {
          title: "Census monitoring",
          description: "Batch reverify your census and receive completed results by email.",
          icon: "fas fa-layer-group",
          to: "/#automation",
        },
        {
          title: "Alerts and reporting",
          description: "Surface custom guidance on inquiries and export results for billing, audit, and review.",
          icon: "fas fa-bell",
          to: "/#automation",
        },
        {
          title: "Mobile apps",
          description: "Run inquiries and Blanket VOB searches from the office, home, or on the go.",
          icon: "fas fa-mobile-screen-button",
          to: "/#access",
        },
        {
          title: "API access",
          description: "Connect eligibility, Blanket VOB, batching, and payer status to your existing systems.",
          icon: "fas fa-code",
          to: "/#access",
        },
      ],
    };
  },
};
</script>

<style scoped>
.products-page { overflow: hidden; background: var(--qa-background); }
.products-hero { position: relative; display: grid; width: min(1280px, 100%); min-height: 520px; grid-template-columns: 1.15fr .85fr; gap: 70px; align-items: center; margin: 0 auto; padding: 82px 32px 76px; }
.products-hero::before { position: absolute; inset: 0; background: radial-gradient(circle at 78% 24%, rgba(124,77,222,.16), transparent 31%), radial-gradient(circle at 15% 78%, rgba(66,204,123,.1), transparent 25%); content: ""; pointer-events: none; }
.products-hero > * { position: relative; z-index: 1; }
.eyebrow { display: inline-block; margin-bottom: 14px; color: var(--qa-primary); font-size: 12px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
.products-hero h1, .section-intro h2, .products-cta h2 { margin: 0; color: var(--qa-ink); font-family: var(--qa-heading-font); font-weight: 750; letter-spacing: -.045em; }
.products-hero h1 { max-width: 740px; font-size: clamp(46px, 5.4vw, 72px); line-height: 1.04; }
.products-hero-copy > p { max-width: 690px; margin: 24px 0 30px; color: var(--qa-muted); font-size: 18px; line-height: 1.75; }
.primary-link, .secondary-link { display: inline-flex; min-height: 46px; align-items: center; justify-content: center; gap: 10px; padding: 0 19px; border-radius: 12px; font-size: 14px; font-weight: 750; text-decoration: none; }
.primary-link { color: white; background: var(--qa-brand-gradient); box-shadow: var(--qa-shadow-glow); }
.secondary-link { border: 1px solid var(--qa-border); color: var(--qa-ink); background: white; }
.products-summary { display: grid; gap: 12px; }
.products-summary div { padding: 22px 24px; border: 1px solid rgba(124,77,222,.14); border-radius: 18px; background: rgba(255,255,255,.86); box-shadow: var(--qa-shadow-card); backdrop-filter: blur(12px); }
.products-summary strong, .products-summary span { display: block; }
.products-summary strong { color: var(--qa-primary); font-family: var(--qa-heading-font); font-size: 27px; }
.products-summary span { margin-top: 3px; color: var(--qa-muted); font-size: 13px; }
.products-content { padding: 96px 32px 108px; border-top: 1px solid var(--qa-border); background: white; }
.section-intro, .product-grid { width: min(1216px, 100%); margin-right: auto; margin-left: auto; }
.section-intro { margin-bottom: 38px; text-align: center; }
.section-intro h2 { font-size: clamp(36px, 4vw, 52px); line-height: 1.12; }
.section-intro p { max-width: 700px; margin: 18px auto 0; color: var(--qa-muted); font-size: 16px; line-height: 1.7; }
.product-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
.product-card { display: grid; min-height: 148px; grid-template-columns: 48px 1fr auto; gap: 16px; align-items: center; padding: 24px; border: 1px solid var(--qa-border); border-radius: 18px; color: inherit; background: var(--qa-background); text-decoration: none; transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease, background .22s ease; }
.product-card:hover, .product-card:focus-visible { border-color: rgba(124,77,222,.28); background: white; box-shadow: var(--qa-shadow-float); outline: none; transform: translateY(-3px); }
.product-icon { display: grid; width: 48px; height: 48px; place-items: center; border-radius: 14px; color: var(--qa-primary); background: var(--qa-primary-soft); }
.product-copy strong, .product-copy small { display: block; }
.product-copy strong { color: var(--qa-ink); font-family: var(--qa-heading-font); font-size: 18px; }
.product-copy small { margin-top: 7px; color: var(--qa-muted); font-size: 13px; line-height: 1.55; }
.product-arrow { color: #a397b5; font-size: 12px; transition: color .2s ease, transform .2s ease; }
.product-card:hover .product-arrow, .product-card:focus-visible .product-arrow { color: var(--qa-primary); transform: translateX(4px); }
.products-cta { display: flex; width: min(1216px, calc(100% - 64px)); align-items: center; justify-content: space-between; gap: 34px; margin: 88px auto; padding: 44px 48px; border: 1px solid rgba(124,77,222,.14); border-radius: 22px; background: linear-gradient(135deg, var(--qa-primary-soft), white 72%); box-shadow: var(--qa-shadow-card); }
.products-cta h2 { max-width: 720px; font-size: clamp(28px, 3.4vw, 43px); line-height: 1.15; }
.cta-actions { display: flex; flex: none; gap: 12px; }
@media (max-width: 900px) { .products-hero { min-height: auto; grid-template-columns: 1fr; gap: 42px; padding-top: 70px; }.products-summary { grid-template-columns: repeat(3, 1fr); }.product-grid { grid-template-columns: 1fr; }.products-cta { align-items: flex-start; flex-direction: column; } }
@media (max-width: 620px) { .products-hero { padding: 54px 20px 64px; }.products-hero h1 { font-size: 42px; }.products-summary { grid-template-columns: 1fr; }.products-content { padding: 74px 20px 82px; }.product-card { min-height: 0; grid-template-columns: 42px 1fr auto; padding: 20px 16px; }.product-icon { width: 42px; height: 42px; }.products-cta { width: calc(100% - 40px); margin: 66px auto; padding: 30px 24px; }.cta-actions { width: 100%; flex-direction: column; } }
</style>
