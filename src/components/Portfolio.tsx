"use client";

import { motion } from "framer-motion";
import { useLanguage, Dictionary } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useCallback, useEffect, memo } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo: string;
}

export function Portfolio() {
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

  const filteredProjects = dict.portfolio.projects;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const isSlider = filteredProjects.length > itemsPerPage;

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
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {dict.portfolio.title}
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
            ${isSlider ? "flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 md:px-0" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}
            touch-auto scroll-pl-4 md:scroll-pl-0
          `}
          style={isSlider ? { scrollBehavior: "smooth" } : undefined}
        >
          {isSlider
            ? Array.from({ length: totalPages }).map((_, pageIndex) => {
                const pageItems = filteredProjects.slice(
                  pageIndex * itemsPerPage,
                  (pageIndex + 1) * itemsPerPage,
                );
                return (
                  <div
                    key={pageIndex}
                    className="w-[85%] md:w-full shrink-0 snap-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pr-4 md:pr-4"
                  >
                    {pageItems.map((project: Project, idx: number) => {
                      const globalIndex = pageIndex * itemsPerPage + idx;
                      return (
                        <ProjectCard
                          key={globalIndex}
                          project={project}
                          index={globalIndex}
                          dict={dict}
                          itemsPerPage={itemsPerPage}
                        />
                      );
                    })}
                  </div>
                );
              })
            : filteredProjects.map((project: Project, index: number) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                  dict={dict}
                  itemsPerPage={itemsPerPage}
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

/* Extracted ProjectCard component to keep code DRY and memoized for performance */
const ProjectCard = memo(function ProjectCard({
  project,
  index,
  dict,
  itemsPerPage,
}: {
  project: Project;
  index: number;
  dict: Dictionary;
  itemsPerPage: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const DESC_MAX_LENGTH = 80;
  const isLong = project.description.length > DESC_MAX_LENGTH;

  const isInternal = project.demo.startsWith("/");
  const LinkComponent = isInternal ? Link : "a";
  const linkProps = isInternal
    ? {}
    : { target: "_blank", rel: "noopener noreferrer" };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % itemsPerPage) * 0.1 }}
      className="bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group flex flex-col relative"
    >
      <LinkComponent
        href={project.demo}
        {...linkProps}
        className="absolute inset-0 z-10"
        aria-label={`View project ${project.title}`}
      />

      <div className="h-48 relative overflow-hidden block">
        <Image
          src={project.image}
          alt={project.title}
          fill
          unoptimized
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
          <span className="text-white text-sm font-medium flex items-center gap-1">
            {dict.portfolio.viewProject} <ExternalLink size={14} />
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col relative z-20 pointer-events-none">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          {project.title}
        </h3>
        <div className="text-slate-600 dark:text-slate-400 mb-4 flex-1">
          <p>
            {isLong && !expanded
              ? project.description.slice(0, DESC_MAX_LENGTH) + "..."
              : project.description}
          </p>
          {isLong && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              className="text-sky-500 hover:text-sky-600 dark:hover:text-sky-400 text-sm font-medium mt-1 pointer-events-auto transition-colors cursor-pointer"
            >
              {expanded ? dict.portfolio.showLess : dict.portfolio.readMore}
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-4 pointer-events-auto">
          <LinkComponent
            href={project.demo}
            {...linkProps}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
          >
            {isInternal ? (
              <ChevronRight size={16} />
            ) : (
              <ExternalLink size={16} />
            )}{" "}
            {isInternal ? "Details" : "Live Demo"}
          </LinkComponent>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
          >
            <Github size={16} /> Source
          </a>
        </div>
      </div>
    </motion.div>
  );
});
