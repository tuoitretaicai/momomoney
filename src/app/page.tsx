'use client';
import React from 'react';
import {
  Header,
  Hero,
  Benefits,
  InstructionSection,
  Promotions,
  Security,
  Footer,
  SupportWidget,
} from '@/components';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-viettel-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <InstructionSection />
        <Promotions />
        <Security />
      </main>
      <Footer />
      <SupportWidget />
    </div>
  );
};

export default App;