import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CloudIcon, CodeIcon, ServerIcon, UserGroupIcon, MailIcon } from '@heroicons/react/24/outline';

// Navigation
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
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-apple-blue">
          Fanuel D.
        </div>
        <div className="flex space-x-8">
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
      </div>
    </motion.nav>
  );
};

// Hero Section
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

// About Section
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

// Skills Section
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
          <CodeIcon className="w-12 h-12 text-apple-blue mx-auto mb-4" />
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

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: "Personal Profile Grid",
      description: "Responsive profile card with CSS Grid and mobile-first design.",
      link: "https://korenty.github.io/personal-profile-grid/",
      tech: ["HTML5", "CSS Grid", "Tailwind"],
    },
    {
      title: "Cloud Infrastructure Blueprint",
      description: "Scalable web app deployment with Terraform on AWS/Azure.",
      link: "https://github.com/Korenty",
      tech: ["Terraform", "AWS/Azure", "IaC"],
    },
    {
      title: "Recipe Page",
      description: "Semantic HTML structure with headings and image linking.",
      link: "#",
      tech: ["HTML5", "CSS", "Semantic Markup"],
    },
  ];

  return (
    <motion.section id="projects" className="py-20 bg-aluminum">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="apple-card p-6 cursor-pointer hover:shadow-lg" 
              whileHover={{ y: -5 }}
              onClick={() => window.open(project.link, '_blank')}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-apple-blue/10 text-apple-blue text-xs rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with EmailJS or Netlify here
    alert('Message sent! (Demo)');
  };

  return (
    <motion.section id="contact" className="py-20 bg-gradient-to-br from-aluminum to-brushed-metal">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Let's Connect</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-4 border border-gray-300 rounded-apple focus:border-apple-blue focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-4 border border-gray-300 rounded-apple focus:border-apple-blue focus:outline-none"
            required
          />
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows="4"
            className="w-full p-4 border border-gray-300 rounded-apple focus:border-apple-blue focus:outline-none"
            required
          />
          <button type="submit" className="w-full p-4 bg-apple-blue text-white font-semibold rounded-apple hover:bg-blue-600 transition-all">
            Send Message
          </button>
        </form>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://linkedin.com/in/fanuel-seyoum-867382138" target="_blank" rel="noreferrer">
            <MailIcon className="w-6 h-6 text-apple-blue hover:text-blue-600" />
          </a>
          <a href="https://x.com/fanuel_debebe" target="_blank" rel="noreferrer">
            <UserGroupIcon className="w-6 h-6 text-apple-blue hover:text-blue-600" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

// Main App
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <Router>
      <div className="font-sf-pro bg-aluminum text-gray-900 min-h-screen">
        <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HeroSection setActiveSection={setActiveSection} />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/skills" element={<SkillsSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </main>
        <footer className="bg-brushed-metal/50 text-gray-600 text-center p-4">
          &copy; 2025 Fanuel Debebe. Built with React & Vision.
        </footer>
      </div>
    </Router>
  );
};

export default App;
