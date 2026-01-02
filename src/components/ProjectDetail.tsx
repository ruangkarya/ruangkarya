import React from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Code,
  Palette,
  Zap,
} from "lucide-react";

interface ProjectDetailProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
    longDescription?: string;
    features?: string[];
    tech?: string[];
    date?: string;
  };
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onBack,
}) => {
  const longDescription =
    project.longDescription ||
    "This project showcases modern web development practices with a focus on performance, user experience, and maintainability. Built with cutting-edge technologies and following industry best practices, it demonstrates expertise in full-stack development and attention to detail in both frontend and backend implementation.";

  const features = project.features || [
    "Responsive design that works seamlessly across all devices",
    "Fast loading times with optimized assets and lazy loading",
    "Intuitive user interface with smooth animations",
    "Comprehensive error handling and validation",
    "SEO-optimized with proper meta tags and structured data",
    "Accessibility features following WCAG guidelines",
  ];

  const tech = project.tech || [
    "React & TypeScript for type-safe component development",
    "Tailwind CSS for utility-first styling",
    "Motion for smooth animations and transitions",
    "Node.js & Express for backend API",
    "PostgreSQL for data persistence",
    "Docker for containerization and deployment",
  ];

  const projectDate = project.date || "November 2024";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-6xl mx-auto px-6 py-12">
        {/* Title and meta */}
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl text-slate-900 dark:text-white mb-4"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 mb-6"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <div
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Calendar className="w-4 h-4" />
              <span>{projectDate}</span>
            </div>

            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              <span>View Code</span>
            </motion.a>

            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full hover:from-teal-600 hover:to-blue-600 transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Featured image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[500px] object-cover"
          />
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl text-slate-900 dark:text-white mb-4">
            Overview
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {longDescription}
          </p>
        </motion.div>

        {/* Features & Technologies grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-teal-500/10">
                <Zap className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-2xl text-slate-900 dark:text-white">
                Key Features
              </h3>
            </div>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-blue-500/10">
                <Code className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-2xl text-slate-900 dark:text-white">
                Technologies
              </h3>
            </div>
            <ul className="space-y-3">
              {tech.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-12"
        >
          <h3 className="text-2xl text-slate-900 dark:text-white mb-4">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <motion.span
                key={tag}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full"
                style={{ fontFamily: "var(--font-heading)" }}
                whileHover={{ scale: 1.05, y: -2 }}
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
          transition={{ duration: 0.5, delay: 0.8 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 text-white text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="w-8 h-8" />
            <h3 className="text-3xl">Interested in working together?</h3>
          </div>
          <p className="text-lg opacity-90 mb-6">
            Let's create something amazing. Get in touch to discuss your
            project.
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onBack();
              setTimeout(() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="inline-block px-8 py-3 bg-white text-teal-600 rounded-full hover:bg-slate-100 transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </article>
    </div>
  );
};
