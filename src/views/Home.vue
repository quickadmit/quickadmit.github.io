<template>
  <div class="home-page">
    <HeroSection />
    <TrustSection />
    <ServicesSection />
    <ReadySection />
  </div>
</template>

<script>
import HeroSection from '../components/home/hero.vue';
import TrustSection from '../components/home/TrustSection.vue';
import ServicesSection from '../components/home/ServicesSection.vue';
import ReadySection from '../components/home/ReadySection.vue';


export default {
  name: 'HomeComponent',
  components: {
    HeroSection,
    TrustSection,
    ServicesSection,
    ReadySection
  }
};
</script>

<style scoped>
.home-page {
  background-color: var(--soft-off-white);
  padding-bottom: 5rem;
}
</style>