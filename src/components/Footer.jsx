import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaHeart } from 'react-icons/fa';
import { FOOTER } from '../constants/content';

const Footer = () => {
  const iconMap = {
    'FaGithub': <FaGithub size={24} />,
    'FaLinkedin': <FaLinkedin size={24} />,
    'FaTwitter': <FaTwitter size={24} />,
    'FaDribbble': <FaDribbble size={24} />,
  };


  return (
    <footer className="relative overflow-hidden bg-gradient-to-t from-dark via-dark-light to-transparent border-t border-white/5">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              <span className="text-primary">{FOOTER.brand.name.split(' ')[0]}</span>
              <span className="text-secondary"> {FOOTER.brand.name.split(' ')[1]} {FOOTER.brand.name.split(' ')[2]}</span>
            </motion.div>
            <p className="text-gray-400 mb-4">
              {FOOTER.brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">{FOOTER.links.title}</h3>
            <ul className="space-y-2">
              {FOOTER.links.items.map((item, index) => {
                const pathMap = {
                  '#home': '/',
                  '#services': '/services',
                  '#projects': '/portfolio',
                  '#contact': '/contact'
                };
                const path = pathMap[item.link] || item.link;
                return (
                  <li key={index}>
                    <Link
                      to={path}
                      className="text-gray-400 hover:text-secondary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">{FOOTER.social.title}</h3>
            <div className="flex gap-4">
              {FOOTER.social.items.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all duration-300"
                >
                  {iconMap[social.icon]}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {FOOTER.copyright.year} {FOOTER.copyright.text}
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            {FOOTER.copyright.madeWith} <FaHeart className="text-primary animate-pulse" /> by <span className="text-primary">{FOOTER.brand.name.split(' ')[0]}</span><span className="text-secondary"> {FOOTER.brand.name.split(' ')[1]}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

