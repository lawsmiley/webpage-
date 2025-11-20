import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaBullhorn } from 'react-icons/fa';
import { SERVICES } from '../constants/content';

const ServicesPreview = () => {
  const iconMap = {
    'FaCode': <FaCode size={40} />,
    'FaPaintBrush': <FaPaintBrush size={40} />,
    'FaBullhorn': <FaBullhorn size={40} />,
  };

  // Show first 3 services
  const previewServices = SERVICES.items.slice(0, 3);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-light/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-white">Our</span>{' '}
            <span className="guild-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            {SERVICES.heading.subtitle}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/services"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-red-600 text-white font-bold rounded-xl transition-all duration-500 ease-out hover:shadow-[0_0_40px_rgba(239,68,68,0.6)]"
            >
              View All Services
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewServices.map((service, index) => {
            const isRed = index % 2 === 0;
            const colorClass = isRed ? 'text-primary' : 'text-secondary';
            const borderClass = isRed 
              ? 'border-primary/20 hover:border-primary/50 hover:shadow-neon' 
              : 'border-secondary/20 hover:border-secondary/50 hover:shadow-blue-glow';
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1, 
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className={`group relative bg-gradient-to-br from-dark-light via-dark-light to-dark border rounded-2xl p-8 transition-all duration-500 ease-out ${borderClass} backdrop-blur-sm overflow-hidden`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isRed ? 'bg-gradient-to-br from-primary/5 to-transparent' : 'bg-gradient-to-br from-secondary/5 to-transparent'}`}></div>
                
                <div className={`relative z-10 ${colorClass} mb-6 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 ${isRed ? 'drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]'}`}>
                  {iconMap[service.icon]}
                </div>

                <h3 className={`relative z-10 text-2xl font-bold mb-4 group-hover:${colorClass} transition-colors duration-300`}>
                  {service.title}
                </h3>

                <p className="relative z-10 text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="relative z-10 space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <span className={`w-1.5 h-1.5 ${isRed ? 'bg-primary' : 'bg-secondary'} rounded-full mr-2`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

