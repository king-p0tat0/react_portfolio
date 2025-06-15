import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Container,
  Fade,
  Slide
} from '@mui/material';
import { styled } from '@mui/material/styles';
import './css/MainPage.css';

const GlassButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: '50px',
  padding: '12px 32px',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  ...(variant === 'primary' ? {
    background: 'linear-gradient(45deg, #ff6b35, #ec407a)',
    color: 'white',
    boxShadow: '0 8px 32px rgba(255, 107, 53, 0.3)',
    '&:hover': {
      transform: 'translateY(-2px) scale(1.05)',
      boxShadow: '0 12px 40px rgba(255, 107, 53, 0.4)',
      background: 'linear-gradient(45deg, #ec407a, #9c27b0)',
    },
  } : {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(255, 182, 193, 0.3)',
    color: '#333',
    '&:hover': {
      transform: 'translateY(-2px) scale(1.05)',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderColor: 'rgba(255, 182, 193, 0.5)',
      boxShadow: '0 8px 32px rgba(255, 182, 193, 0.2)',
    },
  }),
}));

const AnimatedText = ({ text }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % text.length);
    }, 300);

    return () => clearInterval(interval);
  }, [text.length]);

  return (
    <h1 className="animated-title responsive-title">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className={i === activeIndex ? 'active-char' : ''}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

const BigStar = ({ x, y, delay, duration, size }) => {
  return (
    <div
      className="big-star"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        fontSize: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      ✦
    </div>
  );
};

const LightSparkle = ({ x, y, delay, duration, size }) => {
  return (
    <div
      className="light-sparkle"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    />
  );
};

const MainPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stars, setStars] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const [bigStars, setBigStars] = useState([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 3,
          duration: Math.random() * 2 + 2
        });
      }
      setStars(newStars);
    };

    // Generate sparkles
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 30; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 2 + Math.random() * 3,
          size: 4 + Math.random() * 8
        });
      }
      setSparkles(newSparkles);
    };

    // Generate big stars
    const generateBigStars = () => {
      const newBigStars = [];
      for (let i = 0; i < 8; i++) {
        newBigStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 4,
          duration: 3 + Math.random() * 2,
          size: 20 + Math.random() * 15
        });
      }
      setBigStars(newBigStars);
    };

    generateStars();
    generateSparkles();
    generateBigStars();

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="background-gradient" />

        {/* Twinkling stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 215, 0, 0.8)`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`
            }}
          />
        ))}

        {/* Light sparkles */}
        {sparkles.map((sparkle) => (
          <LightSparkle
            key={sparkle.id}
            x={sparkle.x}
            y={sparkle.y}
            delay={sparkle.delay}
            duration={sparkle.duration}
            size={sparkle.size}
          />
        ))}

        {/* Big stars */}
        {bigStars.map((star) => (
          <BigStar
            key={star.id}
            x={star.x}
            y={star.y}
            delay={star.delay}
            duration={star.duration}
            size={star.size}
          />
        ))}

        {/* Main content */}
        <div className="container">
          {/* Badge */}
          <div className={`badge ${isVisible ? 'slide-down' : ''}`}>
            FULLSTACK DEVELOPER
          </div>

          {/* Main heading */}
          <h1 className="gradient-text">
            한계를 기회로 바꾸며 달려온
          </h1>
          <AnimatedText text="Fullstacker" />

          {/* Subtitle */}
          <p className={`subtitle responsive-subtitle ${isVisible ? 'slide-up' : ''}`}>
            비전공자의 한계를 실전 경험과 기술력으로 극복하며,
            <br />
            <span className="highlight-text">
              창의적인 아이디어
            </span>
            로&nbsp;
            <span className="highlight-text">
              사용자 경험을 혁신
            </span>
            하는 개발자입니다.
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <GlassButton variant="primary" size="large">
              프로젝트 보기
            </GlassButton>
            <GlassButton variant="secondary" size="large">
              프로필 보기
            </GlassButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`scroll-indicator ${isVisible ? 'fade-in' : ''}`}>
          <div className="scroll-text">
            Scroll Down
          </div>
          <div className="scroll-dot">
            <div className="scroll-dot-inner" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;