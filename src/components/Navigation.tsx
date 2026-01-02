import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "@tanstack/react-router";
import { cn } from "./ui/utils";

const navItems = [
  { name: "About", href: "/#about", type: "scroll" },
  { name: "Experience", href: "/#experience", type: "scroll" },
  { name: "Services", href: "/#services", type: "scroll" },
  { name: "Projects", href: "/#projects", type: "scroll" },
  { name: "Blog", href: "/blog", type: "route" },
  { name: "Contact", href: "/#contact", type: "scroll" },
];

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Check if the current path is in the list of paths to hide the navigation
  const hideNav =
    location.pathname.startsWith("/blog/") ||
    location.pathname.startsWith("/projects/");
  if (hideNav) return null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    // Extract the hash part from href (e.g., "/#blog" becomes "#blog")
    const sectionId = href.startsWith("/") ? href.substring(1) : href;
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent",
        scrolled &&
          "bg-[#fefcf8]/90  dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200/20 dark:border-white/10"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            className="text-xl text-slate-900 dark:text-white tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/">
              <img src="/images/favicon.png" className="w-12 h-12" alt="RS" />
            </Link>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.type === "route" ? (
                <motion.div
                  key={item.name}
                  className="text-sm text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                  whileHover={{ y: -2 }}
                >
                  <Link to={item.href}>{item.name}</Link>
                </motion.div>
              ) : (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-sm text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              )
            )}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};
