import React from 'react';
import { motion } from 'framer-motion';

const GuildStory = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-light/30 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="text-white">The</span>{' '}
            <span className="guild-gradient">Guild Story</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="space-y-6 text-lg text-gray-300 leading-relaxed"
        >
          <p>
            In the digital realm where innovation meets craftsmanship, <span className="text-primary font-semibold">The Guild</span> was forged. 
            We are not just developers or designers—we are digital artisans, united by a shared vision of creating 
            <span className="text-secondary font-semibold"> futuristic experiences</span> that push boundaries.
          </p>
          
          <p>
            Like the guilds of old, we value <span className="text-primary">mastery</span>, <span className="text-secondary">precision</span>, and 
            the relentless pursuit of excellence. Each project is a testament to our commitment—a carefully crafted 
            digital artifact that stands the test of time.
          </p>
          
          <p>
            We build for the future. Every line of code, every pixel placed, every interaction designed is done with 
            the vision of creating something that doesn't just work—it <span className="guild-gradient font-semibold">inspires</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuildStory;

