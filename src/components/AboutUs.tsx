import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="space-y-6 text-lg text-gray-700">
        <p>
          <strong>At Deckoviz, we are reimagining what it means to live, work, and feel within a space.</strong>
        </p>
        <p>
          We are a next-generation company innovating at the frontier where AI personalization, art, home and office décor, and smart technology converge. Our mission is simple yet profound: to infuse everyday environments with more beauty, meaning, emotion, vitality, and wonder — powered by the most human-centric technologies ever created.
        </p>
        <p>
          <strong>Our flagship product — the Deckoviz AI Smart Art and Space Enhancement Frame — is the first step into a new dimension of living.</strong> It is more than a frame. It is a living, evolving companion for your spaces — a dynamic portal that transforms your walls and rooms into reflections of your innermost moods, memories, dreams, and desires.
        </p>
        <p>
          Through the power of proprietary AI personalization engines, generative creativity, and intelligent curation, Deckoviz creates deeply personalized, multisensory visual experiences — designed to inspire, soothe, energize, or uplift, depending on your intentions and needs. Every piece of art it displays, every visual it curates, is attuned to your unique life, spirit, and essence.
        </p>
        <div className="space-y-4">
          <p><strong>Because we believe technology should not just be functional —</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>It should be beautiful.</li>
            <li>It should be magical.</li>
            <li>It should be emotionally enriching.</li>
            <li>It should help us live more intentionally, more expressively, more joyfully.</li>
          </ul>
        </div>
        <p>
          <strong>At Deckoviz, we are pioneering a new category — AI-powered spatial enhancement — bringing future-ready beauty, personalization, and emotion into homes, offices, cafés, hotels, wellness spaces, and beyond.</strong>
        </p>
      </div>
    </div>
  );
};

export default AboutUs; 