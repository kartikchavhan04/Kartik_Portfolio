import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertCircle,
  Code2,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from './Icons';

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
          {/* Header Badges */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-800/90 text-cyan-300 border border-slate-700/60 font-mono">
              {project.projectType}
            </span>
            <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {project.status}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1 mb-4">
            {project.tagline}
          </p>

          {/* Short Description */}
          <p className="text-sm text-slate-300 leading-relaxed mb-5">
            {project.shortDescription}
          </p>

          {/* Problem Solved Callout */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 mb-5">
            <div className="flex items-start gap-2.5">
              <AlertCircle size={16} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-slate-200 block mb-0.5 uppercase tracking-wide">
                  Problem Addressed:
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="mb-5">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Expandable Details (Key Features + Contribution) */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-4 border-t border-slate-800 space-y-4 text-xs sm:text-sm overflow-hidden"
              >
                <div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider text-cyan-400">
                    <Sparkles size={13} /> Key Architecture Features:
                  </h4>
                  <ul className="space-y-1.5">
                    {project.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300">
                        <CheckCircle size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <h4 className="font-bold text-white mb-1 text-xs uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                    <Code2 size={13} /> Personal Contribution:
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.contribution}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Card Footer with Actions */}
      <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between gap-3">
        {/* Toggle Details Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-cyan-300 transition-colors"
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              Hide Architecture <ChevronUp size={14} />
            </>
          ) : (
            <>
              View Architecture & Details <ChevronDown size={14} />
            </>
          )}
        </button>

        {/* Links */}
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub Repository for ${project.title}`}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all"
              title="GitHub Repository"
            >
              <GithubIcon size={16} />
            </a>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              Live Demo <ExternalLink size={12} />
            </a>
          ) : (
            <span className="text-[11px] font-mono text-slate-500 bg-slate-900/60 px-2.5 py-1 rounded-md border border-slate-800">
              Verified Specs
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
