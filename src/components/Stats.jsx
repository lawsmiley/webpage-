import React from 'react';
import { motion } from 'framer-motion';
import { HERO } from '../constants/content';

const Stats = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {HERO.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-extrabold mb-2 ${index % 2 === 0 ? 'text-primary' : 'text-secondary'} drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]`}>
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

