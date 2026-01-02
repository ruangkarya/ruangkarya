import React, { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Code2, Sparkles, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable solutions",
  },
  {
    icon: Sparkles,
    title: "Creative",
    description: "Blending design with functionality",
  },
  {
    icon: Rocket,
    title: "Innovative",
    description: "Always exploring new technologies",
  },
];

const FuturisticAvatar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full h-full bg-gradient-to-br from-teal-500/20 to-blue-600/20 flex items-center justify-center relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Pulse ring effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-teal-400/50"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={
          isHovered
            ? {
                scale: [0.8, 1.2, 1.4],
                opacity: [0, 0.6, 0],
              }
            : { scale: 0.8, opacity: 0 }
        }
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Main avatar circle */}
      <motion.div
        className="relative w-32 h-32 rounded-full overflow-hidden"
        animate={
          isHovered
            ? {
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }
            : { rotate: 0, scale: 1 }
        }
        transition={{ duration: 0.8 }}
      >
        {/* Background gradient - always visible */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-500"
          animate={
            isHovered
              ? {
                  background: [
                    "linear-gradient(to bottom right, #2dd4bf, #3b82f6)",
                    "linear-gradient(to bottom right, #8b5cf6, #06b6d4)",
                    "linear-gradient(to bottom right, #f59e0b, #ef4444)",
                    "linear-gradient(to bottom right, #2dd4bf, #3b82f6)",
                  ],
                }
              : {}
          }
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Initials - default state */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10"
          animate={{
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 0.8 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          <span
            className="text-5xl text-white font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            RS
          </span>
        </motion.div>

        {/* Photo - hover state */}
        <motion.div
          className="absolute inset-0 z-20"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 1.2,
          }}
          transition={{ duration: 0.6, delay: isHovered ? 0.2 : 0 }}
        >
          <img
            src="/images/me.png"
            alt="Rohmad"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hexagonal mask overlay for futuristic effect */}
        <motion.div
          className="absolute inset-0 z-30"
          style={{
            background: `conic-gradient(from 0deg,
              transparent 0deg,
              rgba(45, 212, 191, 0.3) 60deg,
              transparent 120deg,
              rgba(139, 92, 246, 0.3) 180deg,
              transparent 240deg,
              rgba(45, 212, 191, 0.3) 300deg,
              transparent 360deg)`,
          }}
          animate={
            isHovered
              ? {
                  rotate: [0, 360],
                }
              : { rotate: 0 }
          }
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.6 }}
        />

        {/* Scan lines effect */}
        <motion.div
          className="absolute inset-0 z-40 pointer-events-none"
          style={{
            background: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(45, 212, 191, 0.1) 2px,
              rgba(45, 212, 191, 0.1) 4px
            )`,
          }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={
            isHovered
              ? {
                  x: ["100%", "-100%"],
                  opacity: [0, 0.8, 0],
                }
              : { x: "-100%", opacity: 0 }
          }
          transition={{
            duration: 1.2,
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 2,
          }}
        />

        {/* Glitch effect overlay */}
        <motion.div
          className="absolute inset-0 z-50 mix-blend-screen"
          style={{
            background: "rgba(45, 212, 191, 0.1)",
          }}
          animate={
            isHovered
              ? {
                  opacity: [0, 0.3, 0, 0.2, 0],
                  x: [0, 2, -2, 1, 0],
                }
              : { opacity: 0, x: 0 }
          }
          transition={{
            duration: 0.3,
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 3,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 px-6 bg-white dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 opacity-20" />
              <FuturisticAvatar />
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 border-4 border-teal-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-lg"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Right side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-5xl md:text-6xl text-slate-900 dark:text-white mb-6">
                About Me
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                A builder at heart — I turn ideas into interactive experiences
                across the web and mobile.
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                With years of experience spanning frontend, mobile, and
                fullstack development, I bring a unique perspective that
                combines technical precision with creative vision. My goal is to
                create digital products that not only work flawlessly but also
                inspire and delight users.
              </p>

              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800"
                  >
                    <div className="mt-1 p-2 rounded-lg bg-teal-500/10">
                      <item.icon className="w-5 h-5 text-teal-500" />
                    </div>
                    <div>
                      <h3 className="text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
