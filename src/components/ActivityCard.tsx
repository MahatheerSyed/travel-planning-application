import React from 'react';
import { Clock, MapPin, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Activity } from '../types';
import { motion } from 'framer-motion';

interface ActivityCardProps {
  activity: Activity;
  onClick?: () => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onClick }) => {
  const { theme } = useTheme();
  
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        group flex rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-300
        ${theme === 'dark' 
          ? 'bg-gray-800/90 hover:bg-gray-800 hover:shadow-lg hover:shadow-black/20' 
          : 'bg-white hover:shadow-xl hover:shadow-gray-200/80'}
      `}
    >
      {activity.image && (
        <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden">
          <img 
            src={activity.image} 
            alt={activity.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className={`
            absolute inset-0 bg-gradient-to-r
            ${theme === 'dark' 
              ? 'from-gray-800/50' 
              : 'from-white/50'}
          `}/>
        </div>
      )}
      
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h3 className={`
              font-semibold text-base leading-tight
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
            `}>
              {activity.name}
            </h3>
            
            <div className={`
              px-2 py-1 rounded-full text-[10px] font-medium whitespace-nowrap
              ${theme === 'dark' 
                ? 'bg-blue-500/20 text-blue-300' 
                : 'bg-blue-100 text-blue-700'}
            `}>
              {activity.duration}
            </div>
          </div>
          
          <div className={`
            mt-2 space-y-2
            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
          `}>
            <div className="flex items-center text-xs">
              <Clock size={14} className={`
                mr-2 flex-shrink-0
                ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}
              `} />
              <span className="font-medium">{activity.timing}</span>
            </div>
            
            {activity.pickUp && (
              <div className="flex items-center text-xs">
                <MapPin size={14} className={`
                  mr-2 flex-shrink-0
                  ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}
                `} />
                <span className="font-medium">{activity.pickUp}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-end mt-2">
          <ChevronRight size={16} className={`
            transition-transform group-hover:translate-x-1
            ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}
          `} />
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityCard;