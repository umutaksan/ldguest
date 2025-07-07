import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Wifi, Coffee, Bath, Thermometer, Wind, Tv, Leaf as Safe, Sofa } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function AmenitiesScreen() {
  const insets = useSafeAreaInsets();
  
  const amenities = [
    { id: 1, title: 'High-speed WiFi', icon: <Wifi size={24} color={theme.colors.primary} /> },
    { id: 2, title: 'Coffee maker', icon: <Coffee size={24} color={theme.colors.primary} /> },
    { id: 3, title: 'Bathtub & shower', icon: <Bath size={24} color={theme.colors.primary} /> },
    { id: 4, title: '2 Air conditioning units', icon: <Thermometer size={24} color={theme.colors.primary} /> },
    { id: 5, title: 'Ceiling fans', icon: <Wind size={24} color={theme.colors.primary} /> },
    { id: 6, title: '2 Smart TVs', icon: <Tv size={24} color={theme.colors.primary} /> },
    { id: 7, title: 'Safe box', icon: <Safe size={24} color={theme.colors.primary} /> },
    { id: 8, title: '1 Sofa bed', icon: <Sofa size={24} color={theme.colors.primary} /> },
    { id: 9, title: 'Fully equipped small appliances', icon: <Utensils size={24} color={theme.colors.primary} /> },
  ];
  
  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Amenities" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.description}>
          Our property is equipped with everything you need for a comfortable stay. Here are the amenities available to you:
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
          <Text style={styles.featureText}>• Fully equipped kitchen with modern appliances</Text>
          <Text style={styles.featureText}>• Quality linens and towels provided</Text>
          <Text style={styles.featureText}>• Washing machine and drying rack</Text>
          <Text style={styles.featureText}>• Iron and ironing board</Text>
          <Text style={styles.featureText}>• Hair dryer</Text>
          <Text style={styles.featureText}>• Basic toiletries</Text>
          <Text style={styles.featureText}>• Welcome kit upon arrival</Text>
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
    padding: theme.spacing.m,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.l,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -theme.spacing.s,
    marginBottom: theme.spacing.l,
  },
  amenityItem: {
    width: '33.33%',
    alignItems: 'center',
    padding: theme.spacing.s,
    marginBottom: theme.spacing.m,
  },
  amenityIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.s,
    ...theme.shadows.small,
  },
  amenityTitle: {
    ...theme.typography.bodySmall,
    textAlign: 'center',
    color: theme.colors.text,
  },
  additionalInfo: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    ...theme.shadows.small,
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