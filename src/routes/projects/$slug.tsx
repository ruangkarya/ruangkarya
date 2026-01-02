import { useRef } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useInView } from "motion/react";
import {
  Calendar,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
} from "lucide-react";
import { VeliteMdxRenderer } from "../../components/mdx/VeliteMdxRenderer";
import { allProjects, type Project } from "../../lib/content";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = allProjects.find(
      (project: Project) => project.slug === params.slug
    );
    if (!project || !project.published) {
      throw notFound();
    }
    return { project };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="py-32 px-6 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl text-slate-900 dark:text-white mb-4">
          Project not found
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-full hover:border-teal-500 dark:hover:border-teal-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Format date
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get next and previous projects
  const publishedProjects = (allProjects as Project[])
    .filter((p) => p.published)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const currentIndex = publishedProjects.findIndex(
    (p) => p.slug === project.slug
  );
  const prevProject = publishedProjects[currentIndex + 1];
  const nextProject = publishedProjects[currentIndex - 1];

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
            <Link to="/projects" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
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
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-8 leading-tight font-bold tracking-tight">
              {project.title}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-4xl">
              {project.description}
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

              {/* Project Links */}
              <div className="flex items-center gap-4">
                {project.repository && (
                  <motion.a
                    href={`https://github.com/${project.repository}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm bg-slate-900 dark:bg-slate-700 text-white px-6 py-3 rounded-full hover:bg-slate-800 dark:hover:bg-slate-600 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                    style={{ fontFamily: "var(--font-subheading)" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </motion.a>
                )}
                {project.url && (
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                    style={{ fontFamily: "var(--font-subheading)" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </div>
          </motion.header>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
                     prose-code:text-sm
                     prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                     prose-pre:p-0 prose-pre:m-0 prose-pre:bg-transparent
                     prose-pre:border-none prose-pre:shadow-none prose-pre:overflow-visible"
          >
            <VeliteMdxRenderer
              body={project.body}
              className="prose-optimized"
            />
          </motion.article>

          {/* Navigation to Previous/Next Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-24 pt-16 border-t-2 border-slate-200 dark:border-slate-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Previous Project */}
              <div>
                {prevProject && (
                  <div className="group block p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-400 transition-colors">
                    <Link
                      to="/projects/$slug"
                      params={{ slug: prevProject.slug }}
                    >
                      <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
                        <ArrowLeft className="w-5 h-5" />
                        <span>Previous Project</span>
                      </div>
                      <h3 className="text-lg text-slate-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                        {prevProject.title}
                      </h3>
                    </Link>
                  </div>
                )}
              </div>

              {/* Next Project */}
              <div>
                {nextProject && (
                  <div className="group block p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 dark:hover:border-teal-400 transition-colors text-right">
                    <Link
                      to="/projects/$slug"
                      params={{ slug: nextProject.slug }}
                    >
                      <div className="flex items-center justify-end gap-3 text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
                        <span>Next Project</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg text-slate-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                        {nextProject.title}
                      </h3>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
