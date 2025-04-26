export type ThemeMode = 'light' | 'dark';

export interface Destination {
  id: string;
  name: string;
  image: string;
  dates?: string;
  duration?: string;
  groupSize?: string;
  activities?: number;
}

export interface Flight {
  departure: string;
  arrival: string;
  departureCode: string;
  arrivalCode: string;
  departureTime: string;
  arrivalTime: string;
  date: string;
  price: number;
}

export interface Accommodation {
  id: string;
  name: string;
  image: string;
  checkIn: string;
  checkOut: string;
  price: number;
  nights: number;
  confirmed?: boolean;
  pending?: boolean;
  rating?: number;
}

export interface Activity {
  id: string;
  name: string;
  image?: string;
  timing: string;
  duration: string;
  location?: string;
  price?: string;
  date?: string;
  pickUp?: string;
}

export type TravelCompanion = 'Solo' | 'Couple' | 'Family' | 'Friends';

export interface DayPlan {
  date: string;
  day: string;
  month: string;
  weekday: string;
  activities: Activity[];
}