import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Check, Upload } from 'lucide-react';

interface FormData {
  frameSize: string;
  frameType: string;
  customFrameDescription: string;
  customFrameImage: File | null;
  numberOfUnits: number;
  subscriptionType: string;
  subscriptionPeriod: string;
  address: string;
  deliveryType: string;
  packagingType: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

interface LocationState {
  selectedTier?: {
    name: string;
    price: string;
    features: string[];
  };
}

const PlaceOrder: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  const selectedTier = state?.selectedTier;

  const [formData, setFormData] = useState<FormData>({
    frameSize: '',
    frameType: '',
    customFrameDescription: '',
    customFrameImage: null,
    numberOfUnits: 1,
    subscriptionType: '',
    subscriptionPeriod: '',
    address: '',
    deliveryType: 'standard',
    packagingType: 'standard',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const frameSizes = [
    { value: '32', label: '32 inches' },
    { value: '43', label: '43 inches' },
    { value: '55', label: '55 inches' },
  ];

  const frameTypes = [
    { value: 'classic', label: 'Classic Wood Frame' },
    { value: 'modern', label: 'Modern Metal Frame' },
    { value: 'minimalist', label: 'Minimalist Frame' },
    { value: 'luxury', label: 'Luxury Frame' },
  ];

  const subscriptionTypes = [
    { value: 'basic', label: 'Basic' },
    { value: 'premium', label: 'Premium' },
    { value: 'ultra', label: 'Ultra Premium' },
  ];

  const subscriptionPeriods = [
    { value: '3', label: '3 months' },
    { value: '6', label: '6 months' },
    { value: '9', label: '9 months' },
    { value: '12', label: '12 months' },
    { value: '18', label: '18 months' },
    { value: '24', label: '24 months' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, customFrameImage: e.target.files![0] }));
    }
  };

  const calculateTotal = () => {
    // This is a placeholder calculation. You should implement your actual pricing logic
    const basePrice = selectedTier ? parseInt(selectedTier.price.replace('$', '')) : 0;
    const frameCost = basePrice * formData.numberOfUnits;
    const subscriptionCost = 0; // Calculate based on type and period
    const deliveryCost = formData.deliveryType === 'express' ? 20 : 0;
    const packagingSurcharge = formData.packagingType === 'eco' ? 5 : 0;
    return frameCost + subscriptionCost + deliveryCost + packagingSurcharge;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (!selectedTier) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">No Pricing Tier Selected</h2>
          <p className="text-gray-600 mb-6">Please select a pricing tier from the pricing page to continue.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Back to Pricing
          </button>
        </div>
      </div>
    );
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md w-full">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="text-green-500" size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-2">Congrats, your Deckoviz is on the way!</h2>
          <p className="text-gray-600">You'll receive a confirmation email shortly with your order details and shipping updates.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-2">Get Your Deckoviz</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Bring your walls to life with the world's most advanced AI-powered Smart Art Frame.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Selected Plan: {selectedTier.name}</h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold">{selectedTier.price}</p>
              <ul className="mt-2 space-y-1">
                {selectedTier.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check size={16} className="text-primary-600 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => navigate('/')}
              className="text-primary-600 hover:text-primary-700"
            >
              Change Plan
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Frame Size */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">1. Select Your Frame Size</h2>
            <select
              name="frameSize"
              value={formData.frameSize}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="">Choose size</option>
              {frameSizes.map(size => (
                <option key={size.value} value={size.value}>{size.label}</option>
              ))}
            </select>
          </div>

          {/* Frame Type */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">2. Select Frame Type</h2>
            <select
              name="frameType"
              value={formData.frameType}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="">Choose frame type</option>
              {frameTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>

          {/* Custom Frame Request */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">3. Custom Frame Request (Optional)</h2>
            <textarea
              name="customFrameDescription"
              value={formData.customFrameDescription}
              onChange={handleInputChange}
              placeholder="Describe your custom frame request..."
              className="w-full p-3 border rounded-lg mb-4"
              rows={4}
            />
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer">
                <Upload size={20} />
                <span>Upload Reference Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              {formData.customFrameImage && (
                <span className="text-sm text-gray-600">
                  {formData.customFrameImage.name}
                </span>
              )}
            </div>
          </div>

          {/* Number of Units */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">4. Select Number of Units</h2>
            <select
              name="numberOfUnits"
              value={formData.numberOfUnits}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg"
              required
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1} unit{i !== 0 ? 's' : ''}</option>
              ))}
            </select>
          </div>

          {/* Subscription Plan */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">5. Choose Your Subscription Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Subscription Type</label>
                <select
                  name="subscriptionType"
                  value={formData.subscriptionType}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg"
                  required
                >
                  <option value="">Select type</option>
                  {subscriptionTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subscription Period</label>
                <select
                  name="subscriptionPeriod"
                  value={formData.subscriptionPeriod}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg"
                  required
                >
                  <option value="">Select period</option>
                  {subscriptionPeriods.map(period => (
                    <option key={period.value} value={period.value}>{period.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">6. Enter Shipping Address</h2>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your full shipping address"
              className="w-full p-3 border rounded-lg"
              rows={3}
              required
            />
          </div>

          {/* Delivery Options */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">7. Delivery Options</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Delivery Type</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="deliveryType"
                      value="standard"
                      checked={formData.deliveryType === 'standard'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Standard Delivery
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="deliveryType"
                      value="express"
                      checked={formData.deliveryType === 'express'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Express Delivery
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Packaging Option</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="packagingType"
                      value="standard"
                      checked={formData.packagingType === 'standard'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Standard Packaging
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="packagingType"
                      value="eco"
                      checked={formData.packagingType === 'eco'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Eco-Friendly Packaging
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Total Price */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">8. Review Your Total</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Frame Cost:</span>
                <span>${(parseInt(selectedTier.price.replace('$', '')) * formData.numberOfUnits).toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Subscription Cost:</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Cost:</span>
                <span>${formData.deliveryType === 'express' ? '20.00' : '0.00'}</span>
              </div>
              <div className="flex justify-between">
                <span>Packaging Surcharge:</span>
                <span>${formData.packagingType === 'eco' ? '5.00' : '0.00'}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Total Price:</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4">9. Payment Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Expiry Date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                <input
                  type="text"
                  name="cardholderName"
                  value={formData.cardholderName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full p-3 border rounded-lg"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary-600 text-white px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-primary-700 transition-colors"
            >
              Confirm and Place Order
            </button>
          </div>
        </form>

        {/* Additional Notes */}
        <div className="mt-12 text-center text-sm text-gray-600 space-y-2">
          <p>30-day Satisfaction Guarantee</p>
          <p>Free returns for damaged items</p>
          <p>Eco-friendly commitment on packaging</p>
          <p>24/7 customer support available</p>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder; 