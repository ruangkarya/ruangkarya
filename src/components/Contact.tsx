import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:rohmadsasmito@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/rohmadsasmito",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/rohmad-st",
    color: "from-slate-700 to-slate-900",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/RohmadSasmito",
    color: "from-sky-500 to-blue-500",
  },
];

export const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl text-slate-900 dark:text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Let's build something creative together. I'm always open to
            discussing new projects, creative ideas, or opportunities to be part
            of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <motion.div
                className="relative p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center overflow-hidden"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={false}
                />

                <div className="relative">
                  <motion.div
                    className="inline-flex p-4 rounded-xl bg-slate-100 dark:bg-slate-700 group-hover:bg-white/20 transition-colors mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <link.icon className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors" />
                  </motion.div>
                  <p
                    className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {link.name}
                  </p>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <motion.a
            href={socialLinks[0].href}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full hover:from-teal-600 hover:to-blue-600 transition-all shadow-lg shadow-teal-500/25"
            style={{ fontFamily: "var(--font-heading)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span className="text-lg">Send me an email</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
