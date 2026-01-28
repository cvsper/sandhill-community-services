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
                We serve individuals eligible for{' '}
                <span className="font-semibold text-[#1B365D]">
                  Florida Medicaid Waiver services
                </span>
                , including{' '}
                <span className="font-semibold text-[#1B365D]">
                  children, adolescents, and adults
                </span>{' '}
                with intellectual and developmental disabilities.
              </p>
              <p>
                Examples include autism, cerebral palsy, spina bifida, and
                related conditions. Our approach is tailored to meet the unique
                needs of each person we support.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?q=80&w=1000&auto=format&fit=crop"
                alt="Medical professional talking with patient"
                className="w-full h-[400px] object-cover" />

            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#C19A6B]/20 rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#1B365D]/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>);

}