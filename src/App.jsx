import React from 'react';
import { useState, useEffect } from 'react';
import Footer from '@/layouts/footer/Footer.jsx'
import Navigation from '@/layouts/nav/Navigation.jsx'
import HeroSection from '@/features/home/HeroSection.jsx'
import ConcernsSection from '@/features/about/ConcernsSection.jsx'
import ProfileSection from '@/features/profile/ProfileSection.jsx'

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: '홈' },
    { id: 'concerns', label: '관심사' },
    { id: 'profile', label: '프로필' },
  ];

  return (
    <div className="App">
      <Navigation
        items={sections}
        activeItem={activeSection}
        onItemClick={setActiveSection}
        position="left"
      />
      <HeroSection />
      <ConcernsSection />
      <ProfileSection />
      <Footer />
    </div>
  );
}

export default App;
