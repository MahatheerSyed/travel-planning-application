import React, { createContext, useContext, useState } from 'react';
import { Destination, Flight, Accommodation, Activity, TravelCompanion, DayPlan } from '../types';

interface TripContextType {
  destination: string;
  setDestination: (destination: string) => void;
  duration: string;
  setDuration: (duration: string) => void;
  companions: TravelCompanion;
  setCompanions: (companions: TravelCompanion) => void;
  upcomingTrip: Destination | null;
  flightDetails: Flight | null;
  accommodations: Accommodation[];
  activities: Activity[];
  dayPlans: DayPlan[];
  selectedDay: string;
  setSelectedDay: (day: string) => void;
}

const initialFlight: Flight = {
  departure: 'Delhi, India',
  arrival: 'Narita, Tokyo',
  departureCode: 'DEL',
  arrivalCode: 'NRT',
  departureTime: '10:50 am',
  arrivalTime: '19:45',
  date: '26.01.2025',
  price: 1105.83
};

const initialAccommodations: Accommodation[] = [
  {
    id: '1',
    name: 'Shinagawa Prince Hotel',
    image: 'https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=800',
    checkIn: '26.01.2025, 11:15 pm',
    checkOut: '28.01.2025, 11:15 am',
    price: 535.77,
    nights: 2,
    confirmed: true,
    rating: 4.9
  },
  {
    id: '2',
    name: 'Mercure Tokyo Hotel',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
    checkIn: '28.01.2025, 6:00 pm',
    checkOut: '30.01.2025, 11:15 am',
    price: 305.33,
    nights: 2,
    rating: 4.7,
    pending: true
  }
];

const initialActivities: Activity[] = [
  {
    id: '1',
    name: 'Senso-ji Temple & Nakamise Shopping Street',
    location: 'Senso-ji',
    image: 'https://images.pexels.com/photos/5169056/pexels-photo-5169056.jpeg?auto=compress&cs=tinysrgb&w=800',
    timing: '8:15 am Morning',
    duration: '3 hours',
    date: '27.01.2025',
    pickUp: 'From Hotel'
  },
  {
    id: '2',
    name: 'Tokyo Sky Tree',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
    timing: '1:00 pm Afternoon',
    duration: '3 hours',
    date: '27.01.2025',
    pickUp: 'From Nakamise Street'
  },
  {
    id: '3',
    name: 'Kimono Wearing',
    image: 'https://images.pexels.com/photos/5169092/pexels-photo-5169092.jpeg?auto=compress&cs=tinysrgb&w=800',
    timing: 'Anytime before 8:00pm',
    duration: '1-2 hours',
    date: '27.01.2025',
    pickUp: 'From Hotel'
  },
  {
    id: '4',
    name: 'Tsukiji Fish Market Tour',
    image: 'https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg?auto=compress&cs=tinysrgb&w=800',
    timing: '7:00 am Morning',
    duration: '2 hours',
    date: '28.01.2025',
    pickUp: 'From Hotel'
  },
  {
    id: '5',
    name: 'Shibuya Crossing & Shopping',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
    timing: '2:00 pm Afternoon',
    duration: '4 hours',
    date: '28.01.2025',
    pickUp: 'From Fish Market'
  }
];

const generateDayPlans = (activities: Activity[]): DayPlan[] => {
  const dayPlans: DayPlan[] = [];
  const days = ['27', '28', '29', '30', '31', '1'];
  const weekdays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  days.forEach((day, index) => {
    const activitiesForDay = activities.filter(activity => 
      activity.date?.startsWith(day)
    );
    
    dayPlans.push({
      date: day,
      day: day,
      month: index < 5 ? 'JAN' : 'FEB',
      weekday: weekdays[index],
      activities: activitiesForDay
    });
  });
  
  return dayPlans;
};

const TripContext = createContext<TripContextType | undefined>(undefined);

export const TripProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [destination, setDestination] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [companions, setCompanions] = useState<TravelCompanion>('Solo');
  const [selectedDay, setSelectedDay] = useState('27');
  
  const upcomingTrip: Destination = {
    id: '1',
    name: 'TOKYO',
    image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800',
    dates: '27.01.2025 - 02.02.2025',
    duration: '8 Days',
    groupSize: '4 (2M,2F)',
    activities: 14
  };

  const dayPlans = generateDayPlans(initialActivities);

  return (
    <TripContext.Provider value={{
      destination,
      setDestination,
      duration,
      setDuration,
      companions,
      setCompanions,
      upcomingTrip,
      flightDetails: initialFlight,
      accommodations: initialAccommodations,
      activities: initialActivities,
      dayPlans,
      selectedDay,
      setSelectedDay
    }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrip = (): TripContextType => {
  const context = useContext(TripContext);
  if (context === undefined) {
    throw new Error('useTrip must be used within a TripProvider');
  }
  return context;
};