import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaPaintBrush, FaBullhorn, FaMobileAlt } from 'react-icons/fa';
import { SERVICES } from '../constants/content';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const iconMap = {
    FaCode: <FaCode size={40} />,
    FaPaintBrush: <FaPaintBrush size={40} />,
    FaBullhorn: <FaBullhorn size={40} />,
    FaMobileAlt: <FaMobileAlt size={40} />,
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced header animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Enhanced stagger animation for cards with magnetic effect
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const icon = card.querySelector('.service-icon');
        const overlay = card.querySelector('.service-overlay');
        const title = card.querySelector('.service-title');
        const isRed = index % 2 === 0;

        gsap.from(card, {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotationY: -20,
          rotationX: 10,
          duration: 1,
          delay: index * 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        // Magnetic hover effect
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(card, {
            rotationY: x * 0.05,
            rotationX: -y * 0.05,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        // Enhanced hover effects
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -20,
            scale: 1.05,
            rotationY: 0,
            rotationX: 0,
            z: 50,
            duration: 0.5,
            ease: 'power2.out',
          });

          if (icon) {
            gsap.to(icon, {
              scale: 1.4,
              rotation: 360,
              y: -10,
              duration: 0.6,
              ease: 'back.out(2)',
            });
          }

          if (overlay) {
            gsap.to(overlay, {
              opacity: 1,
              duration: 0.5,
            });
          }

          if (title) {
            gsap.to(title, {
              scale: 1.05,
              y: -3,
              duration: 0.4,
              ease: 'power2.out',
            });
          }

          // Animate feature items with stagger
          const features = card.querySelectorAll('.feature-item');
          gsap.to(features, {
            x: 10,
            opacity: 1,
            scale: 1.05,
            duration: 0.4,
            stagger: 0.08,
            ease: 'back.out(1.7)',
          });

          // Glow effect
          gsap.to(card, {
            boxShadow: isRed 
              ? '0 20px 60px rgba(239, 68, 68, 0.4), 0 0 40px rgba(239, 68, 68, 0.2)'
              : '0 20px 60px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)',
            duration: 0.5,
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            z: 0,
            boxShadow: 'none',
            duration: 0.5,
            ease: 'power2.out',
          });

          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
            });
          }

          if (overlay) {
            gsap.to(overlay, {
              opacity: 0,
              duration: 0.5,
            });
          }

          if (title) {
            gsap.to(title, {
              scale: 1,
              y: 0,
              duration: 0.4,
              ease: 'power2.out',
            });
          }

          const features = card.querySelectorAll('.feature-item');
          gsap.to(features, {
            x: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 md:py-32 relative overflow-hidden particle-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-light/40 to-transparent"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/15 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-secondary/15 via-secondary/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-press-start mb-4 tracking-tight">
            <span className="text-primary glow-text-primary drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]">{SERVICES.heading.title.split(' ')[0]}</span>{' '}
            <span className="text-secondary glow-text-secondary drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">{SERVICES.heading.title.split(' ')[1]}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-arcade">
            {SERVICES.heading.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.items.map((service, index) => {
            const isRed = index % 2 === 0;
            const colorClass = isRed ? 'text-primary' : 'text-secondary';
            const borderClass = isRed 
              ? 'border-primary/30 hover:border-primary/70' 
              : 'border-secondary/30 hover:border-secondary/70';
            
            return (
              <div
                key={service.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`group relative glass-card rounded-2xl p-8 transition-all duration-500 ease-out ${borderClass} overflow-hidden cursor-pointer card-hover`}
                style={{ perspective: '1000px' }}
              >
                <div className={`service-overlay absolute inset-0 opacity-0 ${isRed ? 'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent' : 'bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent'} transition-opacity duration-500`}></div>
                
                <div className={`service-icon relative z-10 ${colorClass} mb-6 transform transition-all duration-500 ${isRed ? 'drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]' : 'drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]'}`}>
                  {iconMap[service.icon]}
                </div>

                <h3 className={`service-title relative z-10 text-2xl font-press-start mb-4 ${colorClass} transition-colors duration-300`}>
                  {service.title}
                </h3>

                <p className="relative z-10 text-gray-300 mb-6 leading-relaxed font-arcade">
                  {service.description}
                </p>

                <ul className="relative z-10 space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item flex items-center text-sm text-gray-300 opacity-0 font-arcade">
                      <span className={`w-2.5 h-2.5 ${isRed ? 'bg-primary' : 'bg-secondary'} rounded-full mr-3 ${isRed ? 'glow-primary' : 'glow-secondary'}`} style={{ boxShadow: isRed ? '0 0 10px rgba(239, 68, 68, 0.6)' : '0 0 10px rgba(59, 130, 246, 0.6)' }}></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={`absolute inset-0 rounded-xl ${isRed ? 'bg-primary/10' : 'bg-secondary/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
