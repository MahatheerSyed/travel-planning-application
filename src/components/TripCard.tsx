import React from 'react';
import { Clock, Users, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Destination } from '../types';

interface TripCardProps {
  trip: Destination;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  const { theme } = useTheme();
  
  return (
    <div className="relative rounded-2xl overflow-hidden mb-6 w-full h-56 group">
      <img 
        src={trip.image} 
        alt={trip.name}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/75 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-white text-3xl font-bold tracking-wide">{trip.name}</h2>
          <p className="text-white/90 text-sm mt-1 font-medium">{trip.dates}</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {trip.duration && (
            <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock size={14} className="text-white mr-2" />
              <span className="text-white text-xs font-medium">{trip.duration}</span>
            </div>
          )}
          
          {trip.groupSize && (
            <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-full px-4 py-2">
              <Users size={14} className="text-white mr-2" />
              <span className="text-white text-xs font-medium">{trip.groupSize}</span>
            </div>
          )}
          
          {trip.activities && (
            <div className="flex items-center bg-white/15 backdrop-blur-sm rounded-full px-4 py-2">
              <Calendar size={14} className="text-white mr-2" />
              <span className="text-white text-xs font-medium">{trip.activities} Activities</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TripCard;