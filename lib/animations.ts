/**
 * Animation variants and utilities for Framer Motion
 * These provide consistent animation patterns across the portfolio
 */

import { Variants } from 'framer-motion'

// Easing functions matching the reference site
export const easings = {
  smooth: [0.43, 0.13, 0.23, 0.96],
  overshoot: [0.34, 1.56, 0.64, 1],
  easeOutCubic: [0.33, 1, 0.68, 1],
}

// Fade in with upward movement - used for hero text
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
}

// Scale in animation - used for images and cards
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easings.overshoot,
    },
  },
}

// Section reveal - used for all main sections
export const sectionReveal: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.overshoot,
    },
  },
}

// Stagger container - used for lists and grids
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Card hover animation
export const cardHover = {
  rest: {
    scale: 1,
    boxShadow: '0 4px 6px -1px rgba(124, 58, 237, 0.3), 0 2px 4px -1px rgba(124, 58, 237, 0.2)',
  },
  hover: {
    scale: 1.03,
    boxShadow: '0 20px 25px -5px rgba(124, 58, 237, 0.4), 0 10px 10px -5px rgba(124, 58, 237, 0.3)',
    transition: {
      duration: 0.15,
      ease: easings.smooth,
    },
  },
}

// Button hover animation
export const buttonHover = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.15,
      ease: easings.smooth,
    },
  },
  tap: {
    scale: 0.95,
  },
}

// Icon bounce animation
export const iconBounce = {
  rest: {
    y: 0,
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: easings.overshoot,
    },
  },
}

// Slide from bottom - used for content reveals
export const slideFromBottom: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.smooth,
    },
  },
}

// Navbar animation
export const navbarAnimation = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    },
  },
  hidden: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    },
  },
}

