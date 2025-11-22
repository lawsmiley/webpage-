import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HERO } from '../constants/content';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for stats with 3D rotation
      statsRef.current.forEach((stat, index) => {
        if (!stat) return;

        const numberEl = stat.querySelector('.stat-number');
        if (!numberEl) return;

        const number = numberEl.textContent;
        const isPercentage = number.includes('%');
        const numericValue = parseFloat(number.replace(/[^0-9.]/g, ''));

        gsap.from(stat, {
          opacity: 0,
          scale: 0.5,
          y: 50,
          rotation: -180,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        // Counter animation
        if (!isNaN(numericValue)) {
          gsap.from(
            { value: 0 },
            {
              value: numericValue,
              duration: 2,
              delay: 0.5 + index * 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: stat,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
              onUpdate: function () {
                if (isPercentage) {
                  numberEl.textContent = Math.round(this.targets()[0].value) + '%';
                } else if (number.includes('+')) {
                  numberEl.textContent = Math.round(this.targets()[0].value) + '+';
                } else {
                  numberEl.textContent = number;
                }
              },
            }
          );
        }

        // Pulse animation on hover
        stat.addEventListener('mouseenter', () => {
          gsap.to(stat, {
            scale: 1.1,
            y: -10,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        stat.addEventListener('mouseleave', () => {
          gsap.to(stat, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {HERO.stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => (statsRef.current[index] = el)}
              className="text-center cursor-pointer"
            >
              <div
                className={`stat-number text-4xl md:text-5xl font-press-start mb-2 ${
                  index % 2 === 0 ? 'text-primary' : 'text-secondary'
                } drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]`}
              >
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
