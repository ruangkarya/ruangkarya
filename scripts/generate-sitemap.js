#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

// Import the content from Velite
const contentPath = path.join(__dirname, "../.velite/posts.json");

function generateSitemap() {
  try {
    const siteUrl = "https://ruangkarya.netlify.app";

    // Static pages
    const staticPages = [
      { url: "", priority: "1.0", changefreq: "weekly" },
      { url: "/blog", priority: "0.9", changefreq: "daily" },
      { url: "/projects", priority: "0.8", changefreq: "weekly" },
    ];

    let blogPages = [];

    if (fs.existsSync(contentPath)) {
      const posts = JSON.parse(fs.readFileSync(contentPath, "utf8")).filter(
        (post) => post.published && !post.draft
      );

      // Blog post URLs
      blogPages = posts.map((post) => ({
        url: `/blog/${post.slug}`,
        priority: "0.7",
        changefreq: "monthly",
        lastmod: new Date(post.updated || post.date)
          .toISOString()
          .split("T")[0],
      }));
    }

    const allPages = [...staticPages, ...blogPages];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${page.lastmod || new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

    const outputDir = path.join(__dirname, "../build");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(path.join(outputDir, "sitemap.xml"), sitemapContent);
    console.log("✅ Sitemap generated successfully");
  } catch (error) {
    console.error("❌ Error generating sitemap:", error.message);
    process.exit(1);
  }
}

generateSitemap();
