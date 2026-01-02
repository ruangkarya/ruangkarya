import React from 'react'
import { BlogDetail } from '../../src/components/BlogDetail'
import { VeliteMdxRenderer } from '../../src/components/mdx/VeliteMdxRenderer'
import { allPosts } from '#site/content'

interface BlogPostPageProps {
  post: {
    title: string
    slug: string
    excerpt: string
    category: string
    date: string
    readTime: string
    image?: string
    tags?: string[]
    body: any
    author: string
  }
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  // Get previous and next posts
  const publishedPosts = allPosts
    .filter((p) => p.published && !p.draft)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const currentIndex = publishedPosts.findIndex((p) => p.slug === post.slug)
  const prevPost = publishedPosts[currentIndex + 1]
  const nextPost = publishedPosts[currentIndex - 1]

  // Transform post to match BlogDetail interface
  const transformedPost = {
    id: post.slug,
    title: post.title,
    category: post.category,
    date: new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    readTime: post.readTime,
    excerpt: post.excerpt,
    image: post.image || '/images/default-blog-image.jpg',
    content: () => <VeliteMdxRenderer body={post.body} />,
    tags: post.tags || [],
  }

  return (
    <BlogDetail
      post={transformedPost}
      prevPost={prevPost ? { title: prevPost.title, slug: prevPost.slug } : undefined}
      nextPost={nextPost ? { title: nextPost.title, slug: nextPost.slug } : undefined}
      onBack={() => {
        if (typeof window !== 'undefined') {
          window.history.back()
        }
      }}
    />
  )
}