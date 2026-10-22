import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Layers,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/experience';

export default function Experience({ onOpenResume }) {
  return (
    <section id="experience" className="py-24 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industry Background"
          title="Work Experience"
          subtitle="Verified corporate engineering role delivering full-stack solutions, database architecture, and deployment automation."
        />

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
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
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        {exp.statusBadge}
                      </span>
                    </div>

                    <div className="text-base font-semibold text-cyan-400">
                      {exp.company}
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
                      <span className="text-slate-500">•</span>
                      <span>{exp.employmentType}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenResume}
                  className="self-start md:self-center px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  Verify in Resume
                </button>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {exp.summary}
              </p>

              {/* Responsibilities & Achievements */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5 flex items-center gap-2">
                  <ShieldCheck size={14} className="text-cyan-400" />
                  Key Responsibilities & System Contributions:
                </h4>
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-cyan-500/10 text-cyan-400 mt-1 shrink-0">
                        <CheckCircle2 size={13} />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Applied Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-300 bg-slate-900 border border-slate-800"
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
  );
}
