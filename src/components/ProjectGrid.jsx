import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { PROJECTS } from '../constants/content';

const ProjectGrid = ({ allProjects = false }) => {
  const projects = allProjects ? PROJECTS.items : PROJECTS.items.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          variants={cardVariants}
          whileHover={{ y: -15, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group relative bg-gradient-to-br from-dark via-dark-light to-dark border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 ease-out hover:shadow-[0_20px_50px_rgba(239,68,68,0.3)]"
        >
          <div className="relative h-48 md:h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-2 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-700"></div>
            
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.link}
                className="p-3 bg-primary text-white rounded-full hover:bg-red-600 transition-colors"
                aria-label="View project"
              >
                <FaExternalLinkAlt size={20} />
              </a>
              <a
                href={project.github}
                className="p-3 bg-secondary text-white rounded-full hover:bg-blue-600 transition-colors"
                aria-label="View on GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => {
                const isRed = idx % 2 === 0;
                return (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-sm ${isRed ? 'bg-primary/10 text-primary border-primary/30' : 'bg-secondary/10 text-secondary border-secondary/30'} border rounded-full`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;

