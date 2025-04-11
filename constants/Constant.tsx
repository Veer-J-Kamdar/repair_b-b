import PastSection from '@/components/sections/PastSection';
import UpcomingSection from '@/components/sections/UpcomingSection';
import {Drawable} from '@/utilities/Drawable';

export const repairMenu = [
  {
    id: 0,
    image: Drawable.Emergency,
  },
  {
    id: 1,
    image: Drawable.Scheduled,
  },
  {
    id: 2,
    image: Drawable.DIY,
  },
];

export const upcomingSection = [
  {
    id: 0,
    bicycle: 'Brodie Monster 2015',
    repairType: 'Emergency Repair',
    date: 'April 20',
    image: Drawable.CityNotSelect,
  },
];

export const pastSection = [
  {
    id: 0,
    bicycle: 'Track Dual Sport 1 WSD',
    repairType: 'Emergency Repair',
    date: 'April 08,2025',
    image: Drawable.RaceNotSelect,
  },
  {
    id: 1,
    bicycle: 'Elops 900 E',
    repairType: 'Scheduled Repair',
    date: 'Januaury 01, 2025',
    image: Drawable.RaceNotSelect,
  },
  {
    id: 2,
    bicycle: 'Elops 900 E',
    repairType: 'Scheduled Repair',
    date: 'November 01, 2024',
    image: Drawable.RaceNotSelect,
  },
];

export const homeSections = [
  {
    id: 0,
    title: 'Upcoming repairs',
    section: <UpcomingSection />,
  },
  {
    id: 1,
    title: 'Past repairs',
    section: <PastSection />,
  },
];
