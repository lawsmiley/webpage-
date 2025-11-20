import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaBullhorn } from 'react-icons/fa';
import { SERVICES } from '../constants/content';

const Services = () => {
  const iconMap = {
    'FaCode': <FaCode size={40} />,
    'FaPaintBrush': <FaPaintBrush size={40} />,
    'FaBullhorn': <FaBullhorn size={40} />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-light/30 to-transparent"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="text-primary drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">{SERVICES.heading.title.split(' ')[0]}</span> <span className="text-secondary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">{SERVICES.heading.title.split(' ')[1]}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {SERVICES.heading.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.items.map((service, index) => {
            const isRed = index % 2 === 0;
            const colorClass = isRed ? 'text-primary' : 'text-secondary';
            const borderClass = isRed ? 'border-primary/20 hover:border-primary/50 hover:shadow-neon' : 'border-secondary/20 hover:border-secondary/50 hover:shadow-blue-glow';
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -15, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group relative bg-gradient-to-br from-dark-light via-dark-light to-dark border rounded-2xl p-8 transition-all duration-500 ease-out ${borderClass} backdrop-blur-sm overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isRed ? 'bg-gradient-to-br from-primary/5 to-transparent' : 'bg-gradient-to-br from-secondary/5 to-transparent'}`}></div>
                {/* Icon */}
                <div className={`relative z-10 ${colorClass} mb-6 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 ${isRed ? 'drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]'}`}>
                  {iconMap[service.icon]}
                </div>

                {/* Title */}
                <h3 className={`relative z-10 text-2xl font-bold mb-4 group-hover:${colorClass} transition-colors duration-300`}>
                  {service.title}
                </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="relative z-10 space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300 group/item">
                    <span className={`w-2 h-2 ${isRed ? 'bg-primary' : 'bg-secondary'} rounded-full mr-3 group-hover/item:scale-150 transition-transform`}></span>
                    <span className="group-hover/item:translate-x-1 transition-transform">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-xl ${isRed ? 'bg-primary/5' : 'bg-secondary/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

