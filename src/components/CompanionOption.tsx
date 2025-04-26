import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { TravelCompanion } from '../types';
import { User, Users, UserPlus2, Heart } from 'lucide-react';

interface CompanionOptionProps {
  type: TravelCompanion;
  selected: boolean;
  onSelect: () => void;
}

const CompanionOption: React.FC<CompanionOptionProps> = ({
  type,
  selected,
  onSelect,
}) => {
  const { theme } = useTheme();
  
  const getIcon = () => {
    switch (type) {
      case 'Solo':
        return <User size={18} />;
      case 'Couple':
        return <Heart size={18} />;
      case 'Family':
        return <Users size={18} />;
      case 'Friends':
        return <UserPlus2 size={18} />;
      default:
        return <User size={18} />;
    }
  };
  
  return (
    <div
      onClick={onSelect}
      className={`
        flex flex-col items-center justify-center
        p-3 rounded-md cursor-pointer transition-all
        ${selected
          ? theme === 'dark'
            ? 'bg-blue-800 text-white'
            : 'bg-blue-100 text-blue-800'
          : theme === 'dark'
            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }
      `}
    >
      {getIcon()}
      <span className="mt-1 text-xs">{type}</span>
    </div>
  );
};

export default CompanionOption;