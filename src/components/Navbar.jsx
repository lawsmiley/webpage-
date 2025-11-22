import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { NAVBAR } from '../constants/content';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced navbar entrance with blur
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        backdropFilter: 'blur(0px)',
        duration: 1,
        ease: 'power3.out',
      });

      gsap.to(navRef.current, {
        backdropFilter: 'blur(20px)',
        duration: 0.5,
        delay: 0.3,
      });

      // Enhanced logo animation
      gsap.from(logoRef.current, {
        scale: 0,
        rotation: -360,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'back.out(2)',
      });

      // Enhanced nav links with magnetic effect
      linksRef.current.forEach((link, index) => {
        if (link) {
          const linkElement = link.querySelector('a') || link;
          
          gsap.from(linkElement, {
            opacity: 0,
            y: -30,
            scale: 0.8,
            duration: 0.6,
            delay: 0.3 + index * 0.1,
            ease: 'back.out(1.7)',
          });

          // Magnetic hover effect
          linkElement.addEventListener('mouseenter', () => {
            gsap.to(linkElement, {
              scale: 1.1,
              y: -3,
              duration: 0.3,
              ease: 'back.out(1.7)',
            });
          });

          linkElement.addEventListener('mouseleave', () => {
            gsap.to(linkElement, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          // Magnetic follow effect
          linkElement.addEventListener('mousemove', (e) => {
            const rect = linkElement.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(linkElement, {
              x: x * 0.2,
              y: y * 0.2,
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          linkElement.addEventListener('mouseleave', () => {
            gsap.to(linkElement, {
              x: 0,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
            });
          });
        }
      });
    }, navRef);

    return () => ctx.revert();
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      gsap.from(mobileMenuRef.current, {
        opacity: 0,
        y: -30,
        scale: 0.95,
        duration: 0.4,
        ease: 'back.out(1.7)',
      });
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'glass-card border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Enhanced Logo */}
          <div
            ref={logoRef}
            className="text-2xl md:text-3xl font-press-start tracking-tight"
          >
            <Link to="/" className="flex items-center gap-1">
              <span className="text-primary glow-text-primary drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]">
                {NAVBAR.brand.nameAccent}
              </span>
              <span className="text-secondary glow-text-secondary drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
                {NAVBAR.brand.nameRest}
              </span>
            </Link>
          </div>

          {/* Enhanced Desktop Menu */}
          <div className="hidden md:flex space-x-8 relative">
            {navLinks.map((item, index) => (
              <div key={index} ref={(el) => (linksRef.current[index] = el)}>
                <Link
                  to={item.path}
                  className={`transition-all duration-300 font-arcade font-bold relative ${
                    location.pathname === item.path
                      ? 'text-primary glow-text-primary'
                      : 'text-white hover:text-primary'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary glow-primary"></div>
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden glass-card border-t border-primary/20"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all font-arcade font-bold ${
                  location.pathname === item.path
                    ? 'text-primary bg-dark/50 glow-primary'
                    : 'text-white hover:text-primary hover:bg-dark/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
