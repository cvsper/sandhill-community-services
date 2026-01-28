import React from 'react';
import { Button } from './ui/Button';
export function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop"
          alt="Caregiver supporting an individual"
          className="h-full w-full object-cover object-center" />

        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent md:via-white/40" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start md:items-end text-left md:text-right">
        <div className="max-w-2xl pt-12 md:pt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B365D] leading-tight mb-4 drop-shadow-sm">
            Enhancing Lives, <br />
            Supporting Independence
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium max-w-lg ml-auto">
            Person-centered support for individuals with disabilities.
          </p>
          <Button variant="secondary" size="lg" className="shadow-lg">
            View Our Services
          </Button>
        </div>
      </div>
    </section>);

}