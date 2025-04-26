import React from 'react';
import { Plane, ArrowRight, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Flight } from '../types';

interface FlightCardProps {
  flight: Flight;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  const { theme } = useTheme();
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Flight Details
        </h2>
        <button className="text-blue-500 text-sm hover:text-blue-600">See all</button>
      </div>
      
      <div 
        className={`
          relative rounded-2xl overflow-hidden
          ${theme === 'dark' ? 'bg-[#1e3a8a]' : 'bg-[#1d4ed8]'}
        `}
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&w=800')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-sm"></div>
        
        <div className="relative p-6">
          <div className="flex items-center justify-between text-white">
            <div>
              <div className="text-3xl font-bold tracking-wide">{flight.departureCode}</div>
              <div className="text-sm mt-1 opacity-90">{flight.departure}</div>
              <div className="text-sm mt-0.5 opacity-80">{flight.departureTime}</div>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <Plane size={24} className="text-blue-200 transform rotate-90" />
              <div className="w-24 border-t-2 border-dashed border-blue-200/50"></div>
              <div className="text-sm font-medium text-blue-200">
                {flight.date}
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-bold tracking-wide">{flight.arrivalCode}</div>
              <div className="text-sm mt-1 opacity-90">{flight.arrival}</div>
              <div className="text-sm mt-0.5 opacity-80">{flight.arrivalTime}</div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                <Clock size={16} className="text-blue-200" />
              </div>
              <div>
                <div className="text-xs text-blue-200">Flight Duration</div>
                <div className="text-sm text-white font-medium">9h 15m</div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-xs text-blue-200">Price</div>
              <div className="text-lg text-white font-bold">
                ${flight.price.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;