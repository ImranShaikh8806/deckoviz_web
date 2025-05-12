import React from 'react';
import { Gift, Send, CheckCircle, CreditCard } from 'lucide-react';

const Referral: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Referral <span className="text-primary-600">Bonus</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            If you refer someone from your friends, family, or anyone else who might be interested, we'll send a neat $20 into your bank account.
          </p>
          <p className="text-lg text-primary-600 font-semibold mt-4">
            Yes, it is as simple as that!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <Gift className="text-primary-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Referral Rewards</h3>
            </div>
            <p className="text-gray-600 mb-4">
              For every person you refer to, using your unique username, we give you $20 straight to your bank account.
            </p>
            <p className="text-gray-600">
              Or choose a subscription bonus instead:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="text-primary-600 mr-2" size={16} />
                1 month of ultra premium
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="text-primary-600 mr-2" size={16} />
                2 months of premium
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="text-primary-600 mr-2" size={16} />
                3 months of basic subscription
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6">How do referrals work?</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-full mr-4">
                  <Send className="text-primary-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">You send an invite</h4>
                  <p className="text-gray-600">
                    Pick a plan for them or send them a referral link so they can choose themselves.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-full mr-4">
                  <CreditCard className="text-primary-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">They make a purchase</h4>
                  <p className="text-gray-600">
                    Referral rewards apply to hosting, VPS, and email plans of 12+ months, and all 1-month Hostinger Horizons plans.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-full mr-4">
                  <CheckCircle className="text-primary-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">They're active for at least 45 days</h4>
                  <p className="text-gray-600">
                    The referred client keeps their subscription active and doesn't request a refund.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary-100 p-2 rounded-full mr-4">
                  <Gift className="text-primary-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">You get your commission</h4>
                  <p className="text-gray-600">
                    Your earnings are sent to you via PayPal or Wire Transfer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://hpanel.hostinger.com/referrals"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Start Referring Now
          </a>
          <p className="mt-4 text-gray-500">
            <a href="#" className="text-primary-600 hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Referral; 
