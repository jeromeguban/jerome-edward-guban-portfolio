'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * Premium About section with cinematic design
 * High-quality hero section with neon gradients and elegant animations
 */
export default function About() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const storyLines = [
    "Hey there, I'm Jerome, but you can call me Edward. Started from humble beginnings to architecting scalable backend systems.",
    "6 years in the industry, and every day is still a chance to learn something new.",
    "I build systems that matter - APIs, databases, integrations, and the infrastructure behind them.",
    "Each project a new challenge, every line of code with purpose.",
    "Not just writing code, but solving real problems.",
    "From concept to deployment, making the web a better place, one commit at a time.",
    "This is my story, still being written.",
    "Let's create the next chapter together.",
  ]

  return (
    <section 
      ref={containerRef} 
      id="about" 
      className="min-h-screen py-32 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #000000 0%, #0B0B12 100%)',
      }}
    >
      {/* Radial Glow Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        }}
      />
      
      {/* Vignette Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.6) 100%)',
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
              letterSpacing: '0.3em',
            }}
          >
            ABOUT ME
          </p>
          
          {/* Main Title */}
          <h2 
            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase mb-8"
            style={{
              background: 'linear-gradient(135deg, #E0C3FC 0%, #8EC5FC 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(224, 195, 252, 0.3))',
            }}
          >
            MY STORY
          </h2>
        </motion.div>

        {/* Story Lines - Premium Style */}
        <div className="space-y-16 mt-20">
          {storyLines.map((line, index) => {
            const start = index / storyLines.length
            const end = (index + 1) / storyLines.length

            const opacity = useTransform(
              scrollYProgress,
              [start, end, end + 0.15],
              [0.4, 1, 0.3]
            )

            const y = useTransform(
              scrollYProgress,
              [start, end, end + 0.15],
              [20, 0, -20]
            )

            const scale = useTransform(
              scrollYProgress,
              [start, end, end + 0.15],
              [0.98, 1, 0.98]
            )

            return (
              <motion.p
                key={index}
                style={{ 
                  opacity, 
                  y,
                  scale,
                  background: 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 50%, #93C5FD 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 30px rgba(167, 139, 250, 0.4))',
                }}
                className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-relaxed text-center px-4"
              >
                {line}
              </motion.p>
            )
          })}
        </div>

        {/* Fade Effect at Bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #0B0B12 0%, transparent 100%)',
          }}
        />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-40 relative z-10"
        >
          <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-6">SCROLL</p>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

