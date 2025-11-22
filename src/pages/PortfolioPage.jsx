import React, { useEffect } from 'react';
import { scrollToTop } from '../utils/smoothScroll';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectGrid from '../components/ProjectGrid';
import { PROJECTS } from '../constants/content';

const PortfolioPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Navbar />
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-dark-light/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-press-start mb-4 tracking-tight">
              <span className="text-white">Our</span>{' '}
              <span className="guild-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {PROJECTS.heading.subtitle}
            </p>
          </div>
          <ProjectGrid allProjects={true} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PortfolioPage;

