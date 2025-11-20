import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaBullhorn, FaMobile, FaRobot } from 'react-icons/fa';
import { SERVICES } from '../constants/content';

const ServicesGrid = () => {
  const iconMap = {
    'FaCode': <FaCode size={40} />,
    'FaPaintBrush': <FaPaintBrush size={40} />,
    'FaBullhorn': <FaBullhorn size={40} />,
    'FaMobile': <FaMobile size={40} />,
    'FaRobot': <FaRobot size={40} />,
  };

  // Extended services for full page
  const allServices = [
    ...SERVICES.items,
    {
      id: "app-dev",
      icon: "FaMobile",
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. Built with React Native, Flutter, and native technologies.",
      features: [
        "iOS & Android",
        "React Native",
        "Flutter",
        "App Store Optimization"
      ]
    },
    {
      id: "ai-automation",
      icon: "FaRobot",
      title: "AI & Automation",
      description: "Intelligent automation solutions and AI-powered features to streamline workflows and enhance user experiences.",
      features: [
        "AI Integration",
        "Process Automation",
        "Machine Learning",
        "Chatbots & Assistants"
      ]
    }
  ];

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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {allServices.map((service, index) => {
        const isRed = index % 2 === 0;
        const colorClass = isRed ? 'text-primary' : 'text-secondary';
        const borderClass = isRed 
          ? 'border-primary/20 hover:border-primary/50 hover:shadow-neon' 
          : 'border-secondary/20 hover:border-secondary/50 hover:shadow-blue-glow';
        
        return (
          <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover={{ y: -15, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
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

            <ul className="relative z-10 space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-gray-300 group/item">
                  <span className={`w-2 h-2 ${isRed ? 'bg-primary' : 'bg-secondary'} rounded-full mr-3 group-hover/item:scale-150 transition-transform`}></span>
                  <span className="group-hover/item:translate-x-1 transition-transform">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ServicesGrid;

