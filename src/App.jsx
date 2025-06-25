import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import Footer from '@/layouts/footer/Footer.jsx'
import Navigation from '@/layouts/nav/Navigation.jsx'
import HeroSection from '@/features/home/HeroSection.jsx'
import ProfileSection from '@/features/profile/ProfileSection.jsx'
import ProjectSection from '@/features/project/ProjectSection.jsx'
import ContactSection from '@/features/contact/ContactSection.jsx'
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  const slides = [
    { id: 'hero', label: '홈', component: <HeroSection /> },
    { id: 'profile', label: '프로필', component: <ProfileSection /> },
    { id: 'project', label: '프로젝트', component: <ProjectSection /> },
    { id: 'contact', label: '연락처', component: <ContactSection /> },
  ];

  // 다음 슬라이드로 이동
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  // 이전 슬라이드로 이동
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  // 특정 슬라이드로 이동
  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();

      if (scrollTimeoutRef.current) return;

      if (event.deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }

      scrollTimeoutRef.current = setTimeout(() => {
        scrollTimeoutRef.current = null;
      }, 800);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [nextSlide, prevSlide]);


  return (
    <div className="app">
      <Navigation
        items={slides.map((slide, index) => ({ id: slide.id, label: slide.label }))}
        activeItem={slides[currentSlide].id}
        onItemClick={(sectionId) => {
          const index = slides.findIndex(slide => slide.id === sectionId);
          goToSlide(index);
        }}
        position="left"
      />

      <div className="slide-container">
        <div
          className="slides-wrapper"
          style={{
            transform: `translateY(-${currentSlide * 100}vh)`
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              {slide.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;