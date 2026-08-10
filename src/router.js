
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "HomeComponent",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("./views/Products.vue"),
  },
  {
    path: "/api-docs",
    name: "ApiDocs",
    component: () => import("./views/ApiDocs.vue"),
  },
  {
    path: "/blog",
    name: "BlogView",
    component: () => import("./views/BlogView.vue"),
  },
  {
    path: "/contact",
    name: "ContactView",
    component: () => import("./views/ContactView.vue"),
  },
  {
    path: "/book",
    name: "BookDemoView",
    component: () => import("./views/BookDemoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
