import React, { useState } from 'react';
import './css/ProfileSection.css';
import ProfileImg from '@/assets/images/profile/profile-image.jpg'
import Badge from '@/assets/images/profile/badge.png'
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
      <div className="section-title">
        <h2>신입 개발자 '정서윤'을 소개합니다!</h2>
      </div>
      <section id="profile" className="profile-section">
        <ul className="profile-list">
          <li className="profile-image">
            <img src={ProfileImg} alt="프로필 사진" />
          </li>
          <li className="profile-info">
            <div className="name">
              정서윤
              <img src={Badge} alt="badge" className="badge" />
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
    </>
  );
};

export default ProfileSection;