import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Briefcase, Code, GraduationCap, Wrench } from 'lucide-react';
import { profileData } from '../data/profile';
import { experiences } from '../data/experience';
import { projects } from '../data/projects';
import { skillCategories } from '../data/skills';
import { educationList } from '../data/education';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Kartik Chavhan — Resume View
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={profileData.resumeUrl}
                download="Kartik_Chavhan_Resume.pdf"
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-all"
              >
                <Download size={14} />
                Download PDF
              </a>
              <button
                onClick={() => window.print()}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-all"
                title="Print Resume"
              >
                <Printer size={14} />
                Print
              </button>
              <button
                onClick={onClose}
                aria-label="Close Resume Modal"
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Document Content View */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-7 bg-slate-900 text-slate-200">
            {/* Header info */}
            <div className="border-b border-slate-800 pb-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                    {profileData.name}
                  </h1>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-cyan-400 hover:underline block mt-1"
                  >
                    linkedin.com/in/kartik-chavhan-5428502a1/
                  </a>
                </div>
                <div className="text-left sm:text-right text-xs sm:text-sm text-slate-300 space-y-0.5">
                  <p>
                    <a href={`mailto:${profileData.email}`} className="hover:text-cyan-400">
                      {profileData.email}
                    </a>
                  </p>
                  <p className="font-mono text-slate-400">{profileData.phone}</p>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <section>
              <h4 className="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-2">
                Professional Summary
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                {profileData.summary}
              </p>
            </section>

            {/* Experience */}
            <section>
              <h4 className="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-3">
                Experience
              </h4>
              {experiences.map((exp) => (
                <div key={exp.id} className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h5 className="font-bold text-white text-sm sm:text-base">
                      {exp.company}
                    </h5>
                    <span className="text-xs text-slate-400">{exp.location}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 text-xs">
                    <span className="italic text-cyan-300 font-medium">{exp.role}</span>
                    <span className="font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 shrink-0 mt-0.5">•</span>
                        <span>
                          <strong className="text-white">{b.title}:</strong> {b.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Projects */}
            <section>
              <h4 className="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-3">
                Projects
              </h4>
              <div className="space-y-4">
                {projects.map((p) => (
                  <div key={p.id} className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h5 className="font-bold text-white text-sm sm:text-base">
                        {p.title}
                      </h5>
                      <span className="text-xs italic font-mono text-cyan-400">{p.period}</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {p.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-400 shrink-0 mt-0.5">•</span>
                          <span>
                            <strong className="text-white">{b.title}:</strong> {b.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 pt-3 border-t border-slate-800/60 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-bold text-slate-400 mr-1">Tech Stack:</span>
                      {p.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-cyan-300 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h4 className="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-3">
                Technical Skills
              </h4>
              <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-4 sm:p-5 space-y-2">
                {skillCategories.map((cat) => (
                  <div key={cat.id} className="text-xs leading-relaxed flex items-start gap-2">
                    <span className="text-cyan-400 shrink-0">•</span>
                    <span>
                      <strong className="text-white">{cat.name}:</strong>{' '}
                      <span className="text-slate-300">{cat.skills.join(', ')}</span>
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h4 className="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-3">
                Education
              </h4>
              <div className="space-y-3">
                {educationList.map((edu) => (
                  <div key={edu.id} className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-3.5 sm:p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm font-bold text-white mb-0.5">
                      <span>{edu.institution}</span>
                      <span className="text-xs font-normal text-slate-400">{edu.location}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-slate-300">
                      <span className="italic text-cyan-300">{edu.degree}</span>
                      <span className="font-mono text-slate-400">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Footer bar */}
          <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Kartik Chavhan — Official Resume Record</span>
            <a
              href={profileData.resumeUrl}
              download="Kartik_Chavhan_Resume.pdf"
              className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <Download size={12} /> Direct PDF Download
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
