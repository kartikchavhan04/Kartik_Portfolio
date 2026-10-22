import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800/90 hover:border-cyan-500/30 transition-all duration-300 group"
    >
      <div>
        {/* Top Banner / Decorative Bar */}
        <div className={`h-2 w-full bg-gradient-to-r ${project.accent}`} />

        <div className="p-6 sm:p-7">
          {/* Project Type Badge & Period */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md font-mono ${
                project.isPersonal
                  ? 'bg-violet-500/15 text-violet-300 border border-violet-500/30'
                  : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
              }`}
            >
              {project.projectType}
            </span>
            <span className="text-xs font-mono italic text-slate-400 bg-slate-900/80 border border-slate-800 px-2.5 py-0.5 rounded-md">
              {project.period}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-2">
            {project.title}
          </h3>

          {/* Overview text */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
            {project.overview}
          </p>

          {/* Bullets */}
          <div className="space-y-2.5 mb-5">
            {(project?.bullets || [])
              .slice(0, isExpanded ? (project?.bullets || []).length : 3)
              .map((bullet, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <span
                    className={`font-bold mt-0.5 shrink-0 ${
                      project.isPersonal ? 'text-violet-400' : 'text-cyan-400'
                    }`}
                  >
                    •
                  </span>
                  <p className="leading-relaxed">
                    <strong className="text-white font-semibold">
                      {bullet.title}:
                    </strong>{' '}
                    {bullet.desc}
                  </p>
                </div>
              ))}
          </div>

          {/* Tech Stack Chips */}
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {(project?.techStack || []).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-slate-200 bg-slate-900 border border-slate-700/80 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-3.5 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-cyan-300 transition-colors"
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp size={14} />
            </>
          ) : (
            <>
              View All {(project?.bullets || []).length} Details <ChevronDown size={14} />
            </>
          )}
        </button>

        <span
          className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${
            project.isPersonal
              ? 'text-violet-300 bg-violet-500/10 border-violet-500/20'
              : 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20'
          }`}
        >
          {project.isPersonal ? 'Personal Project' : 'Professional Project'}
        </span>
      </div>
    </motion.div>
  );
}
