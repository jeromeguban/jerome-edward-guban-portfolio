'use client'

import { motion } from 'framer-motion'
import { contact } from '@/data/portfolio'
import SectionTitle from '@/components/SectionTitle'
import Button from '@/components/Button'
import { Linkedin, Mail } from 'lucide-react'
import { sectionReveal, iconBounce } from '@/lib/animations'

// Custom Facebook Icon Component
const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

/**
 * Contact section with social links and CTA
 * Icons have gentle bounce animation on hover
 */
export default function Contact() {
  const iconMap = {
    linkedin: Linkedin,
    facebook: FacebookIcon,
  }

  return (
    <section id="contact" className="py-24 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle className="text-center">{contact.title}</SectionTitle>

        <motion.p
          variants={sectionReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          {contact.description}
        </motion.p>

        {/* Email CTA */}
        <motion.div
          variants={sectionReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Button
            variant="primary"
            size="lg"
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2"
          >
            <Mail size={20} />
            Send me an email
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={sectionReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-6"
        >
          {contact.social.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap]
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconBounce}
                initial="rest"
                whileHover="hover"
                className="p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-purple-600 hover:text-white transition-colors duration-200 border border-white/20"
              >
                <Icon size={24} />
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

