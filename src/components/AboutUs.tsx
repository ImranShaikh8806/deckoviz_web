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

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              We envision a world where your spaces are not static, but alive with your story.
              Where art evolves with you.
              Where your home and work environments are extensions of your innermost self — vibrant, dynamic, deeply personal.
            </p>
            <p className="text-gray-600">
              We are building the next generation of products at the crossroads of art, AI, smart technology, and design — 
              creating living environments that resonate emotionally, artistically, and intelligently with the people who inhabit them.
            </p>
            <div className="mt-8">
              <p className="text-xl font-semibold mb-2">Deckoviz is just the beginning.</p>
              <p className="text-gray-600">
                Our mission is to develop an ecosystem of cutting-edge, artistically rich, technologically beautiful products 
                that continue to blur the lines between technology, art, and life — breathing curiosity, wonder, joy, 
                and inspiration into every corner of your world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Product: Deckoviz</h2>
            <p className="text-gray-600 mb-6">
              Deckoviz is a personalized AI art frame that curates, creates, and displays a continually evolving collection 
              of artworks, paintings, photography, and visuals — all tailored precisely to your tastes, moods, goals, 
              intentions, and inner world.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>It evolves hourly, daily, or at any pace you choose.</li>
              <li>It transforms your room's energy, aesthetics, and emotional vibe effortlessly.</li>
              <li>It curates art that feels like it was made for you — because, in a sense, it was.</li>
              <li>It learns, grows, and evolves alongside you, getting smarter, more attuned, and more imaginative the longer you live with it.</li>
            </ul>
            <p className="text-xl font-semibold mb-2">Think of Deckoviz as a new kind of art:</p>
            <ul className="text-gray-600 space-y-2">
              <li>Not static, but alive.</li>
              <li>Not generic, but deeply personal.</li>
              <li>Not merely decorative, but emotionally intelligent.</li>
            </ul>
            <p className="text-gray-600 mt-4">
              With stunning frame options, customizable collections, evolving AI art styles, and endless possibilities 
              for expression, Deckoviz ensures that your space never feels stale — only ever more you.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Technology</h2>
            <p className="text-gray-600 mb-6">
              At the heart of Deckoviz lies our proprietary AI personalization architecture, built from the ground up 
              to understand you intimately:
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Your tastes, your preferences, your emotional states.</li>
              <li>Your intentions, your dreams, your moods.</li>
              <li>Your desire for beauty, growth, expression, and connection.</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Our AI doesn't just recommend. It learns. It grows.
              It evolves with you — helping you craft a living environment that feels more alive, 
              more inspiring, more aligned with your true self.
            </p>
            <p className="text-gray-600 mb-4">We leverage multi-layered AI systems to:</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Understand and model your emotional landscape.</li>
              <li>Curate dynamically evolving, personalized multisensory art experiences.</li>
              <li>Generate original visuals tuned to your unique aesthetic fingerprint.</li>
              <li>Keep your spaces vibrant, fresh, and deeply reflective of your journey.</li>
            </ul>
            <p className="text-gray-600 mb-2">
              Our AI is not just intelligent — it is emotionally intelligent.
            </p>
            <p className="text-gray-600">
              It is designed not just to serve data — but to serve wonder.
            </p>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Future</h2>
            <p className="text-xl font-semibold mb-4">Deckoviz is just the beginning.</p>
            <p className="text-gray-600 mb-6">
              We are committed to creating a future where personalization, beauty, technology, and human emotion 
              are not separate realms — but one seamless experience.
            </p>
            <p className="text-gray-600 mb-4">We are building an ecosystem of products that reimagine:</p>
            <ul className="text-gray-600 space-y-2 mb-6 text-left max-w-lg mx-auto">
              <li>Home spaces as dynamic expressions of identity and mood.</li>
              <li>Offices as environments that foster creativity, alignment, and vitality.</li>
              <li>Restaurants, hotels, and public spaces as immersive emotional experiences, not just physical ones.</li>
            </ul>
            <p className="text-gray-600">
              Our upcoming innovations will continue to explore and expand the possibilities at the intersection of 
              personalized home tech, AI-driven design, and artistic expression — crafting environments that feel 
              truly alive, joyful, meaningful, and deeply human.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20  ">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl  mb-4">
              If you believe that the spaces where we live and work should inspire us —
            </p>
            <p className="text-xl mb-4">
              If you dream of living in environments that feel, grow, respond, and reflect who you are —
            </p>
            <p className="text-xl mb-8">
              If you believe that beauty, art, and technology can and should work together to make life more vivid, 
              joyful, and meaningful —
            </p>
            <p className="text-xl mb-8">
              Then you are already part of the Deckoviz vision.
            </p>
            <p className="text-2xl font-semibold mb-2">Welcome to a more beautiful future.</p>
            <p className="text-2xl font-semibold mb-8">Welcome to Deckoviz.</p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
            <p className="text-gray-600 mb-6 text-center">
              We love hearing from you — whether it's feedback, ideas, creative sparks, bugs you've noticed, 
              feature suggestions, or simply your experience with Deckoviz.
              Every message helps us grow, improve, and create more beautiful, meaningful experiences.
            </p>
            <p className="text-gray-600 mb-6">You can reach us in any of these ways:</p>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li>Fill out the form below (for feedback, bugs, issues, complaints, suggestions, ideas, or sharing your experience).</li>
              <li>Connect with us on Instagram <a href="https://instagram.com/deckoviz" className="text-primary-600 hover:underline">instagram.com/deckoviz</a> — we love DMs and comments!</li>
              <li>Email us directly at <a href="mailto:support@deckoviz.com" className="text-primary-600 hover:underline">support@deckoviz.com</a> for any support or feedback.</li>
            </ul>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
              <p className="text-gray-600 italic">
                ✨ If you'd like to share a story or memory about your experience with Deckoviz, 
                we'd love to feature it on our Wall of Love. Just mention it when you send us a message! ✨
              </p>
            </div>
            
            {/* Contact Form placeholder - you can add your actual form component here */}
            <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-4">Contact form would go here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section className="py-16 bg-primary-700 text-white border-t border-primary-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Investor Inquiries</h2>
            <p className="text-white/90 text-center mb-4">
              We are building something extraordinary — at the intersection of AI, art, beauty, personalization, and human experience.
            </p>
            <p className="text-white/90 text-center">
              If you're an investor who feels aligned with our mission and wants to join us on this journey, 
              we would love to hear from you. Please reach out to us by emailing 
              <a href="mailto:suraj@forofuse.com" className="text-white hover:text-gray-200 underline"> suraj@forofuse.com</a> with 
              the subject line: Interest in Deckoviz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;