import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(projectRoot, "docs");
const indexPath = path.join(outputDirectory, "index.html");

const pageMetadata = {
  "/api-docs/": {
    title: "API Documentation | QuickAdmit",
    description: "Explore the QuickAdmit API for eligibility inquiries, Blanket VOB, batching, payer status, authentication, and response schemas.",
    robots: "noindex, follow",
  },
  "/products/": {
    title: "Admissions Products for Treatment Centers | QuickAdmit",
    description: "Explore QuickAdmit products for instant eligibility, Blanket VOB, payer intelligence, reimbursement estimates, census monitoring, mobile access, and integrations.",
  },
  "/faqs/": {
    title: "Frequently Asked Questions | QuickAdmit",
    description: "Answers about instant VOB, payer availability, reimbursement estimates, mobile access, and QuickAdmit integrations for admissions teams.",
  },
  "/blog/": {
    title: "Behavioral Health Admissions Resources | QuickAdmit",
    description: "Practical articles on instant VOB, payer availability, behavioral health admissions, and census reverification from QuickAdmit.",
  },
  "/blog/first-five-minutes-behavioral-health-admissions/": {
    title: "Why the First 5 Minutes Decide Behavioral Health Admissions | QuickAdmit",
    description: "Explore how instant VOB closes the behavioral health callback gap, protects fragile intent and turns first-call inquiries into admission-ready next steps.",
  },
  "/blog/redundant-payer-networks-24-7-intake/": {
    title: "Why Redundant Payer Networks Matter for 24/7 Intake | QuickAdmit",
    description: "See how redundant payer connections, live availability signals and mobile VOB workflows reduce admissions disruption during nights and weekends.",
  },
  "/blog/batch-reverification-census-monitoring/": {
    title: "How Batch Reverification and Custom Alerts Protect Census Revenue | QuickAdmit",
    description: "Learn how one-click census reverification, inquiry-level custom alerts and export-ready reporting help treatment centers catch coverage changes earlier.",
  },
  "/contact/": {
    title: "Contact Sales and Support | QuickAdmit",
    description: "Contact QuickAdmit sales or support to learn how faster insurance verification can improve your treatment center's admissions workflow.",
  },
  "/book/": {
    title: "Book a Demo | QuickAdmit",
    description: "Book a personalized QuickAdmit demo and see how instant VOB, payer intelligence, and reimbursement estimates support faster admissions.",
  },
};

const indexHtml = await readFile(indexPath, "utf8");
const sitemap = await readFile(path.join(projectRoot, "public", "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const staticPageUrls = [...sitemapUrls, "https://www.quickadmit.com/api-docs/"];

await copyFile(indexPath, path.join(outputDirectory, "404.html"));

for (const pageUrl of staticPageUrls) {
  const url = new URL(pageUrl);
  if (url.pathname === "/") continue;

  const metadata = pageMetadata[url.pathname];
  if (!metadata) throw new Error(`Missing metadata for ${url.pathname}`);

  const pageHtml = indexHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${metadata.title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${metadata.description}" />`)
    .replace(/<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${metadata.robots || "index, follow"}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${pageUrl}" />`);

  const routeDirectory = path.join(outputDirectory, url.pathname);
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(path.join(routeDirectory, "index.html"), pageHtml);
}
