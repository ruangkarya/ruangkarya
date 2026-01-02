import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import {
  Calendar,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Github,
} from "lucide-react";
import { allProjects, type Project } from "../../lib/content";

export const Route = createFileRoute("/projects/")({
  component: ProjectsList,
});

// Filter only published projects and sort by date
const projects = (allProjects as Project[])
  .filter((project) => project.published)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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

function ProjectsList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className="py-32 px-6 bg-slate-50 dark:bg-slate-900 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors mb-8"
            style={{ fontFamily: "var(--font-subheading)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-5xl md:text-6xl text-slate-900 dark:text-white mb-4">
            All Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A collection of my work and side projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                className="h-full rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Content */}
                <div className="p-6">
                  <div
                    className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3"
                    style={{ fontFamily: "var(--font-subheading)" }}
                  >
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <h2 className="text-xl text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h2>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Action Links */}
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

                  {/* Read More Link */}
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
            </motion.article>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              No projects available yet.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
