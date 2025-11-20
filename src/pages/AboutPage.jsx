import React, { useEffect } from 'react';
import { scrollToTop } from '../utils/smoothScroll';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GuildStory from '../components/GuildStory';
import TeamSection from '../components/TeamSection';
import ValuesSection from '../components/ValuesSection';

const AboutPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Navbar />
      <GuildStory />
      <TeamSection />
      <ValuesSection />
      <Footer />
    </>
  );
};

export default AboutPage;

