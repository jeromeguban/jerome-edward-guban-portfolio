'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { buttonHover } from '@/lib/animations'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
  onClick?: () => void
}

/**
 * Animated button component with hover effects
 * Matches the pill-shaped design from reference site
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  onClick,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-150'
  
  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-md shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/50',
    secondary: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm',
    outline: 'border-2 border-purple-500 text-white hover:bg-purple-600 hover:border-purple-600',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
      {children}
    </Component>
  )
}

