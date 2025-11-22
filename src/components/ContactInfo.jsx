import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants/content';
import { FaWhatsapp } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="space-y-8"
    >
      <div>
        <h3 className="text-3xl font-press-start mb-6">{CONTACT.info.heading}</h3>
        <p className="text-gray-400 leading-relaxed mb-8">
          {CONTACT.info.description}
        </p>
      </div>

      <div className="space-y-4">
        {CONTACT.info.details.map((detail, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
              {detail.icon === 'email' && (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
              {detail.icon === 'time' && (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {detail.icon === 'location' && (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </div>
            <div>
              <h4 className="font-semibold mb-1">{detail.label}</h4>
              <p className="text-gray-400">{detail.value}</p>
            </div>
          </div>
        ))}
      </div>

      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-arcade font-bold rounded-xl transition-all duration-500 ease-out hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]"
      >
        <FaWhatsapp size={24} />
        <span>Chat on WhatsApp</span>
      </motion.a>
    </motion.div>
  );
};

export default ContactInfo;

