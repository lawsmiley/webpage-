import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight } from 'react-icons/fa';
import { HERO } from '../constants/content';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef([]);
  const bgOrbsRef = useRef([]);
  const cursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax cursor effect
      const handleMouseMove = (e) => {
        cursorRef.current.x = (e.clientX / window.innerWidth - 0.5) * 20;
        cursorRef.current.y = (e.clientY / window.innerHeight - 0.5) * 20;
        
        bgOrbsRef.current.forEach((orb, index) => {
          if (!orb) return;
          const speed = (index + 1) * 0.3;
          gsap.to(orb, {
            x: cursorRef.current.x * speed,
            y: cursorRef.current.y * speed,
            duration: 1,
            ease: 'power2.out',
          });
        });
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Create master timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Animate background orbs with enhanced effects
      bgOrbsRef.current.forEach((orb, index) => {
        if (!orb) return;
        gsap.from(orb, {
          scale: 0,
          opacity: 0,
          duration: 2,
          delay: index * 0.3,
          ease: 'power2.out',
        });
        
        // Enhanced pulsing animation
        gsap.to(orb, {
          scale: 1.15,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });

        // Rotation animation
        gsap.to(orb, {
          rotation: 360,
          duration: 20 + index * 5,
          repeat: -1,
          ease: 'none',
        });
      });

      // Enhanced title animation with magnetic effect
      const titleWords = titleRef.current?.querySelectorAll('.title-word');
      if (titleWords && titleWords.length > 0) {
        tl.from(titleWords, {
          opacity: 0,
          y: 100,
          rotationX: -90,
          transformOrigin: '50% 50% -50',
          stagger: {
            amount: 0.5,
            from: 'start',
          },
          duration: 1.2,
          ease: 'power3.out',
        });

        // Magnetic hover effect on title words
        titleWords.forEach((word) => {
          word.addEventListener('mouseenter', () => {
            gsap.to(word, {
              scale: 1.1,
              y: -5,
              duration: 0.3,
              ease: 'back.out(1.7)',
            });
          });

          word.addEventListener('mouseleave', () => {
            gsap.to(word, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      }

      // Enhanced subtitle animation
      if (subtitleRef.current) {
        tl.from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.6'
        );

        // Subtle floating animation
        gsap.to(subtitleRef.current, {
          y: -5,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }

          // Enhanced button animations with magnetic effect
          const buttons = buttonsRef.current?.querySelectorAll('a');
          if (buttons && buttons.length > 0) {
            tl.from(
              buttons,
              {
                opacity: 0,
                scale: 0.5,
                y: 50,
                rotation: -10,
                stagger: {
                  amount: 0.3,
                  from: 'start',
                },
                duration: 0.8,
                ease: 'back.out(2)',
              },
              '-=0.4'
            );

            // Enhanced hover effects (without magnetic to avoid click interference)
            buttons.forEach((button) => {
              // Ensure button is always clickable
              button.style.pointerEvents = 'auto';
              button.style.cursor = 'pointer';
              button.style.position = 'relative';
              button.style.zIndex = '30';

              button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                  scale: 1.08,
                  y: -5,
                  rotation: 2,
                  duration: 0.4,
                  ease: 'back.out(1.7)',
                });
                
                const arrow = button.querySelector('svg');
                if (arrow) {
                  gsap.to(arrow, {
                    x: 8,
                    rotation: 360,
                    duration: 0.5,
                    ease: 'power2.out',
                  });
                }
              });

              button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                  scale: 1,
                  y: 0,
                  rotation: 0,
                  duration: 0.4,
                  ease: 'power2.out',
                });
                
                const arrow = button.querySelector('svg');
                if (arrow) {
                  gsap.to(arrow, {
                    x: 0,
                    rotation: 0,
                    duration: 0.4,
                    ease: 'power2.out',
                  });
                }
              });
            });
          }

      // Enhanced stats animation with counter and glow
      statsRef.current.forEach((stat, index) => {
        if (!stat) return;
        const numberEl = stat.querySelector('.stat-number');
        if (!numberEl) return;

        const number = numberEl.textContent;
        const isPercentage = number.includes('%');
        const numericValue = parseFloat(number.replace(/[^0-9.]/g, ''));

        gsap.from(stat, {
          opacity: 0,
          scale: 0.3,
          y: 60,
          rotation: -180,
          duration: 1,
          delay: 1 + index * 0.15,
          ease: 'back.out(2)',
        });

        // Counter animation
        if (!isNaN(numericValue)) {
          gsap.from(
            { value: 0 },
            {
              value: numericValue,
              duration: 2.5,
              delay: 1.2 + index * 0.15,
              ease: 'power2.out',
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

        // Pulse glow effect
        gsap.to(stat, {
          boxShadow: `0 0 30px ${index % 2 === 0 ? 'rgba(239, 68, 68, 0.6)' : 'rgba(59, 130, 246, 0.6)'}`,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0 grid-bg particle-bg"
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={(el) => (bgOrbsRef.current[0] = el)}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent rounded-full blur-3xl"
        ></div>
        <div
          ref={(el) => (bgOrbsRef.current[1] = el)}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-l from-secondary/30 via-secondary/20 to-transparent rounded-full blur-3xl"
        ></div>
        <div
          ref={(el) => (bgOrbsRef.current[2] = el)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent rounded-full blur-3xl"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center">
          {/* Enhanced Main Heading */}
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-press-start mb-6 leading-tight tracking-tight"
          >
            <span className="title-word inline-block text-white">We Build</span>
            <br />
            <span className="title-word inline-block guild-gradient drop-shadow-[0_0_30px_rgba(59,130,246,0.8)] glow-text-secondary">
              Futuristic
            </span>{' '}
            <span className="title-word inline-block text-white">Web & Mobile</span>
            <br />
            <span className="title-word inline-block guild-gradient drop-shadow-[0_0_30px_rgba(139,92,246,0.8)] glow-text-secondary">
              Experiences
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            A futuristic tech agency crafting powerful digital experiences.
          </p>

          {/* Enhanced CTA Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20"
            style={{ pointerEvents: 'auto' }}
          >
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary via-red-600 to-primary text-white font-arcade font-bold rounded-xl overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_0_50px_rgba(239,68,68,0.8)] flex items-center gap-2 inline-block btn-primary cursor-pointer"
              style={{ pointerEvents: 'auto', zIndex: 30, position: 'relative', cursor: 'pointer' }}
            >
              <span className="relative z-10">Build With The Guild</span>
              <FaArrowRight className="relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-primary to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out pointer-events-none"></div>
            </Link>

            <Link
              to="/portfolio"
              className="px-8 py-4 bg-gradient-to-r from-secondary/20 via-blue-600/20 to-secondary/20 border-2 border-secondary text-secondary font-arcade font-bold rounded-xl backdrop-blur-sm hover:bg-gradient-to-r hover:from-secondary hover:via-blue-600 hover:to-secondary hover:text-white transition-all duration-500 ease-out hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] glass-card cursor-pointer"
              style={{ pointerEvents: 'auto', zIndex: 30, position: 'relative', cursor: 'pointer' }}
            >
              View Our Work
            </Link>
          </div>

          {/* Enhanced Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {HERO.stats.map((stat, index) => (
              <div
                key={index}
                ref={(el) => (statsRef.current[index] = el)}
                className="text-center glass-card rounded-xl p-6 card-hover"
              >
                <div
                  className={`stat-number text-3xl md:text-4xl font-press-start mb-2 ${
                    index % 2 === 0 ? 'text-primary glow-text-primary' : 'text-secondary glow-text-secondary'
                  }`}
                >
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-400 font-arcade">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
