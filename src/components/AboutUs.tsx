import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary-600" />,
      title: "Passion for Art",
      description: "We believe in the transformative power of art and its ability to inspire and connect people."
    },
    {
      icon: <Target className="w-8 h-8 text-primary-600" />,
      title: "Innovation",
      description: "Constantly pushing boundaries to create cutting-edge technology that enhances the art experience."
    },
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality products and services to our customers."
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Community",
      description: "Building a vibrant community of art lovers and technology enthusiasts."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/images/Gemini_Generated_Image_3gz8ov3gz8ov3gz8.jpeg",
      bio: "Art enthusiast with 15 years of experience in technology and design."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/images/Gemini_Generated_Image_3gz8ow3gz8ow3gz8.jpeg",
      bio: "AI expert passionate about creating seamless user experiences."
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Design",
      image: "/images/Gemini_Generated_Image_3gz8oy3gz8oy3gz8.jpeg",
      bio: "Award-winning designer with a background in fine arts and digital media."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-white/90">
              At Deckoviz, we are reimagining what it means to live, work, and feel within a space.
              We are a next-generation company innovating at the frontier where AI personalization,
              art, home and office décor, and smart technology converge.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Our mission is simple yet profound: to infuse everyday environments with more beauty,
                meaning, emotion, vitality, and wonder — powered by the most human-centric
                technologies ever created.
              </p>
              <p className="text-gray-600 mb-6">
                <strong>Our flagship product — the Deckoviz AI Smart Art and Space Enhancement Frame — 
                is the first step into a new dimension of living.</strong> It is more than a frame.
                It is a living, evolving companion for your spaces — a dynamic portal that transforms
                your walls and rooms into reflections of your innermost moods, memories, dreams, and desires.
              </p>
              <p className="text-gray-600">
                Through the power of proprietary AI personalization engines, generative creativity,
                and intelligent curation, Deckoviz creates deeply personalized, multisensory visual
                experiences — designed to inspire, soothe, energize, or uplift, depending on your
                intentions and needs. Every piece of art it displays, every visual it curates,
                is attuned to your unique life, spirit, and essence.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/Gemini_Generated_Image_13xtu213xtu213xt.jpeg"
                  alt="Our Mission"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl font-semibold mb-4">Because we believe technology should not just be functional —</p>
            <ul className="text-gray-600 space-y-2">
              <li>It should be beautiful.</li>
              <li>It should be magical.</li>
              <li>It should be emotionally enriching.</li>
              <li>It should help us live more intentionally, more expressively, more joyfully.</li>
            </ul>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            At Deckoviz, we are pioneering a new category — AI-powered spatial enhancement — 
            bringing future-ready beauty, personalization, and emotion into homes, offices, 
            cafés, hotels, wellness spaces, and beyond.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 