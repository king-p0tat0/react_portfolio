import React from 'react';
import Header from '@/layouts/header/Header.jsx'
import Footer from '@/layouts/footer/Footer.jsx'
import MainPage from '@/pages/main/MainPage.jsx'
import AspirationSection from '@/features/about/AspirationSection.jsx'
import ConcernsSection from '@/features/about/ConcernsSection.jsx'
import ProfileSection from '@/features/profile/ProfileSection.jsx'

function App() {
  return (
    <div className="App">
      <Header />
        <MainPage />
        <ConcernsSection />
        <AspirationSection />
        <ProfileSection />
      <Footer />
    </div>
  );
}


export default App;
