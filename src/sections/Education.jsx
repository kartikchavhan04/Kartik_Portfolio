import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { educationList } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic History"
          title="Education"
          subtitle="Direct extract from verified resume."
        />

        <div className="max-w-4xl mx-auto space-y-5">
          {(educationList || []).map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/80 bg-slate-950/40 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-xs sm:text-sm italic text-cyan-300 mt-0.5">
                      {edu.degree}
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
                  <span className="inline-block px-3 py-1 rounded-xl text-xs font-mono font-bold bg-slate-800 text-cyan-300 border border-slate-700/80">
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
