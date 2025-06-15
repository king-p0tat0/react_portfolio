import React, { useState, useEffect } from 'react';
import './css/ConcernsSection.css';

const ConcernsSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  const concerns = [
    {
      id: 1,
      title: "기초적인 컴퓨터 과학 지식이 부족하지 않을까?",
      content: [
        "비전공자로서 이론적인 기반이 부족할 수 있다는 점을 인지하고 있었기 때문에 별도로 자료구조, 알고리즘, 네트워크 등의 핵심 개념을 꾸준히 공부하며 보완해왔습니다.",
        "실제 프로젝트에 적용하면서 이론과 실무를 함께 익히는 데 집중하고 있습니다."
      ]
    },
    {
      id: 2,
      title: "지속적인 학습과 기술 습득에 어려움은 없을까?",
      content: [
        "낯선 분야를 배우는 데 두려워하지 않고 도전을 즐기기에, 새로운 기술도 빠르게 흡수하고 적용하는 데 자신이 있습니다.",
        "부족했던 만큼 더 많이 배우려는 자세로 매일 공부하고, 사이드 프로젝트로 반복 학습하고 있습니다."
      ]
    },
    {
      id: 3,
      title: "개발에 대한 진지한 동기와 장기적인 비전이 있을까?",
      content: [
        "기술로 실제 문제를 해결하는 경험에서 큰 보람을 느끼며 개발자의 길을 선택했습니다.",
        "단순한 취업이 아니라, 사용자 중심의 서비스 개발자로 성장하는 것이 제 목표이며, 이를 위해 장기적으로 전문성과 기획 능력을 함께 키워나갈 계획입니다."
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.dataset.id);
            setVisibleItems(prev => new Set([...prev, itemId]));
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px'
      }
    );

    const items = document.querySelectorAll('.concern-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="concerns-container">
      <div className="background-gradient"></div>
      <div className="light-sparkle sparkle-1"></div>
      <div className="light-sparkle sparkle-2"></div>
      <div className="light-sparkle sparkle-3"></div>
      <div className="section-title">
        <h2 className="section__top-title">개발자의 길을 선택하기까지,</h2>
        <br />
        <h2>어떤 고민을 했을까요?</h2>
      </div>
      <div className="concerns-section">
        {concerns.map((concern, index) => (
          <div
            key={concern.id}
            className={`concern-item ${visibleItems.has(concern.id) ? 'visible' : ''} ${
              index === 0 ? 'left-top' :
              index === 1 ? 'right-middle' :
              'center-bottom'
            }`}
            data-id={concern.id}
          >
            <div className="concern-bubble">
              <div className="concern-content">
                <h3 className="concern-title">"{concern.title}"</h3>
                <div className="concern-text">
                  {concern.content.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConcernsSection;