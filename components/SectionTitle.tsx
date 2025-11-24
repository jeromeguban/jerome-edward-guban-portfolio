'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

/**
 * Section title component with consistent styling and animation
 */
export default function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <motion.h2
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      className={`text-4xl md:text-5xl font-bold text-white mb-6 ${className}`}
    >
      {children}
    </motion.h2>
  )
}

