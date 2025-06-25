import React from 'react';

const Navigation = ({
  items,
  activeItem,
  onItemClick,
  position = 'left',
  className = ''
}) => {
  const positionClasses = {
    left: 'left-12',
    right: 'right-12',
    center: 'left-1/2 transform -translate-x-1/2'
  };

  return (
    <div className={`fixed ${positionClasses[position]} top-1/2 transform -translate-y-1/2 z-99 ${className}`}>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={item.id || index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              activeItem === item.id
                ? 'bg-black scale-125'
                : 'bg-gray-400 hover:bg-gray-600 hover:scale-110'
            }`}
            onClick={() => onItemClick(item.id)}
            title={item.label} // 접근성을 위한 툴팁
            aria-label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Navigation;