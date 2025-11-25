'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experiences } from '@/data/portfolio'
import SectionTitle from '@/components/SectionTitle'
import { sectionReveal, fadeInUp } from '@/lib/animations'
import { Calendar, MapPin, ChevronDown, Key, Code, Trophy, TrendingUp } from 'lucide-react'

/**
 * Experience section with premium timeline design
 * Expandable cards with achievements and technologies
 */
export default function Experience() {
  const [expandedCards, setExpandedCards] = useState<number[]>([])

  const toggleCard = (id: number) => {
    setExpandedCards(prev =>
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    )
  }

  const experienceIcons = [
    { icon: Trophy, color: 'text-green-400', glow: 'rgba(34, 197, 94, 0.5)' },
    { icon: TrendingUp, color: 'text-purple-400', glow: 'rgba(168, 85, 247, 0.5)' },
  ]

  const getAchievements = (description: string, experienceId: number): string[] => {
    // Custom achievements based on experience
    if (experienceId === 1) {
      return [
        'Successfully designed, deployed, and maintained :',

        'HRIS (Human Resource Information System)', 

        'Streamlined employee data management, payroll processing, and leave tracking.',

        'Virtual Calling Card System :',

        'Enabled seamless communication and networking for employees and clients.',

        'Inventory Management System :',

        'Optimized stock tracking, procurement, and reporting for efficient warehouse management.',
      ]
    } else if (experienceId === 2) {
      return [
        'Software Development :',

        'Developed high-quality, testable, and efficient code by following best practices, including SOLID principles, thorough code reviews, and continuous integration/deployment strategies.',

        'Back-End Integration :',

        'Integrated multiple back-end services and databases to ensure smooth data flow and system communication, enhancing overall application performance and functionality.',

        'Emerging Technologies :',

        'Kept up with industry trends and emerging technologies, applying innovative solutions to improve system scalability, performance, and maintainability.',

        'Compliance & Strategy Development :',

        'Designed modules and strategies to maintain compliance with evolving company standards, effectively addressing regulatory and industry changes.',

        'E-commerce & Warehouse Management Systems :',

        'Configured, upgraded, and maintained e-commerce platforms with online bidding functionalities, warehouse management systems, user account management, and reporting tools for production and accounting teams.',

        'CRM Integrations :',

        'Integrated CRM systems to optimize customer interactions, enhance sales and marketing workflows, and improve overall customer satisfaction.',

        'User Training & Support :', 

        'Led training sessions for end users on new system applications, facilitating smooth transitions to updated software and ensuring effective user adoption.',
      ]
    }
    // Fallback: Extract from description
    const sentences = description.split(/[.!?]+/).filter(s => s.trim().length > 20)
    return sentences.slice(0, 5).map(s => s.trim())
  }

  return (
    <section
      id="experience"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #000000 0%, #0B0B12 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 35%, rgba(0, 0, 0, 0.65) 100%)',
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle>Experience</SectionTitle>

        <div className="relative mt-16">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block">
            <div 
              className="h-full w-full"
              style={{
                background: 'linear-gradient(180deg, rgba(34, 197, 94, 0.6) 0%, rgba(168, 85, 247, 0.6) 100%)',
              }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const IconComponent = experienceIcons[index]?.icon || Trophy
              const iconColor = experienceIcons[index]?.color || 'text-green-400'
              const iconGlow = experienceIcons[index]?.glow || 'rgba(34, 197, 94, 0.5)'
              const borderColor = index === 0 ? 'rgba(34, 197, 94, 0.5)' : 'rgba(168, 85, 247, 0.5)'
              const companyColor = index === 0 ? 'text-green-400' : 'text-purple-400'
              const isExpanded = expandedCards.includes(experience.id)
              const achievements = getAchievements(experience.description, experience.id)

              return (
                <motion.div
                  key={experience.id}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-0 md:pl-24"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-2 hidden md:flex items-center justify-center w-16 h-16 z-10">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500"
                      style={{
                        background: `radial-gradient(circle, ${iconGlow} 0%, transparent 70%)`,
                        borderColor: borderColor,
                        boxShadow: `0 0 20px ${iconGlow}`,
                      }}
                    >
                      <IconComponent className={`w-6 h-6 ${iconColor}`} />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border transition-all duration-500 group cursor-pointer"
                    style={{
                      borderColor: borderColor,
                      boxShadow: `0 10px 40px ${iconGlow.replace('0.5', '0.2')}`,
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: `0 15px 50px ${iconGlow.replace('0.5', '0.3')}`,
                    }}
                    onClick={() => toggleCard(experience.id)}
                  >
                    {/* Expand/Collapse Icon */}
                    <motion.button
                      className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} />
                    </motion.button>

                    {/* Header */}
                    <div className="pr-12">
                      <h3 className="text-3xl md:text-4xl font-black text-white uppercase mb-2 tracking-tight">
                        {experience.title}
                      </h3>
                      <p className={`text-xl font-semibold mb-4 ${companyColor}`}>
                        {experience.company}
                      </p>

                      {/* Date, Location, Employment Type */}
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <div className="flex items-center gap-2 text-white/80">
                          <Calendar size={18} />
                          <span className="text-sm">{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                          <MapPin size={18} />
                          <span className="text-sm">Philippines</span>
                        </div>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-medium">
                          Full-time
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {index === 0 
                          ? 'Developed and implemented web-based applications to enhance business processes, improving efficiency and workflow automation.'
                          : 'Implemented DevOps principles to optimize development workflows, fostering seamless collaboration between development and operations teams for greater efficiency.'
                        }
                      </p>
                    </div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          {/* Key Achievements */}
                          <div className="mb-6 pt-6 border-t border-white/10">
                            <div className="flex items-center gap-2 mb-4">
                              <Key size={20} className="text-white" />
                              <h4 className="text-lg font-bold text-white">Key Achievements</h4>
                            </div>
                            <ul className="space-y-3">
                              {achievements.map((achievement, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-start gap-3 text-gray-300"
                                >
                                  <span className={`text-lg ${iconColor} mt-1`}>⚡</span>
                                  <span className="leading-relaxed">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies Used */}
                          <div className="pt-6 border-t border-white/10">
                            <div className="flex items-center gap-2 mb-4">
                              <Code size={20} className="text-white" />
                              <h4 className="text-lg font-bold text-white">Technologies Used</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech) => (
                                <motion.span
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.2 }}
                                  className="px-4 py-2 bg-purple-900/30 text-white rounded-full text-sm font-medium border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
