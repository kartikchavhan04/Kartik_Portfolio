import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Download,
  Mail,
  ArrowRight,
  Terminal,
  Play,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Code2,
  Briefcase,
  GraduationCap,
} from 'lucide-react';
import { profileData } from '../data/profile';
import SocialLinks from '../components/SocialLinks';

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [terminalTab, setTerminalTab] = useState('code'); // 'code' | 'output'
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionOutput, setExecutionOutput] = useState([
    '✓ Environment initialized: Python 3.12 + React 19',
    '✓ Database connected: PostgreSQL schemas loaded',
    '✓ 30+ REST APIs registered with JWT authentication',
    '✓ Status: Ready for Production & Full-Stack Roles',
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profileData.roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleRunCode = () => {
    setIsExecuting(true);
    setTerminalTab('output');
    setExecutionOutput(['> Compiling kartik_profile.py...']);
    setTimeout(() => {
      setExecutionOutput((prev) => [
        ...prev,
        '✓ Profile: Kartik Chavhan (Python Full Stack Developer)',
        '✓ Work Experience: 3 Years @ Gavkari Agro Producer Co. Ltd',
        '✓ Education: B.Tech CSE (CGPA: 8.20)',
        '✓ Tech Stack: Python, Django, React, PostgreSQL, Docker',
        '✓ 30+ REST APIs verified & integrated',
        '🚀 Output: 100% Ready for Engineering Interviews!',
      ]);
      setIsExecuting(false);
    }, 600);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient lighting orbs with slow drift */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[700px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-cyan-500/15 via-teal-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 -left-24 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Profile Avatar & Status Pill with rotating gradient halo */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center lg:justify-start gap-4 sm:gap-5 mb-6">
              <div className="relative group shrink-0">
                {/* Rotating conic border glow */}
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-500 opacity-80 blur group-hover:opacity-100 transition duration-500 animate-spin-slow"></div>
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-900 bg-slate-950 shadow-2xl">
                  <img
                    src={profileData.avatar}
                    alt="Kartik Chavhan - Python Full Stack Developer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Available for hire pulse indicator */}
                <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-400 ring-3 ring-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/50" title="Available for immediate hire">
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-1.5 text-xs font-semibold backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-slate-200">Open to Full-Stack Opportunities</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-cyan-400 font-mono font-bold">3 Yrs Exp</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  Pune, Maharashtra &bull; Gavkari Agro Full Stack Developer
                </span>
              </div>
            </div>

            {/* Developer Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white leading-[1.08]">
              Hi, I'm <span className="text-gradient-cyan">Kartik</span>
              <br />
              <span className="text-white">Chavhan</span>
            </h1>

            {/* Animated Dynamic Role Badge */}
            <div className="h-10 sm:h-12 mt-4 flex items-center justify-center lg:justify-start">
              <span className="text-cyan-500 text-lg sm:text-2xl font-mono mr-2">&lt;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg sm:text-2xl font-heading font-bold text-cyan-300 tracking-tight"
                >
                  {profileData.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="text-cyan-500 text-lg sm:text-2xl font-mono ml-1">/&gt;</span>
              <span className="w-2 sm:w-2.5 h-6 bg-cyan-400 ml-2 animate-pulse"></span>
            </div>

            {/* Concise Resume Summary */}
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
              {profileData.summary}
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5">
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
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download size={16} className="text-cyan-400" />
                <span>Download Resume PDF</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white bg-slate-900/50 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 transition-all"
                title="Preview Resume in browser"
              >
                <FileText size={16} className="text-cyan-400" />
                <span>Preview Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-300 bg-slate-900/50 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 transition-all"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified Profile Links */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                Verified Socials:
              </span>
              <SocialLinks />
            </div>
          </motion.div>

          {/* Right Column: Code Terminal / Architecture Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="glass-panel rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl relative group">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-slate-950/95 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 ml-3">
                    <button
                      onClick={() => setTerminalTab('code')}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        terminalTab === 'code'
                          ? 'bg-slate-800 text-cyan-300 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      kartik_profile.py
                    </button>
                    <button
                      onClick={() => setTerminalTab('output')}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        terminalTab === 'output'
                          ? 'bg-slate-800 text-emerald-300 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      output.sh
                    </button>
                  </div>
                </div>

                {/* Interactive Run Button */}
                <button
                  onClick={handleRunCode}
                  disabled={isExecuting}
                  className="flex items-center gap-1.5 text-[11px] font-mono text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 px-2.5 py-1 rounded-md font-bold shadow-sm transition-all active:scale-95 disabled:opacity-50"
                  title="Execute Python script simulation"
                >
                  {isExecuting ? (
                    <>
                      <RotateCcw size={11} className="animate-spin" /> Running...
                    </>
                  ) : (
                    <>
                      <Play size={11} /> Run Code
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Code Content or Live Output */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto min-h-[260px] bg-slate-950/40">
                {terminalTab === 'code' ? (
                  <div className="space-y-1.5">
                    <div>
                      <span className="text-violet-400">class</span>{' '}
                      <span className="text-cyan-300 font-bold">KartikChavhan</span>:
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-500"># Verified Credentials Snapshot</span>
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
                        self.experience = <span className="text-amber-300">"3 Years Professional"</span>
                      </div>
                      <div>
                        self.company = <span className="text-amber-300">"Gavkari Agro Producer Co. Ltd"</span>
                      </div>
                      <div>
                        self.apis = <span className="text-amber-300">"30+ REST APIs Integrated"</span>
                      </div>
                      <div>
                        self.education = <span className="text-amber-300">"B.Tech CSE (CGPA: 8.20)"</span>
                      </div>
                      <div>
                        self.github = <span className="text-cyan-300">"github.com/kartikchavhan04"</span>
                      </div>
                    </div>

                    <div className="pl-4 pt-1">
                      <span className="text-blue-400">def</span>{' '}
                      <span className="text-emerald-400">core_technologies</span>(self):
                    </div>
                    <div className="pl-8">
                      <span className="text-violet-400">return</span> {'['}
                      <span className="text-emerald-300">
                        "Python", "Django", "React.js", "Docker", "PostgreSQL"
                      </span>
                      {']'}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 text-emerald-400 font-mono text-xs sm:text-[13px]">
                    <div className="text-slate-400 text-[11px] pb-1 border-b border-slate-800 flex items-center justify-between">
                      <span>Python 3.12.0 Runtime • Status: OK</span>
                      <span className="text-emerald-400">0.04s execution</span>
                    </div>
                    {executionOutput.map((line, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-slate-500 select-none">&gt;</span>
                        <span className={line.startsWith('🚀') ? 'text-cyan-300 font-bold' : ''}>
                          {line}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-slate-950/95 border-t border-slate-800 text-center">
                {(profileData.stats || []).map((stat) => (
                  <div key={stat.label} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-cyan-500/30 transition-colors">
                    <div className="text-base sm:text-lg font-heading font-black text-cyan-400">
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
