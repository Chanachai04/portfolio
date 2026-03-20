"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { User, GraduationCap, Building2, BookOpen } from "lucide-react";

export function About() {
  const { dict } = useLanguage();

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {dict.about.title}
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Age */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <User size={24} />
            </div>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{dict.about.age}</h3>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{dict.about.ageValue}</p>
          </motion.div>

          {/* Card 2: Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Status</h3>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{dict.about.education}</p>
          </motion.div>

          {/* Card 3: University */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group lg:col-span-2"
          >
            <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Building2 size={24} />
            </div>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{dict.about.faculty}</h3>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{dict.about.university}</p>
          </motion.div>

          {/* Card 4: Major */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group lg:col-span-4"
          >
            <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen size={24} />
            </div>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Major</h3>
            <p className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-sky-500 to-blue-600">{dict.about.major}</p>
          </motion.div>
        </div>

        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {dict.about.skillsTitle}
            </h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Programming Language */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 flex items-center justify-center">💻</span>
                {dict.skills.programming}
              </h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "TypeScript", "Dart", "Python"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Framework */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 flex items-center justify-center">🚀</span>
                {dict.skills.framework}
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Nextjs", "Vite", "Flutter", "React Native", "Tailwindcss"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Database */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 flex items-center justify-center">💾</span>
                {dict.skills.database}
              </h3>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "Postgresql", "Firebase", "Supabase"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
