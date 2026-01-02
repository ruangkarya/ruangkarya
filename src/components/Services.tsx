import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Monitor, Smartphone, Database } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Frontend Developer",
    description:
      "Building responsive, performant web applications with modern frameworks and best practices.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vue.js",
      "Web Performance",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Developer",
    description:
      "Creating native and cross-platform mobile experiences that users love.",
    skills: [
      "React Native",
      "Swift",
      "Kotlin",
      "Flutter",
      "Mobile UI/UX",
      "App Store Deployment",
    ],
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: Database,
    title: "Fullstack Developer",
    description:
      "End-to-end development from database design to deployment and beyond.",
    skills: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "REST API",
      "Cloud Architecture",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
];

export const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="services"
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
            What I Do
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Specializing in modern web and mobile development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <motion.div
                className={`relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800
                           group-hover:border-transparent transition-all duration-500 overflow-hidden`}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundClip: "padding-box",
                }}
              >
                {/* Animated gradient border background */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    background: `linear-gradient(45deg, ${
                      service.gradient.includes("blue")
                        ? "#3b82f6, #06b6d4, #3b82f6"
                        : service.gradient.includes("teal")
                        ? "#14b8a6, #10b981, #14b8a6"
                        : "#a855f7, #ec4899, #a855f7"
                    })`,
                    backgroundSize: "300% 300%",
                    animation: "gradient-flow 3s ease-in-out infinite",
                    padding: "1px",
                    zIndex: -1,
                  }}
                >
                  <div className="w-full h-full rounded-3xl bg-slate-50 dark:bg-slate-900" />
                </div>

                {/* Subtle outer glow */}
                <div
                  className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-lg`}
                  style={{ zIndex: -2 }}
                />

                <div className="relative">
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl text-slate-900 dark:text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-2"
                        whileHover={{ x: 5 }}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}
                        />
                        <span
                          className="text-sm text-slate-600 dark:text-slate-300"
                          style={{ fontFamily: "var(--font-subheading)" }}
                        >
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
