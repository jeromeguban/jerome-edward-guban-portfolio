'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { navigation } from '@/data/portfolio'
import { scrollToElement } from '@/lib/utils'
import { navbarAnimation } from '@/lib/animations'

/**
 * Sticky navigation bar with scroll-based show/hide behavior
 * Fades out when scrolling down, reappears when scrolling up
 */
export default function Navigation() {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const [lastScrollY, setLastScrollY] = useState(0)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const difference = latest - lastScrollY
    
    if (latest > 100) {
      if (difference > 0) {
        setHidden(true) // Scrolling down
      } else {
        setHidden(false) // Scrolling up
      }
    } else {
      setHidden(false) // At the top
    }
    
    setLastScrollY(latest)
  })

  const handleNavClick = (href: string) => {
    scrollToElement(href)
  }

  return (
    <motion.nav
      variants={navbarAnimation}
      animate={hidden ? 'hidden' : 'visible'}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-[1600px] mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo - MART style */}
          <motion.button
            onClick={() => scrollToElement('hero')}
            className="text-4xl font-black tracking-tight text-white hover:text-purple-300 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
              Jerome Edward
            </span>
            <span className="text-purple-400 ml-1">.</span>
          </motion.button>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-12">
            {navigation.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="group relative text-white/90 hover:text-white font-medium text-base transition-colors duration-200 pb-1"
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Bottom border on hover */}
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

