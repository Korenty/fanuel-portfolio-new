import React from 'react';
import { motion } from 'framer-motion';
import { CloudIcon, CodeBracketIcon, ServerIcon } from '@heroicons/react/24/outline';

const SkillsSection = () => (
  <motion.section id="skills" className="py-20 bg-gradient-to-br from-aluminum to-brushed-metal">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Tech Arsenal</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div className="apple-card p-8 text-center" whileHover={{ scale: 1.02 }}>
          <CloudIcon className="w-12 h-12 text-apple-blue mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Engineering</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>AWS/Azure Fundamentals</p>
            <p>Infrastructure-as-Code (Terraform)</p>
            <p>Networking & Security</p>
          </div>
        </motion.div>
        <motion.div className="apple-card p-8 text-center" whileHover={{ scale: 1.02 }}>
          <ServerIcon className="w-12 h-12 text-apple-blue mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-4">DevOps & Automation</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Linux/Bash Scripting</p>
            <p>Git & GitHub</p>
            <p>Python Fundamentals</p>
          </div>
        </motion.div>
        <motion.div className="apple-card p-8 text-center" whileHover={{ scale: 1.02 }}>
          <CodeBracketIcon className="w-12 h-12 text-apple-blue mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-4">Web Foundations</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>HTML5 & Semantic Markup</p>
            <p>CSS Grid & Flexbox</p>
            <p>React Fundamentals</p>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default SkillsSection;
