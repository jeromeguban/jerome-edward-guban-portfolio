'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

/**
 * Footer section with minimal text and soft fade animation
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 bg-transparent border-t border-white/10">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="text-gray-300">
          © {currentYear} Jerome Edward Guban. All rights reserved.
        </p>
      </motion.div>
    </footer>
  )
}

