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
    <section id="projects" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Architected Solutions"
          title="Projects"
          subtitle="Enterprise client implementations and independent personal engineering projects."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 scale-[1.02]'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Layers size={14} />
            <span>All Projects ({(projects || []).length})</span>
          </button>

          <button
            onClick={() => setFilter('professional')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'professional'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 scale-[1.02]'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Briefcase size={14} />
            <span>Professional Projects ({(resumeProjects || []).length})</span>
          </button>

          <button
            onClick={() => setFilter('personal')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'personal'
                ? 'bg-violet-500 text-white shadow-md shadow-violet-500/20 scale-[1.02]'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <UserCheck size={14} />
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
