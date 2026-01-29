import React from 'react';

export function WhoWeServe() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-6">
              Who We Serve
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Sandhill Community Services serves{' '}
                <span className="font-semibold text-[#1B365D]">
                  children, adolescents, and adults
                </span>{' '}
                with intellectual and developmental disabilities who are
                eligible for the Florida Medicaid iBudget Waiver.
              </p>
              <p>We support individuals with conditions such as:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Autism</li>
                <li>Cerebral palsy</li>
                <li>Spina bifida</li>
                <li>Related developmental disabilities</li>
              </ul>
              <p className="pt-2">
                Our approach is person-centered and tailored to meet each
                individual's goals, abilities, and needs.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/care-image.jpg"
                alt="Caregiver assisting individual"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
