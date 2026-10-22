import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Layout,
  Database,
  ShieldCheck,
  Cpu,
  Layers,
  Wrench,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const iconMap = {
  Code: Code,
  Server: Server,
  Layout: Layout,
  Database: Database,
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  Layers: Layers,
  Wrench: Wrench,
  Sparkles: Sparkles,
};

export default function SkillCard({ category, index }) {
  const IconComponent = iconMap[category.icon] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel glass-panel-hover rounded-2xl overflow-hidden relative group flex flex-col justify-between border border-slate-800/90 hover:border-cyan-500/40 shadow-xl"
    >
      {/* Top Accent Gradient Line */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${category.color || 'from-cyan-500 to-teal-500'}`} />

      {/* Ambient background glow */}
      <div
        className={`absolute top-0 right-0 w-36 h-36 rounded-full opacity-10 blur-3xl bg-gradient-to-br ${
          category.color || 'from-cyan-500 to-teal-500'
        } pointer-events-none group-hover:opacity-25 transition-opacity`}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-inner text-cyan-400 group-hover:scale-105 group-hover:text-cyan-300 transition-all">
              <IconComponent size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-white tracking-tight">
                {category.name}
              </h3>
              <span className="text-xs font-mono text-slate-400">
                {category.skills.length} Competencies
              </span>
            </div>
          </div>

          <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 px-2.5 py-0.5 rounded-full">
            Verified
          </span>
        </div>

        {/* Skills Chips */}
        <div className="flex flex-wrap gap-2 pt-1">
          {category.skills.map((skill) => {
            const skillName = typeof skill === 'string' ? skill : skill.name;
            return (
              <span
                key={skillName}
                className="px-3 py-1.5 rounded-xl text-xs font-medium text-slate-200 bg-slate-950/80 border border-slate-800/90 hover:border-cyan-500/50 hover:bg-slate-900 hover:text-cyan-300 transition-all duration-200 shadow-sm"
              >
                {skillName}
              </span>
            );
          })}
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-3 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span className="flex items-center gap-1.5 text-slate-400">
          <CheckCircle2 size={13} className="text-emerald-400" />
          Production Level
        </span>
        <span className="text-[11px] text-slate-500">
          Full Stack Tech
        </span>
      </div>
    </motion.div>
  );
}
