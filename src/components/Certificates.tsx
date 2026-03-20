"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { FileText, ExternalLink } from "lucide-react";

export function Certificates() {
  const { dict } = useLanguage();

  const certificateFiles = [
    {
      name: "Word 2019",
      category: "MOS Olympic Thailand Competition 2025",
      file: "/word-2019.pdf",
    },
    {
      name: "Microsoft Office Specialist - Associate (Office 2019)",
      category: "MOS Olympic Thailand Competition 2025",
      file: "/microsoft-office-specialist-associate-office-2019.pdf",
    },
    {
      name: "Excel 2019",
      category: "MOS Olympic Thailand Competition 2024",
      file: "/excel-2019.pdf",
    },
    {
      name: "Excel 2019 Expert",
      category: "MOS Olympic Thailand Competition 2024",
      file: "/excel-2019-expert.pdf",
    },

    {
      name: "PowerPoint 2019",
      category: "MOS Olympic Thailand Competition 2024",
      file: "/powerpoint-2019.pdf",
    },

    {
      name: "ICDL",
      category: "ICDL THAILAND 2024",
      file: "/icdl.pdf",
    },
    {
      name: "ITPEC",
      category: "Infomation Technology passport Examination 2024",
      file: "/itpec.pdf",
    },
  ];

  return (
    <section id="certificates" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {dict.certificates.title}
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificateFiles.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center gap-4 relative overflow-hidden cursor-pointer"
            >
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileText size={32} />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-1 line-clamp-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  {cert.category}
                </p>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sky-600 dark:text-sky-400 font-medium text-sm group-hover:underline">
                <ExternalLink size={16} />
                <span>เปิดดู PDF</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
