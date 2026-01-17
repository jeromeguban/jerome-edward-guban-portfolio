"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import Button from "@/components/Button";
import FloatingShapes from "@/components/FloatingShapes";
import { fadeInUp, scaleIn } from "@/lib/animations";
import { scrollToElement } from "@/lib/utils";

/**
 * Hero section with animated text, profile image, and floating background shapes
 * Features staggered animations for headline, subtitle, and CTA buttons
 */
export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = personalInfo.title;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100); // Adjust speed here (lower = faster)

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6"
    >
      <FloatingShapes />

      {/* Animated Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.04]">
        <motion.div
          className="whitespace-nowrap text-[25rem] font-bold text-white"
          initial={{ x: "-50%" }}
          animate={{
            x: ["0%", "100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          SOFTWARE DEVELOPER • MID BACKEND DEVELOPER • SOFTWARE DEVELOPER • MID
          BACKEND DEVELOPER
        </motion.div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.03] top-64">
        <motion.div
          className="whitespace-nowrap text-[20rem] font-bold text-white"
          initial={{ x: "0%" }}
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          WEB DEVELOPER • UI/UX DESIGNER • SOFTWARE ENGINEER • WEB DEVELOPER •
          UI/UX DESIGNER • SOFTWARE ENGINEER •
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content Card */}
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="relative bg-white/5 backdrop-blur-lg rounded-[2.5rem] p-10 md:p-12 border-2 border-white/20 shadow-2xl"
          >
            {/* Open To Work Badge */}
            <div className="mb-8 flex justify-center md:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Open To Work
              </span>
            </div>

            {/* Name with Gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-center md:text-left">
              <span className="bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Job Title */}
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-200 text-center md:text-left min-h-[3rem] md:min-h-[3.5rem]">
              {typedText}
              {!isTypingComplete && (
                <span className="animate-pulse ml-1">|</span>
              )}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center md:text-left">
              <span className="text-2xl font-bold text-white">6+ years</span>{" "}
              building robust backend architectures. Expert in APIs, databases,
              and scalable server-side systems. Focused on clean code,
              reliability, and performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start">
              <motion.button
                onClick={() => scrollToElement("projects")}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <span>→</span>
              </motion.button>

              <motion.a
                href="/files/Jerome_Edward_Guban_CV.pdf"
                download="Jerome_Edward_Guban_CV.pdf"
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download Resume
              </motion.a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-6 border-t border-white/10 justify-center md:justify-start">
              <motion.a
                href="https://www.linkedin.com/in/jerome-edward/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
                whileHover={{ y: -3 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://www.facebook.com/imsupeeeeerdwaaaaard"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
                whileHover={{ y: -3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  width="24"
                  height="24"
                >
                  <rect
                    fill="#fff"
                    x="4.83"
                    y="4.83"
                    width="118.35"
                    height="118.35"
                    rx="6.53"
                    ry="6.53"
                  />
                  <path
                    fill="#5F4C7D"
                    d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="mailto:jeromeguban02@gmail.com"
                className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
                whileHover={{ y: -3 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating Technology Logos */}

              <motion.div
                className="absolute top-20 -right-12"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="relative">
                  {/* Large circle background */}
                  <div className="absolute inset-0 w-40 h-40 -translate-x-12 -translate-y-12 rounded-full border border-white/8 opacity-25"></div>
                  {/* Logo container */}
                  <div className="relative w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl p-2.5 border border-white/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      className="w-full h-full"
                    >
                      <path
                        fill="#83CD29"
                        d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 left-8"
                animate={{
                  y: [0, -18, 0],
                  rotate: [0, 8, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="relative">
                  {/* Medium circle background */}
                  <div className="absolute inset-0 w-28 h-28 -translate-x-6 -translate-y-6 rounded-full border border-white/12 opacity-35"></div>
                  {/* Logo container */}
                  <div className="relative w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      className="w-full h-full"
                    >
                      <defs>
                        <radialGradient
                          id="a"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientTransform="matrix(84.04136 0 0 84.04136 38.426 42.169)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#AEB2D5" />
                          <stop offset=".3" stopColor="#AEB2D5" />
                          <stop offset=".75" stopColor="#484C89" />
                          <stop offset="1" stopColor="#484C89" />
                        </radialGradient>
                      </defs>
                      <path
                        fill="url(#a)"
                        d="M0 64c0 18.593 28.654 33.667 64 33.667 35.346 0 64-15.074 64-33.667 0-18.593-28.655-33.667-64-33.667C28.654 30.333 0 45.407 0 64Z"
                      />
                      <path
                        fill="#777bb3"
                        d="M64 95.167c33.965 0 61.5-13.955 61.5-31.167 0-17.214-27.535-31.167-61.5-31.167S2.5 46.786 2.5 64c0 17.212 27.535 31.167 61.5 31.167Z"
                      />
                      <path
                        fill="#fff"
                        d="M34.19 55.826h3.891c3.107 0 4.186.682 4.553 1.089.607.674.723 2.097.331 4.112-.439 2.257-1.253 3.858-2.42 4.756-1.194.92-3.138 1.386-5.773 1.386h-2.786l2.205-11.342zm6.674-8.1H26.731a1.39 1.39 0 0 0-1.364 1.123L18.81 82.588a1.39 1.39 0 0 0 1.363 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.151c2.912 0 5.364-.318 7.287-.944 1.977-.642 3.796-1.731 5.406-3.237a16.522 16.522 0 0 0 3.259-4.087c.831-1.487 1.429-3.147 1.775-4.931.86-4.423.161-7.964-2.076-10.524-2.216-2.537-5.698-3.823-10.349-3.823zM69.459 74.577a.694.694 0 0 1-.682-.827l2.9-14.928c.277-1.42.209-2.438-.19-2.87-.245-.263-.979-.704-3.15-.704h-5.256l-3.646 18.768a.695.695 0 0 1-.683.56h-7.29a.695.695 0 0 1-.683-.826l6.558-33.739a.695.695 0 0 1 .682-.561h7.29a.695.695 0 0 1 .683.826L64.41 48.42h5.653c4.307 0 7.227.758 8.928 2.321 1.733 1.593 2.275 4.14 1.608 7.573l-3.051 15.702a.695.695 0 0 1-.682.56h-7.407zM91.555 55.826h3.891c3.107 0 4.186.682 4.552 1.089.61.674.724 2.097.333 4.112-.44 2.257-1.254 3.858-2.421 4.756-1.195.92-3.139 1.386-5.773 1.386h-2.786l2.204-11.342zm6.674-8.1H84.096a1.39 1.39 0 0 0-1.363 1.123l-6.558 33.739a1.39 1.39 0 0 0 1.364 1.653h7.35a1.39 1.39 0 0 0 1.363-1.124l1.525-7.846h5.15c2.911 0 5.364-.318 7.286-.944 1.978-.642 3.797-1.731 5.408-3.238a16.52 16.52 0 0 0 3.258-4.086c.832-1.487 1.428-3.147 1.775-4.931.86-4.423.162-7.964-2.076-10.524-2.216-2.537-5.697-3.823-10.35-3.823z"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-32 -right-8"
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <div className="relative">
                  {/* Large circle background */}
                  <div className="absolute inset-0 w-36 h-36 -translate-x-12 -translate-y-12 rounded-full border border-white/10 opacity-30"></div>
                  {/* Logo container */}
                  <div className="relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      className="w-full h-full"
                    >
                      <path
                        fill="#A41E11"
                        d="M121.8 93.1c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1S13 98.1 6.3 94.9c-3.3-1.6-5-2.9-5-4.2V78s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c0 1.3-1.5 2.7-4.9 4.4z"
                      />
                      <path
                        fill="#D82C20"
                        d="M121.8 80.5C115.1 84 80.4 98.2 73 102.1c-7.4 3.9-11.5 3.8-17.3 1-5.8-2.8-42.7-17.7-49.4-20.9C-.3 79-.5 76.8 6 74.3c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.9z"
                      />
                      <path
                        fill="#fff"
                        d="M80.4 26.1l-10.8 1.2-2.5 5.8-3.9-6.5-12.5-1.1 9.3-3.4-2.8-5.2 8.8 3.4 8.2-2.7L72 23zM66.5 54.5l-20.3-8.4 29.1-4.4z"
                      />
                      <ellipse
                        fill="#fff"
                        cx="38.4"
                        cy="35.4"
                        rx="15.5"
                        ry="6"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* REACT */}
              <motion.div
                className="absolute top-40 -left-12"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 6, 0],
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <div className="relative">
                  {/* Large circle */}
                  <div className="absolute inset-0 w-32 h-32 -translate-x-8 -translate-y-8 rounded-full border border-white/10 opacity-30"></div>
                  {/* Logo container */}
                  <div className="relative w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl p-2.5 border border-white/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      className="w-full h-full"
                    >
                      <g fill="#61DAFB">
                        <circle cx="64" cy="64" r="11.4" />
                        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* JS */}
              <motion.div
                className="absolute top-10 right-8"
                animate={{
                  y: [0, 18, 0],
                  rotate: [0, -7, 0],
                }}
                transition={{
                  duration: 5.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.5,
                }}
              >
                <div className="relative">
                  {/* Medium circle background */}
                  <div className="absolute inset-0 w-28 h-28 -translate-x-7 -translate-y-7 rounded-full border border-white/12 opacity-30"></div>
                  {/* Logo container */}
                  <div className="relative w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl p-2.5 border border-white/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      className="w-full h-full"
                    >
                      <path
                        fill="#F0DB4F"
                        d="M1.408 1.408h125.184v125.185H1.408z"
                      />
                      <path
                        fill="#323330"
                        d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* VUE JS */}
              <motion.div
                className="absolute -bottom-4 right-16"
                animate={{
                  y: [0, -14, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3,
                }}
              >
                <div className="relative">
                  {/* Medium circle background */}
                  <div className="absolute inset-0 w-24 h-24 -translate-x-6 -translate-y-6 rounded-full border border-white/14 opacity-35"></div>
                  {/* Logo container */}
                  <div className="relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      className="w-full h-full"
                    >
                      <path
                        fill="none"
                        d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"
                      />
                      <path
                        fill="#35495e"
                        d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z"
                      />
                      <path
                        fill="#41b883"
                        d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Mysql */}
              <motion.div
                className="absolute bottom-48 left-4"
                animate={{
                  y: [0, 16, 0],
                  rotate: [0, -6, 0],
                }}
                transition={{
                  duration: 7.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3.5,
                }}
              >
                <div className="relative">
                  {/* Large circle background */}
                  <div className="absolute inset-0 w-32 h-32 -translate-x-9 -translate-y-9 rounded-full border border-white/10 opacity-30"></div>
                  {/* Logo container */}
                  <div className="relative w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl p-2.5 border border-white/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      className="w-full h-full"
                    >
                      <path
                        fill="#00618A"
                        d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Laravel */}
              <motion.div
                className="absolute top-4 left-20"
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 4, 0],
                }}
                transition={{
                  duration: 6.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              >
                <div className="relative">
                  {/* Large circle background */}
                  <div className="absolute inset-0 w-32 h-32 -translate-x-9 -translate-y-9 rounded-full border border-white/10 opacity-30"></div>
                  {/* Logo container */}
                  <div className="relative w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 133"
                      className="w-full h-full"
                    >
                      <path
                        fill="#F05340"
                        d="M26.027344 0.136719C25.824219 0.214844 20.085938 3.484375 13.28125 7.394531C5.035156 12.136719 0.800781 14.632812 0.574219 14.867188C0.394531 15.070312 0.191406 15.421875 0.128906 15.644531C-0.0429688 16.21875-0.0546875 100.347656 0.117188 100.953125C0.179688 101.1875 0.382812 101.53125 0.566406 101.722656C1.011719 102.191406 50.238281 130.496094 50.835938 130.632812C51.113281 130.699219 51.425781 130.6875 51.734375 130.601562C52.40625 130.433594 101.503906 102.191406 101.941406 101.730469C102.121094 101.53125 102.324219 101.1875 102.390625 100.953125C102.476562 100.675781 102.507812 96.277344 102.507812 87.015625L102.507812 73.480469L114.476562 66.605469C125.761719 60.117188 126.453125 59.710938 126.742188 59.265625L127.039062 58.785156L127.039062 44.207031C127.039062 28.335938 127.070312 29.230469 126.441406 28.65625C126.273438 28.507812 120.523438 25.152344 113.652344 21.195312L101.171875 14.015625L99.785156 14.015625L87.574219 21.027344C80.851562 24.894531 75.136719 28.199219 74.859375 28.378906C74.582031 28.5625 74.25 28.902344 74.113281 29.148438L73.867188 29.574219L73.8125 43.308594L73.761719 57.046875L63.679688 62.855469C58.132812 66.042969 53.515625 68.683594 53.417969 68.707031C53.238281 68.757812 53.226562 67.449219 53.226562 42.203125L53.226562 15.632812L52.960938 15.175781C52.628906 14.621094 54.121094 15.507812 39.136719 6.894531C26.570312-0.332031 26.871094-0.179688 26.027344 0.136719ZM37.578125 10.65625C42.835938 13.671875 47.136719 16.167969 47.136719 16.199219C47.136719 16.230469 42.527344 18.894531 36.894531 22.132812L26.644531 28.015625L16.414062 22.132812C10.792969 18.894531 6.1875 16.230469 6.1875 16.199219C6.1875 16.167969 10.785156 13.503906 16.40625 10.273438L26.613281 4.402344L27.316406 4.785156C27.710938 5 32.332031 7.640625 37.578125 10.65625ZM110.730469 24.191406C116.265625 27.378906 120.84375 30.011719 120.886719 30.054688C121.003906 30.160156 100.703125 41.828125 100.425781 41.816406C100.148438 41.808594 80.097656 30.246094 80.105469 30.105469C80.117188 29.945312 100.289062 18.339844 100.492188 18.371094C100.585938 18.394531 105.195312 21.015625 110.730469 24.191406ZM14.828125 25.875L24.585938 31.492188L24.640625 59.304688L24.691406 87.121094L24.929688 87.496094C25.054688 87.695312 25.289062 87.964844 25.460938 88.089844C25.621094 88.207031 31.050781 91.300781 37.523438 94.953125L49.28125 101.59375L49.28125 113.359375C49.28125 119.816406 49.238281 125.113281 49.183594 125.113281C49.140625 125.113281 38.976562 119.296875 26.601562 112.175781L4.105469 99.238281L4.074219 59.464844L4.054688 19.703125L4.554688 19.980469C4.84375 20.132812 9.460938 22.785156 14.828125 25.875ZM49.28125 45.453125L49.28125 71.082031L48.886719 71.339844C48.351562 71.679688 28.8125 82.910156 28.746094 82.910156C28.714844 82.910156 28.691406 71.339844 28.691406 57.195312L28.703125 31.492188L38.910156 25.621094C44.523438 22.390625 49.152344 19.769531 49.207031 19.789062C49.246094 19.8125 49.28125 31.363281 49.28125 45.453125ZM88.222656 39.558594L98.453125 45.441406L98.453125 57.101562C98.453125 68.164062 98.441406 68.757812 98.273438 68.695312C98.164062 68.652344 93.535156 66 87.980469 62.800781L77.867188 56.992188L77.867188 45.335938C77.867188 38.917969 77.898438 33.675781 77.929688 33.675781C77.972656 33.675781 82.601562 36.320312 88.222656 39.558594ZM123.09375 45.261719C123.09375 51.644531 123.050781 56.910156 123.007812 56.960938C122.933594 57.078125 102.699219 68.738281 102.570312 68.738281C102.539062 68.738281 102.507812 63.496094 102.507812 57.078125L102.507812 45.421875L112.714844 39.546875C118.335938 36.320312 122.964844 33.675781 123.007812 33.675781C123.0625 33.675781 123.09375 38.886719 123.09375 45.261719ZM86.230469 66.46875C94.835938 71.421875 96.320312 72.308594 96.171875 72.425781C96.074219 72.488281 92.8125 74.363281 88.929688 76.582031C85.046875 78.796875 74.988281 84.53125 66.570312 89.328125L51.273438 98.054688L50.785156 97.789062C47.863281 96.191406 30.910156 86.546875 30.910156 86.472656C30.902344 86.3125 75.765625 60.53125 75.945312 60.597656C76.03125 60.628906 80.660156 63.269531 86.230469 66.46875ZM98.433594 87.558594L98.398438 99.238281L75.914062 112.175781C63.542969 119.296875 53.375 125.113281 53.324219 125.113281C53.269531 125.113281 53.226562 120.359375 53.226562 113.359375L53.226562 101.59375L75.765625 88.742188C88.148438 81.675781 98.324219 75.890625 98.378906 75.878906C98.421875 75.878906 98.441406 81.132812 98.433594 87.558594Z"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Elastic */}
              <motion.div
                className="absolute bottom-12 -left-8"
                animate={{
                  y: [0, 14, 0],
                  rotate: [0, -7, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.8,
                }}
              >
                <div className="relative">
                  {/* Small circle background */}
                  <div className="absolute inset-0 w-24 h-24 -translate-x-6 -translate-y-6 rounded-full border border-white/12 opacity-30"></div>
                  {/* Logo container */}
                  <div className="relative w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 128"
                      className="w-full h-full"
                    >
                      <path
                        fill="#343741"
                        d="M4 64c0 5.535.777 10.879 2.098 16H84c8.836 0 16-7.164 16-16s-7.164-16-16-16H6.098A63.738 63.738 0 0 0 4 64"
                      />
                      <path
                        fill="#fec514"
                        d="M111.695 30.648A61.485 61.485 0 0 0 117.922 24C106.188 9.379 88.199 0 68 0 42.715 0 20.957 14.71 10.574 36H98.04a20.123 20.123 0 0 0 13.652-5.352"
                      />
                      <path
                        fill="#00bfb3"
                        d="M98.04 92H10.577C20.961 113.29 42.715 128 68 128c20.2 0 38.188-9.383 49.922-24a61.1 61.1 0 0 0-6.227-6.648A20.133 20.133 0 0 0 98.04 92"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Profile image - floating */}
              <motion.img
                src="/images/avatar.png"
                alt={personalInfo.name}
                className="relative w-full h-auto object-contain drop-shadow-2xl cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  // rotate: 2,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center p-2"
        >
          <div className="w-1 h-3 bg-purple-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
