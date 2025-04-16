import PastSection from '@/components/sections/PastSection';
import UpcomingSection from '@/components/sections/UpcomingSection';
import {Drawable} from '@/utilities/Drawable';
import {router} from 'expo-router';

export const repairMenu = [
  {
    id: 0,
    image: Drawable.Emergency,
    goto: () =>
      router.push({
        pathname: '/(emergency)',
        params: {heading: 'Emergency Repair'},
      }),
  },
  {
    id: 1,
    image: Drawable.Scheduled,
    goto: () =>
      router.push({
        pathname: '/(schedule)',
        params: {heading: 'Schedule Repair'},
      }),
  },
  {
    id: 2,
    image: Drawable.DIY,
    goto: () =>
      router.push({
        pathname: '/(DIY)',
        params: {heading: 'DIY Repair'},
      }),
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
    image: Drawable.RoadNotSelect,
  },
  {
    id: 2,
    bicycle: 'Elops 900 E',
    repairType: 'Scheduled Repair',
    date: 'November 01, 2024',
    image: Drawable.RoadNotSelect,
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

// export const appMenu = [
//   {
//     id: 0,
//     item: 'Find Emergency Repair',
//     goto: () => router.push('./emergencyPage'),
//   },
//   {
//     id: 1,
//     item: 'Find Scheduled Repair',
//     goto: () => router.push('./schedulePage'),
//   },
//   {
//     id: 2,
//     item: 'Find DIY Repair',
//     goto: () => router.push('./diyPage'),
//   },
//   {
//     id: 3,
//     item: 'Repair Log',
//     goto: () => {},
//   },
// ];

// export const userMenu = [
//   {
//     id: 0,
//     item: 'My Profile',
//     goto: () => router.push('./myProfile'),
//   },
//   {
//     id: 1,
//     item: 'My Bicycles',
//     goto: () => router.push('./myBicycle'),
//   },
//   {
//     id: 2,
//     item: 'Account Settings',
//     goto: () => {},
//   },
//   {
//     id: 3,
//     item: 'Sign out',
//     goto: () => router.push('./(auth)'),
//   },
// ];

export const bikeType = [
  {
    id: 0,
    bicycle: 'Brodie Monster 2015',
    image: Drawable.CityNotSelect,
  },
  {
    id: 1,
    bicycle: 'Track Dual Sport 1 WSD',
    image: Drawable.RaceNotSelect,
  },
  {
    id: 2,
    bicycle: 'Elops 900 E',
    image: Drawable.RoadNotSelect,
  },
];

export const scheduleRepairList = [
  {
    id: 0,
    repairType: 'tires & wheels',
  },
  {
    id: 1,
    repairType: 'brakes',
  },
  {
    id: 2,
    repairType: 'gear shift',
  },
  {
    id: 3,
    repairType: 'chain',
  },
  {
    id: 4,
    repairType: 'battery & accessories',
  },
  {
    id: 5,
    repairType: 'general checkup',
  },
];

export const DIYCheckOn = [
  {
    id: 0,
    image: Drawable.Brakes,
  },
  {
    id: 1,
    image: Drawable.Chain,
  },
  {
    id: 2,
    image: Drawable.Spare,
  },
];

export const DIYArticle = [
  {
    id: 0,
    title: 'Brakes',
  },
  {
    id: 1,
    title: 'Tires',
  },
  {
    id: 2,
    title: 'Chain & Transmission',
  },
  {
    id: 3,
    title: 'Other parts',
  },
];

export const DIYRecommend = [
  {
    id: 0,
    title: 'How to grease your chain',
    desp: "Dos & Don'ts than won't stain.",
    image: Drawable.Image1,
  },
  {
    id: 1,
    title: 'How to properly tune your tires',
    desp: 'It’s not Rocket science but you need to know this.',
    image: Drawable.Image2,
  },
];
