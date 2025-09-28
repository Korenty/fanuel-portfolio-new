import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => (
  <motion.section id="about" className="py-20 bg-aluminum">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="apple-card p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
          <p className="text-gray-600 mb-6">
            From CEO of Bold Endeavor to aspiring Cloud Engineer via AltSchool Africa. Blending executive leadership with IaC and multi-cloud expertise.
          </p>
          <div className="space-y-2">
            <a href="https://gurshahub.com" target="_blank" rel="noreferrer" className="block text-apple-blue hover:underline">→ Gursha Hub</a>
            <a href="https://gurshamenu.com" target="_blank" rel="noreferrer" className="block text-apple-blue hover:underline">→ Gursha Menu</a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="apple-card p-6">
            <h4 className="font-semibold text-gray-900">CEO, Bold Endeavor Trading Plc</h4>
            <p className="text-gray-600">Strategic planning and operations leadership.</p>
          </div>
          <div className="apple-card p-6">
            <h4 className="font-semibold text-gray-900">AltSchool Africa Engineering</h4>
            <p className="text-gray-600">Mastering AWS, Terraform, and cloud architecture.</p>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default AboutSection;
