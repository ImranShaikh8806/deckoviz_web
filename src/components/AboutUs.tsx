import React from 'react';
import { ArrowRight, Sparkles, Heart, Lightbulb, Users } from 'lucide-react';
import Button from './common/Button';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              About <span className="text-primary-600">Deckoviz</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              At Deckoviz, we are reimagining what it means to live, work, and feel within a space.
              We are a next-generation company innovating at the frontier where AI personalization, art, home and office décor, and smart technology converge.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Our mission is simple yet profound: to infuse everyday environments with more beauty, meaning, emotion, vitality, and wonder — powered by the most human-centric technologies ever created.
              </p>
              <p className="text-gray-600 mb-6">
                Our flagship product — the Deckoviz AI Smart Art and Space Enhancement Frame — is the first step into a new dimension of living. It is more than a frame. It is a living, evolving companion for your spaces — a dynamic portal that transforms your walls and rooms into reflections of your innermost moods, memories, dreams, and desires.
              </p>
              <p className="text-gray-600">
                Through the power of proprietary AI personalization engines, generative creativity, and intelligent curation, Deckoviz creates deeply personalized, multisensory visual experiences — designed to inspire, soothe, energize, or uplift, depending on your intentions and needs.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-primary-100 rounded-xl p-6 shadow-lg">
                <div className="aspect-w-16 aspect-h-9 bg-primary-400 rounded-lg overflow-hidden">
                  <img 
                    src="/src/assets/gallery/Gemini_Generated_Image_13xtu213xtu213xt.jpeg" 
                    alt="Deckoviz Frame" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Beliefs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Because we believe technology should not just be functional —
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">It should be beautiful</h3>
              <p className="text-gray-600">Creating visually stunning experiences that inspire and delight.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">It should be magical</h3>
              <p className="text-gray-600">Transforming ordinary spaces into extraordinary experiences.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">It should be emotionally enriching</h3>
              <p className="text-gray-600">Creating deeper connections and meaningful experiences.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">It should help us live more intentionally</h3>
              <p className="text-gray-600">Enabling more expressive and joyful living through technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Vision</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                We envision a world where your spaces are not static, but alive with your story.
                Where art evolves with you.
                Where your home and work environments are extensions of your innermost self — vibrant, dynamic, deeply personal.
              </p>
              <p>
                We are building the next generation of products at the crossroads of art, AI, smart technology, and design — creating living environments that resonate emotionally, artistically, and intelligently with the people who inhabit them.
              </p>
              <p>
                Deckoviz is just the beginning.
                Our mission is to develop an ecosystem of cutting-edge, artistically rich, technologically beautiful products that continue to blur the lines between technology, art, and life — breathing curiosity, wonder, joy, and inspiration into every corner of your world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Creating a More Beautiful Future
            </h2>
            <p className="text-lg mb-8 opacity-90">
              If you believe that the spaces where we live and work should inspire us —
              If you dream of living in environments that feel, grow, respond, and reflect who you are —
              Then you are already part of the Deckoviz vision.
            </p>
            <Button variant="secondary" size="lg">
              Get Started
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 