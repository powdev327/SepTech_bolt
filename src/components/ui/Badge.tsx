import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'danger';
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  variant = 'default', 
  children, 
  className = '' 
}) => {
  const variantClasses = {
    default: 'bg-blue-400/20 text-blue-400',
    success: 'bg-green-400/20 text-green-400',
    warning: 'bg-yellow-400/20 text-yellow-400',
    danger: 'bg-red-400/20 text-red-400'
  };

  return (
    <span 
      className={`
        px-2 py-0.5 text-xs rounded-full font-medium 
        ${variantClasses[variant]} ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;