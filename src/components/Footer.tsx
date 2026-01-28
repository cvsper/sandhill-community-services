import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[#152b4a] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-[#C19A6B]">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#C19A6B] mt-1" />
                <span className="text-gray-300">352-555-4234</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#C19A6B] mt-1" />
                <span className="text-gray-300">
                  info@sandhillcommunity.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#C19A6B] mt-1" />
                <span className="text-gray-300">Mon-Fri: 9am - 5pm</span>
              </li>
            </ul>
          </div>

          {/* Referral Column */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-[#C19A6B]">
              Referral
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Start a Referral
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Upload Documents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Eligibility Requirements
                </a>
              </li>
            </ul>
          </div>

          {/* Policies Column */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6 text-[#C19A6B]">
              Policies
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Nondiscrimination Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Sandhill Community Services"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enhancing lives and supporting independence through compassionate,
              person-centered care.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Sandhill Community Services. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}