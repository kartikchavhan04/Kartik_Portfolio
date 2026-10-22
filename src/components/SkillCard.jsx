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
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="glass-panel glass-panel-hover rounded-2xl p-6 relative overflow-hidden group flex flex-col justify-between"
    >
      {/* Ambient background glow */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl bg-gradient-to-br ${category.color} pointer-events-none group-hover:opacity-20 transition-opacity`}
      />

      <div>
        {/* Header */}
        <div className="flex items-center gap-3.5 mb-5">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-inner text-cyan-400 group-hover:scale-105 transition-transform">
            <IconComponent size={22} />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {category.name}
            </h3>
            <span className="text-xs font-mono text-cyan-400">
              {category.skills.length} skills listed
            </span>
          </div>
        </div>

        {/* Skills Chips */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => {
            const skillName = typeof skill === 'string' ? skill : skill.name;
            return (
              <span
                key={skillName}
                className="px-3 py-1.5 rounded-xl text-xs font-medium text-slate-200 bg-slate-950/70 border border-slate-800/90 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                {skillName}
              </span>
            );
          })}
        </div>
      </div>

      <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={13} className="text-cyan-400" /> Resume Verified
        </span>
      </div>
    </motion.div>
  );
}
