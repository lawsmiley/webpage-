import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble, FaHeart } from 'react-icons/fa';
import { FOOTER } from '../constants/content';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const brandRef = useRef(null);
  const linksRef = useRef([]);
  const socialRef = useRef([]);

  const iconMap = {
    FaGithub: <FaGithub size={24} />,
    FaLinkedin: <FaLinkedin size={24} />,
    FaTwitter: <FaTwitter size={24} />,
    FaDribbble: <FaDribbble size={24} />,
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced footer entrance
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });

      // Enhanced brand animation
      gsap.from(brandRef.current, {
        opacity: 0,
        scale: 0.8,
        x: -30,
        duration: 0.8,
        delay: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });

      // Enhanced links animation
      linksRef.current.forEach((link, index) => {
        if (link) {
          gsap.from(link, {
            opacity: 0,
            x: -30,
            scale: 0.9,
            duration: 0.6,
            delay: 0.3 + index * 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          });
        }
      });

      // Enhanced social icons
      socialRef.current.forEach((icon, index) => {
        if (!icon) return;

        gsap.from(icon, {
          opacity: 0,
          scale: 0,
          rotation: -360,
          duration: 0.6,
          delay: 0.4 + index * 0.1,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });

        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            y: -8,
            rotation: 360,
            scale: 1.3,
            duration: 0.4,
            ease: 'back.out(1.7)',
          });
        });

        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
          });
        });
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-gradient-to-t from-dark via-dark-light/80 to-transparent border-t border-white/10 section-bg"
    >
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-secondary/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div ref={brandRef}>
            <div className="text-2xl md:text-3xl font-press-start mb-4">
              <span className="text-primary glow-text-primary">{FOOTER.brand.name.split(' ')[0]}</span>
              <span className="text-secondary glow-text-secondary">
                {' '}
                {FOOTER.brand.name.split(' ')[1]} {FOOTER.brand.name.split(' ')[2]}
              </span>
            </div>
            <p className="text-gray-300 mb-4 font-arcade text-enhanced">{FOOTER.brand.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-press-start mb-4 text-secondary glow-text-secondary">{FOOTER.links.title}</h3>
            <ul className="space-y-2">
              {FOOTER.links.items.map((item, index) => {
                const pathMap = {
                  '#home': '/',
                  '#services': '/services',
                  '#projects': '/portfolio',
                  '#contact': '/contact',
                };
                const path = pathMap[item.link] || item.link;
                return (
                  <li key={index} ref={(el) => (linksRef.current[index] = el)}>
                    <Link
                      to={path}
                      className="text-gray-300 hover:text-secondary transition-colors font-arcade text-enhanced"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-press-start mb-4 text-primary glow-text-primary">{FOOTER.social.title}</h3>
            <div className="flex gap-4">
              {FOOTER.social.items.map((social, index) => (
                <a
                  key={index}
                  ref={(el) => (socialRef.current[index] = el)}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 glass-card rounded-lg flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-all duration-300"
                >
                  {iconMap[social.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm text-center md:text-left font-arcade text-enhanced">
            © {FOOTER.copyright.year} {FOOTER.copyright.text}
          </p>
          <p className="text-gray-300 text-sm flex items-center gap-2 font-arcade text-enhanced">
            {FOOTER.copyright.madeWith}{' '}
            <FaHeart className="text-primary animate-pulse glow-text-primary" /> by{' '}
            <span className="text-primary glow-text-primary">{FOOTER.brand.name.split(' ')[0]}</span>
            <span className="text-secondary glow-text-secondary"> {FOOTER.brand.name.split(' ')[1]}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
