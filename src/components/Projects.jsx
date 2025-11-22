import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { PROJECTS } from '../constants/content';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

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

      // Enhanced stagger animation for project cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const image = card.querySelector('.project-image');
        const overlay = card.querySelector('.project-overlay');
        const links = card.querySelectorAll('.project-link');
        const tags = card.querySelectorAll('.project-tag');
        const title = card.querySelector('.project-title');

        gsap.from(card, {
          opacity: 0,
          scale: 0.85,
          y: 80,
          rotationX: -15,
          duration: 1,
          delay: index * 0.1,
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
            rotationY: x * 0.03,
            rotationX: -y * 0.03,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        // Enhanced hover effects
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -20,
            scale: 1.03,
            rotationY: 0,
            rotationX: 0,
            z: 50,
            duration: 0.5,
            ease: 'power2.out',
          });

          if (image) {
            gsap.to(image, {
              scale: 1.2,
              rotation: 3,
              duration: 0.7,
              ease: 'power2.out',
            });
          }

          if (overlay) {
            gsap.to(overlay, {
              opacity: 0.95,
              duration: 0.5,
            });
          }

          if (title) {
            gsap.to(title, {
              scale: 1.05,
              y: -5,
              color: '#ef4444',
              duration: 0.4,
              ease: 'power2.out',
            });
          }

          // Animate links with enhanced effect
          gsap.fromTo(
            links,
            {
              scale: 0,
              rotation: -180,
              opacity: 0,
            },
            {
              scale: 1,
              rotation: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.1,
              ease: 'back.out(2)',
            }
          );

          // Animate tags with glow
          gsap.to(tags, {
            scale: 1.15,
            y: -3,
            duration: 0.4,
            stagger: 0.05,
            ease: 'back.out(1.7)',
          });

          // Enhanced glow
          gsap.to(card, {
            boxShadow: '0 25px 70px rgba(239, 68, 68, 0.4), 0 0 50px rgba(59, 130, 246, 0.3)',
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

          if (image) {
            gsap.to(image, {
              scale: 1,
              rotation: 0,
              duration: 0.7,
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
              color: '#ffffff',
              duration: 0.4,
              ease: 'power2.out',
            });
          }

          gsap.to(links, {
            scale: 0,
            rotation: -180,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out',
          });

          gsap.to(tags, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 md:py-32 relative overflow-hidden section-bg">
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-primary/12 via-secondary/6 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gradient-to-br from-secondary/12 via-primary/6 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-press-start mb-4 tracking-tight">
            <span className="text-primary glow-text-primary drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]">{PROJECTS.heading.title.split(' ')[0]}</span>{' '}
            <span className="text-secondary glow-text-secondary drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">{PROJECTS.heading.title.split(' ')[1]}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-arcade text-enhanced">
            {PROJECTS.heading.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.items.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative glass-card rounded-2xl overflow-hidden cursor-pointer card-hover card-border-glow"
              style={{ perspective: '1000px' }}
            >
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-full object-cover"
                />
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-0 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 group-hover:from-primary/25 group-hover:to-secondary/25 transition-all duration-700"></div>
                
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="project-link p-4 bg-primary text-white rounded-full hover:bg-red-600 transition-colors glow-primary"
                    aria-label="View project"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                  <a
                    href={project.github}
                    className="project-link p-4 bg-secondary text-white rounded-full hover:bg-blue-600 transition-colors glow-secondary"
                    aria-label="View on GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-b from-transparent to-dark/50">
                <h3 className="project-title text-2xl font-press-start mb-3 transition-colors text-enhanced">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed font-arcade text-enhanced">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => {
                    const isRed = idx % 2 === 0;
                    return (
                      <span
                        key={idx}
                        className={`project-tag px-4 py-1.5 text-sm font-arcade font-bold ${isRed ? 'bg-primary/15 text-primary border border-primary/40' : 'bg-secondary/15 text-secondary border border-secondary/40'} rounded-full transition-all`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
