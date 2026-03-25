"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { scrollToElement } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";

/**
 * Featured Projects section with dual-column auto-scrolling carousel
 * Left column scrolls down, right column scrolls up — creating a mesmerizing visual effect
 * Left side has intro text with stats and CTA
 */
export default function FeaturedProjects() {
  // Split projects into two columns
  const leftColumnProjects = projects.filter((_, i) => i % 2 === 0);
  const rightColumnProjects = projects.filter((_, i) => i % 2 !== 0);

  return (
    <section
      id="featured-projects"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 md:py-28 lg:py-32"
    >
      {/* Subtle background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1600px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr,1.5fr] gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full"
          >
            {/* Label */}
            <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-purple-400 mb-4">
              Portfolio
            </span>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6">
              <span className="text-white block">Creative</span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent block">
                Projects
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              Showcasing innovative solutions across web development, mobile
              apps, and cutting-edge technologies.
            </p>

            {/* Stats */}
            {/* <div className="flex gap-12 mb-10">
              <div>
                <span className="text-4xl font-bold text-white">
                  {projects.length}+
                </span>
                <p className="text-sm text-gray-500 mt-1">Projects</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-white">100%</span>
                <p className="text-sm text-gray-500 mt-1">Quality</p>
              </div>
            </div> */}

            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToElement("contact")}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 flex items-center gap-2"
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
          <div className="w-full h-[600px] md:h-[700px] lg:h-[750px] overflow-hidden relative">
            {/* Top/bottom fade masks */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#1a0e2e] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a0e2e] to-transparent z-10 pointer-events-none" />

            <div className="grid grid-cols-2 gap-4 md:gap-6 h-full">
              {/* Left Column - Scrolls DOWN */}
              <div className="overflow-hidden relative group">
                <div className="animate-scroll-down group-hover:[animation-play-state:paused]">
                  {[...leftColumnProjects, ...leftColumnProjects].map(
                    (project, index) => (
                      <ProjectCard key={`left-${index}`} project={project} />
                    )
                  )}
                </div>
              </div>

              {/* Right Column - Scrolls UP */}
              <div className="overflow-hidden relative group">
                <div className="animate-scroll-up group-hover:[animation-play-state:paused]">
                  {[...rightColumnProjects, ...rightColumnProjects].map(
                    (project, index) => (
                      <ProjectCard key={`right-${index}`} project={project} />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Individual project card for the carousel
 */
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="mb-4 md:mb-6 group/card">
      <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/15 transition-all duration-300 hover:bg-white/[0.06]">
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
              className="absolute top-3 right-3 w-8 h-8 bg-white/15 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors border border-white/20"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
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
      </div>
    </div>
  );
}
