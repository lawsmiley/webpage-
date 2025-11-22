import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GuildStory = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const paragraphsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced header animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.9,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Enhanced content container animation
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.98,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Enhanced paragraph animations with stagger
      paragraphsRef.current.forEach((para, index) => {
        if (!para) return;

        gsap.from(para, {
          opacity: 0,
          y: 40,
          x: index % 2 === 0 ? -20 : 20,
          duration: 0.9,
          delay: 0.4 + index * 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: para,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });

        // Enhanced highlight words on hover
        const spans = para.querySelectorAll('span[class*="text-primary"], span[class*="text-secondary"], span[class*="guild-gradient"]');
        spans.forEach((span) => {
          span.addEventListener('mouseenter', () => {
            gsap.to(span, {
              scale: 1.15,
              y: -5,
              duration: 0.3,
              ease: 'back.out(1.7)',
            });
          });

          span.addEventListener('mouseleave', () => {
            gsap.to(span, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden section-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-light/40 to-transparent"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-gradient-to-br from-primary/15 via-secondary/8 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-tl from-secondary/15 via-primary/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-press-start mb-4 tracking-tight">
            <span className="text-white text-enhanced">The</span>{' '}
            <span className="guild-gradient glow-text-secondary">Guild Story</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full glow-primary"></div>
        </div>

        <div
          ref={contentRef}
          className="space-y-8 text-lg md:text-xl text-gray-200 leading-relaxed font-arcade"
        >
          <p
            ref={(el) => (paragraphsRef.current[0] = el)}
            className="text-xl md:text-2xl font-light text-enhanced"
          >
            In the vast digital frontier where technology evolves at light-speed,{' '}
            <span className="text-primary font-bold cursor-pointer transition-all duration-300 inline-block glow-text-primary">
              The Guild
            </span>{' '}
            emerged—not as a company, but as a collective of creators.
          </p>

          <p ref={(el) => (paragraphsRef.current[1] = el)} className="text-xl md:text-2xl text-enhanced">
            We are not developers, not designers—we are{' '}
            <span className="text-secondary font-bold cursor-pointer transition-all duration-300 inline-block glow-text-secondary">
              digital craftsmen
            </span>{' '}
            who shape ideas into living experiences.
          </p>

          <p ref={(el) => (paragraphsRef.current[2] = el)} className="text-enhanced">
            Like the legendary guilds of old, we uphold the values of{' '}
            <span className="text-primary font-semibold cursor-pointer transition-all duration-300 inline-block">
              mastery
            </span>
            ,{' '}
            <span className="text-secondary font-semibold cursor-pointer transition-all duration-300 inline-block">
              discipline
            </span>
            , and{' '}
            <span className="text-primary font-semibold cursor-pointer transition-all duration-300 inline-block">
              obsession for detail
            </span>
            . Every project is forged with intention—engineered with precision, designed with soul,
            and crafted to outlast trends.
          </p>

          <div className="py-8 border-l-4 border-primary/60 pl-8 my-8 glass-card rounded-r-xl">
            <p
              ref={(el) => (paragraphsRef.current[3] = el)}
              className="text-2xl md:text-3xl font-bold text-white text-enhanced"
            >
              We build for the{' '}
              <span className="guild-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary font-extrabold cursor-pointer transition-all duration-300 inline-block glow-text-secondary">
                world ahead
              </span>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="group glass-card p-6 rounded-xl card-hover">
              <p ref={(el) => (paragraphsRef.current[4] = el)} className="text-enhanced">
                Our code isn't just written—it's{' '}
                <span className="text-primary font-bold group-hover:scale-110 inline-block transition-transform duration-300 glow-text-primary">
                  engineered
                </span>
                .
              </p>
            </div>

            <div className="group glass-card p-6 rounded-xl card-hover">
              <p ref={(el) => (paragraphsRef.current[5] = el)} className="text-enhanced">
                Our designs aren't just pixels—they're{' '}
                <span className="text-secondary font-bold group-hover:scale-110 inline-block transition-transform duration-300 glow-text-secondary">
                  narratives
                </span>
                .
              </p>
            </div>

            <div className="group glass-card p-6 rounded-xl card-hover">
              <p ref={(el) => (paragraphsRef.current[6] = el)} className="text-enhanced">
                Every interaction isn't just functional—it's a{' '}
                <span className="text-primary font-bold group-hover:scale-110 inline-block transition-transform duration-300 glow-text-primary">
                  moment of delight
                </span>
                .
              </p>
            </div>
          </div>

          <p ref={(el) => (paragraphsRef.current[7] = el)} className="text-xl md:text-2xl text-enhanced">
            We don't create products.
          </p>

          <p
            ref={(el) => (paragraphsRef.current[8] = el)}
            className="text-2xl md:text-3xl font-bold text-center py-8 text-enhanced"
          >
            We create{' '}
            <span className="guild-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary font-extrabold cursor-pointer transition-all duration-300 inline-block glow-text-secondary">
              digital artifacts
            </span>
            —timeless, immersive, and future-ready.
          </p>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p
              ref={(el) => (paragraphsRef.current[9] = el)}
              className="text-2xl md:text-3xl font-bold mb-8 text-center text-enhanced"
            >
              This is <span className="text-primary glow-text-primary">The Guild</span>:
            </p>

            <div
              ref={(el) => (paragraphsRef.current[10] = el)}
              className="space-y-4 text-xl md:text-2xl"
            >
              <p className="group flex items-center gap-4 p-4 rounded-lg glass-card hover:glass-card-hover transition-all duration-300 cursor-pointer">
                <span className="text-primary text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-text-primary">
                  →
                </span>
                <span className="text-enhanced">
                  Where <span className="text-primary font-semibold glow-text-primary">creativity</span> becomes{' '}
                  <span className="text-secondary font-semibold glow-text-secondary">engineering</span>.
                </span>
              </p>
              <p className="group flex items-center gap-4 p-4 rounded-lg glass-card hover:glass-card-hover transition-all duration-300 cursor-pointer">
                <span className="text-secondary text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-text-secondary">
                  →
                </span>
                <span className="text-enhanced">
                  Where <span className="text-primary font-semibold glow-text-primary">ideas</span> become{' '}
                  <span className="text-secondary font-semibold glow-text-secondary">experiences</span>.
                </span>
              </p>
              <p className="group flex items-center gap-4 p-4 rounded-lg glass-card hover:glass-card-hover transition-all duration-300 cursor-pointer">
                <span className="text-primary text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-text-primary">
                  →
                </span>
                <span className="text-enhanced">
                  Where the{' '}
                  <span className="guild-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary font-bold glow-text-secondary">
                    future
                  </span>{' '}
                  is not predicted…
                </span>
              </p>
              <p className="text-center mt-8">
                <span className="text-3xl md:text-4xl font-extrabold text-enhanced">
                  It's{' '}
                  <span className="text-secondary font-extrabold cursor-pointer transition-all duration-300 inline-block glow-text-secondary">
                    crafted
                  </span>
                  .
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuildStory;
