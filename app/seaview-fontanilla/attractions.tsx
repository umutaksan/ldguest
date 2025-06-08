import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { MapPin, ExternalLink } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function SeaviewAttractionsScreen() {
  const insets = useSafeAreaInsets();

  const attractions = [
    {
      id: 1,
      name: 'Playa de Fontanilla',
      description: 'Beautiful sandy beach right at your doorstep, perfect for sunbathing and swimming.',
      distance: '100 meters',
      category: 'Beach',
    },
    {
      id: 2,
      name: 'Marbella Old Town',
      description: 'Historic district with narrow cobblestone streets, charming plazas, and traditional Andalusian architecture.',
      distance: '800 meters',
      category: 'Historic',
    },
    {
      id: 3,
      name: 'Plaza de los Naranjos',
      description: 'The heart of Marbella Old Town, surrounded by orange trees and historic buildings.',
      distance: '900 meters',
      category: 'Historic',
    },
    {
      id: 4,
      name: 'Avenida del Mar',
      description: 'Pedestrian promenade featuring Salvador Dalí sculptures connecting the old town to the beach.',
      distance: '500 meters',
      category: 'Culture',
    },
    {
      id: 5,
      name: 'Marbella Marina',
      description: 'Modern marina with luxury yachts, restaurants, and shopping opportunities.',
      distance: '1.2 km',
      category: 'Marina',
    },
    {
      id: 6,
      name: 'Parque de la Alameda',
      description: 'Beautiful botanical garden in the heart of Marbella with exotic plants and peaceful walkways.',
      distance: '1 km',
      category: 'Park',
    },
    {
      id: 7,
      name: 'Iglesia de la Encarnación',
      description: 'Historic 16th-century church with beautiful baroque architecture.',
      distance: '1.1 km',
      category: 'Historic',
    },
    {
      id: 8,
      name: 'Museo del Grabado Español Contemporáneo',
      description: 'Museum showcasing contemporary Spanish engravings and prints.',
      distance: '1.3 km',
      category: 'Culture',
    },
    {
      id: 9,
      name: 'El Corte Inglés Marbella',
      description: 'Major department store for shopping and dining.',
      distance: '600 meters',
      category: 'Shopping',
    },
    {
      id: 10,
      name: 'Playa de Venus',
      description: 'Quieter beach area perfect for relaxation and water sports.',
      distance: '1.5 km',
      category: 'Beach',
    },
  ];

  const handleOpenMaps = (attractionName: string) => {
    const query = encodeURIComponent(`${attractionName} near Calle Camilo José Cela, Marbella`);
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
          Explore the most interesting places to visit around your Seaview apartment. From beautiful beaches to cultural attractions, everything is within easy walking distance.
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