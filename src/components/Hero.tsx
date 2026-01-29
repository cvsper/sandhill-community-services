import React from 'react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-image.png"
          alt="Caregiver supporting an individual"
          className="h-full w-full object-cover object-center"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B365D]/95 via-[#1B365D]/80 to-[#1B365D]/40" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Supporting Independence.
            <br />
            Enhancing Lives.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
            Sandhill Community Services provides person-centered support to
            individuals with intellectual and developmental disabilities through
            Florida's Medicaid iBudget Waiver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" size="lg">
              Start a Referral
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1B365D]">
              For Support Coordinators
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1B365D]">
              Join Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
