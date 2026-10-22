import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  FileText,
  Briefcase,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/experience';

export default function Experience({ onOpenResume }) {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-dark-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Employment History"
          title="Work Experience"
          subtitle="Direct extract from verified professional resume at Gavkari Agro Producer Company Limited."
        />

        <div className="max-w-4xl mx-auto">
          {(experiences || []).map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-9 border border-slate-800/90 shadow-2xl relative overflow-hidden"
            >
              {/* Top Accent Gradient Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500" />

              {/* Company & Role Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-6 pb-6 border-b border-slate-800/80">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 shadow-inner">
                    <Building2 size={26} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-heading font-black text-white tracking-tight">
                        {exp.company}
                      </h3>
                      <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
                        Full-Time Role
                      </span>
                    </div>

                    <div className="text-sm sm:text-base font-semibold text-cyan-400 mt-1">
                      {exp.role}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-2.5 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-cyan-400" />
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
                  className="self-start md:self-center flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700/80 hover:border-cyan-500/40 transition-all shadow-sm"
                >
                  <FileText size={14} className="text-cyan-400" />
                  <span>View in Resume</span>
                </button>
              </div>

              {/* Bullets directly from verified resume */}
              <div className="space-y-3.5">
                {(exp?.bullets || []).map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                    <span className="text-cyan-400 font-black text-base mt-[-2px] shrink-0">›</span>
                    <p className="text-slate-300 leading-relaxed font-normal">
                      <strong className="text-white font-semibold">
                        {bullet.title}:
                      </strong>{' '}
                      {bullet.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Experience Footer Pill */}
              <div className="mt-7 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 size={13} /> Official Corporate Record
                </span>
                <span className="text-slate-400">
                  Full Stack Web Development & REST APIs
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
