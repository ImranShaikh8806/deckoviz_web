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
      description: "Curate themed collections, set display preferences, attach music, and craft and enjoy visual journeys."
    },
    {
      icon: <Music size={24} />,
      title: "Multimodal Art Experiences",
      description: "Every collection has its perfect sonic backdrop, curated or created by Vizzy. Music and art in beautiful sync."
    },
    {
      icon: <Clock size={24} />,
      title: "Dynamic Display Engine",
      description: "Deckoviz learns your rhythms, your mind, your life. It changes based on time of day, mood, occasion, emotion, special occasions, rhythms, vibes and more. "
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
      title: "Rituals and Interactive Experiences",
      description: "Set rituals like morning ritual, evening ritual, storytelling etc, family dinner ritual, periodic rituals and actions. For instance, wake up to a dynamic forest vista with the sounds of chirping birds. "
    },
    {
      icon: <Home size={24} />,
      title: "Multi-Space Adaptation",
      description: "Deckoviz adapts to you — however you want it to, wherever you are. Make your spaces come alive, be it homes, offices, cafés, clinics, studios."
    },
    {
      icon: <Home size={24} />,
      title: "Personalized Curator",
      description: "Enjoy the curations from Vizzy, your personal curator, who finds you just the perfect artworks, visuals and more, just for the right moments."
    },
    {
      icon: <Home size={24} />,
      title: "New, Dynamic Modalities of Art",
      description: "Enjoy new, personalized, dynamic modes of art made possible just now - such as dynamic multiple frame artworks, narration-infused speaking art and visuals, unique multimodal experiences, with image, text, sound and music creation. "
    },
     {
      icon: <Home size={24} />,
      title: "More Present, More Connected",
      description: "Become more grounded, more present, more connected, with rituals and interactive experiences like meditation, visualization, mindfulness, deep conversations, and more. "
    },
    {
      icon: <Home size={24} />,
      title: "Customized, handcrafted frames, just for you",
      description: "Savour handcrafted ornate frame designs as per your preferences, such as having your favourite phrases carved on the wood, so that your Deckoviz can be a masterpiece unto itself, even with nothing on"
    },
    {
      icon: <Home size={24} />,
      title: "Set your tone for the day",
      description: "Create and enjoy a dynamic and evolving moodboard or vision board. "
    },
    {
      icon: <Home size={24} />,
      title: "Loads of goodies for the kiddies",
      description: "Deckoviz comes with an amazing suite of features for kids, like storytelling visualization, creative storytelling, art creation and narration, learning visualization and lots more. "
    },
    {
      icon: <Home size={24} />,
      title: "Enjoy multisensory art experiences",
      description: "Immerse yourself in a multisensory state setting and art experience, with just the right music picked for you by your Vizzy. "
    },
    {
      icon: <Home size={24} />,
      title: "Co-create artworks with your partner, with your family, with your friends",
      description: "Through our socially modal art features, collaboration features, and more, bring creations to life with your favourite people, for a brand new modality of art experience. "
    },
    {
      icon: <Home size={24} />,
      title: "A space that to with you, with art that speaks with you",
      description: "Enjoy a new look, a fresh vibe, every day, every hour, with walls and spaces that are alive, intelligent, and always evolving, according to the rhymes and rhythms of your life. "
    },
    {
      icon: <Tv size={24} />,
      title: "Also... it’s a Smart TV",
      description: "Deckoviz runs on Google/Android TV. So yes, you can use your favourite TV apps like YouTube and Netflix when you're not art-scape dreaming."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-center mb-3">
            Features & <span className="text-primary-600">Highlights</span>
          </h2>
          <p className="section-description">
            What can Deckoviz do? A whole lot. And it's only getting better with time, as we keep shipping new features in the pursuit of creating the greatest emotionally intelligent, dynamic, and personalized art experience. 
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
