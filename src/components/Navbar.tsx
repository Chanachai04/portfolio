"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { dict } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: dict.nav.about, href: "#about" },
    { name: dict.nav.education, href: "#education" },
    { name: dict.nav.portfolio, href: "#portfolio" },
    { name: dict.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex items-center">
            <a
              href="#"
              className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500"
            >
              Chanachai
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 pl-4 border-l border-slate-200 dark:border-slate-700">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-slate-600 dark:text-slate-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-slate-50 dark:text-slate-200 dark:hover:text-sky-400 dark:hover:bg-slate-900"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
