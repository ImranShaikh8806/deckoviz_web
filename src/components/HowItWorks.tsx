import React from 'react';
import Step from './common/Step';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-center mb-16">
          How <span className="text-primary-600">Deckoviz</span> Works
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Getting started with your AI-powered art frame is simple and intuitive.
        </p>

        <div className="space-y-24">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <Step 
                number="01" 
                title="Choose Your Frame" 
                description="Select from our range of elegant frame designs that complement any interior style."
              />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 mb-12 md:mb-0">
              <div className="bg-primary-100 rounded-xl p-6 shadow-lg">
                <div className="aspect-w-16 aspect-h-9 flex items-center justify-center text-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Step 01 Visualization</h3>
                    <p className="text-gray-500">Interactive demo would appear here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
              <div className="bg-primary-100 rounded-xl p-6 shadow-lg">
                <div className="aspect-w-16 aspect-h-9 flex items-center justify-center text-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Step 02 Visualization</h3>
                    <p className="text-gray-500">Interactive demo would appear here</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-16">
              <Step 
                number="02" 
                title="Connect & Setup" 
                description="Connect your frame to Wi-Fi and download our easy-to-use Deckoviz app."
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <Step 
                number="03" 
                title="Select Your Style" 
                description="Use our style quiz or browse collections to set your initial art preferences."
                isLast={true}
              />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 mb-12 md:mb-0">
              <div className="bg-primary-100 rounded-xl p-6 shadow-lg">
                <div className="aspect-w-16 aspect-h-9 flex items-center justify-center text-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Step 03 Visualization</h3>
                    <p className="text-gray-500">Interactive demo would appear here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;