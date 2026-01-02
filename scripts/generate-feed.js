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

    const siteUrl = 'https://ruangkarya.space'
    const feedTitle = 'RuangKarya - Blog'
    const feedDescription = 'Free portfolio & blog SSG for developers. Thoughts on web development, React, TypeScript, and modern technologies'

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
      <author>noreply@ruangkarya.space (${post.author || 'RuangKarya'})</author>
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
    <managingEditor>noreply@ruangkarya.space (RuangKarya)</managingEditor>
    <webMaster>noreply@ruangkarya.space (RuangKarya)</webMaster>
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
    process.exit(1)
  }
}

generateRSSFeed()