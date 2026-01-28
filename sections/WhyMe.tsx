"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

/**
 * Why Me section with feature cards
 * Showcases key strengths and achievements with premium hover effects
 */
export default function WhyMe() {
  const features = [
    {
      icon: "🏆",
      number: "01",
      title: "YEARS OF EXCELLENCE",
      titleGradient: "from-blue-400 via-purple-400 to-blue-400",
      description:
        "6 years of experience building robust, scalable applications for diverse industries from startups to enterprises.",
      badge: "20+ Projects Delivered",
      badgeColor: "text-green-400",
      badgeBorder: "border-green-500/50",
      badgeBg: "bg-green-500/10",
      bgGradient: "from-purple-900/40 via-blue-900/30 to-teal-900/40",
      numberGradient: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
      iconColor: "text-green-400",
    },
    {
      icon: "</>",
      number: "02",
      title: "BACKEND EXPERTISE",
      titleGradient: "from-purple-400 via-pink-400 to-purple-400",
      description:
        "Proficient in backend technologies - from database architecture to API development.",
      badge: "6+ Backend Technologies Mastered",
      badgeColor: "text-yellow-400",
      badgeBorder: "border-yellow-500/50",
      badgeBg: "bg-yellow-500/10",
      bgGradient: "from-purple-900/40 via-pink-900/30 to-orange-900/40",
      numberGradient: "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
      iconColor: "text-yellow-400",
    },
    {
      icon: "👥",
      number: "03",
      title: "TEAM PLAYER",
      titleGradient: "from-green-400 via-blue-400 to-green-400",
      description:
        "Proven track record of working in teams, assisting junior developers, and driving projects to success.",
      badge: "10+ Developers Assisted",
      badgeColor: "text-green-400",
      badgeBorder: "border-green-500/50",
      badgeBg: "bg-green-500/10",
      bgGradient: "from-green-900/40 via-blue-900/30 to-cyan-900/40",
      numberGradient: "linear-gradient(135deg, #10B981 0%, #3B82F6 100%)",
      iconColor: "text-green-400",
    },
    {
      icon: "⚡",
      number: "04",
      title: "MODERN TECH STACK",
      titleGradient: "from-yellow-400 via-orange-400 to-yellow-400",
      description:
        "Always up-to-date with the latest technologies - Vue.js, React.js, Laravel, PHP, Node.js, AdonisJS and MySQL.",
      badge: "5+ Frameworks and Technologies Mastered",
      badgeColor: "text-yellow-400",
      badgeBorder: "border-yellow-500/50",
      badgeBg: "bg-yellow-500/10",
      bgGradient: "from-yellow-900/40 via-orange-900/30 to-red-900/40",
      numberGradient: "linear-gradient(135deg, #F59E0B 0%, #F97316 100%)",
      iconColor: "text-yellow-400",
    },
  ];

  return (
    <section
      id="why-me"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-6"
    >
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
              className="relative group"
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <div
                className={`relative bg-gradient-to-br ${feature.bgGradient} backdrop-blur-lg rounded-3xl p-8 border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-white/20`}
                style={{
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
                }}
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: `radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, transparent 70%)`,
                    filter: "blur(20px)",
                  }}
                />

                {/* Number badge - top right */}
                <div
                  className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: feature.numberGradient,
                    boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
                  }}
                >
                  {feature.number}
                </div>

                {/* Decorative dots outside card */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-full opacity-60 blur-sm group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon - top left */}
                <div
                  className={`w-16 h-16 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl mb-6 border border-white/10 group-hover:border-white/20 transition-all duration-500 group-hover:scale-110 ${feature.iconColor}`}
                >
                  {feature.icon}
                </div>

                {/* Title with gradient */}
                <h3
                  className={`text-2xl md:text-3xl font-black mb-4 tracking-wide bg-gradient-to-r ${feature.titleGradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-500 inline-block`}
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))",
                  }}
                >
                  {feature.title}
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full ml-2 animate-pulse" />
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-500">
                  {feature.description}
                </p>

                {/* Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${feature.badgeBorder} ${feature.badgeBg} ${feature.badgeColor} text-sm font-medium transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg`}
                  style={{
                    boxShadow: "0 0 15px rgba(139, 92, 246, 0.2)",
                  }}
                >
                  <span
                    className={`w-2 h-2 ${feature.badgeColor.replace(
                      "text-",
                      "bg-"
                    )} rounded-full animate-pulse`}
                  />
                  {feature.badge}
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
                  }}
                  animate={{
                    x: ["-100%", "200%"],
                    y: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
