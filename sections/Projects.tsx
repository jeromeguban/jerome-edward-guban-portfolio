"use client";

import { useEffect, useRef, useState, type TouchEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import SectionTitle from "@/components/SectionTitle";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  X,
} from "lucide-react";
import { fadeInUp } from "@/lib/animations";

type Project = (typeof projects)[number];

/**
 * Projects section with grid layout and modal detail view
 */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
        id="projects"
        className="relative overflow-hidden bg-black px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          {/* <SectionTitle>Projects</SectionTitle> */}

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="group h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.15 }}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  className="flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl hover:shadow-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-400/70 focus:ring-offset-2 focus:ring-offset-black"
                >
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-purple-900/30 to-blue-900/30">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />

                    {(project.liveUrl && project.liveUrl !== "#") ||
                    (project.githubUrl && project.githubUrl !== "#") ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center gap-4 bg-gray-900/80 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
                      >
                        {project.liveUrl && project.liveUrl !== "#" ? (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(event) => event.stopPropagation()}
                            className="touch-manipulation rounded-full bg-white p-3 text-gray-900 transition-colors hover:bg-gray-100"
                          >
                            <ExternalLink size={20} />
                          </motion.a>
                        ) : null}

                        {project.githubUrl && project.githubUrl !== "#" ? (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(event) => event.stopPropagation()}
                            className="touch-manipulation rounded-full bg-white/90 p-3 text-gray-900 backdrop-blur-sm transition-colors hover:bg-white"
                          >
                            <Github size={20} />
                          </motion.a>
                        ) : null}
                      </motion.div>
                    ) : null}
                  </div>

                  <div className="flex flex-grow flex-col p-6">
                    <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-purple-400">
                      {project.title}
                    </h3>
                    <p className="mb-4 leading-relaxed text-gray-300">
                      {project.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
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

    if (!thumbnailContainerRef.current) {
      return;
    }

    const container = thumbnailContainerRef.current;
    const activeThumbnail = container.children[activeImageIndex] as HTMLElement;

    if (!activeThumbnail) {
      return;
    }

    const containerWidth = container.offsetWidth;
    const thumbnailOffset = activeThumbnail.offsetLeft;
    const thumbnailWidth = activeThumbnail.offsetWidth;

    container.scrollTo({
      left: thumbnailOffset - containerWidth / 2 + thumbnailWidth / 2,
      behavior: "smooth",
    });
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
          <div className="min-h-0 min-w-0 border-b border-white/10 bg-slate-950/30 lg:border-r lg:border-b-0">
            <div className="flex h-full min-h-0 flex-col px-0 py-5 md:px-0 md:py-8 lg:py-6">
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
                className={`relative flex min-h-0 min-w-0 flex-1 overflow-hidden border-y border-white/10 bg-slate-950/45 lg:border-y-0 ${
                  hasMultipleImages
                    ? "h-[40vh] items-center justify-center px-4 py-4 md:h-[45vh] md:px-6 md:py-6 lg:h-auto"
                    : "min-h-[280px] items-center justify-center px-6 md:min-h-[360px] lg:h-full lg:min-h-0"
                }`}
              >
                <img
                  src={gallery[activeImageIndex]}
                  alt={`${project.title} preview ${activeImageIndex + 1}`}
                  onClick={toggleZoom}
                  className={`cursor-zoom-in ${
                    hasMultipleImages
                      ? "max-h-full w-full rounded-[1.5rem] object-contain select-none"
                      : "h-auto max-h-[60vh] w-full rounded-xl object-contain lg:max-h-full"
                  }`}
                  draggable={false}
                />

                {hasMultipleImages ? (
                  <>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        goToPreviousImage();
                      }}
                      className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/45 text-white transition hover:bg-slate-950/70"
                      aria-label="Previous project image"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        goToNextImage();
                      }}
                      className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/45 text-white transition hover:bg-slate-950/70"
                      aria-label="Next project image"
                    >
                      <ChevronRight size={18} />
                    </button>

                    <div className="absolute right-4 bottom-4 flex-shrink-0 rounded-full border border-white/15 bg-slate-950/55 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-white/85">
                      {activeImageIndex + 1} / {gallery.length}
                    </div>
                  </>
                ) : null}
              </div>

              {hasMultipleImages ? (
                <div
                  ref={thumbnailContainerRef}
                  className="mt-4 flex flex-shrink-0 gap-3 overflow-x-auto px-4 pb-1 scroll-smooth md:px-6"
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

          <div className="flex min-h-0 min-w-0 flex-col justify-between overflow-y-auto p-6 md:p-8">
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
        {isZoomed ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex touch-pan-x touch-pan-y items-center justify-center overflow-auto bg-black/95"
            onClick={(event) => {
              event.stopPropagation();
              toggleZoom();
            }}
          >
            <button
              onClick={(event) => {
                event.stopPropagation();
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
              onClick={(event) => event.stopPropagation()}
              draggable={false}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
