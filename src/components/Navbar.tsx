import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from './common/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionNav = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Deckoviz Logo" className="h-9 w-auto rounded-full" />
            <span className="text-2xl font-bold text-primary-600">Deckoviz</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleSectionNav('features')} className="text-gray-700 hover:text-primary-600 transition-colors">Features</button>
            <button onClick={() => handleSectionNav('how-it-works')} className="text-gray-700 hover:text-primary-600 transition-colors">How It Works</button>
            <Link to="/blog" className="text-gray-700 hover:text-primary-600 transition-colors">Blog</Link>
            <button onClick={() => handleSectionNav('pricing')} className="text-gray-700 hover:text-primary-600 transition-colors">Pricing</button>
            <Button variant="primary">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleSectionNav('features')} className="text-gray-700 hover:text-primary-600 transition-colors">Features</button>
              <button onClick={() => handleSectionNav('how-it-works')} className="text-gray-700 hover:text-primary-600 transition-colors">How It Works</button>
              <Link to="/blog" className="text-gray-700 hover:text-primary-600 transition-colors">Blog</Link>
              <button onClick={() => handleSectionNav('pricing')} className="text-gray-700 hover:text-primary-600 transition-colors">Pricing</button>
              <Button variant="primary" className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
