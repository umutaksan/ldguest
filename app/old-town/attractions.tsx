import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { MapPin, ExternalLink } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function OldTownAttractionsScreen() {
  const insets = useSafeAreaInsets();

  const attractions = [
    {
      id: 1,
      name: 'Plaza de los Naranjos',
      description: 'The heart of Marbella Old Town, surrounded by orange trees and historic buildings.',
      distance: '200 meters',
      category: 'Historic',
    },
    {
      id: 2,
      name: 'Iglesia de la Encarnación',
      description: 'Beautiful 16th-century church with stunning baroque architecture.',
      distance: '150 meters',
      category: 'Religious',
    },
    {
      id: 3,
      name: 'Murallas del Castillo',
      description: 'Ancient castle walls offering glimpses into Marbella\'s medieval past.',
      distance: '100 meters',
      category: 'Historic',
    },
    {
      id: 4,
      name: 'Avenida del Mar',
      description: 'Pedestrian promenade featuring Salvador Dalí sculptures connecting old town to beach.',
      distance: '400 meters',
      category: 'Culture',
    },
    {
      id: 5,
      name: 'Museo del Grabado Español Contemporáneo',
      description: 'Museum showcasing contemporary Spanish engravings and prints.',
      distance: '300 meters',
      category: 'Culture',
    },
    {
      id: 6,
      name: 'Parque de la Alameda',
      description: 'Beautiful botanical garden with exotic plants and peaceful walkways.',
      distance: '500 meters',
      category: 'Park',
    },
    {
      id: 7,
      name: 'Casa del Corregidor',
      description: 'Historic building that now houses the town hall, featuring beautiful architecture.',
      distance: '250 meters',
      category: 'Historic',
    },
    {
      id: 8,
      name: 'Ermita de Santiago',
      description: 'Small historic chapel with significant religious and cultural importance.',
      distance: '350 meters',
      category: 'Religious',
    },
    {
      id: 9,
      name: 'Marbella Beach',
      description: 'Beautiful sandy beach just a short walk from the Old Town.',
      distance: '600 meters',
      category: 'Beach',
    },
    {
      id: 10,
      name: 'Marbella Marina',
      description: 'Modern marina with restaurants, shops, and beautiful sea views.',
      distance: '1.2 km',
      category: 'Marina',
    },
  ];

  const handleOpenMaps = (attractionName: string) => {
    const query = encodeURIComponent(`${attractionName} near Calle Málaga, Marbella Old Town`);
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Places to Visit" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.description}>
          Explore the rich history and culture of Marbella's Old Town. From ancient castle walls to beautiful churches and charming plazas, discover the authentic Andalusian heritage right at your doorstep.
        </Text>

        {attractions.map((attraction, index) => (
          <Animated.View 
            key={attraction.id}
            entering={FadeIn.delay(index * 100)}
            style={styles.attractionCard}
          >
            <View style={styles.headerContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.category}>{attraction.category}</Text>
                <Text style={styles.attractionName}>{attraction.name}</Text>
              </View>
              <TouchableOpacity
                style={styles.mapsButton}
                onPress={() => handleOpenMaps(attraction.name)}
              >
                <ExternalLink size={16} color={theme.colors.primary} />
              </TouchableOpacity>
            </View>

            <Text style={styles.attractionDescription}>{attraction.description}</Text>
            
            <View style={styles.distanceContainer}>
              <MapPin size={16} color={theme.colors.textTertiary} />
              <Text style={styles.distance}>{attraction.distance}</Text>
            </View>
          </Animated.View>
        ))}
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
  attractionCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.s,
  },
  nameContainer: {
    flex: 1,
    marginRight: theme.spacing.m,
  },
  attractionName: {
    ...theme.typography.bodyMedium,
  },
  mapsButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {
    ...theme.typography.bodySmall,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  attractionDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.s,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    ...theme.typography.bodySmall,
    color: theme.colors.textTertiary,
    marginLeft: theme.spacing.xs,
  },
});