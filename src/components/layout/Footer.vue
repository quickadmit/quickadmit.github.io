<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-brand">
        <router-link to="/" aria-label="QuickAdmit home"><img src="/logo-wide.png" alt="QuickAdmit" /></router-link>
        <p>High-Velocity Dashboard</p>
      </div>
      <div class="footer-group">
        <h3>Platform</h3>
        <router-link to="/products">All products</router-link>
        <router-link to="/#workflows">Inquiries</router-link>
        <router-link to="/#workflows">Blanket VOB</router-link>
        <router-link to="/#reimbursement">Reimbursement</router-link>
      </div>
      <div class="footer-group">
        <h3>Resources</h3>
        <router-link to="/faqs">FAQs</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/api-docs">API documentation</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <div class="footer-group">
        <h3>Get started</h3>
        <router-link to="/book">Request a demo</router-link>
        <a href="https://app.quickadmit.com/login">Sign in</a>
        <a href="tel:8009957776">(800) 995-7776</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© {{ currentYear }} QuickAdmit. All rights reserved.</span>
      <div>
        <a href="https://app.quickadmit.com/terms" target="_blank" rel="noopener noreferrer">Terms &amp; privacy</a>
        <a href="https://www.linkedin.com/company/quickadmit/" target="_blank" rel="noopener noreferrer" aria-label="QuickAdmit on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://www.instagram.com/quick_admit/" target="_blank" rel="noopener noreferrer" aria-label="QuickAdmit on Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/profile.php?id=61590593400048" target="_blank" rel="noopener noreferrer" aria-label="QuickAdmit on Facebook"><i class="fab fa-facebook-f"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  computed: {
    currentYear() { return new Date().getFullYear(); },
  },
};
</script>

<style scoped>
.site-footer { padding: 76px 32px 28px; border-top: 1px solid var(--qa-border); background: #fff; }
.footer-main, .footer-bottom { width: min(1216px, 100%); margin: 0 auto; }.footer-main { display: grid; grid-template-columns: 1.8fr repeat(3, 1fr); gap: 52px; }.footer-brand img { width: 190px; }.footer-brand p { max-width: 320px; color: var(--qa-muted); line-height: 1.6; }.footer-group { display: flex; flex-direction: column; align-items: flex-start; gap: 11px; }.footer-group h3 { margin: 0 0 6px; font-family: var(--qa-heading-font); font-size: 14px; }.footer-group a, .footer-bottom a { color: var(--qa-muted); font-size: 13px; text-decoration: none; }.footer-group a:hover, .footer-bottom a:hover { color: var(--qa-primary); }.footer-bottom { display: flex; align-items: center; justify-content: space-between; margin-top: 56px; padding-top: 24px; border-top: 1px solid var(--qa-border); color: var(--qa-muted); font-size: 12px; }.footer-bottom div { display: flex; align-items: center; gap: 17px; }
@media (max-width: 760px) { .site-footer { padding: 56px 20px 28px; }.footer-main { grid-template-columns: repeat(2, 1fr); gap: 34px; }.footer-brand { grid-column: 1 / -1; }.footer-bottom { align-items: flex-start; flex-direction: column; gap: 20px; } }
@media (max-width: 440px) { .footer-main { grid-template-columns: 1fr; }.footer-brand { grid-column: auto; }.footer-bottom div { flex-wrap: wrap; } }
</style>
