import React, { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import { ArrowRight, Calendar, ExternalLink, Github } from "lucide-react";
import { allProjects, type Project } from "../lib/content";

// Get featured projects (limit to 6 most recent published projects)
const featuredProjects = (allProjects as Project[])
  .filter((project) => project.published)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 6)
  .map((project) => ({
    title: project.title,
    description: project.description,
    date: new Date(project.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    url: project.url,
    repository: project.repository,
    slug: project.slug,
  }));

export const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 px-6 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A collection of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 h-full"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Content */}
                <div className="p-6 h-full flex flex-col">
                  {/* Date */}
                  <div
                    className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3"
                    style={{ fontFamily: "var(--font-subheading)" }}
                  >
                    <Calendar className="w-3 h-3" />
                    <span>{project.date}</span>
                  </div>

                  <h3 className="text-xl text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex gap-4 mb-4">
                    {project.repository && (
                      <motion.a
                        href={`https://github.com/${project.repository}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                        style={{ fontFamily: "var(--font-subheading)" }}
                        whileHover={{ x: 5 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </motion.a>
                    )}
                    {project.url && (
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                        style={{ fontFamily: "var(--font-subheading)" }}
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </motion.a>
                    )}
                  </div>

                  {/* View Details Link */}
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to="/projects/$slug"
                      params={{ slug: project.slug }}
                      className="inline-flex items-center gap-2 text-sm text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                      style={{ fontFamily: "var(--font-subheading)" }}
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
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
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-full hover:border-teal-500 dark:hover:border-teal-400 transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
