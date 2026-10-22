import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Code2,
  Briefcase,
  UserCheck,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 group shadow-2xl relative"
    >
      <div>
        {/* Top Decorative Gradient Bar */}
        <div className={`h-2 w-full bg-gradient-to-r ${project.accent || 'from-cyan-500 to-blue-600'}`} />

        <div className="p-6 sm:p-7">
          {/* Project Type Badge & Period */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
            <span
              className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full font-mono ${
                project.isPersonal
                  ? 'bg-violet-500/15 text-violet-300 border border-violet-500/30'
                  : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
              }`}
            >
              {project.isPersonal ? <UserCheck size={12} /> : <Briefcase size={12} />}
              <span>{project.projectType}</span>
            </span>

            <span className="text-xs font-mono italic text-slate-400 bg-slate-900/90 border border-slate-800 px-3 py-1 rounded-full">
              {project.period}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-heading font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-2.5">
            {project.title}
          </h3>

          {/* Overview Text */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
            {project.overview}
          </p>

          {/* Bullets List */}
          <div className="space-y-2.5 mb-6">
            {(project?.bullets || [])
              .slice(0, isExpanded ? (project?.bullets || []).length : 3)
              .map((bullet, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span
                    className={`font-black text-sm mt-[-2px] shrink-0 ${
                      project.isPersonal ? 'text-violet-400' : 'text-cyan-400'
                    }`}
                  >
                    ›
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
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {(project?.techStack || []).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-slate-200 bg-slate-950/90 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer with Details Toggle & Project Action */}
      <div className="px-6 py-4 bg-slate-950/90 border-t border-slate-800/90 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-colors py-1 focus:outline-none"
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp size={15} />
            </>
          ) : (
            <>
              View All {(project?.bullets || []).length} Details <ChevronDown size={15} />
            </>
          )}
        </button>

        <div className="flex items-center gap-2">
          {project.isPersonal ? (
            <a
              href="https://github.com/kartikchavhan04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/25 hover:bg-violet-500/20 transition-colors"
            >
              <GithubIcon size={14} />
              <span>Personal Repo</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-lg text-cyan-300 bg-cyan-500/10 border border-cyan-500/25">
              <Lock size={12} className="text-cyan-400" />
              <span>Enterprise Production</span>
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
