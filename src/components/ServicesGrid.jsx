import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaPaintBrush, FaBullhorn, FaMobileAlt, FaRobot } from 'react-icons/fa';
import { SERVICES } from '../constants/content';

gsap.registerPlugin(ScrollTrigger);

const ServicesGrid = () => {
  const gridRef = useRef(null);
  const cardsRef = useRef([]);

  const iconMap = {
    FaCode: <FaCode size={40} />,
    FaPaintBrush: <FaPaintBrush size={40} />,
    FaBullhorn: <FaBullhorn size={40} />,
    FaMobileAlt: <FaMobileAlt size={40} />,
    FaMobile: <FaMobileAlt size={40} />,
    FaRobot: <FaRobot size={40} />,
  };

  // Extended services for full page
  const allServices = [
    ...SERVICES.items,
    {
      id: "ai-automation",
      icon: "FaRobot",
      title: "AI & Automation",
      description: "Intelligent automation solutions and AI-powered features to streamline workflows and enhance user experiences.",
      features: [
        "AI Integration",
        "Process Automation",
        "Machine Learning",
        "Chatbots & Assistants"
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for cards with 3D effect
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const icon = card.querySelector('.service-icon');
        const overlay = card.querySelector('.service-overlay');
        const isRed = index % 2 === 0;

        gsap.from(card, {
          opacity: 0,
          y: 80,
          scale: 0.9,
          rotationY: -15,
          duration: 0.8,
          delay: index * 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        // Enhanced hover effects
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -15,
            scale: 1.03,
            rotationY: 5,
            duration: 0.4,
            ease: 'power2.out',
          });

          if (icon) {
            gsap.to(icon, {
              scale: 1.25,
              rotation: 6,
              duration: 0.4,
              ease: 'back.out(1.7)',
            });
          }

          if (overlay) {
            gsap.to(overlay, {
              opacity: 1,
              duration: 0.4,
            });
          }

          // Animate feature items
          const features = card.querySelectorAll('.feature-item');
          gsap.to(features, {
            x: 5,
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.4,
            ease: 'power2.out',
          });

          if (icon) {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.4,
              ease: 'power2.out',
            });
          }

          if (overlay) {
            gsap.to(overlay, {
              opacity: 0,
              duration: 0.4,
            });
          }

          const features = card.querySelectorAll('.feature-item');
          gsap.to(features, {
            x: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {allServices.map((service, index) => {
        const isRed = index % 2 === 0;
        const colorClass = isRed ? 'text-primary' : 'text-secondary';
        const borderClass = isRed 
          ? 'border-primary/20 hover:border-primary/50 hover:shadow-neon' 
          : 'border-secondary/20 hover:border-secondary/50 hover:shadow-blue-glow';
        
        return (
          <div
            key={service.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`group relative bg-gradient-to-br from-dark-light via-dark-light to-dark border rounded-2xl p-8 transition-all duration-500 ease-out ${borderClass} backdrop-blur-sm overflow-hidden cursor-pointer`}
          >
            <div className={`service-overlay absolute inset-0 opacity-0 ${isRed ? 'bg-gradient-to-br from-primary/5 to-transparent' : 'bg-gradient-to-br from-secondary/5 to-transparent'} transition-opacity duration-500`}></div>
            
            <div className={`service-icon relative z-10 ${colorClass} mb-6 transform transition-all duration-500 ${isRed ? 'drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]'}`}>
              {iconMap[service.icon]}
            </div>

            <h3 className={`relative z-10 text-2xl font-bold mb-4 ${colorClass} transition-colors duration-300`}>
              {service.title}
            </h3>

            <p className="relative z-10 text-gray-400 mb-6 leading-relaxed">
              {service.description}
            </p>

            <ul className="relative z-10 space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="feature-item flex items-center text-sm text-gray-300 opacity-0">
                  <span className={`w-2 h-2 ${isRed ? 'bg-primary' : 'bg-secondary'} rounded-full mr-3`}></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className={`absolute inset-0 rounded-xl ${isRed ? 'bg-primary/5' : 'bg-secondary/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesGrid;
