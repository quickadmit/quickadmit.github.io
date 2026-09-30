
import { createRouter, createWebHistory } from "vue-router";
import { findBlogArticle } from "./blogArticles";

const siteUrl = "https://www.quickadmit.com";

const routes = [
  {
    path: "/",
    name: "HomeComponent",
    component: () => import("./views/Home.vue"),
    meta: {
      title: "QuickAdmit | Instant VOB for Treatment Centers",
      description: "Verify insurance coverage, find active policies with Blanket VOB, check payer availability, and estimate reimbursement with QuickAdmit.",
    },
  },
  {
    path: "/api-docs",
    name: "ApiDocs",
    component: () => import("./views/ApiDocs.vue"),
    meta: {
      title: "API Documentation | QuickAdmit",
      description: "Explore the QuickAdmit API for eligibility inquiries, Blanket VOB, batching, payer status, authentication, and response schemas.",
      robots: "noindex, follow",
    },
  },
  {
    path: "/faqs",
    name: "FaqView",
    component: () => import("./views/FaqView.vue"),
    meta: {
      title: "Frequently Asked Questions | QuickAdmit",
      description: "Answers about instant VOB, payer availability, reimbursement estimates, mobile access, and QuickAdmit integrations for admissions teams.",
    },
  },
  {
    path: "/blog",
    name: "BlogView",
    component: () => import("./views/BlogView.vue"),
    meta: {
      title: "Behavioral Health Admissions Resources | QuickAdmit",
      description: "Practical articles on instant VOB, payer availability, behavioral health admissions, and census reverification from QuickAdmit.",
    },
  },
  {
    path: "/blog/:slug",
    name: "BlogArticleView",
    component: () => import("./views/BlogArticleView.vue"),
    meta: {
      title: "Admissions Resource | QuickAdmit",
      description: "Explore practical behavioral health admissions resources from QuickAdmit.",
    },
  },
  {
    path: "/contact",
    name: "ContactView",
    component: () => import("./views/ContactView.vue"),
    meta: {
      title: "Contact Sales and Support | QuickAdmit",
      description: "Contact QuickAdmit sales or support to learn how faster insurance verification can improve your treatment center's admissions workflow.",
    },
  },
  {
    path: "/book",
    name: "BookDemoView",
    component: () => import("./views/BookDemoView.vue"),
    meta: {
      title: "Request a QuickAdmit Demo | Admissions Verification",
      description: "Book a personalized QuickAdmit demo and see how instant VOB, payer intelligence, and reimbursement estimates support faster admissions.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => resolve({ el: to.hash, top: 68, behavior: "smooth" }), 350);
      });
    }
    return { top: 0 };
  },
});

router.afterEach((to) => {
  const article = to.name === "BlogArticleView" ? findBlogArticle(to.params.slug) : null;
  const title = article ? `${article.title} | QuickAdmit` : to.meta.title;
  const description = article ? article.metaDescription : to.meta.description;

  if (title) document.title = title;

  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta && description) descriptionMeta.setAttribute("content", description);

  const robotsMeta = document.querySelector('meta[name="robots"]');
  if (robotsMeta) robotsMeta.setAttribute("content", to.meta.robots || "index, follow");

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", new URL(to.path, siteUrl).href);
});

export default router;
