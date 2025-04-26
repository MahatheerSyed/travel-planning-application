import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChange,
  icon,
  className = '',
}) => {
  const { theme } = useTheme();
  
  return (
    <div className={`
      relative rounded-md overflow-hidden
      ${theme === 'dark' 
        ? 'bg-gray-800 text-white' 
        : 'bg-gray-100 text-gray-800'}
      ${className}
    `}>
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          w-full py-3 px-4
          ${icon ? 'pl-10' : 'pl-4'}
          outline-none
          ${theme === 'dark' 
            ? 'bg-gray-800 placeholder-gray-500' 
            : 'bg-gray-100 placeholder-gray-400'}
        `}
      />
    </div>
  );
};

export default InputField;