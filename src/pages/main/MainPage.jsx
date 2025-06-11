import React, { useState, useEffect } from 'react';

const styles = {
  mainContainer: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#FFF5EC',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    margin: 0,
    padding: 0,
    paddingTop: '30px'
  }
,
  backgroundGradient: {
    position: 'absolute',
    inset: 0,
    opacity: 0.3,
    background: `
      radial-gradient(circle at 20% 50%, rgba(255, 182, 193, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 218, 185, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(255, 228, 196, 0.3) 0%, transparent 50%)
    `,
    animation: 'pulse 4s ease-in-out infinite'
  },
  container: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    padding: '20px',
    maxWidth: '1200px',
    width: '100%',
    margin: 0
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '32px',
    padding: '8px 24px',
    borderRadius: '50px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    gap: '8px'
  },
  badgeIcon: {
    width: '12px',
    height: '12px',
    background: 'linear-gradient(45deg, #ff6b35, #ec407a)',
    borderRadius: '50%',
    animation: 'pulse 2s ease-in-out infinite'
  },
  gradientText: {
    background: 'linear-gradient(45deg, #ff6b35, #ec407a, #9c27b0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '3rem',
    marginBottom: '16px',
    margin: '0 0 16px 0'
  },
  animatedTitle: {
    fontSize: '7.5rem',
    fontWeight: 'bold',
    color: '#333',
    userSelect: 'none',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    margin: '0 0 32px 0'
  },
  subtitle: {
    color: '#666',
    marginBottom: '48px',
    maxWidth: '600px',
    margin: '0 auto 48px auto',
    lineHeight: 1.6,
    fontSize: '1.35rem'
  },
  button: {
    borderRadius: '50px',
    padding: '12px 32px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textTransform: 'none',
    transition: 'all 0.3s ease',
    background: 'linear-gradient(45deg, #ff6b35, #ec407a)',
    color: 'white',
    boxShadow: '0 8px 32px rgba(255, 107, 53, 0.3)',
    border: 'none',
    cursor: 'pointer'
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '32px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    color: '#666'
  },
  scrollDot: {
    width: '24px',
    height: '40px',
    border: '2px solid #ccc',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative'
  },
  star: {
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: '#FFD700',
    animation: 'sparkle 3s ease-in-out infinite'
  },
  lightSparkle: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 30%, transparent 70%)',
    boxShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4)',
    animation: 'sparkle 3s ease-in-out infinite'
  },
  bigStar: {
    position: 'absolute',
    color: 'rgba(255,255,255,0.9)',
    textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.5)',
    animation: 'twinkle 4s ease-in-out infinite',
    userSelect: 'none',
    pointerEvents: 'none'
  }
};

const keyframes = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden;
  }

  @keyframes sparkle {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.3; transform: scale(0.8); }
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.8; transform: scale(1) rotate(0deg); }
    25% { opacity: 1; transform: scale(1.2) rotate(45deg); }
    50% { opacity: 0.4; transform: scale(0.8) rotate(90deg); }
    75% { opacity: 1; transform: scale(1.1) rotate(135deg); }
  }

  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
    40%, 43% { transform: translateY(-15px); }
    70% { transform: translateY(-7px); }
    90% { transform: translateY(-3px); }
  }

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .fade-in {
    animation: fadeIn 1s ease-out forwards;
  }

  .slide-down {
    animation: fadeIn 1s ease-out forwards;
  }

  .slide-up {
    animation: fadeIn 2s ease-out forwards;
  }

  .button-hover:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 12px 40px rgba(255, 107, 53, 0.4);
    background: linear-gradient(45deg, #ec407a, #9c27b0);
  }

  @media (max-width: 768px) {
    .responsive-title {
      font-size: 3rem !important;
    }
    .responsive-subtitle {
      font-size: 1.2rem !important;
    }
  }
`;

const AnimatedText = ({ text }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % text.length);
    }, 300);

    return () => clearInterval(interval);
  }, [text.length]);

  return (
    <h1 style={styles.animatedTitle} className="responsive-title">
      {text.split('').map((char, i) => (
        <span
          key={i}
          style={{
            color: i === activeIndex ? '#fff' : '#333',
            textShadow: i === activeIndex
              ? `0 0 3px rgba(255, 255, 255, 0.7),
                 0 0 6px rgba(255, 255, 255, 0.5),
                 0 0 10px rgba(255, 255, 255, 0.3)`
              : 'none',
            transition: 'color 0.3s ease, text-shadow 0.3s ease',
          }}
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
      style={{
        ...styles.bigStar,
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
      style={{
        ...styles.lightSparkle,
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
      <style>{keyframes}</style>
      <div style={styles.mainContainer}>
        {/* Animated background gradient */}
        <div style={styles.backgroundGradient} />

        {/* Twinkling stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            style={{
              ...styles.star,
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
        <div style={styles.container}>
          {/* Badge */}
          <div style={styles.badge} className={isVisible ? 'slide-down' : ''}>
            <div style={styles.badgeIcon} />
            FULLSTACK DEVELOPER
          </div>

          {/* Main heading */}
          <h1 style={styles.gradientText}>
            경험으로 쌓은 비전공자
          </h1>
          <AnimatedText text="Fullstacker" />

          {/* Subtitle */}
          <p style={styles.subtitle} className={`responsive-subtitle ${isVisible ? 'slide-up' : ''}`}>
            비전공자의 한계를 실전 경험과 기술력으로 극복하며,
            <br />
            <span style={{
              background: 'linear-gradient(45deg, #ff6b35, #ec407a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              marginRight: '4px'
            }}>
              창의적인 아이디어
            </span>
            로&nbsp;
            <span style={{
              background: 'linear-gradient(45deg, #ff6b35, #ec407a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}>
              사용자 경험을 혁신
            </span>
            하는 개발자입니다.
          </p>

          {/* CTA Button */}
          <div className={isVisible ? 'fade-in' : ''}>
            <button style={styles.button} className="button-hover">
              프로젝트 보기
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={styles.scrollIndicator} className={isVisible ? 'fade-in' : ''}>
          <div style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '12px' }}>
            Scroll Down
          </div>
          <div style={styles.scrollDot}>
            <div style={{
              width: '4px',
              height: '12px',
              background: 'linear-gradient(to bottom, #ff6b35, #ec407a)',
              borderRadius: '2px',
              position: 'absolute',
              top: '8px',
              animation: 'bounce 2s ease-in-out infinite'
            }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;