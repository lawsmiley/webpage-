import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { CONTACT } from '../constants/content';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const infoRef = useRef(null);
  const formContainerRef = useRef(null);

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

      // Enhanced info section animation
      gsap.from(infoRef.current, {
        opacity: 0,
        x: -100,
        rotationY: -15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Enhanced form animation
      gsap.from(formContainerRef.current, {
        opacity: 0,
        x: 100,
        rotationY: 15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formContainerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Enhanced form inputs on focus
      const inputs = formContainerRef.current?.querySelectorAll('input, textarea');
      inputs?.forEach((input) => {
        input.addEventListener('focus', () => {
          gsap.to(input, {
            scale: 1.02,
            y: -2,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        input.addEventListener('blur', () => {
          gsap.to(input, {
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
    <section ref={sectionRef} id="contact" className="py-20 md:py-32 relative overflow-hidden section-bg">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/12 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-secondary/12 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-press-start mb-4 tracking-tight">
            <span className="text-primary glow-text-primary drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]">{CONTACT.heading.title.split(' ')[0]} {CONTACT.heading.title.split(' ')[1]}</span>{' '}
            <span className="text-secondary glow-text-secondary drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">{CONTACT.heading.title.split(' ')[2]}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-arcade text-enhanced">
            {CONTACT.heading.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div ref={infoRef}>
            <ContactInfo />
          </div>
          <div ref={formContainerRef}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
