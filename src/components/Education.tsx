"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

interface EducationItem {
  degree: string;
  major: string;
  school: string;
  period: string;
  description: string;
  current: boolean;
}

export function Education() {
  const { dict } = useLanguage();

  return (
    <section
      id="education"
      className="py-24"
      style={{ contentVisibility: "auto" } as React.CSSProperties}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {dict.education.title}
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-6">
          {dict.education.history.map((edu: EducationItem, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-10 ml-8 relative"
            >
              <div className="absolute -left-[43px] w-5 h-5 bg-sky-500 rounded-full border-4 border-white dark:border-slate-950" />
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <span
                  className={`inline-block px-3 py-1 rounded-full mb-4 font-medium text-sm ${
                    edu.current
                      ? "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {edu.period}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {edu.degree} ({edu.major})
                </h3>
                <p className="text-lg text-sky-600 dark:text-sky-400 font-medium mb-3">
                  {edu.school}
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
