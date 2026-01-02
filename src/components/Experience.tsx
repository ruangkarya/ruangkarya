import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";

type Experience = {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
};

const experiences: Experience[] = [
  {
    company: "Portier",
    companyUrl: "https://portier.de",
    role: "Product Engineer",
    period: "Feb 2025 - Present",
    description:
      "Lead frontend development initiatives using Vite, Tanstack and TypeScript. Implement modern UI/UX designs and architect scalable solutions for complex business requirements.",
    technologies: [
      "Vite",
      "Tanstack",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    company: "Tiptip.id",
    companyUrl: "https://tiptip.id",
    role: "Senior Frontend Engineer",
    period: "Jul 2022 - Nov 2024",
    description:
      "Develop and maintain high-quality, maintainable code for software systems. Conduct comprehensive testing and mentor junior team members.",
    technologies: ["React", "TypeScript", "Testing", "Code Reviews"],
  },
  {
    company: "Zero One Group",
    companyUrl: "https://zero-one-group.com",
    role: "Senior Product Engineer",
    period: "Oct 2021 - Jul 2022",
    description:
      "Developed enterprise solutions for web and mobile platforms. Lead testing processes and mentor junior developers in cross-functional teams.",
    technologies: [
      "React.js",
      "Node.js",
      "TypeScript",
      "Flutter",
      "React Native",
    ],
  },
  {
    company: "Kata.ai",
    companyUrl: "https://kata.ai",
    role: "Frontend Engineer",
    period: "Dec 2018 - Sep 2021",
    description:
      "Built conversational AI platform interface with custom workflow builder. Implemented real-time features and created analytics dashboards with complex data visualizations.",
    technologies: [
      "React.js",
      "WebSocket",
      "Data Visualization",
      "Performance Optimization",
    ],
  },
  {
    company: "Qiscus",
    companyUrl: "https://qiscus.com",
    role: "Frontend Developer",
    period: "Jul 2017 - Nov 2018",
    description:
      "Develop and maintain web applications using JavaScript frameworks. Improve performance and collaborate with project managers on feature delivery.",
    technologies: ["Vue.js", "React.js", "JavaScript", "Performance"],
  },
  {
    company: "Qiscus",
    companyUrl: "https://qiscus.com",
    role: "iOS Developer",
    period: "Nov 2016 - Jul 2017",
    description:
      "Build sample applications for the Qiscus Chat SDK. Recommend architectural improvements and develop applications using MVVM architecture.",
    technologies: ["iOS", "Swift", "MVVM", "SDK Development"],
  },
  {
    company: "Ciayo Corp",
    companyUrl: "#",
    role: "Backend Developer",
    period: "Mar 2016 - Oct 2016",
    description:
      "Provide technical guidance for system development and troubleshooting. Create RESTful APIs for client-side integration and develop libraries for complex features.",
    technologies: [
      "Backend",
      "RESTful API",
      "System Architecture",
      "Technical Guidance",
    ],
  },
  {
    company: "Kodesoft",
    companyUrl: "#",
    role: "Backend Developer",
    period: "Feb 2015 - Mar 2016",
    description:
      "Document design specifications and ensure system component compatibility. Train city government personnel on system usage and administration.",
    technologies: [
      "Documentation",
      "System Integration",
      "Training",
      "Government Systems",
    ],
  },
  {
    company: "Alfasoft",
    companyUrl: "https://ubig.co.id",
    role: "Programmer",
    period: "Jul 2013 - Jan 2015",
    description:
      "Develop user interfaces for web and desktop applications using ASP.NET and VB.NET. Fix bugs, optimize code, and collaborate with clients for requirements gathering.",
    technologies: [
      "ASP.NET",
      "VB.NET",
      "Desktop Applications",
      "Client Relations",
    ],
  },
];

export const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3);
  const hiddenCount = experiences.length - 3;

  return (
    <section
      id="experience"
      ref={ref}
      className="py-32 px-6 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl text-slate-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            My professional journey across web and mobile development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500 via-blue-500 to-teal-500" />

          <div className="space-y-12">
            {visibleExperiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 top-6 w-4 h-4 -ml-2 rounded-full bg-teal-500 border-4 border-slate-50 dark:border-slate-900"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Content */}
                <div
                  className={
                    index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                  }
                >
                  <motion.div
                    className={`ml-8 md:ml-0 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-teal-500/10">
                        <Briefcase className="w-5 h-5 text-teal-500" />
                      </div>
                      <div
                        className={`flex-1 ${
                          index % 2 === 0 ? "md:text-right" : ""
                        }`}
                      >
                        <h3 className="text-xl text-slate-900 dark:text-white mb-1">
                          {exp.role}
                        </h3>
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                          style={{ fontFamily: "var(--font-subheading)" }}
                        >
                          {exp.company}
                        </a>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Show More/Show Less Button */}
        {experiences.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-400 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-200 shadow-sm hover:shadow-md z-10"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sm font-medium">
                {showAll ? "Show Less" : `Show More (${hiddenCount} more)`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
