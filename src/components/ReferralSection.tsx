import React from 'react';
import { MapPin } from 'lucide-react';
export function ReferralSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-6">
              How Referrals Work
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We currently serve individuals in Pasco County.
              Other areas considered based on availability.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-[#F5F3F7] rounded-lg border border-gray-100">
                <div className="bg-[#1F3A5F] p-2 rounded-full text-white">
                  <MapPin size={20} />
                </div>
                <span className="text-xl font-medium text-[#1B365D]">
                  Pasco County
                </span>
              </div>
            </div>
          </div>

          {/* Map Visualization */}
          <div className="relative h-[400px] w-full bg-blue-50 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
            {/* Abstract Map Representation */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Florida_counties_map.svg/1200px-Florida_counties_map.svg.png')] bg-cover bg-center grayscale" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Simulated County Shape */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-36 bg-[#1B365D] rounded-lg opacity-90 flex items-center justify-center text-white font-serif text-xl shadow-lg">
                  Pasco
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}