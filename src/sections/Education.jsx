import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { educationList } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 bg-dark-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic History"
          title="Education & Credentials"
          subtitle="Direct extract from verified academic records and university degree credentials."
        />

        <div className="max-w-4xl mx-auto space-y-5">
          {(educationList || []).map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border border-slate-800/80 bg-slate-950/60 relative overflow-hidden shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0 shadow-inner">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-heading font-black text-white tracking-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-cyan-300 mt-0.5">
                      {edu.degree}
                    </p>

                    <div className="flex flex-wrap items-center gap-3.5 mt-2.5 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-cyan-400" />
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
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-cyan-500/15 to-emerald-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/10">
                    <Award size={13} className="text-emerald-400" />
                    {edu.grade}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
