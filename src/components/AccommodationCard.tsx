import React from 'react';
import { Star, Clock, Check, Clock3 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Accommodation } from '../types';

interface AccommodationCardProps {
  accommodation: Accommodation;
  className?: string;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ 
  accommodation,
  className = ''
}) => {
  const { theme } = useTheme();
  
  return (
    <div 
      className={`
        rounded-2xl overflow-hidden transition-all duration-300
        hover:shadow-lg hover:-translate-y-1
        ${theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-sm'}
        ${className}
      `}
    >
      <div className="relative h-32">
        <img 
          src={accommodation.image} 
          alt={accommodation.name}
          className="w-full h-full object-cover"
        />
        {accommodation.rating && (
          <div className="absolute top-3 left-3 bg-white/95 rounded-full px-3 py-1 flex items-center">
            <Star size={14} className="text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{accommodation.rating}</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {accommodation.name}
        </h3>
        
        <div className={`mt-3 space-y-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          <div className="flex items-center">
            <Clock size={14} className="mr-2" />
            <span>Check in: {accommodation.checkIn}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-2" />
            <span>Check out: {accommodation.checkOut}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              ${accommodation.price.toFixed(2)}
            </span>
            <span className={`text-sm ml-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              / {accommodation.nights} nights
            </span>
          </div>
          
          {accommodation.confirmed && (
            <div className="flex items-center text-green-500 text-sm">
              <Check size={14} className="mr-1" />
              <span>Confirmed</span>
            </div>
          )}
          {accommodation.pending && (
            <div className="flex items-center text-orange-500 text-sm">
              <Clock3 size={14} className="mr-1" />
              <span>Pending</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;