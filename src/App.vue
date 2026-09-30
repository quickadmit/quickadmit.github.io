<template>
  <div id="app">
    <NavbarComponent />

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
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
:root:root {
  color-scheme: light;
  --qa-primary: oklch(55% .19 293);
  --qa-primary-hover: oklch(50% .19 293);
  --qa-primary-soft: oklch(95% .03 295);
  --qa-background: oklch(99% .004 290);
  --qa-ink: oklch(24% .02 285);
  --qa-dark: oklch(25% .015 285);
  --qa-muted: oklch(50% .02 285);
  --qa-ink-muted: oklch(70% .02 290);
  --qa-muted-surface: oklch(95.5% .008 290);
  --qa-border: oklch(91% .01 290);
  --qa-brand-gradient: linear-gradient(135deg, oklch(55% .19 293), oklch(66% .17 300));
  --qa-hero-gradient: radial-gradient(60% 60% at 80% 10%, oklch(90% .06 295 / .8), transparent 70%), radial-gradient(40% 40% at 10% 90%, oklch(93% .04 300 / .9), transparent 70%);
  --qa-shadow-card: 0 1px 2px oklch(25% .02 285 / .04), 0 12px 32px -12px oklch(25% .02 285 / .12);
  --qa-shadow-float: 0 24px 60px -20px oklch(40% .15 293 / .35);
  --qa-shadow-glow: 0 0 0 1px oklch(55% .19 293 / .15), 0 10px 30px -10px oklch(55% .19 293 / .5);
  --qa-heading-font: "Sora", ui-sans-serif, system-ui, sans-serif;
  --bulma-body-background-color: var(--qa-background);
  --bulma-body-color: var(--qa-ink);
  --bulma-body-family: "Manrope", ui-sans-serif, system-ui, sans-serif;
  --bulma-link-text: var(--qa-primary);
  --bulma-strong-color: var(--qa-ink);
  --bulma-text: var(--qa-muted);
  --bulma-text-strong: var(--qa-ink);
  --primary-purple: var(--qa-primary);
  --primary-purple-hover: var(--qa-primary-hover);
  --deep-charcoal: var(--qa-ink);
  --soft-off-white: var(--qa-background);
  --white: #fff;
  --border-color: var(--qa-border);
  --text-primary: var(--qa-ink);
  --text-secondary: var(--qa-muted);
  --text-muted: var(--qa-ink-muted);
}

* {
  box-sizing: border-box;
}

html,
body {
  background-color: var(--qa-background);
  color: var(--qa-ink);
  margin: 0;
  padding: 0;
  font-family: "Manrope", ui-sans-serif, system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

.main-content {
  min-height: calc(100vh - 64px);
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

.table-container {
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--qa-background);
}

::-webkit-scrollbar-thumb {
  background: #D6D9E5;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--qa-primary);
}

.section-title {
  color: var(--qa-ink);
  font-family: var(--qa-heading-font);
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 1.5rem;
}
</style>
