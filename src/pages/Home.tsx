import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { WhoWeServe } from '../components/WhoWeServe';
import { AboutSection } from '../components/AboutSection';
import { ReferralSection } from '../components/ReferralSection';
import { JoinTeamSection } from '../components/JoinTeamSection';
import { Footer } from '../components/Footer';
export function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <WhoWeServe />
        <AboutSection />
        <ReferralSection />
        <JoinTeamSection />
      </main>
      <Footer />
    </div>);

}