import React from 'react';
import { HandHeart, Users, Heart, Home } from 'lucide-react';

const services = [
  {
    title: 'Personal Supports',
    description:
      'Assistance with daily living skills, personal care, and community participation to promote independence and quality of life.',
    icon: HandHeart,
  },
  {
    title: 'Companion Services',
    description:
      'Support for social engagement, recreation, and community inclusion.',
    icon: Users,
  },
  {
    title: 'Respite Care',
    description:
      'Short-term relief for families and caregivers while ensuring continuity of care.',
    icon: Heart,
  },
  {
    title: 'Residential Habilitation',
    description:
      'Support in safe, structured living environments focused on skill development and stability.',
    icon: Home,
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-[#F5F3F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B365D] mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We provide services authorized under the Florida Medicaid iBudget
            Waiver, based on each participant's support plan and individual
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
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
          ))}
        </div>

        <p className="text-center text-gray-500 mt-10 text-sm">
          Services are delivered in accordance with Medicaid Waiver guidelines
          and individualized support plans.
        </p>
      </div>
    </section>
  );
}
