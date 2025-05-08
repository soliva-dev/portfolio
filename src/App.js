import React from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import LayoutFooter from './components/LayoutFooter';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LayoutHeader />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ContactSection />
      </main>
      <LayoutFooter />
    </div>
  );
};

export default App;