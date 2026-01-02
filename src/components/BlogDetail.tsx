import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  Share2,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Post {
  title: string;
  slug: string;
}

interface BlogDetailProps {
  post: {
    id: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    excerpt: string;
    image: string;
    content?: string | React.ComponentType;
    tags?: string[];
  };
  prevPost?: Post;
  nextPost?: Post;
  onBack: () => void;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({
  post,
  prevPost,
  nextPost,
  onBack,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const renderContent = () => {
    if (typeof post.content === "function") {
      const ContentComponent = post.content;
      return <ContentComponent />;
    } else if (typeof post.content === "string") {
      return <div dangerouslySetInnerHTML={{ __html: post.content }} />;
    } else {
      // Default fallback content
      const defaultContent = `
        <p>This article explores the cutting-edge developments in modern web development, focusing on how new technologies are reshaping the way we build applications.</p>
        <h2>Introduction</h2>
        <p>The web development landscape has evolved dramatically over the past few years. With the introduction of new frameworks, tools, and methodologies, developers now have more options than ever to create fast, scalable, and maintainable applications.</p>
        <h2>Key Technologies</h2>
        <p>React, Next.js, and TypeScript have become the go-to stack for many modern web applications. These technologies offer:</p>
        <ul>
          <li>Component-based architecture for better code organization</li>
          <li>Type safety to catch errors early in development</li>
          <li>Server-side rendering for improved performance</li>
          <li>Static site generation for optimal loading times</li>
        </ul>
        <h2>Best Practices</h2>
        <p>When building modern web applications, it's important to follow industry best practices:</p>
        <ol>
          <li>Write clean, maintainable code</li>
          <li>Implement proper error handling</li>
          <li>Optimize for performance</li>
          <li>Ensure accessibility for all users</li>
          <li>Test thoroughly before deployment</li>
        </ol>
        <h2>The Future</h2>
        <p>As we look ahead, technologies like WebAssembly, Edge Computing, and AI-powered development tools are set to further transform the web development landscape. Staying current with these trends is crucial for any developer looking to remain competitive.</p>
        <h2>Conclusion</h2>
        <p>The modern web development ecosystem is vibrant and constantly evolving. By embracing new technologies and best practices, developers can create exceptional user experiences that push the boundaries of what's possible on the web.</p>
      `;
      return <div dangerouslySetInnerHTML={{ __html: defaultContent }} />;
    }
  };

  const tags = post.tags || [
    "React",
    "JavaScript",
    "Web Development",
    "Frontend",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Blog</span>
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 md:px-8 pt-20 pb-16">
        {/* Category badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span
            className="inline-block px-4 py-2 bg-teal-500 text-white rounded-full text-sm"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {post.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl text-slate-900 dark:text-white mb-8"
        >
          {post.title}
        </motion.h1>

        {/* Meta info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-6 text-slate-600 dark:text-slate-400 mb-10"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
          <motion.button
            className="flex items-center gap-2 ml-auto hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </motion.button>
        </motion.div>

        {/* Featured image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16 rounded-2xl overflow-hidden"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-16
                     prose-headings:text-slate-900 dark:prose-headings:text-white
                     prose-headings:font-bold prose-headings:tracking-tight
                     prose-headings:mb-4 prose-headings:mt-8
                     prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-0
                     prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
                     prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
                     prose-p:text-slate-600 dark:prose-p:text-slate-400
                     prose-p:leading-relaxed prose-p:text-base prose-p:mb-6
                     prose-a:text-teal-500 prose-a:no-underline prose-a:font-medium
                     hover:prose-a:text-teal-600 dark:hover:prose-a:text-teal-400
                     prose-a:transition-colors prose-a:duration-200
                     prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-semibold
                     prose-em:text-slate-700 dark:prose-em:text-slate-300
                     prose-ul:text-slate-600 dark:prose-ul:text-slate-400 prose-ul:mb-6
                     prose-ol:text-slate-600 dark:prose-ol:text-slate-400 prose-ol:mb-6
                     prose-li:text-slate-600 dark:prose-li:text-slate-400
                     prose-li:leading-relaxed prose-li:mb-2
                     prose-blockquote:text-slate-600 dark:prose-blockquote:text-slate-400
                     prose-blockquote:border-l-4 prose-blockquote:border-teal-500
                     prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-6
                     prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-800/30
                     prose-blockquote:rounded-r-lg prose-blockquote:italic
                     prose-pre:!bg-transparent prose-pre:!p-0 prose-pre:!border-none
                     prose-pre:!rounded-none prose-pre:!my-0 prose-pre:!overflow-visible"
        >
          {renderContent()}
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-8 border-t border-slate-200 dark:border-slate-800"
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
            {tags.map((tag) => (
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 text-white text-center"
        >
          <h3 className="text-2xl mb-3">Enjoyed this article?</h3>
          <p className="mb-6 opacity-90">
            Subscribe to my newsletter for more insights on web development and
            technology.
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
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-16 py-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Previous Post */}
                <div className="flex justify-start">
                  {prevPost && (
                    <motion.div
                      className="group block p-6 rounded-xl bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-teal-400/50 dark:hover:border-teal-400/50 hover:bg-white/70 dark:hover:bg-slate-800/50 transition-all duration-300 w-full max-w-sm"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link to="/blog/$slug" params={{ slug: prevPost.slug }}>
                        <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
                          <ArrowLeft className="w-4 h-4" />
                          <span style={{ fontFamily: "var(--font-heading)" }}>
                            Previous Post
                          </span>
                        </div>
                        <h3 className="text-lg text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
                          {prevPost.title}
                        </h3>
                      </Link>
                    </motion.div>
                  )}
                </div>

                {/* Next Post */}
                <div className="flex justify-end">
                  {nextPost && (
                    <motion.div
                      className="group block p-6 rounded-xl bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-teal-400/50 dark:hover:border-teal-400/50 hover:bg-white/70 dark:hover:bg-slate-800/50 transition-all duration-300 text-right w-full max-w-sm"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link to="/blog/$slug" params={{ slug: nextPost.slug }}>
                        <div className="flex items-center justify-end gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
                          <span style={{ fontFamily: "var(--font-heading)" }}>
                            Next Post
                          </span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
                          {nextPost.title}
                        </h3>
                      </Link>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </article>
    </div>
  );
};
