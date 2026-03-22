"use client";
import { use, useRef, useState, useCallback, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Code2,
  Smartphone,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const { dict } = useLanguage();
  const projectId = resolvedParams.id as keyof typeof dict.projectDetails;

  // Safe check if project details exist
  const details = dict.projectDetails[projectId] as
    | {
        title: string;
        overview: string;
        featureList: string[];
        images?: string[];
      }
    | undefined;

  // Find project details from the general portfolio projects for tags, image, and links
  const projectInfo = dict.portfolio.projects.find(
    (p) => p.demo === `/projects/${resolvedParams.id}`,
  );

  // Get images array, fallback to main portfolio image if not specified
  const images =
    details?.images && details.images.length > 0
      ? details.images
      : projectInfo?.image
        ? [projectInfo.image]
        : [];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

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

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      // Compute active index based on scroll position and client width (which is the width of one page)
      const index = Math.round(el.scrollLeft / el.clientWidth);
      const maxIndex = Math.max(0, totalPages - 1);
      setActiveIndex(Math.max(0, Math.min(index, maxIndex)));
    }
  }, [totalPages]);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      el.scrollTo({
        left: index * el.clientWidth, // Scroll to the start of the page
        behavior: "smooth",
      });
    }
  };

  const scroll = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, Math.max(0, totalPages - 1));
    scrollToIndex(newIndex);
  };

  if (!details) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <p className="text-slate-500">Project Not Found / ไม่พบโปรเจกต์</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      <main className="pt-24 pb-16">
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
            >
              <ChevronLeft size={16} />
              {dict.projectDetails.backToPortfolio}
            </Link>
          </motion.div>

          {/* Header Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative"
          >
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                {details.title}
              </h1>
              <div className="flex flex-wrap gap-3 mb-6">
                {projectInfo?.tags?.map((tag: string, i: number) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {details.overview}
              </p>
            </div>

            {/* Desktop Navigation Arrows (lg and up) matches Portfolio styling */}
            {totalPages > 1 && (
              <div className="hidden lg:flex shrink-0 gap-2 mb-2">
                <button
                  onClick={() => scroll("left")}
                  className="p-2 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 transition-colors shadow-sm disabled:opacity-30 disabled:pointer-events-none"
                  disabled={activeIndex === 0}
                  aria-label="Previous page"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="p-2 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 transition-colors shadow-sm disabled:opacity-30 disabled:pointer-events-none"
                  disabled={activeIndex === totalPages - 1}
                  aria-label="Next page"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </motion.div>

          {/* Image Slider for Mobile Apps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 -mx-4 sm:mx-0 relative group"
          >
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pt-4 pb-4"
              style={{ scrollBehavior: "smooth" }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const pageImages = images.slice(
                  pageIndex * itemsPerPage,
                  (pageIndex + 1) * itemsPerPage,
                );
                return (
                  <div
                    key={pageIndex}
                    className="w-screen sm:w-full shrink-0 snap-start flex justify-center sm:justify-start gap-4 sm:gap-6 px-4 sm:px-0"
                  >
                    {pageImages.map((img: string, idx: number) => (
                      <div
                        key={idx}
                        className="shrink-0 w-[80vw] sm:w-[calc(50%-1.5rem)] lg:w-[320px] max-w-full aspect-9/19 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800"
                      >
                        <Image
                          src={img}
                          alt={`${details.title} screenshot ${pageIndex * itemsPerPage + idx + 1}`}
                          fill
                          className="object-cover"
                          unoptimized
                          priority={pageIndex === 0 && idx === 0}
                          sizes="(max-width: 768px) 80vw, (max-width: 1024px) 45vw, 320px"
                        />
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Pagination Dots */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => scrollToIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? "w-8 bg-sky-500"
                        : "w-2.5 bg-slate-200 dark:bg-slate-800 hover:bg-sky-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* Features Layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <Smartphone className="text-sky-500" />
              {dict.projectDetails.features}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {details.featureList?.map((feature: string, idx: number) => (
                <div
                  key={idx}
                  className="flex gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800/80 hover:border-sky-500/30 transition-colors"
                >
                  <CheckCircle2
                    className="text-sky-500 shrink-0 mt-0.5"
                    size={24}
                  />
                  <p className="text-slate-700 dark:text-slate-300 font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Action Footer */}
          {projectInfo?.github && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center"
            >
              <a
                href={projectInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg shadow-slate-900/10 dark:shadow-white/10"
              >
                <Code2 size={20} />
                View Source Code
              </a>
            </motion.div>
          )}
        </article>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} Chanachai Benmat. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
