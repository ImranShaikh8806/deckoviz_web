import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './common/Button';
import CountUp from './common/CountUp';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Transform Your <br className="hidden md:block" />
              Space with <span className="text-primary-600">AI-<br className="hidden md:block" />Powered Art</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Deckoviz brings your walls to life with a smart art frame that
              learns your style and evolves with you over time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Shop Now
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </div>
            
            <div className="flex items-center mt-12 space-x-8 md:space-x-16">
              <div className="text-center">
                <h3 className="text-primary-600 text-3xl font-bold">
                  <CountUp from={0} to={1} duration={2} suffix="M+" />
                </h3>
                <p className="text-gray-500 text-sm">Artworks</p>
              </div>
              <div className="text-center">
                <h3 className="text-primary-600 text-3xl font-bold">
                  <CountUp from={0} to={50} duration={2.5} suffix="K+" />
                </h3>
                <p className="text-gray-500 text-sm">Happy Customers</p>
              </div>
              <div className="text-center">
                <h3 className="text-primary-600 text-3xl font-bold">
                  <CountUp from={0} to={4.9} duration={3} decimals={1} />
                </h3>
                <p className="text-gray-500 text-sm">Star Rating</p>
              </div>
            </div>
          </div>
          
          {/* Right content - Art frame preview */}
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-primary-100 rounded-xl p-6 shadow-lg relative">
              <div className="absolute top-4 right-4 flex items-center">
                <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full mr-2">HD</div>
                <div className="bg-white shadow-sm rounded-lg px-3 py-1 text-xs">
                  <div className="font-semibold">4K</div>
                  <div className="text-gray-500 text-xxs">Resolution</div>
                  <div className="text-gray-500 text-xxs">Crystal clear</div>
                </div>
              </div>
              
              <div className="border-4 border-white rounded-lg overflow-hidden shadow-md relative">
                <div className="aspect-w-16 aspect-h-9 bg-primary-400 h-80 flex items-center justify-center text-white text-2xl font-medium">
                  Art Frame Preview
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white shadow-md rounded-lg p-3 flex items-center space-x-3">
                <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-medium">
                  AI
                </div>
                <div>
                  <div className="text-sm font-medium">AI-Powered</div>
                  <div className="text-xs text-gray-500">Learns your style</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;