import React, { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { allPosts } from "../lib/content";

// Filter only published posts and sort by date
const blogPosts = allPosts
  .filter((post) => post.published)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    image: post.image,
    date: new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    readTime: post.readTime,
    category: post.category,
    slug: post.slug,
  }));

export const Blog: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="blog"
      ref={ref}
      className="py-32 px-6 bg-white dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl text-slate-900 dark:text-white mb-4">
            Blog & Insights
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Thoughts on development, design, and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="h-full rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="px-3 py-1 text-xs bg-teal-500 text-white rounded-full"
                      style={{ fontFamily: "var(--font-subheading)" }}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div
                    className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3"
                    style={{ fontFamily: "var(--font-subheading)" }}
                  >
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl text-slate-900 dark:text-white mb-3">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {post.excerpt}
                  </p>

                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="inline-flex items-center gap-2 text-sm text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      style={{ fontFamily: "var(--font-subheading)" }}
                    >
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-full hover:border-teal-500 dark:hover:border-teal-400 transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
