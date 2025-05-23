import React, { useState } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
const baseUrl = import.meta.env.VITE_API_BASE_URL

const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(baseUrl);
    
    if (!name || !email) {
      setSubscribeMessage('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
    setSubscribeMessage('');
    
    try {
      const response = await fetch('https://auth.deckoviz.com/auth/newsletter/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
        }),
      });
      console.log(response);
      if (response.status == 201) {
        setName('');
        setEmail('');
        setSubscribeMessage('Successfully subscribed!');
        
        
      } else {
        setSubscribeMessage('Subscription failed. Please try again.');
      }
    } catch (error) {
      setSubscribeMessage('Network error. Please try again.');
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSectionNav = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-white text-gray-800">
      {/* Top Border */}
      <div className="border-t border-gray-200"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Deckoviz</h3>
            <p className="text-gray-600">
              Transforming spaces with AI-powered art frames and smart display technology.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/deckoviz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/deckoviz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Blog
                </Link>
              </li>
            
          
              <li>
                <button 
                  onClick={() => handleSectionNav('gallery')} 
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionNav('pricing')} 
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/place-order" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Place Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: surajpandya3012@gmail.com</li>
              <li className="text-gray-600">Phone: +44 7448 006087</li>
              <li className="text-gray-600">London, United Kingdom</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 border border-gray-400 w-full"
                style={{ minWidth: 0 }}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 border border-gray-400 w-full"
                style={{ minWidth: 0 }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary-600 px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-white w-full disabled:opacity-70"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
              {subscribeMessage && (
                <p className={`text-sm mt-2 ${subscribeMessage.includes('Successfully') ? 'text-green-600' : 'text-red-600'}`}>
                  {subscribeMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Deckoviz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;