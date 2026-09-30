<template>
  <header class="site-header">
    <nav class="site-nav" aria-label="Primary navigation">
      <router-link to="/" class="brand" aria-label="QuickAdmit home" @click="closeMenus">
        <img src="/logo-wide.png" alt="QuickAdmit" />
      </router-link>

      <button class="menu-toggle" :aria-expanded="menuOpen" aria-label="Toggle menu" @click="toggleMenu">
        <span></span><span></span><span></span>
      </button>

      <div class="nav-content" :class="{ open: menuOpen }">
        <div class="nav-links">
          <router-link to="/" @click="closeMenus">Home</router-link>
          <div class="products-menu" :class="{ open: productsOpen }">
            <button
              class="nav-link-button"
              type="button"
              :aria-expanded="productsOpen"
              aria-haspopup="true"
              @click="toggleProducts"
            >
              Products <i class="fas fa-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="products-dropdown">
              <router-link to="/#outages" @click="closeMenus"><i class="fas fa-signal"></i> Payer intelligence</router-link>
              <router-link to="/?workflow=inquiry#workflows" @click="closeMenus"><i class="fas fa-magnifying-glass"></i> Inquiries</router-link>
              <router-link to="/?workflow=blanket#workflows" @click="closeMenus"><i class="fas fa-shield-halved"></i> Blanket VOB</router-link>
              <router-link to="/#reimbursement" @click="closeMenus"><i class="fas fa-calculator"></i> Reimbursement</router-link>
              <router-link to="/#automation" @click="closeMenus"><i class="fas fa-bell"></i> Alerting</router-link>
              <router-link to="/#automation" @click="closeMenus"><i class="fas fa-layer-group"></i> VOB batching</router-link>
              <router-link to="/#automation" @click="closeMenus"><i class="fas fa-chart-column"></i> Reporting</router-link>
              <router-link to="/#access" @click="closeMenus"><i class="fas fa-mobile-screen-button"></i> Mobile apps &amp; API access</router-link>
            </div>
          </div>
          <div class="resources-menu" :class="{ open: resourcesOpen }">
            <button
              class="nav-link-button"
              type="button"
              :aria-expanded="resourcesOpen"
              aria-haspopup="true"
              @click="toggleResources"
            >
              Resources <i class="fas fa-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="resources-dropdown">
              <router-link to="/faqs" @click="closeMenus"><i class="fas fa-circle-question"></i> FAQs</router-link>
              <router-link to="/blog" @click="closeMenus"><i class="fas fa-newspaper"></i> Blog</router-link>
              <router-link to="/api-docs" @click="closeMenus"><i class="fas fa-code"></i> API Documentation</router-link>
            </div>
          </div>
          <router-link to="/contact" @click="closeMenus">Contact</router-link>
        </div>
        <div class="nav-actions">
          <a href="https://app.quickadmit.com/login">Sign in</a>
          <router-link to="/book" class="demo-link" @click="closeMenus">Request a demo</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      menuOpen: false,
      productsOpen: false,
      resourcesOpen: false,
    };
  },
  methods: {
    closeMenus() {
      this.menuOpen = false;
      this.productsOpen = false;
      this.resourcesOpen = false;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      this.productsOpen = false;
      this.resourcesOpen = false;
    },
    toggleProducts() {
      this.productsOpen = !this.productsOpen;
      this.resourcesOpen = false;
    },
    toggleResources() {
      this.resourcesOpen = !this.resourcesOpen;
      this.productsOpen = false;
    },
  },
};
</script>

<style scoped>
.site-header { position: sticky; top: 0; z-index: 100; border-bottom: 1px solid rgba(226, 222, 234, .8); background: rgba(255, 255, 255, .9); backdrop-filter: blur(18px); }
.site-nav { position: relative; display: flex; width: min(1280px, 100%); min-height: 64px; align-items: center; margin: 0 auto; padding: 0 32px; }
.brand { display: flex; align-items: center; flex: none; }.brand img { display: block; width: 184px; height: auto; }
.nav-content { display: flex; flex: 1; align-items: center; justify-content: flex-end; margin-left: auto; }
.nav-links { position: absolute; left: 50%; transform: translateX(-50%); }
.nav-links, .nav-actions { display: flex; align-items: center; gap: 28px; }
.nav-links > a, .nav-link-button, .nav-actions a { font-size: 14px; line-height: 20px; text-decoration: none; transition: color .2s ease; }
.nav-links > a, .nav-link-button { position: relative; color: var(--qa-muted); font-weight: 500; }
.nav-link-button { display: flex; align-items: center; gap: 6px; padding: 0; border: 0; background: transparent; cursor: pointer; font-family: inherit; }
.nav-links > a::after, .nav-link-button::after { position: absolute; right: 0; bottom: -7px; left: 0; height: 2px; border-radius: 2px; background: var(--qa-primary); content: ""; transform: scaleX(0); transform-origin: right; transition: transform .24s ease; }
.nav-links > a:hover::after, .nav-links > a:focus-visible::after, .nav-link-button:hover::after, .nav-link-button:focus-visible::after, .products-menu.open .nav-link-button::after, .resources-menu.open .nav-link-button::after { transform: scaleX(1); transform-origin: left; }
.nav-actions a { color: var(--qa-ink); font-weight: 600; }
.nav-links > a:hover, .nav-links > a:focus-visible, .nav-link-button:hover, .nav-link-button:focus-visible, .products-menu.open .nav-link-button, .resources-menu.open .nav-link-button, .nav-actions > a:first-child:hover { color: var(--qa-primary); }
.nav-link-button:focus-visible { outline: none; }
.nav-link-button > i { font-size: 9px; transition: transform .2s ease; }
.products-menu, .resources-menu { position: relative; }
.products-menu.open .nav-link-button > i, .resources-menu.open .nav-link-button > i { transform: rotate(180deg); }
.products-dropdown, .resources-dropdown { position: absolute; top: calc(100% + 16px); right: 0; display: grid; min-width: 220px; gap: 4px; padding: 8px; border: 1px solid var(--qa-border); border-radius: 14px; background: rgba(255,255,255,.98); box-shadow: var(--qa-shadow-float); opacity: 0; visibility: hidden; transform: translateY(-6px); transition: opacity .18s ease, transform .18s ease, visibility .18s ease; }
.products-dropdown { right: auto; left: 0; min-width: 430px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
.products-menu:hover .products-dropdown, .products-menu:focus-within .products-dropdown, .products-menu.open .products-dropdown, .resources-menu:hover .resources-dropdown, .resources-menu:focus-within .resources-dropdown, .resources-menu.open .resources-dropdown { opacity: 1; visibility: visible; transform: translateY(0); }
.products-dropdown a, .resources-dropdown a { display: flex; align-items: center; gap: 10px; padding: 10px 11px; border-radius: 9px; color: var(--qa-ink); font-size: 13px; font-weight: 600; text-decoration: none; white-space: nowrap; transition: color .18s ease, background .18s ease; }
.products-dropdown a:hover, .products-dropdown a:focus-visible, .resources-dropdown a:hover, .resources-dropdown a:focus-visible { color: var(--qa-primary); background: var(--qa-primary-soft); outline: none; }
.products-dropdown a i, .resources-dropdown a i { width: 16px; color: var(--qa-primary); text-align: center; }
.nav-actions { gap: 18px; }.demo-link { min-height: 40px; display: inline-flex; align-items: center; padding: 0 18px; border-radius: 14px; color: white !important; background: var(--qa-brand-gradient); box-shadow: var(--qa-shadow-glow); font-size: .9rem !important; }
.menu-toggle { display: none; width: 42px; height: 42px; margin-left: auto; padding: 10px; border: 1px solid var(--qa-border); border-radius: 50%; background: white; cursor: pointer; }.menu-toggle span { display: block; height: 2px; margin: 4px 0; border-radius: 2px; background: var(--qa-ink); }
@media (max-width: 900px) {
  .site-nav { padding: 0 20px; }.brand img { width: 178px; }.menu-toggle { display: block; }.nav-content { position: absolute; top: 64px; right: 14px; left: 14px; display: none; max-height: calc(100vh - 80px); overflow-y: auto; margin: 0; padding: 18px; border: 1px solid var(--qa-border); border-radius: 16px; background: white; box-shadow: var(--qa-shadow-float); }.nav-content.open { display: block; }.nav-links { position: static; transform: none; }.nav-links, .nav-actions { align-items: stretch; flex-direction: column; gap: 4px; }.nav-links > a, .nav-link-button, .nav-actions a { width: 100%; padding: 12px; border-radius: 9px; text-align: left; }.nav-links > a::after, .nav-link-button::after { display: none; }.nav-links > a:hover, .nav-link-button:hover, .nav-actions > a:first-child:hover { background: var(--qa-primary-soft); }.nav-link-button { justify-content: space-between; }.products-menu, .resources-menu { width: 100%; }.products-dropdown, .resources-dropdown { position: static; display: none; min-width: 0; margin: 2px 0 4px; padding: 5px 0 5px 14px; border: 0; border-left: 2px solid var(--qa-primary-soft); border-radius: 0; box-shadow: none; opacity: 1; visibility: visible; transform: none; transition: none; }.products-dropdown { grid-template-columns: 1fr; }.products-menu.open .products-dropdown, .resources-menu.open .resources-dropdown { display: grid; }.products-dropdown a, .resources-dropdown a { padding: 9px 12px; }.nav-actions { margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--qa-border); }.demo-link { justify-content: center; }
}
</style>
