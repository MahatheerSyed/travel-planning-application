import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  name: string;
  subText?: string;
  rightElement?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ name, subText, rightElement }) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex justify-between items-start mb-6">
      <div>
        <h1 className={`
          text-xl font-bold
          ${theme === 'dark' ? 'text-white' : 'text-gray-800'}
        `}>
          Hello {name}!
        </h1>
        
        {subText && (
          <p className={`
            text-sm mt-1
            ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
          `}>
            {subText}
          </p>
        )}
      </div>
      
      {rightElement}
    </div>
  );
};

export default Header;