"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { MessageCircle, Mail } from "lucide-react";

export function Contact() {
  const { dict } = useLanguage();

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {dict.contact.title}
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Action Card: Line ID */}
          <motion.a
            href="https://line.me/ti/p/~0636518420"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sky-500 dark:hover:border-sky-500 hover:shadow-lg transition-all flex flex-col items-center gap-4 text-center"
          >
            <div className="w-16 h-16 bg-[#00B900]/10 text-[#00B900] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle size={32} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100">{dict.contact.lineId}</h3>
              <p className="text-slate-500 dark:text-slate-400">0636518420</p>
            </div>
          </motion.a>

          {/* Action Card: Email */}
          <motion.a
            href="mailto:chn.benmat@gmail.com"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="group p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sky-500 dark:hover:border-sky-500 hover:shadow-lg transition-all flex flex-col items-center gap-4 text-center"
          >
            <div className="w-16 h-16 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={32} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100">{dict.contact.email}</h3>
              <p className="text-slate-500 dark:text-slate-400">chn.benmat@gmail.com</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
