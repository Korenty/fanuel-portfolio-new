import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ setActiveSection }) => (
  <motion.section 
    id="home" 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-aluminum to-brushed-metal p-6"
  >
    <div className="max-w-7xl mx-auto text-center">
      <motion.h1 
        initial={{ y: 50 }} 
        animate={{ y: 0 }} 
        className="text-6xl md:text-8xl font-bold text-gray-900 mb-4"
      >
        Fanuel Debebe
      </motion.h1>
      <motion.p 
        initial={{ y: 50 }} 
        animate={{ y: 0 }} 
        className="text-xl text-gray-600 mb-8"
      >
        Strategic Leader | Cloud Engineering Visionary | CEO, Bold Endeavor
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => setActiveSection('contact')}
          className="px-8 py-4 bg-apple-blue text-white font-semibold rounded-apple shadow-apple-glow hover:shadow-lg transition-all"
        >
          Connect Now
        </button>
        <button 
          onClick={() => setActiveSection('projects')}
          className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-apple hover:bg-gray-50 transition-all"
        >
          View Projects
        </button>
      </div>
    </div>
  </motion.section>
);

export default HeroSection;
