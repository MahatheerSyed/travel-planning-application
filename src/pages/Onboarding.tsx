import React, { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTrip } from '../context/TripContext';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Dropdown from '../components/Dropdown';
import CompanionOption from '../components/CompanionOption';
import { TravelCompanion } from '../types';

interface OnboardingProps {
  onComplete: () => void;
}

const durationOptions = [
  '1-3 days',
  '4-7 days',
  '1-2 weeks',
  '2+ weeks'
];

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const { theme } = useTheme();
  const { 
    destination, 
    setDestination, 
    duration, 
    setDuration,
    companions,
    setCompanions
  } = useTrip();
  
  const handleSubmit = () => {
    if (destination && duration) {
      onComplete();
    }
  };
  
  const isFormValid = destination.trim() !== '' && duration !== '';
  
  return (
    <div className={`
      min-h-screen p-6 flex flex-col
      ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}
    `}>
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-2">Plan Your Journey, Your Way!</h1>
        <p className={`text-sm mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Let's create your personalized travel experience
        </p>
        
        <div className="space-y-6">
          <div>
            <label className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Where would you like to go?
            </label>
            <InputField
              placeholder="Enter Destination"
              value={destination}
              onChange={setDestination}
              icon={<MapPin size={18} className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'} />}
            />
          </div>
          
          <div>
            <label className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              How long will you stay?
            </label>
            <Dropdown
              placeholder="Select Duration"
              options={durationOptions}
              value={duration}
              onChange={setDuration}
            />
          </div>
          
          <div>
            <label className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Who are you traveling with?
            </label>
            <div className="grid grid-cols-4 gap-3">
              {(['Solo', 'Couple', 'Family', 'Friends'] as TravelCompanion[]).map((type) => (
                <CompanionOption
                  key={type}
                  type={type}
                  selected={companions === type}
                  onSelect={() => setCompanions(type)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Button
        onClick={handleSubmit}
        disabled={!isFormValid}
        className="w-full mt-6"
      >
        Continue
      </Button>
    </div>
  );
};

export default Onboarding;