import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skills';
import { Layers, Server, Layout, Database, ShieldCheck, Cpu } from 'lucide-react';

const filterTabs = [
  { id: 'all', label: 'All Domains', icon: Layers },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'frontend', label: 'Frontend', icon: Layout },
  { id: 'databases', label: 'Databases', icon: Database },
  { id: 'api_security', label: 'API & Security', icon: ShieldCheck },
  { id: 'devops', label: 'DevOps & Tools', icon: Cpu },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Repertoire"
          title="Skills & Technologies"
          subtitle="A categorized inventory of verified technical proficiencies. Each technology listed represents real project implementation and interview readiness."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 scale-[1.02]'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon size={15} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, index) => (
              <SkillCard key={category.id} category={category} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Integrity Notice */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400">
            <strong className="text-cyan-400">Content Integrity:</strong> All technical skills presented above are backed by actual codebase implementations across web projects, enterprise work at Gavkari Agro, or academic degree curricula. No fabricated percentages or unverified claims.
          </p>
        </div>
      </div>
    </section>
  );
}
