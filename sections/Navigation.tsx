'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { navigation } from '@/data/portfolio'
import { scrollToElement } from '@/lib/utils'

/**
 * Premium navigation bar with two visual states and scroll progress
 * Default: transparent with full logo
 * Scrolled: solid background with MART logo and pill buttons
 */
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollY, scrollYProgress } = useScroll()

  // Track scroll position for navbar state
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 80
      setIsScrolled(window.scrollY > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section based on scroll position (desktop only)
  useEffect(() => {
    // Only run on desktop (md breakpoint and above)
    const checkDesktop = () => window.innerWidth >= 768
    if (!checkDesktop()) return

    const sections = navigation.map(item => {
      const element = document.getElementById(item.href)
      return { href: item.href, element }
    })

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is in upper portion of viewport
      threshold: [0, 0.1, 0.5], // Multiple thresholds for better detection
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Sort entries by intersection ratio to get the most visible section
      const visibleEntries = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visibleEntries.length > 0) {
        const mostVisible = visibleEntries[0]
        const sectionId = mostVisible.target.id
        setActiveSection(sectionId)
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach(({ element }) => {
      if (element) {
        observer.observe(element)
      }
    })

    // Fallback: Check scroll position on mount and scroll
    const checkActiveSection = () => {
      if (!checkDesktop()) return // Only run on desktop
      
      const scrollPosition = window.scrollY + 200 // Offset for navbar
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // If at the very top, set hero as active
      if (window.scrollY < 100) {
        setActiveSection('hero')
        return
      }

      // If near the bottom of the page, check if Contact section is visible
      if (window.scrollY + windowHeight >= documentHeight - 100) {
        const contactElement = document.getElementById('contact')
        if (contactElement) {
          setActiveSection('contact')
          return
        }
      }

      // Check all sections from bottom to top
      for (let i = sections.length - 1; i >= 0; i--) {
        const { element, href } = sections[i]
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(href)
            break
          }
        }
      }
    }

    // Initial check
    setTimeout(checkActiveSection, 100) // Small delay to ensure DOM is ready
    window.addEventListener('scroll', checkActiveSection)
    window.addEventListener('resize', checkActiveSection)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', checkActiveSection)
      window.removeEventListener('resize', checkActiveSection)
    }
  }, [navigation])

  // Transform scroll progress to percentage
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 100])

  const handleNavClick = (href: string) => {
    scrollToElement(href)
    setMobileMenuOpen(false)
    setActiveSection(href)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left"
        style={{
          background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 50%, #A855F7 100%)',
          scaleX: scrollYProgress,
          opacity: isScrolled ? 1 : 0,
        }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Main Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent ${
          isScrolled 
            ? 'md:bg-[#0A0A14]/95 md:backdrop-blur-xl md:border-b md:border-white/5 md:shadow-2xl md:shadow-purple-500/10' 
            : ''
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={`max-w-[1600px] mx-auto px-6 md:px-8 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-6'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo - Changes based on scroll */}
            <motion.button
              onClick={() => handleNavClick('hero')}
              className="relative z-10 hidden md:block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Go to home"
            >
              {isScrolled ? (
                // Scrolled: Jerome Edward logo
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-3xl font-black uppercase tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #A855F7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))',
                  }}
                >
                  Jerome Edward.
                </motion.span>
              ) : (
                // Default: Full name
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-3xl md:text-4xl font-bold tracking-tight"
                >
                  <span 
                    className="text-white"
                    style={{
                      textShadow: '0 0 30px rgba(167, 139, 250, 0.6)',
                    }}
                  >
                    Jerome Edward
                  </span>
                  <span className="text-purple-400 ml-1">.</span>
                </motion.span>
              )}
            </motion.button>

            {/* Spacer for mobile */}
            <div className="md:hidden flex-1"></div>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-2">
              {navigation.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  {isScrolled ? (
                    // Scrolled: Pill buttons
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                        activeSection === item.href
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                          : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </button>
                  ) : (
                    // Default: Simple text links with active state
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`group relative px-4 py-2 font-medium text-base transition-all duration-300 ${
                        activeSection === item.href
                          ? 'text-white'
                          : 'text-white/90 hover:text-white'
                      }`}
                      style={{
                        textShadow: activeSection === item.href
                          ? '0 0 25px rgba(147, 197, 253, 0.6)'
                          : '0 0 20px rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {/* Gradient underline - always visible for active, on hover for others */}
                      <span 
                        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-transform duration-300 origin-center ${
                          activeSection === item.href
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                        style={{
                          background: 'linear-gradient(90deg, #60A5FA 0%, #A78BFA 100%)',
                          boxShadow: '0 0 10px rgba(147, 197, 253, 0.5)',
                        }}
                      />
                    </button>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2 z-50 relative hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Bottom border gradient for default state */}
        {!isScrolled && (
          <div 
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(167, 139, 250, 0.3) 50%, transparent 100%)',
            }}
          />
        )}
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: mobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 bottom-0 w-full md:hidden z-40 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0A0A14 0%, #1a0a2e 50%, #0A0A14 100%)',
        }}
      >
        {/* Mobile menu gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
          }}
        />
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6 px-8">
          {navigation.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: mobileMenuOpen ? 1 : 0, 
                x: mobileMenuOpen ? 0 : 50 
              }}
              transition={{ delay: index * 0.1 }}
              className={`text-3xl font-bold transition-all duration-300 ${
                activeSection === item.href
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'
                  : 'text-white/80 hover:text-white'
              }`}
              style={{
                textShadow: activeSection === item.href 
                  ? '0 0 30px rgba(139, 92, 246, 0.8)' 
                  : '0 0 20px rgba(255, 255, 255, 0.3)',
              }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 px-6 py-3 rounded-full font-medium text-white transition-all duration-300 flex items-center gap-2"
        style={{
          background: 'linear-gradient(135deg, #4C1D95 0%, #5B21B6 50%, #6D28D9 100%)',
          border: '1px solid rgba(167, 139, 250, 0.3)',
          boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3), 0 0 20px rgba(167, 139, 250, 0.2)',
        }}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ 
          opacity: isScrolled ? 1 : 0,
          y: isScrolled ? 0 : 20,
          scale: isScrolled ? 1 : 0.9,
        }}
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 6px 25px rgba(139, 92, 246, 0.5), 0 0 30px rgba(167, 139, 250, 0.3)',
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        aria-label="Back to top"
      >
        <span>Back to top</span>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className="inline-block"
        >
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </motion.button>
    </>
  )
}
