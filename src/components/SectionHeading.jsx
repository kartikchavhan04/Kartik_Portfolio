import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-3xl'}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5 bg-gradient-to-r from-cyan-500/15 via-teal-500/10 to-indigo-500/10 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/10 backdrop-blur-md ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white leading-tight">
        {title}
      </h2>

      {/* Decorative accent divider bar */}
      <div
        className={`mt-3.5 h-1 w-16 bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 rounded-full ${
          isCenter ? 'mx-auto' : ''
        }`}
      />

      {subtitle && (
        <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
