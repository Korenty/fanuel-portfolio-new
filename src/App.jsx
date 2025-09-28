import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

const NavBar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      className="fixed top-0 z-50 w-full bg-aluminum/90 backdrop-blur-md border-b border-brushed-metal/20"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-apple-blue">
          Fanuel D.
        </div>
        <div className="md:flex md:space-x-8 hidden md:block">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-4 py-2 rounded-apple text-sm font-medium transition-all ${
                activeSection === item.id
                  ? 'text-apple-blue bg-apple-blue/10 shadow-apple-glow'
                  : 'text-gray-600 hover:text-apple-blue hover:bg-apple-blue/5'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        {/* Mobile Menu Button (placeholder) */}
        <div className="md:hidden">
          <button className="px-4 py-2 text-gray-600">Menu</button>
        </div>
      </div>
    </motion.nav>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="font-sf-pro bg-aluminum text-gray-900 min-h-screen">
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="pt-20 p-4">
        {activeSection === 'home' && <HeroSection setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'skills' && <SkillsSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>
      <footer className="bg-brushed-metal/50 text-gray-600 text-center p-4">
        &copy; 2025 Fanuel Debebe. Built with React & Vision.
      </footer>
    </div>
  );
};

export default App;
