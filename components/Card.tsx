'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cardHover } from '@/lib/animations'

interface CardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

/**
 * Reusable card component with rounded corners and subtle shadows
 * Includes optional hover animation matching reference site
 */
export default function Card({ children, className, hoverEffect = false }: CardProps) {
  const baseStyles = 'bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10'

  if (hoverEffect) {
    return (
      <motion.div
        className={cn(baseStyles, className)}
        variants={cardHover}
        initial="rest"
        whileHover="hover"
      >
        {children}
      </motion.div>
    )
  }

  return <div className={cn(baseStyles, className)}>{children}</div>
}

