import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Building2,
  FileCheck,
  CheckCircle2,
  Code2,
  Layers,
  Sparkles,
  ShieldCheck,
  Cpu,
  Database,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profileData } from '../data/profile';
import { educationList } from '../data/education';

export default function About({ onOpenResume }) {
  const pillars = [
    {
      icon: Code2,
      title: 'Backend & REST APIs',
      desc: '30+ production REST APIs developed with Django, DRF, and Flask, featuring JWT authentication and RBAC.',
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
    {
      icon: Layers,
      title: 'Frontend Engineering',
      desc: 'Reactive SPAs built with React.js, Tailwind CSS, component state management, and accessible interfaces.',
      color: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    },
    {
      icon: Database,
      title: 'Relational Databases',
      desc: 'PostgreSQL and MySQL schema architecture, index optimization, query tuning, and transactional workflows.',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: Cpu,
      title: 'Cloud & CI/CD Pipelines',
      desc: 'Containerized microservices with Docker, automated test/build pipelines with Jenkins, and Git version control.',
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-dark-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Summary & Background"
          title="Professional Profile"
          subtitle="Direct extract from verified professional credentials and engineering experience."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Summary & Engineering Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base border border-slate-800/90 shadow-xl"
            >
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                Executive Summary
              </h3>

              <p className="text-slate-300 font-normal leading-relaxed text-justify">
                {profileData.summary}
              </p>

              <div className="pt-4 border-t border-slate-800/90 flex flex-wrap gap-2 text-xs font-mono text-cyan-300">
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                  3 Years Corporate Dev
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                  30+ REST APIs
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                  Python & Django
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                  React.js & Tailwind
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                  Docker & Jenkins CI/CD
                </span>
              </div>
            </motion.div>

            {/* Core Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-all hover:-translate-y-0.5 group"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className={`p-2.5 rounded-xl border ${pillar.color} shrink-0`}>
                        <Icon size={18} />
                      </div>
                      <h4 className="text-sm font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Identity Card & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Developer Identity Card with Photo */}
            <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800/90 flex flex-col sm:flex-row items-center sm:items-center gap-5 shadow-2xl relative overflow-hidden group">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shrink-0 shadow-xl bg-slate-950">
                <img
                  src={profileData.avatar}
                  alt="Kartik Chavhan"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h4 className="text-lg sm:text-xl font-heading font-black text-white tracking-tight">
                    {profileData.name}
                  </h4>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="Verified candidate"></span>
                </div>
                <p className="text-xs font-semibold text-cyan-400 font-mono">
                  {profileData.title}
                </p>
                <p className="text-xs text-slate-400">
                  {profileData.location} &bull; Full Stack Specialist
                </p>
                <div className="pt-1.5 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="text-[11px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
                    ✓ Verified Candidate
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 px-2.5 py-0.5 rounded-full">
                    8.20 CGPA
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Resume Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                  <Building2 size={18} />
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white">Current Employment</h4>
                </div>
                <p className="text-xs text-slate-200 font-semibold">Gavkari Agro Producer Co. Ltd</p>
                <p className="text-xs text-slate-400 mt-0.5">Full Stack Developer &bull; Pune</p>
                <p className="text-[11px] font-mono text-cyan-400 mt-1">Aug 2023 – Present</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                  <GraduationCap size={18} />
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white">Engineering Degree</h4>
                </div>
                <p className="text-xs text-slate-200 font-semibold">GCOE Chandrapur</p>
                <p className="text-xs text-slate-400 mt-0.5">B.Tech Computer Science & Engg</p>
                <p className="text-[11px] font-mono text-emerald-400 mt-1">CGPA: 8.20 &bull; 2022 – 2026</p>
              </div>
            </div>

            {/* Education Quick Breakdown */}
            <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800/90 space-y-3.5 shadow-xl">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-heading font-bold text-white flex items-center gap-2">
                  <GraduationCap size={18} className="text-cyan-400" />
                  Academic Records
                </h4>
                <a
                  href="#education"
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1"
                >
                  View Details <ArrowRight size={12} />
                </a>
              </div>

              <div className="space-y-2.5">
                {(educationList || []).map((edu) => (
                  <div key={edu.id} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate">
                        {edu.institution}
                      </div>
                      <div className="text-[11px] text-slate-400 italic truncate">
                        {edu.degree}
                      </div>
                    </div>
                    <span className="shrink-0 text-xs font-mono font-bold text-cyan-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {edu.grade}
                    </span>
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
