import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { PROJECTS } from '../constants/content';

const PortfolioPreview = () => {
  // Show first 3 projects
  const previewProjects = PROJECTS.items.slice(0, 3);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-dark-light/50 to-transparent">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-white">Featured</span>{' '}
            <span className="guild-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Check out some of our recent work
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/portfolio"
              className="inline-block px-8 py-3 bg-gradient-to-r from-secondary to-blue-600 text-white font-bold rounded-xl transition-all duration-500 ease-out hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
            >
              View All Projects
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1, 
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group relative bg-gradient-to-br from-dark via-dark-light to-dark border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 ease-out hover:shadow-[0_20px_50px_rgba(239,68,68,0.3)]"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-2 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
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
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag, idx) => {
                    const isRed = idx % 2 === 0;
                    return (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs ${isRed ? 'bg-primary/10 text-primary border-primary/30' : 'bg-secondary/10 text-secondary border-secondary/30'} border rounded-full`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;

