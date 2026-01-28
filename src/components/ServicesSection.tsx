import React from 'react';
import { Home, HandHeart, Heart, Users } from 'lucide-react';
const services = [
{
  title: 'Residential Habilitation',
  description: 'Support in safe, structured living environments',
  icon: Home
},
{
  title: 'Personal Supports',
  description: 'Daily assistance focused on independence and skill-building',
  icon: HandHeart
},
{
  title: 'Respite Care',
  description: 'Short term relief for caregivers',
  icon: Heart
},
{
  title: 'Companion Services',
  description: 'Social and community engagement support',
  icon: Users
}];

export function ServicesSection() {
  return (
    <section className="py-20 bg-[#F5F3F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide individualized support designed to promote independence
            and quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) =>
          <div
            key={index}
            className="bg-white/50 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white hover:shadow-lg transition-all duration-300 border border-white/60">

              <div className="mx-auto w-16 h-16 mb-6 text-[#1B365D] flex items-center justify-center">
                <service.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#1B365D] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}