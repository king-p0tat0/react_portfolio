import React, { useState } from 'react';
import ProfileImg from '@/assets/images/profile/profile-image.png';
import JavaIcon from '@/assets/images/icon/java.png';
import SqlIcon from '@/assets/images/icon/sql.png';
import HtmlIcon from '@/assets/images/icon/html.png';
import CssIcon from '@/assets/images/icon/css.png';
import ReactIcon from '@/assets/images/icon/react.png';
import GitHubIcon from '@/assets/images/icon/github.png';
import NotionIcon from '@/assets/images/icon/notion.png';
import './css/ProfileSection.css';

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <div className="profile-container">
        <div className="profile-image">
          <img src={ProfileImg} alt="Profile" />
          <section className="profile-name">
              <p className="profile-name--kr">정서윤</p>
              <p className="profile-name--en">Jung Seoyun</p>
          </section>

            <dl className="profile-info">
              <div className="profile-info__item">
                <dt className="profile-info__label">Birth Date</dt>
                <dd className="profile-info__value">2000.09.26</dd>
              </div>
              <div className="profile-info__item">
                <dt className="profile-info__label">Mobile</dt>
                <dd className="profile-info__value">010.7667.9260</dd>
              </div>
              <div className="profile-info__item">
                <dt className="profile-info__label">E-mail</dt>
                <dd className="profile-info__value">yuni9260@naver.com</dd>
              </div>
            </dl>
        </div>

        <div className="profile-content">
          <h1 className="profile-title">
            Beyond Interface, 화면 너머의 마음을 설계합니다
          </h1>
          <p className="profile-description">
            풀스택 개발자 과정을 수료하며 백엔드부터 프론트엔드까지 다양한 영역을 경험했지만
          </p>
          <p className="profile-description">
            특히 사용자와 가장 가까운 UI 설계에 가장 큰 열정을 쏟으며 그만큼의 보람을 느꼈습니다.
          </p>
          <p className="profile-description">
            UI는 단순한 화면이 아니라 좋은 코드와 함께 <span className="profile-description--highlight">사용자 경험에 큰 가치를 더하는 핵심 요소</span>라고 생각합니다.
          </p>

            <section className="development-experience">
                <div className="title-with-bar">
                    <div className="title-bar"></div>
                    <h2 className="experience-title">Development Experience</h2>
                </div>
              <ul className="experience-list">
                <li className="experience-item">
                  <span className="experience-period">2024.11~2024.12</span>
                  <span className="experience-project">키보드 쇼핑몰 'EZ Board' 개발</span>
                </li>
                <li className="experience-item">
                  <span className="experience-period">2024.12~2025.01</span>
                  <span className="experience-project">필기구 쇼핑몰 '필연(必然)' 개발</span>
                </li>
                <li className="experience-item">
                  <span className="experience-period">2025.01~2025.02</span>
                  <span className="experience-project">반려견 문진 관리 시스템 '위드미' 개발</span>
                </li>
                <li className="experience-item">
                  <span className="experience-period">2025.02~2025.03</span>
                  <span className="experience-project">통합구매관리 시스템 'Nexspace ERP' 개발 및 배포</span>
                </li>
              </ul>
            </section>

            <section className="skills-tools">
                <div className="title-with-bar">
                    <div className="title-bar"></div>
                    <h2 className="skill-title">Skills & Tools</h2>
                </div>
                <div className="skills-tools__groups">
                  <div className="skills-tools__group">
                    <h3 className="skills-tools__title">Language</h3>
                    <ul className="skills-tools__list">
                      <li className="skills-tools__item"><img src={JavaIcon} alt="Java icon" className="icon-image java-icon" /></li>
                      <li className="skills-tools__item"><img src={SqlIcon} alt="SQL icon" className="icon-image sql-icon" /></li>
                    </ul>
                  </div>

                  <div className="skills-tools__group">
                    <h3 className="skills-tools__title">Frontend</h3>
                    <ul className="skills-tools__list">
                      <li className="skills-tools__item"><img src={HtmlIcon} alt="HTML icon" className="icon-image html-icon" /></li>
                      <li className="skills-tools__item"><img src={CssIcon} alt="CSS icon" className="icon-image css-icon" /></li>
                      <li className="skills-tools__item"><img src={ReactIcon} alt="React icon" className="icon-image react-icon" /></li>
                    </ul>
                  </div>

                  <div className="skills-tools__group">
                    <h3 className="skills-tools__title">Cooperation</h3>
                    <ul className="skills-tools__list">
                      <li className="skills-tools__item"><img src={GitHubIcon} alt="GitHub icon" className="icon-image" /></li>
                      <li className="skills-tools__item"><img src={NotionIcon} alt="Notion icon" className="icon-image" /></li>
                    </ul>
                  </div>
              </div>
            </section>

        </div>
      </div>
    </div>
  );
};

export default ProfileSection;