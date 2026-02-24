<template>
  <div id="app">
    <NavbarComponent />

    <main class="main-content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from './components/layout/Navbar.vue';
import FooterComponent from './components/layout/Footer.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
  }
};
</script>

<style>
/* 1. CORE PALETTE & FOUNDATION */
:root {
  --primary-purple: #7B5CFF;
  --primary-purple-hover: #6847F5;
  --deep-charcoal: #0F0F14;
  --soft-off-white: #F6F7FB;
  /* Main Page Background */
  --white: #FFFFFF;
  --border-color: #E6E8F0;

  /* Text Colors */
  --text-primary: #1C1D2A;
  --text-secondary: #6B6F85;
  --text-muted: #9AA0B5;
}

/* 4. TYPOGRAPHY (Inter / Roboto) */
html,
body {
  background-color: var(--soft-off-white);
  color: var(--text-primary);
  margin: 0;
  padding: 0;
  font-family: 'Inter', 'SF Pro Display', 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

/* 2. PAGE BACKGROUNDS & SECTIONS */
.main-content {
  padding-top: 72px;
  /* Navbar Height Offset */
  min-height: calc(100vh - 72px);
}

/* 5. BUTTONS (Global Design System) */
.button.is-primary {
  background-color: var(--primary-purple) !important;
  border-color: transparent;
  color: #FFFFFF !important;
  height: 48px;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.button.is-primary:hover {
  background-color: var(--primary-purple-hover) !important;
  transform: translateY(-1px);
}

/* 7. TABLES & DASHBOARDS (Global) */
.table-container {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
}

/* Smooth Route Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Scrollbar Stylings */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--soft-off-white);
}

::-webkit-scrollbar-thumb {
  background: #D6D9E5;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-purple);
}

/* Section Header Utility */
.section-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}
</style>