import React from 'react';
import { motion } from 'framer-motion';
import { FaHammer, FaCrosshairs, FaLightbulb } from 'react-icons/fa';

const ValuesSection = () => {
  const values = [
    {
      title: "Craftsmanship",
      icon: <FaHammer size={40} />,
      description: "Every project is a masterpiece. We take pride in our work, ensuring every detail is perfect and every solution is elegant.",
      color: "primary"
    },
    {
      title: "Precision",
      icon: <FaCrosshairs size={40} />,
      description: "Accuracy matters. We measure twice, code once. Every decision is deliberate, every implementation is precise.",
      color: "secondary"
    },
    {
      title: "Innovation",
      icon: <FaLightbulb size={40} />,
      description: "We don't follow trends—we set them. Constantly exploring new technologies and pushing the boundaries of what's possible.",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
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
            <span className="guild-gradient">Values</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const isRed = value.color === 'primary';
            const colorClass = isRed ? 'text-primary' : 'text-secondary';
            const borderClass = isRed 
              ? 'border-primary/20 hover:border-primary/50' 
              : 'border-secondary/20 hover:border-secondary/50';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group bg-gradient-to-br from-dark-light via-dark-light to-dark border rounded-2xl p-8 transition-all duration-500 ease-out ${borderClass} backdrop-blur-sm`}
              >
                <div className={`${colorClass} mb-6 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 ${isRed ? 'drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]'}`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

