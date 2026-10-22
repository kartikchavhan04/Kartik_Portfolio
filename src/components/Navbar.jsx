import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Download, ArrowUpRight, Code2 } from 'lucide-react';
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

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3 shadow-lg shadow-black/30' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Avatar */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Kartik Chavhan Portfolio Home"
          >
            <div className="relative w-10 h-10 rounded-full border border-cyan-500/40 group-hover:border-cyan-300 transition-all shadow-sm overflow-hidden shrink-0">
              <img
                src={profileData.avatar}
                alt="Kartik Chavhan"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-950 animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                Kartik Chavhan
              </span>
              <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Python Full Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/70 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 hover:border-slate-600 transition-all shadow-sm"
              title="Preview interactive resume"
            >
              <FileText size={14} className="text-cyan-400" />
              <span>Resume</span>
            </button>

            <a
              href={profileData.resumeUrl}
              download="Kartik_Chavhan_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download size={14} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-xl text-cyan-400 bg-slate-900/80 border border-slate-800 sm:hidden"
              title="View Resume"
              aria-label="View Resume"
            >
              <FileText size={18} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-5 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-1.5 pt-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-cyan-300 bg-cyan-500/15 border border-cyan-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-slate-500">→</span>
                  </a>
                );
              })}

              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700"
                >
                  <FileText size={14} className="text-cyan-400" />
                  View Resume
                </button>
                <a
                  href={profileData.resumeUrl}
                  download="Kartik_Chavhan_Resume.pdf"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400"
                >
                  <Download size={14} />
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
