'use client'

import { motion } from 'framer-motion'

/**
 * Background floating shapes for the hero section
 * Creates subtle movement and visual interest
 */
export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large circle - top right */}
      <motion.div
        className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-full opacity-50 blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Medium circle - left middle */}
      <motion.div
        className="absolute top-1/3 -left-10 w-48 h-48 bg-gradient-to-br from-pink-600/30 to-purple-600/30 rounded-full opacity-40 blur-2xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Small circle - bottom right */}
      <motion.div
        className="absolute bottom-20 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-full opacity-30 blur-xl"
        animate={{
          y: [0, 25, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

