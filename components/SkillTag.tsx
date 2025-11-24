'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface SkillTagProps {
  skill: string
  delay?: number
}

/**
 * Animated skill tag component
 * Used in the About section for technology skills
 */
export default function SkillTag({ skill, delay = 0 }: SkillTagProps) {
  return (
    <motion.span
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay }}
      className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/20 border border-white/20 transition-colors duration-150"
    >
      {skill}
    </motion.span>
  )
}

