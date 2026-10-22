import React from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Layout,
  Database,
  Cpu,
  GraduationCap,
  Award,
  CheckCircle2,
  FileCheck,
  Shield,
  Layers,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profileData } from '../data/profile';

const pillarIcons = [Server, Layout, Cpu, Database];

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="py-24 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Profile & Background"
          title="Engineered for Scalability & Impact"
          subtitle="A comprehensive overview of my software engineering capabilities, architectural focus, and verified academic foundation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base"
            >
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Professional Summary
              </h3>

              {profileData.aboutParagraphs.map((paragraph, index) => (
                <p key={index} className="text-slate-300 font-normal leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2 text-xs font-mono text-cyan-300">
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                  #PythonFullStack
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                  #DjangoREST
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                  #ReactJS
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                  #DevOpsDocker
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                  #PostgreSQL
                </span>
              </div>
            </motion.div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileData.quickHighlights.map((highlight, index) => {
                const Icon = pillarIcons[index] || Server;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-all group"
                  >
                    <div className="p-2.5 w-fit rounded-xl bg-slate-800/80 text-cyan-400 group-hover:scale-105 transition-transform mb-3">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1.5">
                      {highlight.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {highlight.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Credentials & Verified Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Academic Snapshot Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/90 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    Academic Benchmark
                  </h4>
                  <span className="text-xs text-slate-400">
                    Government College of Engineering, Chandrapur
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 mb-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-400">
                    B.Tech (CSE) Cumulative GPA
                  </span>
                  <span className="text-2xl font-black font-mono text-cyan-300">
                    8.20 / 10.0
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Timeline: 2022 – 2026. Specializing in computer systems, algorithms, distributed architecture, and software design.
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/40">
                  <span className="text-slate-400">HSC (Science): P.N. College</span>
                  <span className="font-semibold text-white">75.50%</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/40">
                  <span className="text-slate-400">SSC: J.S.P.M. Mahavidhyalay</span>
                  <span className="font-semibold text-white">80.00%</span>
                </div>
              </div>
            </div>

            {/* Engineering Values Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800/90">
              <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <FileCheck size={18} className="text-emerald-400" />
                Recruiter Alignment Checklist
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Production Experience:</strong> 1+ year building real enterprise software with Django & React at Gavkari Agro.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>API & Security Competence:</strong> Tested hands-on with RESTful designs, JWT stateless tokens & RBAC.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>DevOps Proficiency:</strong> Practical experience with Docker containerization, Jenkins pipelines & CI/CD.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Clean Architecture:</strong> Prioritizes readable, maintainable, modular, and self-documenting codebases.
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={onOpenResume}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
                >
                  Inspect Resume Data &rarr;
                </button>
                <span className="text-[11px] font-mono text-slate-500">
                  Verified Candidate
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
