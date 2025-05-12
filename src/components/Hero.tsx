import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// Component for buttons
const Button = ({ variant, size, children, className = '', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors rounded-full";
  
  const variantClasses = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white",
    outline: "bg-transparent border-2 border-gray-300 hover:border-purple-600 hover:text-purple-600 text-gray-700"
  };
  
  const sizeClasses = {
    lg: "px-6 py-3 text-base",
    sm: "px-4 py-2 text-sm"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

// Component for count up animation
const CountUp = ({ from, to, duration, decimals = 0, suffix = '' }) => {
  const [count, setCount] = useState(from);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = from + (to - from) * progress;
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);
  
  return (
    <span>
      {count.toFixed(decimals)}{suffix}
    </span>
  );
};

// Main Hero component
const Hero = () => {
  const leftGalleryItems = [
    { id: 1, image: '/images/ce3552c2-18fd-471f-90ef-1edb442673ab.png' },
    { id: 2, image: '/images/e65c9ca4-6e44-457c-ba12-3e0a905820d7.png' },
    { id: 3, image: '/images/ce180280-1968-4689-a35b-5389f623db51.png' },
    { id: 4, image: '/images/ade66c2d-3cbd-4005-ba1e-f044a7fd040f.png' },
    { id: 5, image: '/images/1375b92c-bc7e-4fb2-8afb-703876367e84.png' },
    { id: 6, image: '/images/c5be4834-19cb-46f6-90fc-bd3a5816e506.png' }
  ];

  const rightGalleryItems = [
    { id: 7, image: '/images/e3a93562-042f-4040-b463-80b4c2711bf5.png' },
    { id: 8, image: '/images/14419115-9244-49d0-8d56-42efac80ac06.png' },
    { id: 9, image: '/images/deefc686-8655-44e7-b33e-96dfa88676a5.png' },
    { id: 10, image: '/images/5c874e33-e35b-4777-a210-349524e8805f.png' },
    { id: 11, image: '/images/7a28f801-99b6-48fe-96e4-6fc89897b910.png' }
  ];

  const [leftActiveIndex, setLeftActiveIndex] = useState(0);
  const [rightActiveIndex, setRightActiveIndex] = useState(0);
  const [currentMood, setCurrentMood] = useState(0);
  const [moodOffset, setMoodOffset] = useState(0);

  const moods = ["Refreshed", "Inspired", "Blissed", "Tranquil", "Content", "Excited"];

  // Auto-rotate images and animate mood text
  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftActiveIndex(prevIndex => (prevIndex + 1) % leftGalleryItems.length);
    }, 5000);

    const rightInterval = setInterval(() => {
      setRightActiveIndex(prevIndex => (prevIndex + 1) % rightGalleryItems.length);
    }, 6000);

    const moodInterval = setInterval(() => {
      setCurrentMood(prev => (prev + 1) % moods.length);
    }, 3000);

    // Horizontal scroll animation for moods
    const moodScrollInterval = setInterval(() => {
      setMoodOffset(prev => (prev + 1) % 100);
    }, 50);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
      clearInterval(moodInterval);
      clearInterval(moodScrollInterval);
    };
  }, [leftGalleryItems.length, rightGalleryItems.length, moods.length]);

  return (
    <section className="py-16 md:py-24 lg:py-32 overflow-hidden relative bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          {/* Heading */}
          <h1 className="text-center font-bold text-4xl md:text-5xl lg:text-5xl mb-6">
            <span className="text-gray-900">Transform Your Walls. </span>
            <span className="text-purple-600">Transform Your World.</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-center text-gray-600 text-xl mb-10 max-w-3xl mx-auto">
            Introducing <span className="font-semibold italic">The World's First AI-Powered Dynamic Art Frame</span>
          </p>
          <p className="text-center text-gray-700 text-lg mb-6">
            Deckoviz turns your space into a living canvas — a smart art experience that evolves with you. It brings the power of generative AI, personalized art, and immersive visuals into your home, workspace, or hospitality space.
          </p>
          
          {/* Main content with carousels */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 mt-14">
            {/* Left carousel */}
            <div className="w-full lg:w-2/5 relative">
              <div className="relative">
                {/* Enhanced background images stack */}
                <div className="absolute -top-8 -right-8 w-[90%] h-[90%] rounded-2xl overflow-hidden shadow-lg z-0 opacity-70">
                  <img 
                    src={leftGalleryItems[(leftActiveIndex - 1 + leftGalleryItems.length) % leftGalleryItems.length].image}
                    alt="Previous artwork"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-5 -right-5 w-[80%] h-[80%] rounded-2xl overflow-hidden shadow-md z-0 opacity-50">
                  <img 
                    src={leftGalleryItems[(leftActiveIndex - 2 + leftGalleryItems.length) % leftGalleryItems.length].image}
                    alt="Older artwork"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-3 -right-3 w-[70%] h-[70%] rounded-xl overflow-hidden shadow-sm z-0 opacity-30">
                  <img 
                    src={leftGalleryItems[(leftActiveIndex - 3 + leftGalleryItems.length) % leftGalleryItems.length].image}
                    alt="Older artwork"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Main image */}
                <div className="aspect-[4/4] rounded-2xl overflow-hidden shadow-2xl relative z-10 transform hover:scale-[1.02] transition-all duration-300">
                  {leftGalleryItems.map((item, index) => (
                    <div 
                      key={item.id} 
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === leftActiveIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={item.image}
                        alt={`Artwork ${item.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-black/10 rounded-2xl" />
                </div>
              </div>
            </div>
            
            {/* Center stats */}
            <div className="w-full lg:w-1/5 flex flex-col -mt-20 ml-7">
              <div className="flex flex-col sm:flex-row gap-2 mb-5">
                <Button
                  variant="primary"
                  size="sm"
                  className="rounded-md whitespace-nowrap"
                >
                  Shop Now <ArrowRight size={16} className="ml-1" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-md whitespace-nowrap"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-md w-full text-center text-sm mt-10">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <div className="text-left">
                      <div className="text-2xl font-semibold text-purple-600">
                        <CountUp from={0} to={1} duration={2} suffix="M+" />
                      </div>
                      <div className="text-gray-500 text-xs">Artworks</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-semibold text-purple-600">
                        <CountUp from={0} to={4.9} duration={2.5} decimals={1} />
                      </div>
                      <div className="text-gray-500 text-xs">Star Rating</div>
                    </div>
                  </div>

                  {/* Center Happy Customers and 50K+ */}
                  <div className="flex justify-center items-center gap-2">
                    <div className="flex flex-col text-left leading-tight">
                      <div className="text-center text-gray-500 text-xs">Happy</div>
                      <div className="text-gray-500 text-xs">Customers</div>
                    </div>
                    <div className="text-2xl font-semibold text-purple-600">
                      <CountUp from={0} to={50} duration={3} suffix="K+" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right carousel with AI badge */}
            <div className="w-full lg:w-2/5 relative">
              <div className="relative">
                {/* Enhanced background images stack */}
                <div className="absolute -top-8 -right-8 w-[90%] h-[90%] rounded-2xl overflow-hidden shadow-lg z-0 opacity-70">
                  <img 
                    src={rightGalleryItems[(rightActiveIndex - 1 + rightGalleryItems.length) % rightGalleryItems.length].image}
                    alt="Previous artwork"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-5 -right-5 w-[80%] h-[80%] rounded-2xl overflow-hidden shadow-md z-0 opacity-50">
                  <img 
                    src={rightGalleryItems[(rightActiveIndex - 2 + rightGalleryItems.length) % rightGalleryItems.length].image}
                    alt="Older artwork"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-3 -right-3 w-[70%] h-[70%] rounded-xl overflow-hidden shadow-sm z-0 opacity-30">
                  <img 
                    src={rightGalleryItems[(rightActiveIndex - 3 + rightGalleryItems.length) % rightGalleryItems.length].image}
                    alt="Older artwork"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Main image */}
                <div className="aspect-[4/4] rounded-2xl overflow-hidden shadow-2xl relative z-10 transform hover:scale-[1.02] transition-all duration-300">
                  {rightGalleryItems.map((item, index) => (
                    <div 
                      key={item.id} 
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === rightActiveIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={item.image}
                        alt={`Artwork ${item.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-black/10 rounded-2xl" />
                </div>

                {/* AI Powered badge - moved to right side */}
                <div className="absolute bottom-2 bg-white shadow-xl rounded-xl p-2 z-20 flex items-center space-x-3">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xs font-medium">
                    AI
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium">AI-Powered</div>
                    <div className="text-xs text-gray-500">Learns your style</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-lg font-medium">
            Infuse your life with joy, inspiration, calm, beauty and wonder — every single day.
          </p>
          <p className="text-gray-600 mb-12">
            From Van Gogh to Ghibli, from personal memories to dreamlike stories, Deckoviz reimagines your homes and spaces like never before.
          </p>
          
          {/* Horizontal scrolling moods */}
          <div className="w-full max-w-4xl mx-auto mb-12 overflow-hidden">
            <div 
              className="flex whitespace-nowrap text-gray-600 text-lg italic"
              style={{ transform: `translateX(-${moodOffset}px)` }}
            >
              {[...moods, ...moods, ...moods].map((mood, index) => (
                <div key={index} className="inline-flex items-center px-4">
                  {mood}
                  {index < moods.length * 3 - 1 && (
                    <span className="mx-4 text-gray-400">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Features */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-purple-100 text-purple-600 rounded-full w-10 h-10 flex items-center justify-center">
                📱
              </div>
              <div>
                <p className="font-medium">Controlled entirely through a mobile app</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-purple-100 text-purple-600 rounded-full w-10 h-10 flex items-center justify-center">
                🖥️
              </div>
              <div>
                <p className="font-medium">Built on top of Android TV, fully smart and versatile</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
              <div className="bg-purple-100 text-purple-600 rounded-full w-10 h-10 flex items-center justify-center">
                ✨
              </div>
              <div>
                <p className="font-medium">Powered by AI, styled by you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
