import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <EnvelopeIcon className="w-6 h-6 text-apple-blue hover:text-blue-600" />
          </a>
          <a href="https://x.com/fanuel_debebe" target="_blank" rel="noreferrer">
            <UserGroupIcon className="w-6 h-6 text-apple-blue hover:text-blue-600" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
