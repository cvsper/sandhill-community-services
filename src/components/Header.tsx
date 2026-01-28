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
              src="/logo.png"
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
            <Button variant="primary" size="sm" className="font-semibold">
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button (Placeholder) */}
          <button className="md:hidden p-2 text-[#1B365D]">
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />

            </svg>
          </button>
        </div>
      </div>
    </header>);

}