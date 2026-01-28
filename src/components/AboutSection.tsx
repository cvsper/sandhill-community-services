import React from 'react';
export function AboutSection() {
  return (
    <section className="py-20 bg-[#F5F3F7] border-y border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-8">
          About Sandhill Community Services
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          <span className="font-bold text-[#1B365D]">
            Sandhill Community Services
          </span>{' '}
          is dedicated to providing person-centered support that promotes
          independence, dignity, choice, and quality of life. We work
          collaboratively with individuals, families, and support coordinators
          to deliver compassionate care that makes a difference.
        </p>
      </div>
    </section>);

}