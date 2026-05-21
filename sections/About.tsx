"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

type StoryLineProps = {
  line: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  theme: "dark" | "light";
};

function StoryLine({
  line,
  index,
  total,
  scrollYProgress,
  theme,
}: StoryLineProps) {
  const segment = 1 / total;
  const center = segment * index + segment / 2;
  const spread = segment * 0.8;
  const start = Math.max(0, center - spread);
  const end = Math.min(1, center + spread);
  const dimColor =
    theme === "light" ? "rgba(15, 23, 42, 0.42)" : "rgba(255, 255, 255, 0.45)";
  const activeColor =
    theme === "light" ? "rgba(15, 23, 42, 1)" : "rgba(255, 255, 255, 1)";
  const textShadow =
    theme === "light"
      ? "0 0 24px rgba(129, 140, 248, 0.12)"
      : "0 0 24px rgba(255, 255, 255, 0.12)";

  const isFirst = index === 0;

  const opacity = useTransform(
    scrollYProgress,
    [start, center, end],
    [isFirst ? 1 : 0.3, 1, 0.3]
  );
  const y = useTransform(scrollYProgress, [start, center, end], [isFirst ? 0 : 28, 0, -28]);
  const scale = useTransform(
    scrollYProgress,
    [start, center, end],
    [isFirst ? 1.03 : 0.96, 1.03, 0.96]
  );
  const color = useTransform(
    scrollYProgress,
    [start, center, end],
    [isFirst ? activeColor : dimColor, activeColor, dimColor]
  );
  const filter = useTransform(
    scrollYProgress,
    [start, center, end],
    [isFirst ? "blur(0px)" : "blur(1.5px)", "blur(0px)", "blur(1.5px)"]
  );

  return (
    <motion.p
      style={{
        opacity,
        y,
        scale,
        color,
        filter,
        textShadow,
      }}
      className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-relaxed text-center px-4"
    >
      {line}
    </motion.p>
  );
}

/**
 * Premium About section with cinematic design
 * High-quality hero section with neon gradients and elegant animations
 */
export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll({
    target: storiesRef,
    offset: ["start 85%", "end 15%"],
  });

  const storyLines = [
    "My name is Edward , 6 years doing what I genuinely love.",
    "Building backend systems that work, scale, and make people's lives easier.",
    "From growing startups to enterprise-level operations , REST APIs, database schemas, business logic, and third-party integrations.",
    "My go-to: Laravel & PHP on the backend, paired with MySQL, Redis for caching, and Elasticsearch when search needs to be fast and smart.",
    "On the frontend, I'm comfortable in both Vue.js and React.js , I collaborate closely or jump in when needed.",
    "Built real-time features using WebRTC, Ant Media Server, and WebSockets for live auction and live selling platforms , some of the most exciting challenges I've tackled.",
    "Across 20+ delivered projects , warehouse & inventory systems, eCommerce platforms, HRIS, CMS tools, and multi-vendor POS solutions.",
    "Integrated Lalamove, J&T, Shopee Express, Google Gemini, Gmail API, and SMS services. If there's an API involved, I've probably wired it up.",
    "I enjoy mentoring junior devs and being a dependable teammate. Great backend work is invisible , when it's done right, everything just runs.",
    "I'd genuinely love to chat about how I can contribute to your team.",
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="theme-section-primary relative min-h-screen overflow-hidden px-6 py-32"
    >
      {/* Radial Glow Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Vignette Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, var(--section-vignette) 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Subtitle */}
          <p className="theme-text-soft mb-6 text-xs font-light uppercase tracking-[0.3em] md:text-sm">
            ABOUT ME
          </p>

          {/* Main Title */}
          <h2
            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase mb-8"
            style={{
              background: "linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 40px rgba(224, 195, 252, 0.3))",
            }}
          >
            MY STORY
          </h2>
        </motion.div>

        {/* Story Lines - Premium Style */}
        <div ref={storiesRef} className="space-y-16 mt-20">
          {storyLines.map((line, index) => (
            <StoryLine
              key={line}
              line={line}
              index={index}
              total={storyLines.length}
              scrollYProgress={scrollYProgress}
              theme={theme}
            />
          ))}
        </div>

        {/* Fade Effect at Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, var(--section-fade-base) 0%, transparent 100%)",
          }}
        />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-40 relative z-10"
        >
          <p className="theme-text-soft mb-6 text-xs uppercase tracking-[0.3em]">
            SCROLL
          </p>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="theme-text-soft"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
