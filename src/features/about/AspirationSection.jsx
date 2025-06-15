import React, { useState, useEffect, useRef } from 'react';
import './css/AspirationSection.css';
import sticker from '@/assets/images/sticker.gif';

const AspirationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);
  const [floatingElements, setFloatingElements] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);

  useEffect(() => {
    // Generate floating particles
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          delay: Math.random() * 3,
          duration: Math.random() * 4 + 3,
          opacity: Math.random() * 0.6 + 0.3
        });
      }
      setParticles(newParticles);
    };

    // Generate floating geometric elements
    const generateFloatingElements = () => {
      const elements = [];
      const shapes = ['◆', '●', '▲', '■', '✦', '◇', '★', '♦'];
      for (let i = 0; i < 18; i++) {
        elements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          size: Math.random() * 20 + 15,
          delay: Math.random() * 2,
          duration: Math.random() * 6 + 4,
          color: ['#FF6B9D', '#A855F7', '#3B82F6', '#F59E0B', '#10B981'][Math.floor(Math.random() * 5)]
        });
      }
      setFloatingElements(elements);
    };

    generateParticles();
    generateFloatingElements();

    // Intersection Observer for scroll trigger
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="aspiration-section" ref={sectionRef}>
      {/* Interactive background effect */}
      <div
        className="background-effect"
        style={{
          background: `
            radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 107, 157, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 60% 60%, rgba(16, 185, 129, 0.08) 0%, transparent 70%)
          `
        }}
      />

      {/* Magic orbs */}
      <div className="magic-orb magic-orb-1" />
      <div className="magic-orb magic-orb-2" />
      <div className="magic-orb magic-orb-3" />
      <div className="magic-orb magic-orb-4" />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="floating-particle"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            opacity: particle.opacity
          }}
        />
      ))}

      {/* Floating geometric elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="floating-element"
          style={{
            left: `${element.x}%`,
            color: element.color,
            fontSize: `${element.size}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        >
          {element.shape}
        </div>
      ))}

      {/* Main content */}
      <div className="content-container">
        <div className="section-title asp-title">
          <h2>'비전공'이라는 틀을 깨다!</h2>
        </div>

        <div className="content-wrapper">
          <div className={`text-block ${isVisible ? 'visible' : ''}`}>
            기술이 사람들의 삶을 더 편리하게 만들 수 있다는 사실이 정말 매력적으로 다가왔고, 그 매력에 이끌려 개발자의 길을 걷게 되었습니다.
            <br />
            풀스택 개발자 과정을 수료하며 백엔드부터 프론트엔드까지 다양한 영역을 경험했지만,
            <br />
            특히 사용자와 가장 가까이 닿는 <span className="highlight-text">UI를 설계하고 구현</span>하는 일에 큰 재미와 보람을 느꼈습니다.
            <br />
            사용자의 입장에서 서비스를 고민하고, 팀원들과 함께 문제를 해결해 나가는 과정은 개발자로서의 열정을 더욱 키워줬습니다.
            <br />
            <span className="highlight-text">빠르게 배우고, 꾸준히 성장하며!</span>
            <br />
            현실의 불편함을 기술로 해결하는 개발자가 되겠습니다 :)
          </div>

          <div className="sticker-container">
            <div className={`sticker-glow ${isVisible ? 'visible' : ''}`} />
            <img
              src={sticker}
              alt="sticker"
              className={`sticker ${isVisible ? 'visible' : ''}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AspirationSection;