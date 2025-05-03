import React from 'react';
import { FeatureCardProps } from '../../types';

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-card hover:shadow-lg transition-shadow duration-300">
      <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center text-primary-600 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;