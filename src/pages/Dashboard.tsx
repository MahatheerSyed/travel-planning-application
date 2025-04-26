import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useTrip } from '../context/TripContext';
import Header from '../components/Header';
import TripCard from '../components/TripCard';
import FlightCard from '../components/FlightCard';
import AccommodationCard from '../components/AccommodationCard';
import ActivityCard from '../components/ActivityCard';
import BottomNav from '../components/BottomNav';
import { Activity } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { theme } = useTheme();
  const { 
    upcomingTrip, 
    flightDetails, 
    accommodations,
    dayPlans,
    selectedDay,
    setSelectedDay
  } = useTrip();
  
  const [currentTab, setCurrentTab] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const selectedDayPlan = dayPlans.find(plan => plan.date === selectedDay);
  
  return (
    <>
      <div className={`
        min-h-screen pb-20 max-w-2xl mx-auto relative
        ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}
      `}>
        <div className={`
          sticky top-0 z-10 transition-all duration-200
          ${isScrolled 
            ? theme === 'dark'
              ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-black/10'
              : 'bg-white/95 backdrop-blur-sm shadow-lg'
            : ''
          }
        `}>
          <div className="px-4 py-3">
            <Header 
              name="Chhavi"
              subText="Ready for the trip?"
              rightElement={
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-medium shadow-lg">
                  C
                </div>
              }
            />
          </div>
        </div>
        
        <div className="p-4 pt-0">
          <div className="mb-8">
            {upcomingTrip && <TripCard trip={upcomingTrip} />}
          </div>
          
          {flightDetails && <FlightCard flight={flightDetails} />}
          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Accommodation
              </h2>
              <button className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors">
                See all
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {accommodations.map((accommodation) => (
                <AccommodationCard
                  key={accommodation.id}
                  accommodation={accommodation}
                />
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Activities
              </h2>
              <button className="text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors">
                See all
              </button>
            </div>
            
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2 hide-scrollbar">
              <div className="flex items-center bg-blue-500 text-white rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap">
                Day Plan
              </div>
              <div className={`
                flex items-center rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap
                ${theme === 'dark' 
                  ? 'bg-gray-800 text-gray-300' 
                  : 'bg-gray-100 text-gray-700'}
              `}>
                14 Activities
              </div>
            </div>
            
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2 hide-scrollbar">
              {dayPlans.map((plan) => (
                <motion.button
                  key={plan.date}
                  onClick={() => setSelectedDay(plan.date)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    flex flex-col items-center justify-center
                    min-w-[70px] h-[70px] rounded-xl
                    transition-all duration-200
                    ${plan.date === selectedDay
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : theme === 'dark'
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                    }
                  `}
                >
                  <div className="text-xs font-medium">{plan.weekday}</div>
                  <div className="font-bold text-xl mt-0.5">{plan.date}</div>
                  <div className="text-[10px] font-medium mt-0.5">{plan.month}</div>
                </motion.button>
              ))}
            </div>
            
            {selectedDayPlan && (
              <>
                <div className="mb-4">
                  <div className={`
                    text-sm font-medium
                    ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}
                  `}>
                    Day {dayPlans.findIndex(p => p.date === selectedDay) + 1} - {selectedDay}.01.2025
                  </div>
                  <div className={`
                    text-sm font-medium mt-1
                    ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                  `}>
                    {selectedDayPlan.activities.length} Activities planned
                  </div>
                </div>
                
                <div className="space-y-4">
                  {selectedDayPlan.activities.map((activity) => (
                    <ActivityCard
                      key={activity.id}
                      activity={activity}
                      onClick={() => setSelectedActivity(activity)}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        
        <BottomNav currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>

      <AnimatePresence>
        {selectedActivity && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`
              fixed inset-0 z-50
              ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}
            `}
          >
            <div className="relative h-full overflow-auto">
              <div className="sticky top-0 z-10 p-4 flex justify-between items-center backdrop-blur-md bg-opacity-80">
                <h2 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Activity Details
                </h2>
                <button
                  onClick={() => setSelectedActivity(null)}
                  className={`
                    p-2 rounded-full hover:bg-opacity-10
                    ${theme === 'dark' ? 'hover:bg-white' : 'hover:bg-black'}
                  `}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-4">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                  <img
                    src={selectedActivity.image}
                    alt={selectedActivity.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h1 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {selectedActivity.name}
                </h1>

                <div className="space-y-4">
                  <div className={`
                    p-4 rounded-xl
                    ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}
                  `}>
                    <div className="flex items-center">
                      <Clock size={20} className="mr-3 text-blue-500" />
                      <div>
                        <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          Timing
                        </div>
                        <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {selectedActivity.timing}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`
                    p-4 rounded-xl
                    ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}
                  `}>
                    <div className="flex items-center">
                      <MapPin size={20} className="mr-3 text-blue-500" />
                      <div>
                        <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          Pick up
                        </div>
                        <div className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {selectedActivity.pickUp}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Dashboard;