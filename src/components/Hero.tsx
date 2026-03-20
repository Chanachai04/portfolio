"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { ArrowRight, Github, FileText } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-400/20 dark:bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-sky-600 dark:text-sky-400 font-medium tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {dict.hero.greeting}
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {dict.hero.name}
            <div id="verification-element-987" style={{ display: "none" }}>
              VERIFIED_CODE_UPDATED
            </div>
          </motion.h1>
          <motion.div
            className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            {dict.hero.role}
          </motion.div>
          <motion.p
            className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {dict.hero.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {dict.hero.interestedPositions.map((pos: string, i: number) => (
              <span
                key={i}
                className="px-4 py-1.5 bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 text-sm font-medium rounded-full border border-sky-100 dark:border-sky-800/50 shadow-sm"
              >
                {pos}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-4 justify-center md:justify-start pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#portfolio"
              className="group flex items-center gap-2 px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-medium transition-all shadow-lg shadow-sky-500/30 w-full sm:w-auto justify-center"
            >
              {dict.hero.viewWork}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-500 text-slate-700 dark:text-slate-300 rounded-full font-medium transition-all w-full sm:w-auto justify-center"
            >
              {dict.hero.contactMe}
            </a>
            <a
              href="https://github.com/Chanachai04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-500 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 rounded-full font-medium transition-all w-full sm:w-auto justify-center"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-500 text-slate-700 dark:text-slate-300 rounded-full font-medium transition-all w-full sm:w-auto justify-center"
            >
              <FileText size={18} />
              {dict.hero.resume}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 hidden md:flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative w-80 h-80 rounded-full bg-linear-to-tr from-sky-500 to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-slate-950 flex items-center justify-center overflow-hidden">
              <Image
                src="/me.jpg"
                alt={dict.hero.name}
                width={320}
                height={320}
                loading="eager"
                className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
