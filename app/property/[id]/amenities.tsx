import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Wifi, Coffee, Bath, Thermometer, Wind, Tv, Leaf as Safe, Sofa, Utensils, Hash as Washer, Droplets, Shirt } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function AmenitiesScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  
  // Get amenities based on property ID
  const getAmenities = () => {
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
  
  const amenities = getAmenities();
  
  // Get additional features based on property ID
  const getAdditionalFeatures = () => {
    const baseFeatures = [
      '• Fully equipped kitchen with modern appliances',
      '• Quality linens and towels provided',
      '• Washing machine and drying rack',
      '• Iron and ironing board',
      '• Hair dryer',
      '• Basic toiletries',
      '• Welcome kit upon arrival',
    ];
    
    switch(id) {
      case '29051504': // Old Town
        return [
          ...baseFeatures,
          '• Three separate bedrooms',
          '• Spacious living area',
          '• City views from balconies',
        ];
      case '29051502': // Seaview
        return [
          ...baseFeatures,
          '• Direct beach access',
          '• Sea views',
          '• Bunk bed in second bedroom',
        ];
      case '29051503': // Aloha
        return [
          ...baseFeatures,
          '• Access to community garden',
          '• Terrace space',
          '• Golf course proximity',
        ];
      default:
        return baseFeatures;
    }
  };
  
  const additionalFeatures = getAdditionalFeatures();
  
  // Get property title based on ID
  const getPropertyTitle = () => {
    switch(id) {
      case '29051501':
        return 'Jardines Tropicales Puerto Banús';
      case '29051502':
        return 'Seaview Playa de Fontanilla';
      case '29051503':
        return 'Aloha Pueblo Townhouse';
      case '29051504':
        return 'Marbella Old Town';
      default:
        return 'Property';
    }
  };
  
  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Amenities" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.description}>
          {getPropertyTitle()} is equipped with everything you need for a comfortable stay. Here are the amenities available to you:
        </Text>
        
        <View style={styles.amenitiesContainer}>
          {amenities.map((amenity, index) => (
            <Animated.View 
              key={amenity.id}
              entering={FadeIn.delay(index * 100)}
              style={styles.amenityItem}
            >
              <View style={styles.amenityIcon}>
                {amenity.icon}
              </View>
              <Text style={styles.amenityTitle}>{amenity.title}</Text>
            </Animated.View>
          ))}
        </View>
        
        <View style={styles.additionalInfo}>
          <Text style={styles.sectionTitle}>Additional Features</Text>
          {additionalFeatures.map((feature, index) => (
            <Text key={index} style={styles.featureText}>{feature}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.layout.isWeb ? theme.spacing.s : theme.spacing.m,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.layout.isWeb ? theme.spacing.m : theme.spacing.l,
    ...(theme.layout.isWeb && {
      fontSize: 14,
    }),
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: theme.layout.isWeb ? -theme.spacing.xs : -theme.spacing.s,
    marginBottom: theme.layout.isWeb ? theme.spacing.m : theme.spacing.l,
  },
  amenityItem: {
    width: theme.layout.isWeb ? '25%' : '33.33%',
    alignItems: 'center',
    padding: theme.layout.isWeb ? theme.spacing.xs : theme.spacing.s,
    marginBottom: theme.layout.isWeb ? theme.spacing.s : theme.spacing.m,
  },
  amenityIcon: {
    width: theme.layout.isWeb ? 48 : 60,
    height: theme.layout.isWeb ? 48 : 60,
    borderRadius: theme.layout.isWeb ? 24 : 30,
    backgroundColor: theme.layout.isWeb ? 'rgba(233, 184, 114, 0.15)' : theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.layout.isWeb ? theme.spacing.xs : theme.spacing.s,
    ...(theme.layout.isWeb ? {} : theme.shadows.small),
  },
  amenityTitle: {
    ...theme.typography.bodySmall,
    textAlign: 'center',
    color: theme.colors.text,
    ...(theme.layout.isWeb && {
      fontSize: 12,
    }),
  },
  additionalInfo: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.layout.isWeb ? theme.borderRadius.s : theme.borderRadius.m,
    padding: theme.layout.isWeb ? theme.spacing.s : theme.spacing.m,
    ...(theme.layout.isWeb ? {
      border: '1px solid #f0f0f0',
    } : theme.shadows.small),
  },
  sectionTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.m,
  },
  featureText: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.s,
  },
});