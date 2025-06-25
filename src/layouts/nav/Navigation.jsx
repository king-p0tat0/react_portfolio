import React from 'react';
import './css/Navigation.css';

const Navigation = ({
  items,
  activeItem,
  onItemClick,
  position = 'left',
  className = ''
}) => {
  return (
    <div className={`navigation navigation--${position} ${className}`}>
      <div className="navigation__items">
        {items.map((item, index) => (
          <div
            key={item.id || index}
            className={`navigation__dot ${
              activeItem === item.id
                ? 'navigation__dot--active'
                : ''
            }`}
            onClick={() => onItemClick(item.id)}
            title={item.label}
            aria-label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Navigation;