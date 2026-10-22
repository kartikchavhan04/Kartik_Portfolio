import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  FileText,
  Download,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Phone,
  Mail,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-2.5 sm:py-3 shadow-xl shadow-black/40'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Photo Avatar */}
            <a
              href="#home"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Kartik Chavhan Portfolio Home"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 via-teal-400 to-indigo-500 group-hover:scale-105 transition-transform shadow-md shadow-cyan-500/20 shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950">
                  <img
                    src={profileData.avatar}
                    alt="Kartik Chavhan"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-slate-950 animate-pulse" title="Available for opportunities"></div>
              </div>

              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-heading font-black text-white group-hover:text-cyan-300 transition-colors tracking-tight flex items-center gap-1.5">
                  Kartik Chavhan
                </span>
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Python Full Stack Developer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-950/70 border border-slate-800/90 px-3 py-1.5 rounded-full backdrop-blur-xl shadow-inner shadow-black/60">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 shadow-sm shadow-cyan-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-all shadow-sm"
                title="Preview interactive resume"
              >
                <FileText size={14} className="text-cyan-400" />
                <span>Resume</span>
              </button>

              <a
                href={profileData.resumeUrl}
                download="Kartik_Chavhan_Resume.pdf"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:opacity-95 shadow-md shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download size={14} />
                <span>Download CV</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenResume}
                className="p-2.5 rounded-xl text-cyan-400 bg-slate-900/80 border border-slate-800 sm:hidden shadow-sm active:scale-95 transition-transform"
                title="View Resume"
                aria-label="View Resume"
              >
                <FileText size={18} />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-200 hover:text-white bg-slate-900/90 border border-slate-800 shadow-sm active:scale-95 transition-transform"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={22} className="text-cyan-400" /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
            />

            {/* Slide-down Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-16 left-0 right-0 z-50 lg:hidden bg-slate-950/98 border-b border-slate-800/90 px-5 pt-3 pb-7 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              {/* User Profile Snippet in Mobile Drawer */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400/50 shrink-0">
                  <img
                    src={profileData.avatar}
                    alt="Kartik Chavhan"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Kartik Chavhan
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </h4>
                  <p className="text-xs text-cyan-400 font-mono">Python Full Stack Developer</p>
                  <p className="text-[11px] text-slate-400">Gavkari Agro Producer Co. Ltd</p>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all touch-target ${
                        isActive
                          ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/30'
                          : 'text-slate-300 hover:text-white hover:bg-slate-900/80'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ArrowRight size={14} className={isActive ? 'text-cyan-400' : 'text-slate-600'} />
                    </a>
                  );
                })}
              </div>

              {/* Action Buttons in Mobile Drawer */}
              <div className="pt-4 mt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold text-slate-200 bg-slate-900 border border-slate-700/80 active:scale-95 transition-transform"
                >
                  <FileText size={15} className="text-cyan-400" />
                  View Resume
                </button>
                <a
                  href={profileData.resumeUrl}
                  download="Kartik_Chavhan_Resume.pdf"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-black text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 shadow-md shadow-cyan-500/20 active:scale-95 transition-transform"
                >
                  <Download size={15} />
                  Download CV
                </a>
              </div>

              {/* Quick Socials in Mobile Drawer */}
              <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-around text-slate-400">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl hover:text-sky-400 bg-slate-900/60 border border-slate-800 flex items-center gap-1.5 text-xs"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl hover:text-white bg-slate-900/60 border border-slate-800 flex items-center gap-1.5 text-xs"
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2.5 rounded-xl hover:text-cyan-400 bg-slate-900/60 border border-slate-800 flex items-center gap-1.5 text-xs"
                >
                  <Mail size={16} />
                  <span>Email</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
