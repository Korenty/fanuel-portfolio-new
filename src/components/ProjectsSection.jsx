import React from 'react';
import { motion } from 'framer-motion';

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

export default ProjectsSection;
