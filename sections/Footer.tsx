"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

/**
 * Footer section with minimal text and soft fade animation
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="theme-section-primary relative overflow-hidden px-6 py-24">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="theme-text-muted">
          © {currentYear} Jerome Edward Guban. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
