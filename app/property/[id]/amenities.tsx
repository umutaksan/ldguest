import React from 'react';
import { Wifi, Coffee, Bath, Thermometer, Wind, Tv, Safe, Sofa, Droplets, Utensils } from 'lucide-react-native';
import { theme } from '../../../constants/theme';

export const getAmenities = (id: string) => {
  switch(id) {
    case '29051504': // Old Town
      return [
        { id: 1, title: 'High-speed WiFi', icon: <Wifi size={24} color={theme.colors.primary} /> },
        { id: 2, title: 'Coffee maker', icon: <Coffee size={24} color={theme.colors.primary} /> },
        { id: 3, title: 'Bathtub & shower', icon: <Bath size={24} color={theme.colors.primary} /> },
        { id: 4, title: '2 Air conditioning units', icon: <Thermometer size={24} color={theme.colors.primary} /> },
        { id: 5, title: '2 Ceiling fans', icon: <Wind size={24} color={theme.colors.primary} /> },
        { id: 6, title: '3 Smart TVs', icon: <Tv size={24} color={theme.colors.primary} /> },
        { id: 7, title: 'Safe box', icon: <Safe size={24} color={theme.colors.primary} /> },
        { id: 8, title: '2 Sofa beds', icon: <Sofa size={24} color={theme.colors.primary} /> },
        { id: 9, title: 'Three balconies', icon: <Droplets size={24} color={theme.colors.primary} /> },
        { id: 10, title: 'Fully equipped small appliances', icon: <Utensils size={24} color={theme.colors.primary} /> },
      ];
    case '29051502': // Seaview
      return [
        { id: 1, title: 'High-speed WiFi', icon: <Wifi size={24} color={theme.colors.primary} /> },
        { id: 2, title: 'Coffee maker', icon: <Coffee size={24} color={theme.colors.primary} /> },
        { id: 3, title: 'Bathtub & shower', icon: <Bath size={24} color={theme.colors.primary} /> },
        { id: 4, title: '2 Air conditioning units', icon: <Thermometer size={24} color={theme.colors.primary} /> },
        { id: 5, title: '2 Smart TVs', icon: <Tv size={24} color={theme.colors.primary} /> },
        { id: 6, title: 'Safe box', icon: <Safe size={24} color={theme.colors.primary} /> },
        { id: 7, title: '1 Sofa bed', icon: <Sofa size={24} color={theme.colors.primary} /> },
        { id: 8, title: 'Fully equipped small appliances', icon: <Utensils size={24} color={theme.colors.primary} /> },
        { id: 9, title: 'Beachfront view', icon: <Droplets size={24} color={theme.colors.primary} /> },
        { id: 10, title: 'Swimming pool', icon: <Droplets size={24} color={theme.colors.primary} /> },
      ];
    case '29051503': // Aloha
      return [
        { id: 1, title: 'High-speed WiFi', icon: <Wifi size={24} color={theme.colors.primary} /> },
        { id: 2, title: 'Coffee maker', icon: <Coffee size={24} color={theme.colors.primary} /> },
        { id: 3, title: 'Bathtub & shower', icon: <Bath size={24} color={theme.colors.primary} /> },
        { id: 4, title: '2 Air conditioning units', icon: <Thermometer size={24} color={theme.colors.primary} /> },
        { id: 5, title: '1 Smart TV', icon: <Tv size={24} color={theme.colors.primary} /> },
        { id: 6, title: 'Safe box', icon: <Safe size={24} color={theme.colors.primary} /> },
        { id: 7, title: '2 Sofa beds', icon: <Sofa size={24} color={theme.colors.primary} /> },
        { id: 8, title: 'Fully equipped small appliances', icon: <Utensils size={24} color={theme.colors.primary} /> },
        { id: 9, title: 'Garden & terrace', icon: <Droplets size={24} color={theme.colors.primary} /> },
        { id: 10, title: 'Swimming pool', icon: <Droplets size={24} color={theme.colors.primary} /> },
      ];
    default: // Jardines Tropicales
      return [
        { id: 1, title: 'High-speed WiFi', icon: <Wifi size={24} color={theme.colors.primary} /> },
        { id: 2, title: 'Coffee maker', icon: <Coffee size={24} color={theme.colors.primary} /> },
        { id: 3, title: 'Bathtub & shower', icon: <Bath size={24} color={theme.colors.primary} /> },
        { id: 4, title: '2 Air conditioning units', icon: <Thermometer size={24} color={theme.colors.primary} /> },
        { id: 5, title: '2 Smart TVs', icon: <Tv size={24} color={theme.colors.primary} /> },
        { id: 6, title: 'Safe box', icon: <Safe size={24} color={theme.colors.primary} /> },
        { id: 7, title: '1 Sofa bed', icon: <Sofa size={24} color={theme.colors.primary} /> },
        { id: 8, title: 'Fully equipped small appliances', icon: <Utensils size={24} color={theme.colors.primary} /> },
      ];
  }
};

export const getFeatures = (id: string) => {
  const baseFeatures = [
    '• Two bedrooms with comfortable beds',
    '• Full bathroom with modern fixtures',
    '• Living room with seating area',
    '• Kitchen with essential appliances',
  ];

  switch(id) {
    case '29051504': // Old Town
      return [
        '• Three separate bedrooms',
        '• Spacious living area',
        '• City views from balconies',
        '• Fully equipped small appliances',
      ];
    case '29051502': // Seaview
      return [
        '• Two bedrooms with sea views',
        '• Direct beach access',
        '• Sea views',
        '• Bunk bed in second bedroom',
        '• Fully equipped small appliances',
      ];
    case '29051503': // Aloha
      return [
        '• Two bedrooms with garden views',
        '• Access to community garden',
        '• Terrace space',
        '• Golf course proximity',
        '• Fully equipped small appliances',
      ];
    default:
      return baseFeatures;
  }
};