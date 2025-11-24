'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'
import SectionTitle from '@/components/SectionTitle'
import { ExternalLink, Github } from 'lucide-react'
import { fadeInUp } from '@/lib/animations'

/**
 * Projects section with grid layout and hover effects
 * Cards scale up and show enhanced shadows on hover
 * Project info slides up from bottom
 */
export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <SectionTitle>Featured Projects</SectionTitle>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.15 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-300 border border-white/10"
              >
                {/* Project Image */}
                <div className="relative aspect-video bg-gradient-to-br from-purple-900/30 to-blue-900/30 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Hover overlay with links */}
                  {(project.liveUrl && project.liveUrl !== '#') || (project.githubUrl && project.githubUrl !== '#') ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gray-900/80 flex items-center justify-center gap-4"
                    >
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-gray-900 hover:bg-white transition-colors"
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                    </motion.div>
                  ) : null}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

