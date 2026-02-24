<template>
  <div class="blog-page">

    <!-- LOCK WRAPPER -->
    <div class="blog-lock-wrapper">

      <!-- ========================= -->
      <!-- ACTUAL BLOG CONTENT (BLURRED) -->
      <!-- ========================= -->
      <div class="blog-content-wrapper">

        <!-- HERO -->
        <header class="blog-hero reveal" :class="{ 'is-visible': heroVisible }" ref="hero">
          <div class="container has-text-centered">
            <h1 class="blog-title">
              Insights & Resources
            </h1>
            <p class="blog-subtitle">
              Operational intelligence, compliance updates, and revenue insights
              for modern healthcare facilities.
            </p>
          </div>
        </header>

        <!-- FEATURED POST -->
        <section class="section">
          <div class="container reveal" :class="{ 'is-visible': featuredVisible }" ref="featured">
            <div class="featured-card columns is-vcentered">

              <div class="column is-6">
                <img src="https://images.unsplash.com/photo-1580281657527-47b7d16f78f1" class="featured-img" />
              </div>

              <div class="column is-6">
                <span class="blog-badge">Featured</span>
                <h2 class="featured-title">
                  Improving Admissions Efficiency in Behavioral Health Facilities
                </h2>
                <p class="featured-excerpt">
                  Learn how automation and intelligent verification workflows
                  reduce administrative friction and improve patient intake speed.
                </p>
                <button class="qa-button mt-4">
                  Read Article
                </button>
              </div>

            </div>
          </div>
        </section>

        <!-- BLOG GRID -->
        <section class="section">
          <div class="container reveal" :class="{ 'is-visible': gridVisible }" ref="grid">
            <div class="columns is-multiline">

              <div class="column is-4" v-for="(post, index) in posts" :key="index">
                <div class="blog-card">

                  <img :src="post.image" class="blog-img" />

                  <div class="blog-content">
                    <span class="blog-category">
                      {{ post.category }}
                    </span>
                    <h3 class="blog-card-title">
                      {{ post.title }}
                    </h3>
                    <p class="blog-card-excerpt">
                      {{ post.excerpt }}
                    </p>
                    <a class="read-link">Read More →</a>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      <!-- ========================= -->
      <!-- COMING SOON OVERLAY -->
      <!-- ========================= -->
      <div class="coming-overlay">
        <div class="coming-card">
          <h2>Insights Center Launching Soon</h2>
          <p>
            We are preparing educational resources, compliance updates,
            and operational insights designed specifically for healthcare leaders.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "BlogView",
  data() {
    return {
      heroVisible: false,
      featuredVisible: false,
      gridVisible: false,
      posts: [
        {
          title: "Understanding Expected Insurance Value (EIV)",
          category: "Revenue Optimization",
          excerpt:
            "How predictive reimbursement tools improve financial forecasting before admission.",
          image:
            "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
        },
        {
          title: "HIPAA Compliance in Digital Admissions",
          category: "Compliance",
          excerpt:
            "Best practices for protecting PHI during intake and verification processes.",
          image:
            "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957"
        },
        {
          title: "Reducing Intake Delays with Automated VOB",
          category: "Operations",
          excerpt:
            "Why modern facilities are replacing manual verification workflows.",
          image:
            "https://images.unsplash.com/photo-1579154204601-01588f351e67"
        }
      ]
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
              if (entry.target === this.$refs.hero)
                this.heroVisible = true;
              if (entry.target === this.$refs.featured)
                this.featuredVisible = true;
              if (entry.target === this.$refs.grid)
                this.gridVisible = true;
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(this.$refs.hero);
      observer.observe(this.$refs.featured);
      observer.observe(this.$refs.grid);
    }
  }
};
</script>

<style scoped>
/* ========================= */
/* HERO */
/* ========================= */
.blog-hero {
  background: linear-gradient(135deg, #0B0C14 0%, #1A1735 45%, #6A4DFF 100%);
  padding: 5rem 1rem;
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
}

.blog-hero ::after {
  content: "";
  position: absolute;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgba(123, 92, 255, 0.28), transparent 70%);
  top: -160px;
  right: -160px;
  filter: blur(8px);
}

.blog-title {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.blog-subtitle {
  font-size: 1.15rem;
  color: #DCE6FF;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ========================= */
/* FEATURED */
/* ========================= */
.featured-card {
  background: #FFFFFF;
  border-radius: 20px;
  border: 1px solid #E6EDF7;
  box-shadow:
    0 12px 30px rgba(15, 30, 60, 0.06),
    0 4px 10px rgba(15, 30, 60, 0.04);
  padding: 2rem;
}

.featured-img {
  border-radius: 14px;
  width: 100%;
}

.blog-badge {
  font-size: 0.75rem;
  font-weight: 600;
  color: #3E6EDC;
  text-transform: uppercase;
}

.featured-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 1rem;
  color: #0F1F3D;
}

.featured-excerpt {
  margin-top: 1rem;
  color: #4B5B73;
  line-height: 1.7;
}

/* ========================= */
/* BLOG GRID */
/* ========================= */
.blog-card {
  background: #FFFFFF;
  border-radius: 18px;
  border: 1px solid #E6EDF7;
  overflow: hidden;
  transition: all 0.35s ease;
  box-shadow: 0 8px 20px rgba(15, 30, 60, 0.05);
}

.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(15, 30, 60, 0.10);
}

.blog-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.blog-content {
  padding: 1.5rem;
}

.blog-category {
  font-size: 0.75rem;
  font-weight: 600;
  color: #3E6EDC;
  text-transform: uppercase;
}

.blog-card-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 0.5rem;
  color: #0F1F3D;
}

.blog-card-excerpt {
  font-size: 0.95rem;
  color: #5C6F89;
  margin-top: 0.7rem;
  line-height: 1.6;
}

.read-link {
  display: inline-block;
  margin-top: 1rem;
  font-weight: 600;
  color: #2C5ACF;
  cursor: pointer;
}

/* ========================= */
/* BUTTON */
/* ========================= */
.qa-button {
  background: linear-gradient(135deg, #2C5ACF, #3E6EDC);
  color: #FFFFFF;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 999px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.qa-button:hover {
  transform: translateY(-2px);
}

/* ========================= */
/* REVEAL */
/* ========================= */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ========================= */
/* BLUR + OVERLAY */
/* ========================= */
.blog-lock-wrapper {
  position: relative;
}

.blog-content-wrapper {
  filter: blur(6px);
  pointer-events: none;
  user-select: none;
  opacity: 0.7;
}

.coming-overlay {
  position: fixed;
  top: 70px;
  /* height of navbar */
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 26, 47, 0.65);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.coming-card {
  background: rgba(255, 255, 255, 0.96);
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  max-width: 520px;
  border: 1px solid #E6EDF7;
  box-shadow: 0 20px 50px rgba(15, 30, 60, 0.15);
}

.coming-card h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #0F1F3D;
  margin-bottom: 1rem;
}

.coming-card p {
  color: #5C6F89;
  line-height: 1.7;
}
</style>
