import React from 'react';
import { Home, Search, PlusCircle, Heart, User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface BottomNavProps {
  currentTab: number;
  setCurrentTab: (tab: number) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentTab, setCurrentTab }) => {
  const { theme } = useTheme();
  
  const tabs = [
    { icon: <Home size={22} />, name: 'Home' },
    { icon: <Search size={22} />, name: 'Search' },
    { icon: <PlusCircle size={22} />, name: 'Add' },
    { icon: <Heart size={22} />, name: 'Favorites' },
    { icon: <User size={22} />, name: 'Profile' },
  ];
  
  return (
    <div 
      className={`
        fixed bottom-0 left-0 right-0 
        flex justify-around items-center 
        py-3 px-2 border-t
        ${theme === 'dark' 
          ? 'bg-gray-900 border-gray-800' 
          : 'bg-white border-gray-200'}
      `}
    >
      {tabs.map((tab, index) => (
        <div
          key={tab.name}
          onClick={() => setCurrentTab(index)}
          className={`
            flex flex-col items-center 
            cursor-pointer transition-colors
            ${currentTab === index
              ? theme === 'dark' 
                ? 'text-blue-400' 
                : 'text-blue-600'
              : theme === 'dark'
                ? 'text-gray-500'
                : 'text-gray-400'
            }
          `}
        >
          {tab.icon}
        </div>
      ))}
    </div>
  );
};

export default BottomNav;