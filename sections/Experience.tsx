'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/portfolio'
import SectionTitle from '@/components/SectionTitle'
import { sectionReveal, fadeInUp } from '@/lib/animations'

/**
 * Experience section with vertical timeline
 * Each experience card animates in on scroll
 */
export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Experience</SectionTitle>

        <div className="space-y-12 relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/20 hidden md:block" style={{ left: '12px' }} />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-0 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-6 h-6 bg-purple-500 rounded-full border-4 border-dark-900 shadow-md hidden md:block" />

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-shadow duration-300 border border-white/10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-gray-300 font-medium">
                      {experience.company}
                    </p>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20">
                    {experience.period}
                  </span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-xs font-medium border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

