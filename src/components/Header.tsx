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
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center border-2 border-[#1B365D] p-1">
              {/* Abstract Bird Icon Representation */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-full w-full text-[#1B365D]"
                stroke="currentColor"
                strokeWidth="1.5">

                <path
                  d="M16 12c0-4.418-3.582-8-8-8m0 0v8m0-8C5.5 4 3 6.5 3 12a9 9 0 0 0 9 9h4a5 5 0 0 0 5-5c0-2.5-2-5-5-5"
                  strokeLinecap="round"
                  strokeLinejoin="round" />

              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#1B365D] font-serif leading-none">
                SANDHILL
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                Community Services
              </span>
            </div>
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