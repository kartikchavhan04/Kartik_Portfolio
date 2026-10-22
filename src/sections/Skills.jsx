import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skills';
import { Layers, Sparkles } from 'lucide-react';

export default function Skills() {
  const [selectedId, setSelectedId] = useState('all');

  const filteredCategories =
    selectedId === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedId);

  return (
    <section id="skills" className="py-20 sm:py-28 bg-dark-900 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resume Inventory"
          title="Technical Skills"
          subtitle="Direct technical competencies as verified and certified in Kartik Chavhan's official curriculum."
        />

        {/* Category Filter Pills - Mobile scrollable, desktop centered */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-12 overflow-x-auto pb-3 pt-1 px-1 no-scrollbar">
          <button
            onClick={() => setSelectedId('all')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all ${
              selectedId === 'all'
                ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold shadow-md shadow-cyan-500/25 scale-[1.02]'
                : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Layers size={14} />
            <span>All Categories ({skillCategories.length})</span>
          </button>

          {skillCategories.map((cat) => {
            const isActive = selectedId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedId(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold shadow-md shadow-cyan-500/25 scale-[1.02]'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
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
