import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaBullhorn } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode size={40} />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and more. Fast, scalable, and secure.',
      features: ['React & Next.js', 'Responsive Design', 'API Integration', 'Performance Optimization'],
    },
    {
      icon: <FaPaintBrush size={40} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love. We create experiences that are both functional and delightful.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: <FaBullhorn size={40} />,
      title: 'Branding',
      description: 'Stand out from the crowd with a unique brand identity. Logos, color schemes, and complete brand guidelines.',
      features: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Style Guides'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We offer comprehensive solutions to bring your ideas to life
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-dark-light border border-primary/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-neon"
            >
              {/* Icon */}
              <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

