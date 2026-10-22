import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Building2,
  FileCheck,
  CheckCircle2,
  Code2,
  Layers,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profileData } from '../data/profile';
import { educationList } from '../data/education';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="py-24 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Summary & Background"
          title="Professional Profile"
          subtitle="Direct extract from verified professional credentials and curriculum."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Summary */}
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

              <p className="text-slate-300 font-normal leading-relaxed text-justify">
                {profileData.summary}
              </p>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2 text-xs font-mono text-cyan-300">
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                  3 Years Experience
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                  30+ REST APIs
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                  Python & Django
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                  React.js & Tailwind
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                  Docker & CI/CD
                </span>
              </div>
            </motion.div>

            {/* Quick Resume Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80">
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                  <Building2 size={20} />
                  <h4 className="text-sm font-bold text-white">Current Employment</h4>
                </div>
                <p className="text-xs text-slate-300 font-medium">Gavkari Agro Producer Company Limited</p>
                <p className="text-xs text-slate-400 mt-1">Full Stack Developer &bull; Pune, Maharashtra</p>
                <p className="text-xs font-mono text-cyan-400 mt-1">Aug 2023 – Present</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80">
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                  <GraduationCap size={20} />
                  <h4 className="text-sm font-bold text-white">Engineering Degree</h4>
                </div>
                <p className="text-xs text-slate-300 font-medium">Government College of Engineering, Chandrapur</p>
                <p className="text-xs text-slate-400 mt-1">B.Tech Computer Science & Engineering</p>
                <p className="text-xs font-mono text-cyan-400 mt-1">CGPA: 8.20 &bull; 2022 – 2026</p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Credentials Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Developer Identity Card with Photo */}
            <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800/90 flex items-center gap-4 shadow-xl">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shrink-0 shadow-lg bg-slate-950">
                <img
                  src={profileData.avatar}
                  alt="Kartik Chavhan"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {profileData.name}
                  </h4>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <p className="text-xs font-semibold text-cyan-400">
                  {profileData.title}
                </p>
                <p className="text-xs text-slate-400">
                  {profileData.location} &bull; Full Stack Specialist
                </p>
                <div className="pt-1 flex items-center gap-2">
                  <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    Verified Candidate
                  </span>
                </div>
              </div>
            </div>

            {/* Education Quick Breakdown */}
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/90 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <GraduationCap size={20} className="text-cyan-400" />
                Education Overview
              </h4>

              <div className="space-y-3">
                {(educationList || []).map((edu) => (
                  <div key={edu.id} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center justify-between text-xs font-bold text-white mb-1">
                      <span>{edu.institution}</span>
                      <span className="font-mono text-cyan-400">{edu.period}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="italic">{edu.degree}</span>
                      <span className="text-slate-400">{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={onOpenResume}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
                >
                  View Full Resume Modal &rarr;
                </button>
                <a
                  href={profileData.resumeUrl}
                  download="Kartik_Chavhan_Resume.pdf"
                  className="text-xs font-mono text-slate-400 hover:text-white"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
