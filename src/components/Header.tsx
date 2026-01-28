import React from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { Button } from './ui/Button';
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans">
      {/* Top Bar */}
      <div className="w-full bg-[#f8f9fa] border-b border-gray-100 py-2 text-center text-xs sm:text-sm text-[#1B365D] font-medium tracking-wide">
        Serving individuals supported by Florida Medicaid Waiver programs.
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.jpg"
              alt="Sandhill Community Services"
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Services', 'Referral / Intake', 'Coverage Area', 'About'].map(
              (item) =>
              <button
                key={item}
                className="group flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-[#1B365D] transition-colors">

                  {item}
                  <ChevronDown className="h-3 w-3 text-gray-400 group-hover:text-[#1B365D]" />
                </button>

            )}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="secondary" size="sm" className="font-semibold">
              Start a Referral
            </Button>
            <a href="tel:18137709858">
              <Button variant="primary" size="sm" className="font-semibold">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Call Button */}
          <a
            href="tel:18137709858"
            className="md:hidden inline-flex items-center gap-1.5 bg-[#C19A6B] hover:bg-[#a8855a] text-white px-3 py-1.5 rounded-md font-medium text-xs"
          >
            <Phone className="h-3 w-3" />
            Call Now
          </a>
        </div>
      </div>
    </header>);

}