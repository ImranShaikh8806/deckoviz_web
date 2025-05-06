import React from 'react';
import { Sparkles, Zap, Heart, Shield, Clock, RefreshCw } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Art",
      description: "Experience art that evolves with your mood, preferences, and the time of day, creating a truly personalized visual experience."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Smart Technology",
      description: "Advanced sensors and AI algorithms that understand your space and adapt the art to create the perfect ambiance."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Personalized Experience",
      description: "Your Deckoviz learns from your preferences and creates art that resonates with your unique style and personality."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Crafted with the finest materials and cutting-edge technology to ensure stunning visuals and lasting durability."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Always Fresh",
      description: "Never see the same art twice. Our AI continuously generates new, unique pieces to keep your space dynamic and engaging."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Easy Updates",
      description: "Regular software updates bring new features and improvements, ensuring your Deckoviz stays at the cutting edge."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
            Why Choose <span className="text-primary-600">Deckoviz</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of art and technology with our innovative features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100 hover:border-primary-100 hover:-translate-y-1"
            >
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;