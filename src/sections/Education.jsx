import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { educationList } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education & Qualifications"
          subtitle="A consistent track record of academic excellence in Computer Science and Engineering."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className={`glass-panel rounded-2xl p-6 sm:p-8 border ${
                edu.featured
                  ? 'border-cyan-500/30 bg-slate-900/70 shadow-lg shadow-cyan-500/5'
                  : 'border-slate-800/80 bg-slate-950/40'
              } transition-all relative overflow-hidden`}
            >
              {edu.featured && (
                <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl bg-cyan-500/10 border-l border-b border-cyan-500/20 text-[11px] font-bold font-mono text-cyan-300">
                  Current Degree Program
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3.5">
                  <div
                    className={`p-3 rounded-xl ${
                      edu.featured
                        ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                        : 'bg-slate-900 text-slate-400 border border-slate-800'
                    } shrink-0`}
                  >
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                      {edu.field}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      {edu.institution}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-slate-500" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-slate-500" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="sm:text-right shrink-0">
                  <div
                    className={`inline-block px-3 py-1.5 rounded-xl text-sm font-bold font-mono ${
                      edu.featured
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                        : 'bg-slate-800/80 text-slate-200 border border-slate-700/80'
                    }`}
                  >
                    {edu.gradeType}: {edu.gradeValue}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-4 pt-4 border-t border-slate-800/80">
                <ul className="space-y-2">
                  {edu.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
