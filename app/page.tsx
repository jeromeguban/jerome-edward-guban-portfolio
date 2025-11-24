'use client'

import Navigation from '@/sections/Navigation'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import WhyMe from '@/sections/WhyMe'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <WhyMe />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

