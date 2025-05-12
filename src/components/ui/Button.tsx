import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-medium rounded-md transition-all duration-300 inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-glow-blue hover:shadow-glow-purple',
    secondary: 'bg-gray-800 text-blue-400 border border-blue-400/30 hover:border-blue-400/80 hover:text-blue-300',
    outline: 'bg-transparent border border-blue-400/50 text-blue-400 hover:bg-blue-400/10',
    ghost: 'bg-transparent text-blue-400 hover:bg-blue-400/10'
  };
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3'
  };
  
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;