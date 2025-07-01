import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './css/HeroSection.css';
import BgImg from '@/assets/images/background.png'

const HeroSection = () => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const titleText = '보이는 것 이상의 가치를 만들다';

  const GITHUB_URL = 'https://github.com/king-p0tat0';
  const EMAIL_ADDRESS = 'yuni9260@naver.com';

  // GitHub 링크 클릭 핸들러
  const handleGithubClick = () => {
    window.open(GITHUB_URL, '_blank', 'noopener,noreferrer');
  };

  // 이메일 복사 핸들러
  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setShowTooltip(true);

      // 3초 후 메시지 제거
      setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
    } catch (err) {
      console.error('복사 실패:', err);
      setShowTooltip(true);

      setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
    }
  };

  useEffect(() => {
    const startTyping = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));

      // 타이핑 효과
      for (let i = 0; i <= titleText.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 80));
        setDisplayedTitle(titleText.substring(0, i));
      }

      setTypingComplete(true);

      // 타이핑 완료 후 서브타이틀 애니메이션 (딜레이 400, 1200)
      setTimeout(() => {
        setShowSubtitle(true);
      }, 400);

      setTimeout(() => {
        setShowDescription(true);
      }, 1200);

      // 스크롤 다운 아이콘 표시 (딜레이 2000)
      setTimeout(() => {
        setShowScrollDown(true);
      }, 2000);
    };

    startTyping();
  }, []);

  return (
    <>
      <img src={BgImg} alt="배경이미지" className="bg-image" />
      <header className="hero-header">
          <div className="icon-container" onClick={handleGithubClick} style={{ cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faGithub} className="github-icon" />
              <span className="icon-text">Github</span>
          </div>
          <div className="icon-container email-container" onClick={handleEmailClick} style={{ cursor: 'pointer', position: 'relative' }}>
              <FontAwesomeIcon icon={faEnvelope} className="mail-icon" />
              <span className="icon-text">Email</span>

              {/* 말풍선 툴팁 */}
              <div className={`email-tooltip ${showTooltip ? 'show' : ''}`}>
                <span>이메일이 복사되었습니다 :)</span>
                <div className="tooltip-arrow"></div>
              </div>
          </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className={`typing-text ${typingComplete ? 'typing-complete' : ''}`} id="typing-title">
              {displayedTitle}
            </span>
          </h1>
          <h2 className={`hero-subtitle ${showSubtitle ? 'subtitle-visible' : ''}`} id="subtitle">
            사용자의 마음까지 설계하는 Empathetic Developer
          </h2>
          <p className={`hero-description ${showDescription ? 'description-visible' : ''}`} id="description">
            안녕하세요, 신입 개발자 정서윤입니다<span className="accent-dot"></span>
          </p>
        </div>

        {/* 스크롤 다운 아이콘 */}
        <div className={`scroll-down ${showScrollDown ? 'show' : ''}`}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="scroll-text">SCROLL DOWN</div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;