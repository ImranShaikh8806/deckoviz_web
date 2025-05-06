import React from 'react';
import { Palette, Cpu, Wifi, Maximize, Clock, Zap, Image, Users, Music, Tv, Search, Sparkles, MessageSquare, Home } from 'lucide-react';
import FeatureCard from './common/FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Image size={24} />,
      title: "Reimagine Your Photos",
      description: "Transform your personal photos into the style of your favorite artists — from Van Gogh to Studio Ghibli."
    },
    {
      icon: <Palette size={24} />,
      title: "Personalize Iconic Art",
      description: "Imagine The Starry Night, but it features your family on the hilltop. Art history, with your story."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Your Personal Painter",
      description: "A creative AI that knows you. It paints your dreams, desires, and moments with deep emotional nuance."
    },
    {
      icon: <Maximize size={24} />,
      title: "AI Style Transfer + Image to GIF/Video",
      description: "Turn static images into animations, gifs, or cinematic loops. Make The Last Supper blink, sway, breathe."
    },
    {
      icon: <Search size={24} />,
      title: "Intelligent Art Search",
      description: "Use natural language to search our expansive library. Find paintings by mood, meaning, memory, or color."
    },
    {
      icon: <Palette size={24} />,
      title: "Create Your Own Collection",
      description: "Curate themed collections, set display preferences, attach music, and craft visual journeys."
    },
    {
      icon: <Music size={24} />,
      title: "Multimodal Art Experiences",
      description: "Every collection has its perfect sonic backdrop. Music and art in beautiful sync."
    },
    {
      icon: <Clock size={24} />,
      title: "Dynamic Display Engine",
      description: "Deckoviz learns your rhythms. It changes based on time of day, mood, occasion, or emotion."
    },
    {
      icon: <Palette size={24} />,
      title: "Deckoviz Marketplace",
      description: "Explore, buy, or sell art. Digital or physical. Discover new artists and support creativity."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Personalized Quotes & Posters",
      description: "Design daily affirmations or custom quotes in aesthetic, artful frames — tailored to your energy."
    },
    {
      icon: <Users size={24} />,
      title: "Visual Storytelling for Kids and Families",
      description: "Tell bedtime stories visually. Make learning, sharing, and bonding beautifully engaging."
    },
    {
      icon: <Home size={24} />,
      title: "Multi-Space Adaptation",
      description: "Deckoviz adapts to you — wherever you are. Make your space feel alive."
    },
    {
      icon: <Tv size={24} />,
      title: "Smart TV Functionality",
      description: "Deckoviz runs on Android TV. So yes, you can Netflix and chill when you're not gallery-mode dreaming."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-center mb-3">
            🌟 Features & <span className="text-primary-600">Highlights</span>
          </h2>
          <p className="section-description">
            What can Deckoviz do? A whole lot.
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