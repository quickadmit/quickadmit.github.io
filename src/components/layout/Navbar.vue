<template>
  <b-navbar class="qa-navbar" :fixed-top="true" :transparent="false" :mobile-burger="true">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }" class="logo-container">
        <img src="../../assets/logo3.png" alt="QuickAdmit Logo" class="qa-logo" />
      </b-navbar-item>
    </template>

    <template #start>
      <b-navbar-item tag="router-link" :to="{ name: 'HomeComponent' }" class="nav-link">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'Products' }" class="nav-link">
        Products
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'BlogView' }" class="nav-link">
        Blog
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'ContactView' }" class="nav-link">
        Contact
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button type="is-primary" class="btn-demo" @click="openLoginInNewTab">
            Login
          </b-button>
          <b-button type="is-primary" class="btn-demo" @click="$router.push({ name: 'BookDemoView' })">
            Book a Demo
          </b-button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      // Logic for mobile menu is handled internally by b-navbar
    };
  },
  methods: {
    openLoginInNewTab() {
      const url = 'https://app.quickadmit.com/login'
      window.location.href = url;
    }
  }
};
</script>

<style scoped>
/* 🔝 Navbar Background & Height */
.qa-navbar {
  background-color: #0f0f14 !important;
  min-height: 72px;
  /* Premium height as requested */
  padding: 0 1.5rem;
  border-bottom: 1px solid rgba(123, 92, 255, 0.1);
  /* Subtle accent */
  font-family: 'Inter', sans-serif;
}

/* 🔤 Navbar Text Defaults */
.nav-link {
  color: #e6e8f5 !important;
  /* brighter than gray */
  font-weight: 500;
  transition: color 0.25s ease, opacity 0.25s ease;
  cursor: pointer;
}

/* Active / Hover States */
.nav-link:hover,
.nav-link.is-active {
  background-color: transparent !important;
  color: #7b5cff !important;
  /* Brand Purple */
}

/* Logo Sizing */
.qa-logo {
  max-height: 40px !important;
  margin-top: 10px;
}

/* Buttons Styling */
.btn-login {
  color: #dadbf2 !important;
  text-decoration: none;
  margin-right: 0.5rem;
}

.btn-login:hover {
  color: #7b5cff !important;
}

.btn-demo {
  background-color: #7b5cff !important;
  border-color: transparent;
  color: #ffffff !important;
  font-weight: 600;
  border-radius: 8px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  transition: transform 0.2s ease;
}

.btn-demo:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(123, 92, 255, 0.3);
}

/* Mobile Menu Adjustments */
@media screen and (max-width: 1023px) {
  :deep(.navbar-menu) {
    background-color: #1b1833 !important;
    /* Softer gradient option for mobile menu */
    padding: 1rem 0;
  }

  .nav-link {
    padding: 1rem 1.5rem;
  }
}

/* Remove Bulma default hover background */
:deep(.navbar-item:hover),
:deep(.navbar-item:focus),
:deep(.navbar-item.is-active) {
  background-color: transparent !important;
}

:deep(.router-link-exact-active) {
  color: #9f87ff !important;
  /* brighter purple */
}
</style>