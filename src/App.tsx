import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Referral from './components/Referral';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import PlaceOrder from './components/PlaceOrder';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <HowItWorks />
                <Gallery />
                <Testimonials />
                <Referral />
                <FAQ />
                <Pricing />
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/place-order" element={<PlaceOrder />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;