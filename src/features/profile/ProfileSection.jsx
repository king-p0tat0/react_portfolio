import React, { useState } from 'react';
import './css/ProfileSection.css';
import ProfileImg from '@/assets/images/profile/profile_img.png'
import NameCard from '@/assets/images/profile/name-card.png'

const ProfileSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsModalVisible(true), 10);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  return (
    <>
        <div className="profile-section-wrapper">
      <div className="section-title">
        <h2>신입 개발자 '정서윤'을 소개합니다!</h2>
      </div>
      <section id="profile" className="profile-section">
        <ul className="profile-list">
          <li className="profile-image">
          </li>
          <li className="profile-info">
            <div className="name">
              정서윤
            </div>
            <div className="profile-details">
              <div className="introduce">
                비전공자의 한계를 실전 프로젝트와 기술 역량으로 극복한, 사용자 중심의 성장형 개발자입니다.
              </div>
              <div className="name-card" onClick={openModal}>
                <i className="fa-solid fa-at"></i> name card
              </div>
              <div>wjdtjdbs2089@gmail.com</div>
              <div className="github-link">
                <i className="fa-solid fa-link"></i>
                <a href="https://github.com/king-p0tat0" target="_blank" rel="noopener noreferrer">
                  https://github.com/king-p0tat0
                </a>
              </div>
            </div>
          </li>
        </ul>

        {/* Introduction Section */}
        <div className="intro-container">
          <h1>보이는 것 이상의 가치를 만들다</h1>
          <p>사용자의 마음까지 설계하는, Empathetic Developer</p>
          <p>
            풀스택 개발자 과정을 수료하며 백엔드부터 프론트엔드까지 다양한 영역을 경험했지만
          </p>
          <p>
            특히 사용자와 가장 가까운 UI 설계에 가장 큰 열정을 쏟으며 그만큼의 보람을 느꼈습니다.
          </p>
          <p>
            UI는 단순한 화면이 아니라, 좋은 코드와 함께 사용자 경험에 큰 가치를 더하는 핵심 요소라고 생각합니다.
          </p>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className={`modal ${isModalVisible ? 'modal-show' : ''}`} onClick={closeModal}>
            <div className={`modal-content ${isModalVisible ? 'modal-content-show' : ''}`} onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>&times;</span>
              <img src={NameCard} alt="명함 이미지" className="modal-image" />
            </div>
          </div>
        )}
      </section>
      </div>
    </>
  );
};

export default ProfileSection;