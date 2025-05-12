import React from 'react';

interface CardProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
  glowing?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  className = '', 
  children,
  glowing = false
}) => {
  return (
    <div 
      className={`
        bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-800
        ${glowing ? 'shadow-glow-sm' : 'shadow-md'}
        ${className}
      `}
    >
      {title && (
        <div className="border-b border-gray-800 px-4 py-3">
          <h3 className="text-blue-400 font-medium text-sm">{title}</h3>
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default Card;