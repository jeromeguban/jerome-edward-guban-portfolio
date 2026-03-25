"use client";

import { useEffect, useState, useRef, type TouchEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { scrollToElement } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  X,
} from "lucide-react";

type Project = (typeof projects)[number];

/**
 * Featured Projects section with dual-column auto-scrolling carousel
 * Left column scrolls down, right column scrolls up — creating a mesmerizing visual effect
 * Left side has intro text with stats and CTA
 */
export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Split projects into two columns
  const leftColumnProjects = projects.filter((_, i) => i % 2 === 0);
  const rightColumnProjects = projects.filter((_, i) => i % 2 !== 0);

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = "";
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedProject]);

  return (
    <>
      <section
        id="featured-projects"
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 md:py-28 lg:py-32"
      >
        {/* Subtle background accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div
          className="absolute top-1/2 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)",
          }}
        />

        <div className="mx-auto max-w-[1600px] px-6 md:px-8">
          <div className="flex flex-col items-center gap-12 lg:grid lg:grid-cols-[1fr,1.5fr] lg:gap-16">
            {/* Left Side - Text Content */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full"
            >
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                Portfolio
              </span>

              <h2 className="mb-6 text-5xl font-black leading-[1.05] md:text-6xl lg:text-7xl">
                {/* <span className="block text-white">Creative</span> */}
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>

              <p className="mb-10 max-w-md text-lg leading-relaxed text-gray-400">
                Showcasing innovative solutions across web development, mobile
                ready designs, and cutting-edge technologies.
              </p>

              <motion.button
                onClick={() => scrollToElement("contact")}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Work With Me
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Right Side - Dual Column Carousel */}
            <div className="relative h-[600px] w-full overflow-hidden md:h-[700px] lg:h-[750px]">
              <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-24 bg-gradient-to-b from-[#1a0e2e] to-transparent" />
              <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-24 bg-gradient-to-t from-[#1a0e2e] to-transparent" />

              <div className="grid h-full grid-cols-2 gap-4 md:gap-6">
                <div className="group relative overflow-hidden">
                  <div className="animate-scroll-down group-hover:[animation-play-state:paused]">
                    {[...leftColumnProjects, ...leftColumnProjects].map(
                      (project, index) => (
                        <ProjectCard
                          key={`left-${index}`}
                          project={project}
                          onSelect={setSelectedProject}
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="group relative overflow-hidden">
                  <div className="animate-scroll-up group-hover:[animation-play-state:paused]">
                    {[...rightColumnProjects, ...rightColumnProjects].map(
                      (project, index) => (
                        <ProjectCard
                          key={`right-${index}`}
                          project={project}
                          onSelect={setSelectedProject}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject ? (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

/**
 * Individual project card for the carousel
 */
function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  return (
    <div className="mb-4 md:mb-6 group/card">
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="block w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] text-left backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-purple-400/70 focus:ring-offset-2 focus:ring-offset-[#1a0e2e]"
      >
        {/* Image with category overlay */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Category badge */}
          {project.category && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-white/15 backdrop-blur-xl text-white text-xs font-medium rounded-full border border-white/20">
              {project.category}
            </span>
          )}

          {/* Live URL icon */}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="absolute top-3 right-3 w-8 h-8 bg-white/15 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors border border-white/20"
              aria-label={`Open ${project.title}`}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        {/* Text Content */}
        <div className="p-4 md:p-5">
          <h3 className="text-white font-bold text-base md:text-lg mb-1.5 group-hover/card:text-purple-300 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </button>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const gallery = project.images?.length ? project.images : [project.image];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isAutoSlidePaused, setIsAutoSlidePaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const hasMultipleImages = gallery.length > 1;
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveImageIndex(0);
    setIsAutoSlidePaused(false);
    setIsZoomed(false);
  }, [project.id]);

  useEffect(() => {
    setIsZoomed(false);
    if (thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const activeThumbnail = container.children[
        activeImageIndex
      ] as HTMLElement;
      if (activeThumbnail) {
        const containerWidth = container.offsetWidth;
        const thumbnailOffset = activeThumbnail.offsetLeft;
        const thumbnailWidth = activeThumbnail.offsetWidth;

        container.scrollTo({
          left: thumbnailOffset - containerWidth / 2 + thumbnailWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeImageIndex]);

  useEffect(() => {
    if (!hasMultipleImages || isAutoSlidePaused || isZoomed) {
      return;
    }

    const autoSlide = window.setInterval(() => {
      setActiveImageIndex((currentIndex) =>
        currentIndex === gallery.length - 1 ? 0 : currentIndex + 1
      );
    }, 3500);

    return () => window.clearInterval(autoSlide);
  }, [
    gallery.length,
    hasMultipleImages,
    isAutoSlidePaused,
    isZoomed,
    project.id,
  ]);

  const goToPreviousImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? gallery.length - 1 : currentIndex - 1
    );
  };

  const goToNextImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === gallery.length - 1 ? 0 : currentIndex + 1
    );
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setIsAutoSlidePaused(true);
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const swipeDistance = touchStartX - touchEndX;

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        goToNextImage();
      } else {
        goToPreviousImage();
      }
    }

    setTouchStartX(null);
    setIsAutoSlidePaused(false);
  };

  const toggleZoom = () => setIsZoomed(!isZoomed);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xl md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-title-${project.id}`}
        className={`relative max-h-[90vh] w-full overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-[0_30px_120px_rgba(15,23,42,0.65)] ${
          hasMultipleImages ? "max-w-6xl" : "max-w-5xl"
        }`}
        initial={{ opacity: 0, scale: 0.95, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 16 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.03))]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/25 to-transparent" />
          <div className="absolute -top-24 right-12 h-56 w-56 rounded-full bg-fuchsia-400/20 blur-3xl" />
          <div className="absolute -bottom-28 left-12 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
          aria-label="Close project details"
        >
          <X size={18} />
        </button>

        <div
          className={`relative grid max-h-[90vh] overflow-hidden ${
            hasMultipleImages
              ? "lg:h-[80vh] lg:grid-cols-[1.2fr,0.8fr]"
              : "lg:h-[70vh] lg:grid-cols-[1.1fr,0.9fr]"
          }`}
        >
          <div className="border-b border-white/10 bg-slate-950/30 lg:border-r lg:border-b-0 min-w-0 min-h-0">
            <div className="flex h-full flex-col px-0 py-5 md:px-0 md:py-8 lg:py-6 min-h-0">
              <div
                onMouseEnter={
                  hasMultipleImages
                    ? () => setIsAutoSlidePaused(true)
                    : undefined
                }
                onMouseLeave={
                  hasMultipleImages
                    ? () => setIsAutoSlidePaused(false)
                    : undefined
                }
                onTouchStart={hasMultipleImages ? handleTouchStart : undefined}
                onTouchEnd={hasMultipleImages ? handleTouchEnd : undefined}
                className={`relative flex flex-1 overflow-hidden border-y border-white/10 bg-slate-950/45 lg:border-y-0 min-h-0 min-w-0 ${
                  hasMultipleImages
                    ? "h-[40vh] items-center justify-center px-4 py-4 md:h-[45vh] md:px-6 md:py-6 lg:h-auto"
                    : "items-center justify-center min-h-[280px] md:min-h-[360px] lg:min-h-0 lg:h-full px-6"
                }`}
              >
                <img
                  src={gallery[activeImageIndex]}
                  alt={`${project.title} preview ${activeImageIndex + 1}`}
                  onClick={toggleZoom}
                  className={`${
                    hasMultipleImages
                      ? "max-h-full w-full rounded-[1.5rem] object-contain select-none cursor-zoom-in"
                      : "h-auto max-h-[60vh] lg:max-h-full w-full object-contain rounded-xl cursor-zoom-in"
                  }`}
                  draggable={false}
                />

                {hasMultipleImages ? (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToPreviousImage();
                      }}
                      className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/45 text-white transition hover:bg-slate-950/70"
                      aria-label="Previous project image"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToNextImage();
                      }}
                      className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/45 text-white transition hover:bg-slate-950/70"
                      aria-label="Next project image"
                    >
                      <ChevronRight size={18} />
                    </button>

                    <div className="absolute right-4 bottom-4 rounded-full border border-white/15 bg-slate-950/55 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white/85 flex-shrink-0">
                      {activeImageIndex + 1} / {gallery.length}
                    </div>
                  </>
                ) : null}
              </div>

              {hasMultipleImages ? (
                <div
                  ref={thumbnailContainerRef}
                  className="mt-4 flex gap-3 overflow-x-auto px-4 pb-1 md:px-6 flex-shrink-0 scroll-smooth"
                  onMouseEnter={() => setIsAutoSlidePaused(true)}
                  onMouseLeave={() => setIsAutoSlidePaused(false)}
                >
                  {gallery.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border transition ${
                        index === activeImageIndex
                          ? "border-purple-300/80 ring-2 ring-purple-300/50"
                          : "border-white/10 hover:border-white/30"
                      }`}
                      aria-label={`Show project image ${index + 1}`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} thumbnail ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col justify-between overflow-y-auto p-6 md:p-8 min-w-0 min-h-0">
            <div>
              {project.category ? (
                <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-purple-200">
                  {project.category}
                </span>
              ) : null}

              <h3
                id={`project-title-${project.id}`}
                className="text-3xl font-black text-white md:text-4xl"
              >
                {project.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-200/90 md:text-lg">
                {project.description}
              </p>

              <div className="mt-8 hidden md:block">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-300/80">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {(project.liveUrl && project.liveUrl !== "#") ||
            (project.githubUrl && project.githubUrl !== "#") ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && project.liveUrl !== "#" ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/25"
                  >
                    <ExternalLink size={16} />
                    Live Project
                  </a>
                ) : null}

                {project.githubUrl && project.githubUrl !== "#" ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/35 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-950/55"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 overflow-auto touch-pan-x touch-pan-y"
            onClick={(e) => {
              e.stopPropagation();
              toggleZoom();
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleZoom();
              }}
              className="fixed top-4 right-4 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md"
            >
              <X size={24} />
            </button>
            <img
              src={gallery[activeImageIndex]}
              alt={`Zoomed ${project.title}`}
              className="m-auto block h-auto w-[200vw] max-w-none sm:w-[150vw] md:w-full md:object-contain"
              onClick={(e) => e.stopPropagation()}
              draggable={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
