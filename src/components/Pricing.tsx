import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';
import Button from './common/Button';

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      price: '$299',
      description: 'Perfect for your first smart art experience',
      features: [
        '7-inch HD display',
        'Basic AI art curation',
        'Wi-Fi connectivity',
        '100+ art collection',
        '3 month free subscription',
      ],
      buttonText: 'Buy Now',
    },
    {
      name: 'Premium',
      price: '$499',
      description: 'Our most popular option for art enthusiasts',
      features: [
        '12-inch 4K display',
        'Advanced AI learning',
        'Wi-Fi + Bluetooth',
        'Unlimited art library',
        'Motion & light sensors',
        '1 year free subscription',
      ],
      isPopular: true,
      buttonText: 'Buy Now',
    },
    {
      name: 'Professional',
      price: '$799',
      description: 'Gallery-quality display for discerning collectors',
      features: [
        '21-inch 4K UHD display',
        'Premium finish options',
        'Advanced color calibration',
        'Priority new releases',
        'Custom frame options',
        'Lifetime subscription'
      ],
      buttonText: 'Buy Now'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Custom solutions for businesses and galleries',
      features: [
        'Multiple frame network',
        'Branded content options',
        'API integration',
        'Dedicated account manager',
        'Custom sizing available',
        'Bulk discounts'
      ],
      buttonText: 'Contact Sales'
    }
  ];

  const handleBuyNow = (tier: PricingTier) => {
    navigate('/place-order', { state: { selectedTier: tier } });
  };

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-center mb-4">
          Simple, Transparent <span className="text-primary-600">Pricing</span>
        </h2>
        <p className="section-description">
          Choose the perfect Deckoviz frame to match your space and budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 ${
                tier.isPopular
                  ? 'bg-primary-50 border-2 border-primary-200 relative'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-gray-500">/frame</span>}
              </div>
              <p className="text-gray-600 mb-6">{tier.description}</p>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check size={20} className="text-primary-600 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.isPopular ? 'primary' : 'outline'}
                className="w-full"
                onClick={() => handleBuyNow(tier)}
              >
                {tier.buttonText}
              </Button>
            </div>
          ))}
        </div>

      
        <p className="text-center mt-4">
          <a href="#" className="text-primary-600 hover:text-primary-700">
            View complete feature comparison
          </a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;