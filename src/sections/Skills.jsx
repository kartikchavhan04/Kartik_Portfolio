import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skills';
import { Layers } from 'lucide-react';

export default function Skills() {
  const [selectedId, setSelectedId] = useState('all');

  const filteredCategories =
    selectedId === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedId);

  return (
    <section id="skills" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resume Inventory"
          title="Technical Skills"
          subtitle="Verbatim technical competencies as certified on resume."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedId('all')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              selectedId === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Layers size={13} />
            <span>All Categories ({skillCategories.length})</span>
          </button>

          {skillCategories.map((cat) => {
            const isActive = selectedId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedId(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, index) => (
              <SkillCard key={category.id} category={category} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
