import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Download,
  AlertCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/Icons';
import SectionHeading from '../components/SectionHeading';
import { profileData } from '../data/profile';

export default function Contact({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.error) setStatus({ ...status, error: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Please complete all required fields before submitting.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Please enter a valid email address.',
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    setTimeout(() => {
      setStatus({
        submitting: false,
        submitted: true,
        error: null,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Direct Details"
          title="Contact"
          subtitle="Direct contact information as verified on resume."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Direct Email Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800/90 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail size={22} />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/80 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Email Address
              </span>
              <a
                href={`mailto:${profileData.email}`}
                className="block text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors mt-1 break-all"
              >
                {profileData.email}
              </a>
            </div>

            {/* Direct Phone Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800/90 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Phone size={22} />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/80 transition-colors"
                >
                  {copiedPhone ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Phone</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Contact Phone
              </span>
              <a
                href={`tel:${profileData.phone}`}
                className="block text-lg font-bold font-mono text-white hover:text-emerald-300 transition-colors mt-1"
              >
                {profileData.phone}
              </a>
            </div>

            {/* LinkedIn & GitHub */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-900/80 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <LinkedinIcon size={22} className="text-sky-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-slate-500 font-mono">&rarr;</span>
                </div>
                <h4 className="text-sm font-bold text-white">LinkedIn</h4>
                <p className="text-xs text-slate-400 mt-1 truncate">
                  kartik-chavhan-5428502a1
                </p>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-600 hover:bg-slate-900/80 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <GithubIcon size={22} className="text-white group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-slate-500 font-mono">&rarr;</span>
                </div>
                <h4 className="text-sm font-bold text-white">GitHub</h4>
                <p className="text-xs text-slate-400 mt-1">kartikchavhan</p>
              </a>
            </div>

            {/* Resume PDF Download Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900/60 border border-cyan-500/30">
              <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                <Sparkles size={16} className="text-cyan-400" />
                Download Verified Resume PDF
              </h4>
              <p className="text-xs text-slate-400 mb-4">
                Exact replica of Kartik Chavhan's official two-page resume document.
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={profileData.resumeUrl}
                  download="Kartik_Chavhan_Resume.pdf"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                >
                  <Download size={14} /> Download PDF
                </a>
                <button
                  onClick={onOpenResume}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800"
                >
                  View In-Browser
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/90 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Direct inquiry to Kartik Chavhan ({profileData.email}).
              </p>

              {status.submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Transmitted!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you. Kartik Chavhan will review your message and reply back shortly.
                  </p>
                  <button
                    onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                    className="mt-2 text-xs font-semibold text-cyan-400 hover:underline"
                  >
                    Send another message &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status.error && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-xs text-rose-300">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Hiring Manager"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. contact@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Python Full Stack Role / Project Discussion"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-sm text-white placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 disabled:opacity-50 transition-all shadow-md shadow-cyan-500/20"
                  >
                    {status.submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
