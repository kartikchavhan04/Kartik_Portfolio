import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  Mail,
  ArrowRight,
  Terminal,
} from 'lucide-react';
import { profileData } from '../data/profile';
import SocialLinks from '../components/SocialLinks';

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profileData.roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient lighting orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-teal-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-20 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner mb-6 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300">Python Full Stack Developer</span>
              <span className="text-slate-500">•</span>
              <span className="text-cyan-400 font-mono">3 Years Experience</span>
            </div>

            {/* Developer Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
              Hi, I'm <span className="text-gradient-cyan">Kartik</span>
              <br />
              <span className="text-white">Chavhan</span>
            </h1>

            {/* Animated Dynamic Role Badge */}
            <div className="h-10 sm:h-12 mt-4 flex items-center justify-center lg:justify-start">
              <span className="text-slate-400 text-lg sm:text-2xl font-mono mr-2">&gt;</span>
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="text-lg sm:text-2xl font-bold font-mono text-cyan-300 tracking-tight"
              >
                {profileData.roles[roleIndex]}
              </motion.span>
              <span className="w-2 sm:w-2.5 h-6 bg-cyan-400 ml-2 animate-pulse"></span>
            </div>

            {/* Concise Resume Summary */}
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {profileData.summary}
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href={profileData.resumeUrl}
                download="Kartik_Chavhan_Resume.pdf"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 transition-all shadow-sm"
              >
                <Download size={16} className="text-cyan-400" />
                <span>Download Resume PDF</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800/80 border border-slate-800 transition-all"
                title="Preview Resume in browser"
              >
                <FileText size={16} />
                <span>Preview Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-300 bg-slate-900/40 hover:bg-slate-800/80 border border-slate-800 transition-all"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified Profile Links */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Contact & Profiles:
              </span>
              <SocialLinks />
            </div>
          </motion.div>

          {/* Right Column: Code Terminal / Architecture Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="glass-panel rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    kartik_portfolio/resume.py
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  <Terminal size={11} /> Python Full Stack
                </div>
              </div>

              {/* Terminal Code Content */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto space-y-2">
                <div>
                  <span className="text-violet-400">class</span>{' '}
                  <span className="text-cyan-300 font-bold">KartikChavhan</span>:
                </div>
                <div className="pl-4">
                  <span className="text-slate-500"># Resume Snapshot</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">def</span>{' '}
                  <span className="text-emerald-400">__init__</span>(self):
                </div>
                <div className="pl-8 space-y-1">
                  <div>
                    self.name = <span className="text-amber-300">"Kartik Chavhan"</span>
                  </div>
                  <div>
                    self.role = <span className="text-amber-300">"Python Full Stack Developer"</span>
                  </div>
                  <div>
                    self.experience = <span className="text-amber-300">"3 years professional"</span>
                  </div>
                  <div>
                    self.company = <span className="text-amber-300">"Gavkari Agro Producer Co. Ltd"</span>
                  </div>
                  <div>
                    self.apis = <span className="text-amber-300">"30+ REST APIs integrated"</span>
                  </div>
                  <div>
                    self.education = <span className="text-amber-300">"B.Tech CSE (CGPA: 8.20)"</span>
                  </div>
                  <div>
                    self.phone = <span className="text-amber-300">"9322763544"</span>
                  </div>
                  <div>
                    self.email = <span className="text-amber-300">"kartikpchachan2004@gmail.com"</span>
                  </div>
                </div>

                <div className="pl-4 pt-1">
                  <span className="text-blue-400">def</span>{' '}
                  <span className="text-emerald-400">core_technologies</span>(self):
                </div>
                <div className="pl-8">
                  <span className="text-violet-400">return</span> {'['}
                  <span className="text-emerald-300">
                    "Python", "Django", "Flask", "React.js", "Docker", "PostgreSQL"
                  </span>
                  {']'}
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-slate-950/90 border-t border-slate-800 text-center">
                {(profileData.stats || []).map((stat) => (
                  <div key={stat.label} className="p-2 rounded-lg bg-slate-900/50">
                    <div className="text-base font-extrabold text-cyan-400 font-mono">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
