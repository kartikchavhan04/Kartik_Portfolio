import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Decorative gradient glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-extrabold text-cyan-400">
                KC
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Kartik Chavhan
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Python Full Stack Developer with 3 years of professional experience in web application development, backend engineering, and REST API development.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Full Stack Developer &bull; Pune, Maharashtra
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  Summary
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenResume}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  View Resume
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors break-all"
                >
                  <Mail size={16} className="shrink-0" /> {profileData.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors font-mono"
                >
                  <Phone size={16} className="shrink-0" /> {profileData.phone}
                </a>
              </li>
              <li>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors"
                >
                  <LinkedinIcon size={16} className="shrink-0" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <GithubIcon size={16} className="shrink-0" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Kartik Chavhan &bull; Resume Verified Digital Profile
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
