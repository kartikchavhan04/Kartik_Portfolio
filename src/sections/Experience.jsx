import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/experience';

export default function Experience({ onOpenResume }) {
  return (
    <section id="experience" className="py-24 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Employment History"
          title="Experience"
          subtitle="Direct extract from verified professional resume."
        />

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-2xl p-6 sm:p-9 border border-slate-800/90 hover:border-cyan-500/30 transition-all shadow-xl relative"
            >
              {/* Top Accent Light */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-cyan-500 via-teal-400 to-transparent" />

              {/* Company & Role Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Building2 size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.company}
                    </h3>
                    <div className="text-base italic text-cyan-400 mt-0.5">
                      {exp.role}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-slate-500" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenResume}
                  className="self-start md:self-center px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  View in Resume
                </button>
              </div>

              {/* Bullets directly from resume */}
              <div className="space-y-3.5 mb-6">
                {exp.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                    <span className="text-cyan-400 font-bold mt-0.5 shrink-0">•</span>
                    <p className="text-slate-300 leading-relaxed">
                      <strong className="text-white font-semibold">
                        {bullet.title}:
                      </strong>{' '}
                      {bullet.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
