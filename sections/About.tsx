'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * About section with scroll-based lyric-style animation
 * Text fades and highlights as you scroll like music lyrics
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
    <section ref={containerRef} id="about" className="min-h-screen py-32 px-6 bg-black relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">ABOUT ME</p>
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
            MY STORY
          </h2>
        </motion.div>

        {/* Story Lines - Lyrics Style */}
        <div className="space-y-12">
          {storyLines.map((line, index) => {
            const start = index / storyLines.length
            const end = (index + 1) / storyLines.length

            const opacity = useTransform(
              scrollYProgress,
              [start, end, end + 0.2],
              [1, 1, 0.3]
            )

            const y = useTransform(
              scrollYProgress,
              [start, end, end + 0.2],
              [0, 0, -30]
            )

            return (
              <motion.p
                key={index}
                style={{ 
                  opacity, 
                  y,
                  textShadow: '0 0 20px rgba(147, 197, 253, 0.5), 0 0 40px rgba(147, 197, 253, 0.3)'
                }}
                className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-center font-semibold bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 bg-clip-text text-transparent"
              >
                {line}
              </motion.p>
            )
          })}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">SCROLL</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
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

