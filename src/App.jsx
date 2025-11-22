import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import PageTransition from './components/PageTransition';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <HomePage />
          </PageTransition>
        } />
        <Route path="/services" element={
          <PageTransition>
            <ServicesPage />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <AboutPage />
          </PageTransition>
        } />
        <Route path="/portfolio" element={
          <PageTransition>
            <PortfolioPage />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <ContactPage />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white font-arcade">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;

