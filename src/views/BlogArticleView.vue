<template>
  <article v-if="article" class="article-page">
    <header class="article-header">
      <router-link to="/blog" class="back-link"><i class="fas fa-arrow-left" aria-hidden="true"></i> All resources</router-link>
      <div class="article-meta">
        <span>{{ article.category }}</span>
        <span>{{ article.readTime }}</span>
      </div>
      <h1>{{ article.title }}</h1>
      <p>{{ article.excerpt }}</p>
    </header>

    <div class="cover-wrap">
      <img :src="article.image" :alt="article.imageAlt" />
    </div>

    <div class="article-layout">
      <aside class="article-aside">
        <span>In this article</span>
        <a v-for="(section, index) in article.sections" :key="section.title" :href="`#section-${index + 1}`">{{ section.title }}</a>
      </aside>

      <div class="article-body">
        <p v-for="paragraph in article.introduction" :key="paragraph" class="lead-paragraph">{{ paragraph }}</p>

        <section v-for="(section, sectionIndex) in article.sections" :id="`section-${sectionIndex + 1}`" :key="section.title">
          <h2>{{ section.title }}</h2>
          <p>{{ section.body }}</p>
          <div class="point-list">
            <div v-for="point in section.points" :key="point.title" class="point-item">
              <span><i class="fas fa-check" aria-hidden="true"></i></span>
              <p><strong>{{ point.title }}:</strong> {{ point.text }}</p>
            </div>
          </div>
        </section>

        <blockquote>
          <span>Key takeaway</span>
          <p>{{ article.takeaway }}</p>
        </blockquote>
      </div>
    </div>

    <section class="more-articles">
      <div class="more-heading">
        <div><span class="eyebrow">Keep reading</span><h2>More from QuickAdmit.</h2></div>
        <router-link to="/blog">View all articles <i class="fas fa-arrow-right" aria-hidden="true"></i></router-link>
      </div>
      <div class="more-grid">
        <router-link v-for="item in relatedArticles" :key="item.slug" :to="`/blog/${item.slug}`" class="more-card">
          <img :src="item.image" :alt="item.imageAlt" />
          <div><span>{{ item.category }}</span><h3>{{ item.title }}</h3></div>
        </router-link>
      </div>
    </section>
  </article>

  <main v-else class="not-found">
    <span class="eyebrow">Resource not found</span>
    <h1>That article isn’t available.</h1>
    <p>Return to the resource library to explore the latest QuickAdmit articles.</p>
    <router-link to="/blog">Browse resources</router-link>
  </main>
</template>

<script>
import { blogArticles, findBlogArticle } from "../blogArticles";

export default {
  name: "BlogArticleView",
  computed: {
    article() {
      return findBlogArticle(this.$route.params.slug);
    },
    relatedArticles() {
      if (!this.article) return [];
      return blogArticles.filter((item) => item.slug !== this.article.slug).slice(0, 2);
    },
  },
};
</script>

<style scoped>
.article-page { background: var(--qa-background); }
.article-header { width: min(940px, calc(100% - 64px)); margin: 0 auto; padding: 74px 0 54px; text-align: center; }
.back-link { display: inline-flex; align-items: center; gap: 9px; margin-bottom: 38px; color: var(--qa-muted); font-size: 13px; font-weight: 700; text-decoration: none; }.back-link:hover { color: var(--qa-primary); }
.article-meta { display: flex; justify-content: center; gap: 18px; margin-bottom: 18px; color: var(--qa-muted); font-size: 11px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }.article-meta span:first-child { color: var(--qa-primary); }.article-meta span + span::before { margin-right: 18px; color: var(--qa-border); content: "•"; }
.article-header h1, .article-body h2, .more-heading h2, .not-found h1 { margin: 0; color: var(--qa-ink); font-family: var(--qa-heading-font); font-weight: 750; letter-spacing: -.045em; }
.article-header h1 { font-size: clamp(45px, 5.5vw, 68px); line-height: 1.06; }
.article-header > p { max-width: 780px; margin: 24px auto 0; color: var(--qa-muted); font-size: 18px; line-height: 1.75; }
.cover-wrap { width: min(1216px, calc(100% - 64px)); aspect-ratio: 16 / 8.4; overflow: hidden; margin: 0 auto; border: 1px solid var(--qa-border); border-radius: 24px; box-shadow: var(--qa-shadow-card); }
.cover-wrap img { display: block; width: 100%; height: 100%; object-fit: cover; }
.article-layout { display: grid; width: min(1080px, calc(100% - 64px)); grid-template-columns: 220px minmax(0, 720px); gap: 84px; justify-content: center; margin: 82px auto 110px; }
.article-aside { position: sticky; top: 96px; display: flex; height: fit-content; flex-direction: column; gap: 12px; padding-left: 18px; border-left: 2px solid var(--qa-primary-soft); }
.article-aside > span { margin-bottom: 3px; color: var(--qa-ink); font-family: var(--qa-heading-font); font-size: 13px; font-weight: 750; }
.article-aside a { color: var(--qa-muted); font-size: 12px; line-height: 1.5; text-decoration: none; }.article-aside a:hover { color: var(--qa-primary); }
.article-body { min-width: 0; color: var(--qa-muted); font-size: 16px; line-height: 1.85; }
.lead-paragraph { margin: 0 0 22px; font-size: 18px; line-height: 1.8; }.lead-paragraph:first-child::first-letter { float: left; margin: 8px 8px 0 0; color: var(--qa-primary); font-family: var(--qa-heading-font); font-size: 64px; font-weight: 750; line-height: .78; }
.article-body section { scroll-margin-top: 92px; margin-top: 64px; }
.article-body h2 { margin-bottom: 16px; font-size: 34px; line-height: 1.18; }.article-body section > p { margin: 0 0 24px; }
.point-list { display: grid; gap: 12px; }
.point-item { display: grid; grid-template-columns: 32px 1fr; gap: 13px; padding: 17px 18px; border: 1px solid var(--qa-border); border-radius: 13px; background: white; }
.point-item > span { display: grid; width: 28px; height: 28px; place-items: center; border-radius: 9px; background: rgba(66,204,123,.12); color: #239e59; font-size: 10px; }.point-item p { margin: 0; font-size: 14px; line-height: 1.7; }.point-item strong { color: var(--qa-ink); }
blockquote { position: relative; margin: 64px 0 0; padding: 30px 32px; border: 0; border-radius: 18px; background: linear-gradient(135deg, var(--qa-primary-soft), white); box-shadow: inset 0 0 0 1px rgba(124,77,222,.13); }
blockquote::before { position: absolute; top: 18px; right: 25px; color: rgba(124,77,222,.13); content: "“"; font-family: Georgia, serif; font-size: 86px; line-height: 1; }
blockquote span { color: var(--qa-primary); font-size: 11px; font-weight: 850; letter-spacing: .1em; text-transform: uppercase; }.article-body blockquote p { position: relative; z-index: 1; margin: 9px 0 0; color: var(--qa-ink); font-family: var(--qa-heading-font); font-size: 22px; font-weight: 650; line-height: 1.45; }
.more-articles { padding: 84px 32px 98px; border-top: 1px solid var(--qa-border); background: white; }
.more-heading, .more-grid { width: min(1050px, 100%); margin-right: auto; margin-left: auto; }.more-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; margin-bottom: 30px; }.eyebrow { display: inline-block; margin-bottom: 9px; color: var(--qa-primary); font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }.more-heading h2 { font-size: 36px; }.more-heading > a { display: inline-flex; align-items: center; gap: 9px; color: var(--qa-primary); font-size: 13px; font-weight: 800; text-decoration: none; }
.more-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
.more-card { display: grid; overflow: hidden; grid-template-columns: 170px 1fr; border: 1px solid var(--qa-border); border-radius: 16px; background: var(--qa-background); color: inherit; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease; }.more-card:hover { box-shadow: var(--qa-shadow-card); transform: translateY(-3px); }.more-card img { width: 100%; height: 100%; min-height: 150px; object-fit: cover; }.more-card div { padding: 22px; }.more-card span { color: var(--qa-primary); font-size: 10px; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }.more-card h3 { margin: 9px 0 0; color: var(--qa-ink); font-family: var(--qa-heading-font); font-size: 17px; line-height: 1.4; }
.not-found { display: flex; min-height: 70vh; align-items: center; justify-content: center; flex-direction: column; padding: 80px 24px; text-align: center; }.not-found h1 { font-size: 48px; }.not-found p { color: var(--qa-muted); }.not-found > a { margin-top: 18px; padding: 13px 18px; border-radius: 11px; background: var(--qa-primary); color: white; font-weight: 750; text-decoration: none; }
@media (max-width: 850px) { .article-layout { grid-template-columns: 1fr; gap: 0; }.article-aside { display: none; }.more-card { grid-template-columns: 140px 1fr; } }
@media (max-width: 680px) { .article-header { width: calc(100% - 40px); padding: 54px 0 38px; }.article-header h1 { font-size: 39px; }.cover-wrap { width: calc(100% - 40px); aspect-ratio: 16 / 10; border-radius: 18px; }.article-layout { width: calc(100% - 40px); margin: 56px auto 76px; }.article-body h2 { font-size: 29px; }.lead-paragraph { font-size: 16px; }.more-articles { padding: 64px 20px 74px; }.more-heading { align-items: flex-start; flex-direction: column; }.more-grid { grid-template-columns: 1fr; }.more-card { grid-template-columns: 120px 1fr; }.more-card div { padding: 18px; }.more-card h3 { font-size: 15px; } }
</style>
