import React from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 dark:bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-7xl md:text-9xl tracking-tight text-slate-900 dark:text-white max-w-2xl mb-4 relative">
              <span className="relative flex flex-col">
                {/* First Name - Rohmad */}
                <span className="relative block">
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%] opacity-80"
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {"Rohmad".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="inline-block"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                  <span
                    className="relative text-slate-900 dark:text-white animate-glow-pulse"
                    style={{
                      textShadow: "0 0 10px rgba(20, 184, 166, 0.3)",
                    }}
                  >
                    {"Rohmad".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="inline-block"
                        whileHover={{
                          scale: 1.1,
                          rotateY: 10,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </span>

                {/* Last Name - Sasmito */}
                <span className="relative block">
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%] opacity-80"
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {"Sasmito".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          delay: (6 + index) * 0.1,
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="inline-block"
                        style={{ animationDelay: `${(6 + index) * 0.1}s` }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                  <span
                    className="relative text-slate-900 dark:text-white animate-glow-pulse"
                    style={{
                      textShadow: "0 0 10px rgba(20, 184, 166, 0.3)",
                    }}
                  >
                    {"Sasmito".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          delay: (6 + index) * 0.1,
                          duration: 0.6,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="inline-block"
                        whileHover={{
                          scale: 1.1,
                          rotateY: 10,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-500" />
            <p
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Frontend · Mobile · Fullstack Developer
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-500" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto"
          >
            I craft modern web and mobile experiences that connect creativity
            and technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-full hover:border-teal-500 dark:hover:border-teal-400 transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  );
};
