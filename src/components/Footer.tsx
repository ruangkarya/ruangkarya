import React from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2"
            style={{ fontFamily: "var(--font-heading)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>© 2025 Rohmad Sasmito. Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-teal-500 fill-teal-500" />
            </motion.span>
            <span>and React</span>
          </motion.p>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <motion.a
              href="#"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy
            </motion.a>
            <motion.a
              href="#"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
