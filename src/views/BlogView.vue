<template>
  <div class="blog-page">
    <header class="blog-hero">
      <h1>Ideas for a faster, more resilient intake team.</h1>
    </header>

    <main class="article-list" aria-label="QuickAdmit articles">
      <article v-for="(article, index) in articles" :key="article.slug" class="article-card" :class="{ featured: index === 0 }">
        <router-link :to="`/blog/${article.slug}`" class="article-image-link" :aria-label="`Read ${article.title}`">
          <img :src="article.image" :alt="article.imageAlt" />
          <span class="image-arrow"><i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></span>
        </router-link>
        <div class="article-copy">
          <div class="article-meta">
            <span>{{ article.category }}</span>
            <span>{{ article.readTime }}</span>
          </div>
          <h2><router-link :to="`/blog/${article.slug}`">{{ article.title }}</router-link></h2>
          <p>{{ article.excerpt }}</p>
          <router-link :to="`/blog/${article.slug}`" class="read-link">Read article <i class="fas fa-arrow-right" aria-hidden="true"></i></router-link>
        </div>
      </article>
    </main>

    <section class="blog-cta">
      <div>
        <span class="eyebrow">See it in practice</span>
        <h2>Bring faster coverage answers into every intake shift.</h2>
      </div>
      <router-link to="/book">Request a demo <i class="fas fa-arrow-right" aria-hidden="true"></i></router-link>
    </section>
  </div>
</template>

<script>
import { blogArticles } from "../blogArticles";

export default {
  name: "BlogView",
  data() {
    return { articles: blogArticles };
  },
};
</script>

<style scoped>
.blog-page { overflow: hidden; background: var(--qa-background); }
.blog-hero { position: relative; padding: 72px 32px 64px; border-bottom: 1px solid var(--qa-border); text-align: center; }
.blog-hero::before { position: absolute; inset: 0; background: radial-gradient(circle at 28% 10%, rgba(124,77,222,.12), transparent 27%), radial-gradient(circle at 76% 55%, rgba(71,204,126,.1), transparent 24%); content: ""; pointer-events: none; }
.blog-hero > * { position: relative; z-index: 1; }
.eyebrow { display: inline-block; margin-bottom: 14px; color: var(--qa-primary); font-size: 12px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
.blog-hero h1, .article-copy h2, .blog-cta h2 { margin: 0; color: var(--qa-ink); font-family: var(--qa-heading-font); font-weight: 750; letter-spacing: -.045em; }
.blog-hero h1 { max-width: 900px; margin: 0 auto; font-size: clamp(46px, 5.5vw, 72px); line-height: 1.04; }
.article-list { display: grid; width: min(1216px, calc(100% - 64px)); grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; margin: 60px auto 112px; }
.article-card { overflow: hidden; border: 1px solid var(--qa-border); border-radius: 20px; background: white; box-shadow: var(--qa-shadow-card); transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
.article-card:hover { border-color: rgba(124,77,222,.26); box-shadow: var(--qa-shadow-float); transform: translateY(-5px); }
.article-card.featured { display: grid; grid-column: 1 / -1; grid-template-columns: 1.12fr .88fr; }
.article-image-link { position: relative; display: block; min-height: 260px; overflow: hidden; background: var(--qa-primary-soft); }
.article-card.featured .article-image-link { min-height: 420px; }
.article-image-link img { display: block; width: 100%; height: 100%; transition: transform .55s ease; object-fit: cover; }
.article-card:hover .article-image-link img { transform: scale(1.035); }
.image-arrow { position: absolute; right: 18px; bottom: 18px; display: grid; width: 43px; height: 43px; place-items: center; border: 1px solid rgba(255,255,255,.7); border-radius: 12px; background: rgba(255,255,255,.88); box-shadow: var(--qa-shadow-card); color: var(--qa-primary); backdrop-filter: blur(10px); }
.article-copy { padding: 30px; }
.article-card.featured .article-copy { display: flex; justify-content: center; flex-direction: column; padding: 46px; }
.article-meta { display: flex; align-items: center; justify-content: space-between; gap: 14px; margin-bottom: 18px; color: var(--qa-muted); font-size: 11px; font-weight: 800; letter-spacing: .07em; text-transform: uppercase; }
.article-meta span:first-child { color: var(--qa-primary); }
.article-copy h2 { font-size: clamp(25px, 3vw, 37px); line-height: 1.18; }.article-card:not(.featured) .article-copy h2 { font-size: 27px; }
.article-copy h2 a { color: inherit; text-decoration: none; }
.article-copy > p { margin: 18px 0 22px; color: var(--qa-muted); font-size: 15px; line-height: 1.75; }
.read-link { display: inline-flex; align-items: center; gap: 9px; color: var(--qa-primary); font-size: 14px; font-weight: 800; text-decoration: none; }.read-link i { font-size: 11px; transition: transform .2s ease; }.read-link:hover i { transform: translateX(4px); }
.blog-cta { display: flex; width: min(1216px, calc(100% - 64px)); align-items: center; justify-content: space-between; gap: 34px; margin: 0 auto 92px; padding: 44px 48px; border-radius: 22px; background: linear-gradient(135deg, #2f253c, #4a3569); box-shadow: var(--qa-shadow-float); }
.blog-cta .eyebrow { color: #bcffda; }.blog-cta h2 { max-width: 720px; color: white; font-size: clamp(28px, 3.4vw, 43px); line-height: 1.15; }
.blog-cta > a { display: inline-flex; min-height: 48px; flex: none; align-items: center; gap: 10px; padding: 0 20px; border-radius: 12px; background: white; color: var(--qa-primary); font-size: 14px; font-weight: 800; text-decoration: none; }
@media (max-width: 860px) { .article-list { grid-template-columns: 1fr; }.article-card.featured { display: block; grid-column: auto; }.article-card.featured .article-image-link { min-height: 320px; }.article-card.featured .article-copy { padding: 30px; }.blog-cta { align-items: flex-start; flex-direction: column; } }
@media (max-width: 620px) { .blog-hero { padding: 52px 20px 48px; }.blog-hero h1 { font-size: 42px; }.article-list { width: calc(100% - 40px); gap: 20px; margin: 42px auto 76px; }.article-card.featured .article-image-link, .article-image-link { min-height: 230px; }.article-copy, .article-card.featured .article-copy { padding: 24px 20px; }.article-copy h2, .article-card:not(.featured) .article-copy h2 { font-size: 25px; }.blog-cta { width: calc(100% - 40px); margin-bottom: 68px; padding: 32px 24px; }.blog-cta > a { width: 100%; justify-content: center; } }
</style>
