import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  disabled = false 
}) => {
  const { theme } = useTheme();
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        py-3 px-6 rounded-md font-medium transition-all duration-300
        ${theme === 'dark' 
          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
          : 'bg-blue-500 hover:bg-blue-600 text-white'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;