import React from 'react';
import { Button } from './ui/Button';

export function JoinTeamSection() {
  return (
    <section className="relative py-24 w-full overflow-hidden bg-[#1B365D]">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
          Join Our Team
        </h2>
        <p className="text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
          We are seeking compassionate, dependable professionals dedicated to
          making a difference.
        </p>
        <div className="text-left max-w-md mx-auto mb-10">
          <p className="text-gray-300 mb-4">We offer:</p>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center gap-2">
              <span className="text-white">•</span> Meaningful work
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white">•</span> Flexible schedules
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white">•</span> Supportive environment
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" className="min-w-[200px]">
            View Openings
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-[#1B365D] min-w-[200px]"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
}
