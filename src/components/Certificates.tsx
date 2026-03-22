"use client";

import { motion } from "framer-motion";
import { useLanguage, Dictionary } from "@/lib/i18n";
import {
  FileText,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef, useState, useCallback, useEffect, memo } from "react";

export function Certificates() {
  const { dict } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive: 1 item/page on mobile, 3 on desktop
  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const certificateFiles = [
    {
      name: "Word 2019",
      category: "MOS Olympic Thailand Competition 2025",
      file: "/certificates/word-2019.pdf",
    },
    {
      name: "Microsoft Office Specialist - Associate (Office 2019)",
      category: "MOS Olympic Thailand Competition 2025",
      file: "/certificates/microsoft-office-specialist-associate-office-2019.pdf",
    },
    {
      name: "Excel 2019",
      category: "MOS Olympic Thailand Competition 2024",
      file: "/certificates/excel-2019.pdf",
    },
    {
      name: "Excel 2019 Expert",
      category: "MOS Olympic Thailand Competition 2024",
      file: "/certificates/excel-2019-expert.pdf",
    },
    {
      name: "PowerPoint 2019",
      category: "MOS Olympic Thailand Competition 2024",
      file: "/certificates/powerpoint-2019.pdf",
    },
    {
      name: "ICDL",
      category: "ICDL THAILAND 2024",
      file: "/certificates/icdl.pdf",
    },
    {
      name: "ITPEC",
      category: "Infomation Technology passport Examination 2024",
      file: "/certificates/itpec.pdf",
    },
    {
      name: "ใบรับรองการฝึกงาน",
      category: "บริษัท มายด์ ซอฟแวร์ ดีเวลลอปเม้นท์ จำกัด",
      file: "/certificates/internship.jpg",
    },
    {
      name: "สิ่งประดิษฐ์ด้านวัตกรรมซอฟต์แวร์และระบบสมองกลฝังตัว",
      category:
        "การแข่งขันทักษะวิชาชีพ การประกวดนวัตกรรมสิงประดิษฐ์และกีฬา ระดับชาติ",
      file: "/certificates/vocational-skills-competition.jpg",
    },
  ];

  const totalPages = Math.ceil(certificateFiles.length / itemsPerPage);
  const isSlider = certificateFiles.length > itemsPerPage;

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      const firstChild = el.firstElementChild as HTMLElement;
      if (firstChild) {
        const itemWidth = firstChild.offsetWidth;
        const index = Math.round(el.scrollLeft / itemWidth);
        const maxIndex = el.children.length - 1;
        setActiveIndex(Math.min(index, maxIndex));
      }
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, totalPages - 1);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      const firstChild = el.firstElementChild as HTMLElement;
      if (firstChild) {
        const itemWidth = firstChild.offsetWidth;
        el.scrollTo({
          left: index * itemWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section id="certificates" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {dict.certificates.title}
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />

          {/* Navigation Buttons (desktop only) */}
          {isSlider && (
            <div className="hidden lg:flex absolute right-0 bottom-0 gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 transition-colors disabled:opacity-30 disabled:pointer-events-none"
                disabled={activeIndex === 0}
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 transition-colors disabled:opacity-30 disabled:pointer-events-none"
                disabled={activeIndex === totalPages - 1}
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </motion.div>

        {/* Slider container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className={`
            ${isSlider ? "flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 md:px-0" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"}
            touch-auto scroll-pl-4 md:scroll-pl-0
          `}
          style={isSlider ? { scrollBehavior: "smooth" } : undefined}
        >
          {isSlider
            ? Array.from({ length: totalPages }).map((_, pageIndex) => {
                const pageItems = certificateFiles.slice(
                  pageIndex * itemsPerPage,
                  (pageIndex + 1) * itemsPerPage,
                );
                return (
                  <div
                    key={pageIndex}
                    className="w-[85%] md:w-full shrink-0 snap-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pr-4 md:pr-0"
                  >
                    {pageItems.map((cert, idx) => {
                      const globalIndex = pageIndex * itemsPerPage + idx;
                      return (
                        <CertificateCard
                          key={globalIndex}
                          cert={cert}
                          index={globalIndex}
                          itemsPerPage={itemsPerPage}
                          dict={dict}
                        />
                      );
                    })}
                  </div>
                );
              })
            : certificateFiles.map((cert, idx) => (
                <CertificateCard
                  key={idx}
                  cert={cert}
                  index={idx}
                  itemsPerPage={itemsPerPage}
                  dict={dict}
                />
              ))}
        </div>

        {/* Pagination Dots */}
        {isSlider && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-sky-500 w-8"
                    : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-sky-300"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const CertificateCard = memo(function CertificateCard({
  cert,
  index,
  itemsPerPage,
  dict,
}: {
  cert: { name: string; category: string; file: string };
  index: number;
  itemsPerPage: number;
  dict: Dictionary;
}) {
  return (
    <motion.a
      href={cert.file}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % itemsPerPage) * 0.05 }}
      className="group p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-4 relative overflow-hidden cursor-pointer"
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
        <span>{dict.certificates.openPdf}</span>
      </div>
    </motion.a>
  );
});
