import React from 'react';
import { Button } from './ui/Button';

const steps = [
  'Support Coordinator submits referral',
  'Intake review',
  'Service match confirmation',
  'Start of services',
];

export function ReferralSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-6">
              How Referrals Work
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              We currently serve individuals in{' '}
              <span className="font-semibold text-[#1B365D]">Pasco County</span>.
            </p>
            <p className="text-gray-600 mb-8">
              Other counties may be considered based on availability.
            </p>

            <div className="space-y-4 mb-10">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#1B365D] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-lg text-gray-700 pt-0.5">{step}</span>
                </div>
              ))}
            </div>

            <Button variant="secondary" size="lg">
              Start a Referral
            </Button>
          </div>

          {/* Map Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/map.png"
                alt="Pasco County service area map"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
