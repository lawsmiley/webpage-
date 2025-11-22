import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaHammer, FaCrosshairs, FaLightbulb } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const ValuesSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const values = [
    {
      title: 'Craftsmanship',
      icon: <FaHammer size={40} />,
      description:
        'Every project is a masterpiece. We take pride in our work, ensuring every detail is perfect and every solution is elegant.',
      color: 'primary',
    },
    {
      title: 'Precision',
      icon: <FaCrosshairs size={40} />,
      description:
        'Accuracy matters. We measure twice, code once. Every decision is deliberate, every implementation is precise.',
      color: 'secondary',
    },
    {
      title: 'Innovation',
      icon: <FaLightbulb size={40} />,
      description:
        "We don't follow trends—we set them. Constantly exploring new technologies and pushing the boundaries of what's possible.",
      color: 'primary',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced header animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Enhanced stagger animation for value cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const icon = card.querySelector('.value-icon');
        const isRed = values[index]?.color === 'primary';

        gsap.from(card, {
          opacity: 0,
          y: 100,
          scale: 0.7,
          rotationY: -25,
          rotationX: 15,
          duration: 1,
          delay: index * 0.15,
          ease: 'back.out(1.7)',
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
            y: -15,
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

          // Enhanced glow
          gsap.to(card, {
            boxShadow: isRed 
              ? '0 25px 70px rgba(239, 68, 68, 0.5), 0 0 50px rgba(239, 68, 68, 0.3)'
              : '0 25px 70px rgba(59, 130, 246, 0.5), 0 0 50px rgba(59, 130, 246, 0.3)',
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
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-press-start mb-4 tracking-tight">
            <span className="text-white text-enhanced">Our</span> <span className="guild-gradient glow-text-secondary">Values</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-arcade text-enhanced">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const isRed = value.color === 'primary';
            const colorClass = isRed ? 'text-primary' : 'text-secondary';
            const borderClass = isRed
              ? 'border-primary/30 hover:border-primary/70'
              : 'border-secondary/30 hover:border-secondary/70';

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`group glass-card rounded-2xl p-8 transition-all duration-500 ease-out ${borderClass} cursor-pointer card-hover card-border-glow`}
                style={{ perspective: '1000px' }}
              >
                <div
                  className={`value-icon ${colorClass} mb-6 transform transition-all duration-500 ${isRed ? 'drop-shadow-[0_0_25px_rgba(239,68,68,0.6)]' : 'drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]'}`}
                >
                  {value.icon}
                </div>
                <h3 className="text-2xl font-press-start mb-4 text-white text-enhanced">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed font-arcade text-enhanced">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
