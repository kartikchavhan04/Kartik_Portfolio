import React from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Layout,
  Database,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
} from 'lucide-react';

const iconMap = {
  Server: Server,
  Layout: Layout,
  Database: Database,
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  Layers: Layers,
};

export default function SkillCard({ category, index }) {
  const IconComponent = iconMap[category.icon] || Server;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 relative overflow-hidden group flex flex-col justify-between"
    >
      {/* Ambient background glow */}
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl bg-gradient-to-br ${category.color} pointer-events-none group-hover:opacity-20 transition-opacity`} />

      <div>
        {/* Header */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className={`p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-inner text-cyan-400 group-hover:scale-105 transition-transform`}>
            <IconComponent size={24} />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {category.name}
            </h3>
            <span className="text-xs font-medium text-slate-400">
              {category.skills.length} core technologies
            </span>
          </div>
        </div>

        {/* Short description */}
        <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
          {category.description}
        </p>

        {/* Skills List */}
        <div className="space-y-3">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-slate-200">
                  {skill.name}
                </span>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${category.badgeColor}`}>
                  {skill.level}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 size={13} className="text-emerald-400" /> Verified Interview-Ready
        </span>
        <span className="text-slate-600">v1.0</span>
      </div>
    </motion.div>
  );
}
