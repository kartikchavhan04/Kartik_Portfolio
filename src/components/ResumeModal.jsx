import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Printer, CheckCircle, GraduationCap, Briefcase, Code, Award } from 'lucide-react';
import { profileData } from '../data/profile';
import { experiences } from '../data/experience';
import { projects } from '../data/projects';
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
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Kartik Chavhan — Verified Resume
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={profileData.resumeUrl}
                download="Kartik_Chavhan_Resume.pdf"
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 rounded-lg shadow-sm transition-all"
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
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-900 text-slate-200">
            {/* Header info */}
            <div className="border-b border-slate-800 pb-6 text-center sm:text-left sm:flex sm:justify-between sm:items-end">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  KARTIK CHAVHAN
                </h1>
                <p className="text-sm sm:text-base font-semibold text-cyan-400 mt-1">
                  Python Full Stack Developer
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Maharashtra, India &bull; {profileData.email}
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex gap-4 text-xs text-slate-400 justify-center sm:justify-end">
                <span>github.com/kartikchavhan</span>
                <span>&bull;</span>
                <span>linkedin.com/in/kartik-chavhan</span>
              </div>
            </div>

            {/* Professional Summary */}
            <section>
              <h4 className="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-2 flex items-center gap-2">
                <Briefcase size={14} /> Professional Summary
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {profileData.aboutParagraphs.join(' ')}
              </p>
            </section>

            {/* Experience */}
            <section>
              <h4 className="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-3 flex items-center gap-2">
                <Briefcase size={14} /> Work Experience
              </h4>
              {experiences.map((exp) => (
                <div key={exp.id} className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h5 className="font-bold text-white text-base">
                      {exp.role} <span className="text-cyan-400 font-normal">@ {exp.company}</span>
                    </h5>
                    <span className="text-xs font-mono text-cyan-300/80 mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-3">{exp.location}</p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Projects */}
            <section>
              <h4 className="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-3 flex items-center gap-2">
                <Code size={14} /> Verified Projects
              </h4>
              <div className="space-y-3">
                {projects.map((p) => (
                  <div key={p.id} className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                      <h5 className="font-bold text-white text-sm">
                        {p.title}
                      </h5>
                      <span className="text-xs font-medium text-slate-400 mt-1 sm:mt-0">
                        {p.projectType}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mb-2">{p.shortDescription}</p>
                    <p className="text-xs text-slate-400"><strong className="text-slate-300">Contribution:</strong> {p.contribution}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
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

            {/* Education */}
            <section>
              <h4 className="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-3 flex items-center gap-2">
                <GraduationCap size={14} /> Education
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {educationList.map((edu) => (
                  <div key={edu.id} className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-3">
                    <span className="text-xs font-semibold text-cyan-400">{edu.period}</span>
                    <h5 className="font-bold text-white text-xs sm:text-sm mt-1">{edu.degree}</h5>
                    <p className="text-xs text-slate-400 mt-0.5">{edu.institution}</p>
                    <div className="mt-2 inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {edu.gradeType}: {edu.gradeValue}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Footer bar */}
          <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Verified candidate data for Kartik Chavhan</span>
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
