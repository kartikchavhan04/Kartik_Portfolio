import React, { useState } from 'react';
import { Mail, Phone, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';

export default function SocialLinks({ className = '', iconSize = 18, showLabels = false }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      name: 'LinkedIn',
      href: profileData.linkedin,
      icon: LinkedinIcon,
      color: 'hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10',
    },
    {
      name: 'GitHub',
      href: profileData.github,
      icon: GithubIcon,
      color: 'hover:text-white hover:border-slate-500 hover:bg-slate-800/80',
    },
    {
      name: 'Email',
      href: `mailto:${profileData.email}`,
      icon: Mail,
      color: 'hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10',
    },
    {
      name: 'Phone',
      href: `tel:${profileData.phone}`,
      icon: Phone,
      color: 'hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10',
    },
  ];

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target={link.name === 'LinkedIn' || link.name === 'GitHub' ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={link.name}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-slate-300 bg-slate-900/60 border border-slate-800 transition-all duration-200 ${link.color}`}
          >
            <Icon size={iconSize} />
            {showLabels && <span className="text-sm font-medium">{link.name}</span>}
          </a>
        );
      })}

      {/* Copy Email Fast Button */}
      <button
        onClick={handleCopyEmail}
        title="Copy Email Address"
        aria-label="Copy Email Address"
        className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-300 bg-slate-900/60 border border-slate-800 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all duration-200"
      >
        {copied ? <Check size={iconSize} className="text-emerald-400" /> : <Copy size={iconSize} />}
        {showLabels && (
          <span className="text-sm font-medium">
            {copied ? 'Copied!' : 'Copy Email'}
          </span>
        )}
      </button>
    </div>
  );
}
