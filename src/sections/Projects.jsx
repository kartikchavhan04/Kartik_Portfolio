import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects, resumeProjects, personalProjects } from '../data/projects';
import { Layers, Briefcase, UserCheck } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = (projects || []).filter((p) => {
    if (filter === 'professional') return !p.isPersonal;
    if (filter === 'personal') return p.isPersonal;
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 bg-dark-900 relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Architected Solutions"
          title="Featured Projects"
          subtitle="Enterprise client implementations at Gavkari Agro and independent community software platforms."
        />

        {/* Filter Tabs - Mobile scrollable, desktop centered */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 mb-12 overflow-x-auto pb-3 pt-1 px-1 no-scrollbar">
          <button
            onClick={() => setFilter('all')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-[1.02]'
                : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Layers size={15} />
            <span>All Projects ({(projects || []).length})</span>
          </button>

          <button
            onClick={() => setFilter('professional')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all ${
              filter === 'professional'
                ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-[1.02]'
                : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Briefcase size={15} />
            <span>Professional Projects ({(resumeProjects || []).length})</span>
          </button>

          <button
            onClick={() => setFilter('personal')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all ${
              filter === 'personal'
                ? 'bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-bold shadow-md shadow-violet-500/25 scale-[1.02]'
                : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <UserCheck size={15} />
            <span>Personal Projects ({(personalProjects || []).length})</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
