import React from 'react';
import './Header.css';
import '@fontsource/mogra';
import '@fontsource/radley';

const Header = () => {
  return (
    <>
      <header>
        <nav className="sidebar-wrap">
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>

      </header>
    </>
  );
};

export default Header;
