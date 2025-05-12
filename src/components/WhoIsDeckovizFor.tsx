import React from 'react';
import { Home, Hotel, Building2, Sofa, Coffee, ShoppingBag, Briefcase, Heart } from 'lucide-react';

const WhoIsDeckovizFor: React.FC = () => {
  const segments = [
    {
      icon: <Home size={24} />,
      title: "Homeowners and Renters",
      description: "For those who want to infuse their homes with the magic of generative AI and deeply personal art. Whether you're craving tranquility, inspiration, or vibrant energy—Deckoviz transforms your space to match your inner world."
    },
    {
      icon: <Hotel size={24} />,
      title: "Hotels and Hospitality Spaces",
      description: "Elevate lobbies, suites, lounges, and premium experiences with dynamic, ever-evolving visuals that captivate guests, spark conversation, and express your brand's essence."
    },
    {
      icon: <Coffee size={24} />,
      title: "Restaurants & Cafes",
      description: "Create an unforgettable vibe. Use AI-powered visual storytelling to enhance ambiance, reinforce brand identity, and shape customer moods—from cozy to high-energy."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Offices & Co-Working Spaces",
      description: "Boost creativity, calm, and clarity. From focused productivity modes to ambient inspiration, Deckoviz supports emotional and mental wellness at work."
    },
    {
      icon: <ShoppingBag size={24} />,
      title: "Shops and Boutiques",
      description: "Design your atmosphere like a pro—whether it's minimalist chic or artsy and vibrant. Enhance customer experience and stay memorable with every glance."
    },
    {
      icon: <Heart size={24} />,
      title: "Studios, Clinics & Schools",
      description: "Whether you're running a yoga studio, a therapy office, early learning spaces—Deckoviz helps set the right tone. Calm, uplift, inspire, or energize your space, naturally and beautifully."
    },
    {
      icon: <Building2 size={24} />,
      title: "Real Estate Developers",
      description: "Bring showrooms and model homes to life with smart art that adapts to buyer personas, elevates staging, and showcases the future of elegant, tech-forward living."
    },
    {
      icon: <Sofa size={24} />,
      title: "Electronics & Home Decor Stores",
      description: "Add an irresistible edge to your showroom. Demo how tech and decor beautifully blend—and sell more by showing what's possible."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Who is <span className="text-primary-600">Deckoviz</span> For?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deckoviz is for anyone who wants to turn walls, homes and spaces into living, breathing expressions of beauty, mood, emotion, and meaning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {segments.map((segment, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100 hover:border-primary-100 hover:-translate-y-1"
            >
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {segment.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors duration-300">{segment.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{segment.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-xl text-gray-700 font-medium">
            Deckoviz is for spaces that want to feel alive.
          </p>
          <p className="text-lg text-gray-600">
            For people who value beauty, emotion, and expression. For environments that deserve more than static walls and spaces. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsDeckovizFor; 
