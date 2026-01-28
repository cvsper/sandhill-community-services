import React from 'react';
import { Button } from './ui/Button';
export function JoinTeamSection() {
  return (
    <section className="relative py-24 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop"
          alt="Nature background"
          className="h-full w-full object-cover" />

        <div className="absolute inset-0 bg-[#1B365D]/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
          Join Our Team
        </h2>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          We are always interested in compassionate, dependable professionals
          dedicated to making a difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" className="min-w-[200px]">
            View Openings
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-[#1B365D] min-w-[200px]">

            Contact HR
          </Button>
        </div>
      </div>
    </section>);

}