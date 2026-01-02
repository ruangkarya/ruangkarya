#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

// Import the content from Velite
const contentPath = path.join(__dirname, '../.velite/posts.json')

function generateRSSFeed() {
  try {
    if (!fs.existsSync(contentPath)) {
      console.log('No posts found. Skipping RSS generation.')
      return
    }

    const posts = JSON.parse(fs.readFileSync(contentPath, 'utf8'))
      .filter((post) => post.published && !post.draft)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 20)

    const siteUrl = 'https://herohmad.me'
    const feedTitle = 'Rohmad Sasmito - Blog'
    const feedDescription = 'Thoughts on web development, React, TypeScript, and modern frontend technologies'

    const rssItems = posts
      .map(
        (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      ${post.tags?.map(tag => `      <category><![CDATA[${tag}]]></category>`).join('\n') || ''}
      <author>noreply@herohmad.me (${post.author || 'Rohmad Sasmito'})</author>
    </item>`
      )
      .join('\n')

    const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${feedTitle}]]></title>
    <description><![CDATA[${feedDescription}]]></description>
    <link>${siteUrl}</link>
    <language>en-US</language>
    <managingEditor>noreply@herohmad.me (Rohmad Sasmito)</managingEditor>
    <webMaster>noreply@herohmad.me (Rohmad Sasmito)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>`

    const outputDir = path.join(__dirname, '../build')
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    fs.writeFileSync(path.join(outputDir, 'rss.xml'), rssContent)
    console.log('✅ RSS feed generated successfully')
  } catch (error) {
    console.error('❌ Error generating RSS feed:', error.message)
  }
}

function generateSitemap() {
  try {
    const siteUrl = 'https://herohmad.me'

    // Static pages
    const staticPages = [
      { url: '', priority: '1.0', changefreq: 'weekly' },
      { url: '/blog', priority: '0.9', changefreq: 'daily' },
      { url: '/projects', priority: '0.8', changefreq: 'weekly' },
    ]

    let blogPages = []

    if (fs.existsSync(contentPath)) {
      const posts = JSON.parse(fs.readFileSync(contentPath, 'utf8'))
        .filter((post) => post.published && !post.draft)

      // Blog post URLs
      blogPages = posts.map(post => ({
        url: `/blog/${post.slug}`,
        priority: '0.7',
        changefreq: 'monthly',
        lastmod: new Date(post.updated || post.date).toISOString().split('T')[0]
      }))
    }

    const allPages = [...staticPages, ...blogPages]

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${page.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

    const outputDir = path.join(__dirname, '../build')
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), sitemapContent)
    console.log('✅ Sitemap generated successfully')
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message)
  }
}

// Generate both files
generateRSSFeed()
generateSitemap()