import React from 'react';
import { Palette, Cpu, Wifi, Maximize, Clock, Zap } from 'lucide-react';
import FeatureCard from './common/FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Palette size={24} />,
      title: "AI-Curated Art",
      description: "Our AI algorithm learns your preferences and suggests artwork that matches your unique style."
    },
    {
      icon: <Cpu size={24} />,
      title: "Smart Processing",
      description: "Powerful onboard processor that adapts the display to ambient lighting conditions."
    },
    {
      icon: <Wifi size={24} />,
      title: "Wireless Updates",
      description: "Connect to Wi-Fi for seamless updates and new artworks directly to your frame."
    },
    {
      icon: <Maximize size={24} />,
      title: "High Definition",
      description: "4K resolution display with anti-glare coating for optimal viewing from any angle."
    },
    {
      icon: <Clock size={24} />,
      title: "Scheduled Changes",
      description: "Set your art to change based on time of day, season, or special occasions."
    },
    {
      icon: <Zap size={24} />,
      title: "Energy Efficient",
      description: "Low power consumption with auto-sleep mode when no one is in the room."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-center mb-3">
            Transform Your Space with{" "}
            <span className="text-primary-600">Smart Features</span>
          </h2>
          <p className="section-description">
            Deckoviz combines cutting-edge technology with elegant design to create a truly smart art
            experience for your home or office.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;