import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface DropdownProps {
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  placeholder,
  options,
  value,
  onChange,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      ref={dropdownRef}
      className={`
        relative
        ${className}
      `}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-between 
          py-3 px-4 rounded-md cursor-pointer
          ${theme === 'dark' 
            ? 'bg-gray-800 text-white' 
            : 'bg-gray-100 text-gray-800'}
        `}
      >
        <span className={`${!value ? 'text-gray-400' : ''}`}>
          {value || placeholder}
        </span>
        <ChevronDown 
          size={18}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </div>
      
      {isOpen && (
        <div className={`
          absolute z-10 mt-1 w-full 
          rounded-md shadow-lg 
          ${theme === 'dark' 
            ? 'bg-gray-700 text-white' 
            : 'bg-white text-gray-800'}
        `}>
          <div className="py-1">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`
                  block px-4 py-2 text-sm cursor-pointer
                  ${theme === 'dark' 
                    ? 'hover:bg-gray-600' 
                    : 'hover:bg-gray-100'}
                `}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;