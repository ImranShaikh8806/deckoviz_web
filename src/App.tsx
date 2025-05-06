import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import PlaceOrder from './components/PlaceOrder';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Referral from './components/Referral';
import FAQ from './components/FAQ';

const ScrollToSectionOnHome: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToSectionOnHome />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <HowItWorks />
            <Gallery />
            <Testimonials />
            <Referral />
            <Pricing />
            <FAQ />
          </>
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/place-order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;