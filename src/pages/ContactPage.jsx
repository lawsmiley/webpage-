import React, { useEffect } from 'react';
import { scrollToTop } from '../utils/smoothScroll';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

const ContactPage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Navbar />
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-press-start mb-4 tracking-tight">
              <span className="text-white">Get In</span>{' '}
              <span className="guild-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's work together to create something amazing.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;

