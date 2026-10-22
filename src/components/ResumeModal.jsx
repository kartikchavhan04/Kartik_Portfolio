import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Download,
  ExternalLink,
  Printer,
  FileText,
  Eye,
  CheckCircle,
} from 'lucide-react';
import { profileData } from '../data/profile';
import { experiences } from '../data/experience';
import { resumeProjects } from '../data/projects';
import { skillCategories } from '../data/skills';
import { educationList } from '../data/education';

export default function ResumeModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' | 'text'

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
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
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.22 }}
          className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10"
        >
          {/* Header Controls - Responsive mobile layout */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-slate-950 border-b border-slate-800 shrink-0">
            <div className="flex items-center justify-between w-full sm:w-auto">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    Kartik Chavhan — Official Resume PDF
                  </h3>
                  <p className="text-[11px] text-slate-400 hidden sm:block">
                    Exact document provided by Kartik Chavhan
                  </p>
                </div>
              </div>

              {/* Close Button on mobile */}
              <button
                onClick={onClose}
                aria-label="Close Resume Modal"
                className="sm:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* View Switcher Tabs & Actions */}
            <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto overflow-x-auto pb-0.5 sm:pb-0">
              {/* Tab Selector */}
              <div className="flex items-center bg-slate-900 p-0.5 rounded-xl border border-slate-800 text-xs font-semibold shrink-0">
                <button
                  onClick={() => setViewMode('pdf')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    viewMode === 'pdf'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Eye size={13} />
                  <span>PDF Document</span>
                </button>
                <button
                  onClick={() => setViewMode('text')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                    viewMode === 'text'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <FileText size={13} />
                  <span>Interactive</span>
                </button>
              </div>

              {/* Download Original PDF Button */}
              <a
                href={profileData.resumeUrl}
                download="Kartik_Chavhan_Resume.pdf"
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 rounded-xl shadow-sm transition-all shrink-0"
                title="Download the exact PDF resume file"
              >
                <Download size={14} />
                <span>Download</span>
              </a>

              {/* Open in new tab (desktop) */}
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-all shrink-0"
                title="Open PDF in new browser tab"
              >
                <ExternalLink size={13} />
                <span>Open Tab</span>
              </a>

              {/* Close Button (desktop) */}
              <button
                onClick={onClose}
                aria-label="Close Resume Modal"
                className="hidden sm:block p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors ml-1"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="flex-1 w-full h-full overflow-hidden relative bg-slate-950">
            {viewMode === 'pdf' ? (
              <div className="w-full h-full flex flex-col items-center justify-center relative">
                {/* Embedded PDF iframe */}
                <iframe
                  src={`${profileData.resumeUrl}#toolbar=1&navpanes=0&view=FitH`}
                  title="Kartik Chavhan Official Resume PDF"
                  className="w-full h-full border-0 bg-slate-950"
                />

                {/* Mobile Fallback Banner */}
                <div className="sm:hidden absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/95 border border-slate-800 text-center shadow-xl backdrop-blur-md">
                  <p className="text-xs text-slate-300 mb-2">
                    Viewing on mobile device?
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <a
                      href={profileData.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-cyan-400"
                    >
                      Open Full PDF
                    </a>
                    <button
                      onClick={() => setViewMode('text')}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 border border-slate-700"
                    >
                      Read Text View
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Structured Text View (Secondary Tab) */
              <div className="w-full h-full overflow-y-auto p-6 sm:p-10 space-y-7 bg-slate-900 text-slate-200">
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
                  {(experiences || []).map((exp) => (
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
                        {(exp?.bullets || []).map((b, i) => (
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

                {/* Projects (Only the 2 resume projects) */}
                <section>
                  <h4 className="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-3">
                    Projects (Verified in Resume)
                  </h4>
                  <div className="space-y-4">
                    {(resumeProjects || []).map((p) => (
                      <div key={p.id} className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-4 sm:p-5">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h5 className="font-bold text-white text-sm sm:text-base">
                            {p.title}
                          </h5>
                          <span className="text-xs italic font-mono text-cyan-400">{p.period}</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {(p?.bullets || []).map((b, i) => (
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
                          {(p?.techStack || []).map((tech) => (
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
                    {(skillCategories || []).map((cat) => (
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
                    {(educationList || []).map((edu) => (
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
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-4 sm:px-6 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle size={13} className="text-emerald-400" />
              Official Resume Document ({profileData.name})
            </span>
            <a
              href={profileData.resumeUrl}
              download="Kartik_Chavhan_Resume.pdf"
              className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <Download size={13} /> Download Original PDF
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
