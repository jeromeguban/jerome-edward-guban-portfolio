'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

/**
 * Why Me section with feature cards
 * Showcases key strengths and achievements
 */
export default function WhyMe() {
  const features = [
    {
      icon: '🏆',
      title: '6+ YEARS OF EXCELLENCE',
      titleColor: 'text-blue-400',
      description: '6 years of experience building robust, scalable applications for diverse industries from startups to enterprises.',
      badge: '20+ Projects Delivered',
      badgeColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      bgGradient: 'from-blue-900/20 to-purple-900/20',
    },
    {
      icon: '</>', 
      title: 'BACKEND EXPERTISE',
      titleColor: 'text-pink-400',
      description: 'Proficient in backend technologies - from database architecture to API development.',
      badge: '6+ Backend Technologies Mastered',
      badgeColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      bgGradient: 'from-pink-900/20 to-purple-900/20',
    },
    {
      icon: '👥',
      title: 'TEAM PLAYER',
      titleColor: 'text-green-400',
      description: 'Proven track record of working in teams, assisting junior developers, and driving projects to success.',
      badge: '10+ Developers Assisted',
      badgeColor: 'bg-green-500/20 text-green-400 border-green-500/30',
      bgGradient: 'from-green-900/20 to-blue-900/20',
    },
    {
      icon: '⚡',
      title: 'MODERN TECH STACK AND FRAMEWORKS',
      titleColor: 'text-yellow-400',
      description: 'Always up-to-date with the latest technologies - Vue.js, React.js, Laravel, PHP, Node.js, AdonisJS and MySQL.',
      badge: '5+ Frameworks and Technologies Mastered',
      badgeColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      bgGradient: 'from-yellow-900/20 to-orange-900/20',
    },
  ]

  return (
    <section id="why-me" className="py-24 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
        >
          Why Choose Me
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className={`relative bg-gradient-to-br ${feature.bgGradient} backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-xl overflow-hidden group`}
            >
              {/* Decorative dots */}
              <div className="absolute top-6 right-6 w-2 h-2 bg-white/20 rounded-full" />
              <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/20 rounded-full" />

              {/* Icon */}
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl mb-6 border border-white/20">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className={`text-2xl md:text-3xl font-black mb-4 ${feature.titleColor} tracking-wide`}>
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${feature.badgeColor} text-sm font-medium`}>
                <span className="w-2 h-2 bg-current rounded-full animate-pulse" />
                {feature.badge}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

