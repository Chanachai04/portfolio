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
    const update = () => setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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

  const totalPages = Math.ceil(certificateFiles.length / itemsPerPage);
  const isSlider = certificateFiles.length > itemsPerPage;

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(Math.min(index, totalPages - 1));
    }
  }, [totalPages]);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (
        isSlider &&
        scrollRef.current &&
        Math.abs(e.deltaY) > Math.abs(e.deltaX)
      ) {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY;
      }
    },
    [isSlider],
  );

  const scroll = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, totalPages - 1);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: index * clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="certificates"
      className="py-24 bg-white dark:bg-slate-950"
      style={{ contentVisibility: "auto" } as React.CSSProperties}
    >
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
            <div className="hidden md:flex absolute right-0 bottom-0 gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 transition-colors"
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
          onWheel={handleWheel}
          className={`
            ${isSlider ? "flex overflow-x-auto snap-x snap-mandatory scrollbar-hide" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"}
            touch-pan-x
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
                    className="w-full shrink-0 snap-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % itemsPerPage) * 0.1 }}
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
        <span>{dict.certificates.openPdf}</span>
      </div>
    </motion.a>
  );
});
