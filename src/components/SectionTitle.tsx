import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface SectionTitleProps {
  title: string;
  price?: number;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, price }) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex justify-between items-center mb-3">
      <h2 className={`
        font-medium
        ${theme === 'dark' ? 'text-white' : 'text-gray-800'}
      `}>
        {title}
      </h2>
      
      {price !== undefined && (
        <span className={`
          text-sm
          ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
        `}>
          ${price.toFixed(2)}
        </span>
      )}
    </div>
  );
};

export default SectionTitle;