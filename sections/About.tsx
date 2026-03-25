"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type StoryLineProps = {
  line: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
};

function StoryLine({ line, index, total, scrollYProgress }: StoryLineProps) {
  const segment = 1 / total;
  const center = segment * index + segment / 2;
  const spread = segment * 0.8;
  const start = Math.max(0, center - spread);
  const end = Math.min(1, center + spread);

  const opacity = useTransform(
    scrollYProgress,
    [start, center, end],
    [0.3, 1, 0.3]
  );
  const y = useTransform(scrollYProgress, [start, center, end], [28, 0, -28]);
  const scale = useTransform(
    scrollYProgress,
    [start, center, end],
    [0.96, 1.03, 0.96]
  );
  const color = useTransform(
    scrollYProgress,
    [start, center, end],
    [
      "rgba(255, 255, 255, 0.45)",
      "rgba(255, 255, 255, 1)",
      "rgba(255, 255, 255, 0.45)",
    ]
  );
  const filter = useTransform(
    scrollYProgress,
    [start, center, end],
    ["blur(1.5px)", "blur(0px)", "blur(1.5px)"]
  );

  return (
    <motion.p
      style={{
        opacity,
        y,
        scale,
        color,
        filter,
        textShadow: "0 0 24px rgba(255, 255, 255, 0.12)",
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"],
  });

  const storyLines = [
    "Hey there, I'm Jerome, but you can call me Edward. Started from humble beginnings to architecting scalable backend systems.",
    "6 years in the industry, and every day is still a chance to learn something new.",
    "I build systems that matter - APIs, databases, integrations, and the business logic behind them.",
    "Each project a new challenge, every line of code with purpose.",
    "Not just writing code, but solving real problems.",
    "From concept to deployment, making the web a better place, one commit at a time.",
    "This is my story, still being written.",
    "Let's create the next chapter together.",
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="min-h-screen py-32 px-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #000000 0%, #0B0B12 100%)",
      }}
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
            "radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.6) 100%)",
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
          <p
            className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.3em] mb-6 font-light"
            style={{
              letterSpacing: "0.3em",
            }}
          >
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
        <div className="space-y-16 mt-20">
          {storyLines.map((line, index) => (
            <StoryLine
              key={line}
              line={line}
              index={index}
              total={storyLines.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Fade Effect at Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #0B0B12 0%, transparent 100%)",
          }}
        />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-40 relative z-10"
        >
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-6">
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
              className="text-gray-500"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
