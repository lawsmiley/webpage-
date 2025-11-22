import React, { useEffect } from 'react';
import { scrollToTop } from '../utils/smoothScroll';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesGrid from '../components/ServicesGrid';
import { SERVICES } from '../constants/content';

const ServicesPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Navbar />
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-light/30 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-press-start mb-4 tracking-tight">
              <span className="text-white">Our</span>{' '}
              <span className="guild-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {SERVICES.heading.subtitle}
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicesPage;

