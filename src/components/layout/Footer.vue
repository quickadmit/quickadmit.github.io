<template>
  <footer class="footer-wrapper">
    <div class="container">
      <div class="columns is-variable is-8">
        <div class="column is-3">
          <div class="footer-logo mb-5">
            <img src="../../assets/logo3.png" alt="QuickAdmit Logo" class="qa-logo" />
          </div>
          <div class="compliance-badges">
            <div class="badge">
              <img src="../../assets/security.png" class="custom-icon-small" />
              <span>SECURITY / HIPAA Compliant</span>
            </div>
            <div class="badge">
              <img src="../../assets/lock.png" class="custom-icon-small" />
              <span>SSL (Secure Sockets Layer) encryption</span>
            </div>
          </div>
        </div>

        <div class="column">
          <h4 class="footer-header">Products</h4>
          <ul class="footer-links">
            <li>
              <router-link to="/products" class="link-style">Insurance Eligibility</router-link>
            </li>
            <li>
              <router-link to="/products" class="link-style">Blanket VOB</router-link>
            </li>
            <li>
              <router-link to="/products" class="link-style">Reimbursement</router-link>
            </li>
          </ul>
        </div>

        <div class="column">
          <h4 class="footer-header">Company & Legal</h4>
          <ul class="footer-links">
            <li>
              <router-link to="/blog" class="link-style">Blog</router-link>
            </li>
            <li>
              <a href="https://app.quickadmit.com/terms" target="_blank" rel="noopener noreferrer" class="link-style">
                Terms of Service and Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div class="column">
          <h4 class="footer-header">Sales & Support</h4>
          <ul class="footer-links">
            <li>
              <router-link to="book" class="link-style">Book a Demo</router-link>
            </li>
            <li>
              <a href="tel:8009957776" class="link-style">Call us : (800) 995 - 7776</a>
            </li>
            <li>
              <span class="link-style no-pointer">Support 24/7</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="copyright-strip">
        <p>© 2026 QuickAdmit Inc. All rights reserved. Built for Healthcare.</p>
      </div>
      <div class="social-icons pt-4">
        <a href="https://www.linkedin.com/company/quickadmit" class="social-circle" target="_blank"
          rel="noopener noreferrer">
          <b-icon pack="fab" icon="linkedin" size="is-small"></b-icon>
        </a>

        <a href="https://www.instagram.com/quickadmit/" class="social-circle" target="_blank" rel="noopener noreferrer">
          <b-icon pack="fab" icon="instagram" size="is-small"></b-icon>
        </a>

        <a href="https://www.facebook.com/profile.php?id=100095076467143" class="social-circle" target="_blank"
          rel="noopener noreferrer">
          <b-icon pack="fab" icon="facebook" size="is-small"></b-icon>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<style scoped>
.footer-wrapper {
  background-color: #0f0f14;
  padding: 5rem 1.5rem 2rem 1.5rem;
  color: #ffffff;
  font-family: "Inter", sans-serif;
}

/* Typography Headers */
.footer-header {
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

/* 🔄 Unified Link Behavior (Matching Navbar) */
.link-style {
  color: #dadbf2 !important;
  text-decoration: none;
  display: inline-block;
  transition: color 0.3s ease, transform 0.2s ease;
}

.link-style:hover {
  color: #7b5cff !important;
  /* Brand Purple */
  background-color: transparent !important;
  cursor: pointer;
}

/* Support text that isn't a link shouldn't have a pointer but should match style */
.no-pointer {
  cursor: default;
}

/* Brand & Badges */
.footer-logo {
  width: 100%;
}

.qa-purple {
  color: #7b5cff;
}

.qa-grey {
  color: #9aa0b5;
}

.compliance-badges .badge {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #ffffff;
}

/* Bottom Bar */
.footer-bottom {
  margin-top: 1rem;
  text-align: center;
}

.copyright-strip {
  padding: 0.75rem;
  font-size: 0.875rem;
  font-style: italic;
  color: #dadbf2;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-circle {
  width: 32px;
  height: 32px;
  border: 1px solid #dadbf2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dadbf2;
  transition: all 0.3s ease;
}

.social-circle:hover {
  border-color: #7b5cff;
  color: #7b5cff;
  transform: translateY(-2px);
}

.custom-icon-small {
  width: 1.25rem;
  /* Adjust this to match your specific 'is-small' size */
  height: 1.25rem;
  vertical-align: middle;
}
</style>