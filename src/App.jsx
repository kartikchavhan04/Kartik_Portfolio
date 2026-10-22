import React, { useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/25 selection:text-cyan-300">
        {/* Sticky Header Navigation */}
        <Navbar onOpenResume={handleOpenResume} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero onOpenResume={handleOpenResume} />
          <About onOpenResume={handleOpenResume} />
          <Skills />
          <Experience onOpenResume={handleOpenResume} />
          <Projects />
          <Education />
          <Contact onOpenResume={handleOpenResume} />
        </main>

        {/* Footer */}
        <Footer onOpenResume={handleOpenResume} />

        {/* Interactive Resume Modal */}
        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={handleCloseResume}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
