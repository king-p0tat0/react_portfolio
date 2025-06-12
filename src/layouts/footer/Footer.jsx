import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
          <div className="footer-info">
            <div className="contact-wrap">
              <div className="contact-header">
                <p className="footer-info-title">Contact</p>
              </div>
              <div className="contact-content">
                <p>010.7667.9260</p>
                <p>wjdtjdbs2089@gmail.com</p>
              </div>
            </div>

            <div className="developer-wrap">
              <div className="developer-header">
                <p className="footer-info-title">Developer</p>
              </div>
              <div className="developer-content">
                <p>Jung Seoyun (2000.09.26)</p>
                <a href="https://github.com/king-p0tat0">https://github.com/king-p0tat0</a>
              </div>
            </div>
          </div>

          <p className="copyright">
            © 2025. <span>Developed & Designed By Jung Seoyun</span>
          </p>
        </footer>
    );
};

export default Footer;