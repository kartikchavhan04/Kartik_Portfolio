import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects, projectCategories } from '../data/projects';
import { Sparkles, Layers, ShieldCheck, Code2 } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Architected Solutions"
          title="Featured Projects"
          subtitle="Explore full-stack applications, fintech portals, and production systems engineered with clean code, scalable databases, and intuitive user experiences."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 scale-[1.02]'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Callout Footer */}
        <div className="mt-16 p-6 rounded-2xl glass-panel text-center max-w-3xl mx-auto border border-slate-800/80">
          <h4 className="text-base font-bold text-white mb-2 flex items-center justify-center gap-2">
            <Code2 size={18} className="text-cyan-400" />
            Looking for Custom Full Stack Engineering?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mb-4 max-w-xl mx-auto">
            Each project is built adhering to DRY principles, comprehensive input validation, and high testability. Ready to collaborate on your next product release.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
          >
            Start a Conversation &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
