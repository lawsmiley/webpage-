import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub size={24} />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin size={24} />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter size={24} />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaDribbble size={24} />, url: 'https://dribbble.com', label: 'Dribbble' },
  ];

  const footerLinks = [
    { name: 'Home', link: '#home' },
    { name: 'Services', link: '#services' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ];

  const scrollToSection = (e, link) => {
    e.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-light border-t border-primary/20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              <span className="text-primary">Kushal</span>
              <span className="text-white"> & Co.</span>
            </motion.div>
            <p className="text-gray-400 mb-4">
              Creating digital experiences that matter. Web development and design services for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    onClick={(e) => scrollToSection(e, item.link)}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Kushal & Co. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <FaHeart className="text-primary" /> by Kushal & Co.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

