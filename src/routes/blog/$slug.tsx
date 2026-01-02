import { useRef, useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import {
  Calendar,
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  Share2,
} from "lucide-react";
import { VeliteMdxRenderer } from "../../components/mdx/VeliteMdxRenderer";
import { allPosts, type Post } from "../../lib/content";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = allPosts.find((post: Post) => post.slug === params.slug);
    if (!post || !post.published) {
      throw notFound();
    }
    return { post };
  },
  component: BlogDetail,
  notFoundComponent: () => (
    <div className="py-32 px-6 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl text-slate-900 dark:text-white mb-4">
          Blog post not found
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-full hover:border-teal-500 dark:hover:border-teal-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>
      </div>
    </div>
  ),
});

function BlogDetail() {
  const { post } = Route.useLoaderData();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [shouldShow, setShouldShow] = useState(false);

  // Fallback to show content after a delay if intersection observer fails
  useEffect(() => {
    const timer = setTimeout(() => setShouldShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const shouldAnimate = isInView || shouldShow;

  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get next and previous posts
  const publishedPosts = (allPosts as Post[])
    .filter((p) => p.published)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const currentIndex = publishedPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = publishedPosts[currentIndex + 1];
  const nextPost = publishedPosts[currentIndex - 1];

  const tags = post.tags || ["Web Development", "Programming"];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <motion.div
            className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
            whileHover={{ x: -5 }}
          >
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div ref={ref} className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={
              shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            {/* Category badge */}
            <div className="mb-6">
              <span
                className="inline-block px-4 py-2 bg-teal-500 text-white rounded-full text-sm"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-8 leading-tight font-bold tracking-tight">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-4xl">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pt-4 border-t border-slate-200 dark:border-slate-700">
              <div
                className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
                style={{ fontFamily: "var(--font-subheading)" }}
              >
                <Calendar className="w-4 h-4" />
                <span>{formattedDate}</span>
              </div>
              <div
                className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
                style={{ fontFamily: "var(--font-subheading)" }}
              >
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <motion.button
                className="flex items-center gap-2 ml-auto text-sm text-slate-500 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </motion.button>
            </div>

            {/* Featured image */}
            {post.image && (
              <div className="mb-12 rounded-2xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            )}
          </motion.header>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={
              shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
            className="prose prose-lg dark:prose-invert max-w-none
                     prose-headings:text-slate-900 dark:prose-headings:text-white
                     prose-headings:font-bold prose-headings:tracking-tight
                     prose-p:text-slate-600 dark:prose-p:text-slate-400
                     prose-p:leading-relaxed prose-p:text-base
                     prose-a:text-teal-500 prose-a:no-underline prose-a:font-medium
                     hover:prose-a:text-teal-600 dark:hover:prose-a:text-teal-400
                     prose-a:transition-colors prose-a:duration-200
                     prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-semibold
                     prose-em:text-slate-700 dark:prose-em:text-slate-300
                     prose-ul:text-slate-600 dark:prose-ul:text-slate-400
                     prose-ol:text-slate-600 dark:prose-ol:text-slate-400
                     prose-li:text-slate-600 dark:prose-li:text-slate-400
                     prose-li:leading-relaxed prose-li:mb-2
                     prose-blockquote:text-slate-600 dark:prose-blockquote:text-slate-400
                     prose-blockquote:border-l-4 prose-blockquote:border-teal-500
                     prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-6
                     prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-800/30
                     prose-blockquote:rounded-r-lg prose-blockquote:italic
                     prose-code:text-sm
                     prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                     prose-pre:p-0 prose-pre:m-0 prose-pre:bg-transparent
                     prose-pre:border-none prose-pre:shadow-none prose-pre:overflow-visible"
          >
            <VeliteMdxRenderer body={post.body} className="prose-optimized" />
          </motion.article>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-8 border-t border-slate-200 dark:border-slate-800 mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <span
                className="text-slate-600 dark:text-slate-400"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Tags:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags &&
                Array.isArray(tags) &&
                tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                    style={{ fontFamily: "var(--font-heading)" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 text-white text-center mb-16"
          >
            <h3 className="text-2xl mb-3">Enjoyed this article?</h3>
            <p className="mb-6 opacity-90">
              Subscribe to my newsletter for more insights on web development
              and technology.
            </p>
            <motion.button
              className="px-8 py-3 bg-white text-teal-600 rounded-full hover:bg-slate-100 transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe Now
            </motion.button>
          </motion.div>

          {/* Navigation to Previous/Next Posts */}
          {(prevPost || nextPost) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-24 pt-16 border-t-2 border-slate-200 dark:border-slate-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Previous Post */}
                <div>
                  {prevPost && (
                    <div className="group block p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-400 transition-colors">
                      <Link to="/blog/$slug" params={{ slug: prevPost.slug }}>
                        <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
                          <ArrowLeft className="w-5 h-5" />
                          <span>Previous Post</span>
                        </div>
                        <h3 className="text-lg text-slate-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                          {prevPost.title}
                        </h3>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Next Post */}
                <div>
                  {nextPost && (
                    <div className="group block p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-400 transition-colors text-right">
                      <Link to="/blog/$slug" params={{ slug: nextPost.slug }}>
                        <div className="flex items-center justify-end gap-3 text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
                          <span>Next Post</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg text-slate-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                          {nextPost.title}
                        </h3>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
