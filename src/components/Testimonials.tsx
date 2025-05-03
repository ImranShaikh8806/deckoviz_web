import React from 'react';
import { TestimonialProps } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "Deckoviz has transformed our living room completely. The AI suggests beautiful artwork that perfectly complements our decor and it's constantly evolving!",
      author: "Sarah Johnson",
      role: "Interior Designer"
    },
    {
      quote: "As an art collector, I was skeptical about digital frames. Deckoviz changed my mind completely. The quality is stunning and the AI curation is surprisingly insightful.",
      author: "Michael Chen",
      role: "Art Collector"
    },
    {
      quote: "Our office lobby now features six Deckoviz frames that display our company's values through beautiful, ever-changing artwork. Our clients love it!",
      author: "Emma Rodriguez",
      role: "Creative Director"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-center mb-4">
          What Our <span className="text-primary-600">Customers Say</span>
        </h2>
        <p className="section-description">
          Don't just take our word for it. Here's what people love about Deckoviz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl">
              <div className="text-primary-600 text-4xl mb-4">"</div>
              <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;