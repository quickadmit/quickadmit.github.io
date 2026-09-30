<template>
  <div class="faq-page">
    <section class="faq-hero">
      <div class="faq-hero-copy">
        <h1>Clear answers for faster admissions.</h1>
        <p>Learn how instant VOB, payer intelligence, reimbursement estimates, mobile access and integrations fit into a modern intake workflow.</p>
        <a href="#questions" class="hero-link">Explore the answers <i class="fas fa-arrow-down" aria-hidden="true"></i></a>
      </div>
      <div class="faq-hero-visual">
        <img :src="faqImage" alt="A hand moving from a question card to a verified answer card" />
        <div class="answer-badge"><span></span> Answers your intake team can use</div>
      </div>
    </section>

    <section id="questions" class="faq-content">
      <div class="section-intro">
        <span class="eyebrow">Common questions</span>
        <h2>Everything you need to know before your first inquiry.</h2>
      </div>

      <div class="faq-list">
        <details v-for="(item, index) in faqs" :key="item.question" :open="index === 0">
          <summary>
            <span class="question-number">{{ String(index + 1).padStart(2, "0") }}</span>
            <span>{{ item.question }}</span>
            <i class="fas fa-plus" aria-hidden="true"></i>
          </summary>
          <div class="answer" v-html="item.answer"></div>
        </details>
      </div>
    </section>

    <section class="faq-cta">
      <div>
        <span class="eyebrow">Have another question?</span>
        <h2>See QuickAdmit in your admissions workflow.</h2>
      </div>
      <div class="cta-actions">
        <router-link to="/book" class="primary-link">Request a demo</router-link>
        <router-link to="/contact" class="secondary-link">Contact our team</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import faqImage from "../assets/faq-answers-v2.webp";

export default {
  name: "FaqView",
  data() {
    return {
      faqImage,
      faqs: [
        {
          question: "What is an instant VOB (Verification of Benefits)?",
          answer: "<p>An instant Verification of Benefits is an automated, real-time electronic inquiry that returns a patient’s active insurance status and detailed policy information in seconds.</p><p>Unlike a basic eligibility check that only confirms active coverage, QuickAdmit can return deductibles, coinsurance, out-of-pocket maximums, behavioral-health benefits, authorization requirements and other payer-provided details needed to plan the next step.</p>",
        },
        {
          question: "How fast does QuickAdmit verify patient insurance benefits?",
          answer: "<p>QuickAdmit typically returns a comprehensive benefit verification in under five seconds, depending on payer availability and the information returned by that payer.</p><p>That lets intake coordinators review coverage status, patient responsibility and authorization guidance while the caller is still on the initial inquiry.</p>",
        },
        {
          question: "How does QuickAdmit reduce phone hold times for admissions teams?",
          answer: "<p>QuickAdmit uses electronic data interchange and direct payer connections to retrieve policy information without requiring staff to navigate payer phone trees or wait for a manual callback.</p><p>For supported searches, admissions staff can use the payer, patient name and date of birth without needing the member ID, then review the response directly in the platform.</p>",
        },
        {
          question: "What happens if a payer connection goes down?",
          answer: "<p>QuickAdmit shows live payer availability before an inquiry is submitted, so your team can see when a connection is degraded or unavailable.</p><p>Redundant payer connections significantly reduce the impact of an individual connection going down. QuickAdmit does not promise an automatic retry when a payer is unavailable, but the additional pathways help lower avoidable disruption whenever another connection is available.</p>",
        },
        {
          question: "Can QuickAdmit show patient responsibility and reimbursement estimates?",
          answer: "<p>Yes, as two related parts of the workflow. Eligibility responses can include payer-returned deductibles, remaining amounts, coinsurance, copays and out-of-pocket maximums.</p><p>QuickAdmit’s reimbursement search separately uses real historical claims data to return any available expected percentage allowed on charges, broken down by level of care from detox through outpatient. Reimbursement estimates are available in the QuickAdmit app and are not currently offered through the API.</p>",
        },
        {
          question: "Can admissions staff run VOBs remotely or after business hours?",
          answer: "<p>Yes. QuickAdmit is available across desktop, tablet and mobile devices. Staff can run inquiries and Blanket VOB searches from the office, home or on the go, including nights, weekends and holidays.</p><p>Electronic verification also avoids relying on traditional payer phone hours, though result availability still depends on the payer connection.</p>",
        },
        {
          question: "Does QuickAdmit integrate with our CRM, EHR or intake workflow?",
          answer: "<p>Yes. QuickAdmit offers a REST API alongside the web and mobile apps. Organizations can connect eligibility inquiries, Blanket VOB, batching and payer status to an EHR, CRM or custom intake workflow.</p><p>Reimbursement estimates are currently available inside the QuickAdmit app rather than through the API. <a href='/api-docs'>Read the API documentation</a> for current endpoints and schemas.</p>",
        },
      ],
    };
  },
};
</script>

<style scoped>
.faq-page { overflow: hidden; background: var(--qa-background); }
.faq-hero { position: relative; display: grid; width: min(1280px, 100%); min-height: 570px; grid-template-columns: .9fr 1.1fr; gap: 64px; align-items: center; margin: 0 auto; padding: 88px 32px 76px; }
.faq-hero::before { position: absolute; z-index: 0; inset: 0; background: radial-gradient(circle at 82% 28%, rgba(124, 77, 222, .14), transparent 34%), radial-gradient(circle at 14% 70%, rgba(78, 218, 144, .1), transparent 28%); content: ""; pointer-events: none; }
.faq-hero-copy, .faq-hero-visual { position: relative; z-index: 1; }
.eyebrow { display: inline-block; margin-bottom: 14px; color: var(--qa-primary); font-size: 12px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
.faq-hero h1, .section-intro h2, .faq-cta h2 { margin: 0; color: var(--qa-ink); font-family: var(--qa-heading-font); font-weight: 750; letter-spacing: -.045em; }
.faq-hero h1 { max-width: 620px; font-size: clamp(48px, 5vw, 70px); line-height: 1.03; }
.faq-hero-copy > p { max-width: 600px; margin: 24px 0 28px; color: var(--qa-muted); font-size: 18px; line-height: 1.75; }
.hero-link { display: inline-flex; align-items: center; gap: 10px; color: var(--qa-primary); font-weight: 750; text-decoration: none; }
.hero-link i { transition: transform .2s ease; }.hero-link:hover i { transform: translateY(3px); }
.faq-hero-visual { min-width: 0; }
.faq-hero-visual img { display: block; width: 100%; aspect-ratio: 16 / 9; border: 1px solid rgba(124, 77, 222, .13); border-radius: 26px; box-shadow: var(--qa-shadow-float); object-fit: cover; }
.answer-badge { position: absolute; right: 22px; bottom: -18px; display: flex; align-items: center; gap: 9px; padding: 12px 16px; border: 1px solid var(--qa-border); border-radius: 12px; background: rgba(255,255,255,.94); box-shadow: var(--qa-shadow-card); color: var(--qa-ink); font-size: 13px; font-weight: 750; backdrop-filter: blur(12px); }
.answer-badge span { width: 9px; height: 9px; border-radius: 50%; background: #42cc7b; box-shadow: 0 0 0 5px rgba(66,204,123,.14), 0 0 18px rgba(66,204,123,.65); }
.faq-content { padding: 100px 32px 112px; border-top: 1px solid var(--qa-border); background: white; }
.section-intro, .faq-list { width: min(900px, 100%); margin-right: auto; margin-left: auto; }
.section-intro { margin-bottom: 34px; text-align: center; }
.section-intro h2 { font-size: clamp(36px, 4vw, 50px); line-height: 1.12; }
.faq-list { display: grid; gap: 12px; }
.faq-list details { overflow: hidden; border: 1px solid var(--qa-border); border-radius: 16px; background: var(--qa-background); transition: border-color .2s ease, box-shadow .2s ease, background .2s ease; }
.faq-list details[open] { border-color: rgba(124, 77, 222, .24); background: white; box-shadow: var(--qa-shadow-card); }
.faq-list summary { display: grid; grid-template-columns: 46px 1fr auto; gap: 14px; align-items: center; padding: 22px 24px; color: var(--qa-ink); cursor: pointer; font-family: var(--qa-heading-font); font-size: 17px; font-weight: 700; list-style: none; }
.faq-list summary::-webkit-details-marker { display: none; }
.question-number { color: var(--qa-primary); font-family: "Manrope", sans-serif; font-size: 12px; font-weight: 800; letter-spacing: .08em; }
.faq-list summary i { display: grid; width: 30px; height: 30px; place-items: center; border-radius: 9px; background: var(--qa-primary-soft); color: var(--qa-primary); font-size: 11px; transition: transform .25s ease, background .25s ease, color .25s ease; }
.faq-list details[open] summary i { transform: rotate(45deg); background: var(--qa-primary); color: white; }
.answer { padding: 0 70px 24px 84px; color: var(--qa-muted); font-size: 15px; line-height: 1.8; }
.answer :deep(p) { margin: 0 0 12px; }.answer :deep(p:last-child) { margin-bottom: 0; }.answer :deep(a) { color: var(--qa-primary); font-weight: 700; }
.faq-cta { display: flex; width: min(1216px, calc(100% - 64px)); align-items: center; justify-content: space-between; gap: 32px; margin: 90px auto; padding: 44px 48px; border: 1px solid rgba(124, 77, 222, .14); border-radius: 22px; background: linear-gradient(135deg, var(--qa-primary-soft), white 72%); box-shadow: var(--qa-shadow-card); }
.faq-cta h2 { font-size: clamp(28px, 3vw, 39px); line-height: 1.15; }
.cta-actions { display: flex; flex: none; gap: 12px; }
.primary-link, .secondary-link { display: inline-flex; min-height: 46px; align-items: center; justify-content: center; padding: 0 19px; border-radius: 12px; font-size: 14px; font-weight: 750; text-decoration: none; }
.primary-link { background: var(--qa-brand-gradient); box-shadow: var(--qa-shadow-glow); color: white; }.secondary-link { border: 1px solid var(--qa-border); background: white; color: var(--qa-ink); }
@media (max-width: 900px) { .faq-hero { min-height: auto; grid-template-columns: 1fr; gap: 48px; padding-top: 70px; }.faq-hero-copy { text-align: center; }.faq-hero h1, .faq-hero-copy > p { margin-right: auto; margin-left: auto; }.faq-cta { align-items: flex-start; flex-direction: column; } }
@media (max-width: 620px) { .faq-hero { padding: 54px 20px 68px; }.faq-hero h1 { font-size: 42px; }.faq-content { padding: 74px 20px 82px; }.faq-list summary { grid-template-columns: 34px 1fr auto; gap: 9px; padding: 19px 16px; font-size: 15px; }.answer { padding: 0 18px 20px 59px; }.faq-cta { width: calc(100% - 40px); margin: 66px auto; padding: 30px 24px; }.cta-actions { width: 100%; flex-direction: column; }.answer-badge { right: 8px; bottom: -22px; } }
</style>
