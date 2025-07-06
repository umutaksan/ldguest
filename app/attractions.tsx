import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { MapPin, ExternalLink } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function AttractionsScreen() {
  const insets = useSafeAreaInsets();

  const attractions = [
    {
      id: 1,
      name: 'Playa Puerto Banús',
      description: 'A popular beach and marina, ideal for sunbathing and enjoying the Mediterranean.',
      distance: '500 meters',
      category: 'Beach',
    },
    {
      id: 2,
      name: 'Marina Puerto Banús',
      description: 'A luxury marina filled with yachts and high-end shops.',
      distance: '600 meters',
      category: 'Marina',
    },
    {
      id: 3,
      name: 'El Corte Inglés Puerto Banús',
      description: 'A large department store offering a wide variety of products.',
      distance: '700 meters',
      category: 'Shopping',
    },
    {
      id: 4,
      name: 'Centro Plaza',
      description: 'A shopping and entertainment complex featuring shops, restaurants, and a Saturday market.',
      distance: '800 meters',
      category: 'Shopping',
    },
    {
      id: 5,
      name: 'Playa Nueva Andalucía',
      description: 'A wide beach known for its golden sands and clear waters.',
      distance: '1 km',
      category: 'Beach',
    },
    {
      id: 6,
      name: 'Museo Ralli Marbella',
      description: 'A museum showcasing contemporary Latin American art.',
      distance: '2 km',
      category: 'Culture',
    },
    {
      id: 7,
      name: 'Playa de Levante',
      description: 'A quiet and clean beach, perfect for relaxation.',
      distance: '2 km',
      category: 'Beach',
    },
    {
      id: 8,
      name: 'Playa de Rio Verde',
      description: 'A family-friendly beach with plenty of amenities.',
      distance: '2.5 km',
      category: 'Beach',
    },
    {
      id: 9,
      name: 'Iglesia de San Pedro',
      description: 'A historic church located in San Pedro de Alcántara.',
      distance: '3 km',
      category: 'Culture',
    },
    {
      id: 10,
      name: 'Bulevar San Pedro Alcántara',
      description: 'A popular boulevard with walking paths and playgrounds.',
      distance: '3.5 km',
      category: 'Park',
    },
    {
      id: 11,
      name: 'Basílica de Vega del Mar',
      description: 'Early Christian archaeological remains in San Pedro de Alcántara.',
      distance: '4 km',
      category: 'Culture',
    },
    {
      id: 12,
      name: 'Avenida del Mar',
      description: 'A pedestrian walkway adorned with Salvador Dalí sculptures.',
      distance: '6 km',
      category: 'Culture',
    },
    {
      id: 13,
      name: 'Parque de la Alameda',
      description: 'A botanical garden located in Marbella city center.',
      distance: '6.5 km',
      category: 'Park',
    },
    {
      id: 14,
      name: 'Casco Antiguo (Old Town)',
      description: "Marbella's historic old town with narrow streets and whitewashed houses.",
      distance: '7 km',
      category: 'Culture',
    },
    {
      id: 15,
      name: 'Plaza de los Naranjos',
      description: 'A historic square surrounded by orange trees and charming cafes.',
      distance: '7 km',
      category: 'Culture',
    },
    {
      id: 16,
      name: 'Murallas del Castillo',
      description: "The ancient walls of Marbella's old castle.",
      distance: '7.5 km',
      category: 'Culture',
    },
    {
      id: 17,
      name: 'Museo del Grabado Español Contemporáneo',
      description: 'A museum dedicated to contemporary Spanish engravings.',
      distance: '8 km',
      category: 'Culture',
    },
    {
      id: 18,
      name: 'Parque de la Constitución',
      description: 'A park with green spaces and an open-air theater.',
      distance: '8.5 km',
      category: 'Park',
    },
    {
      id: 19,
      name: 'Puerto Deportivo de Marbella',
      description: "Marbella's main marina with a lively atmosphere.",
      distance: '9 km',
      category: 'Marina',
    },
    {
      id: 20,
      name: 'Playa de la Fontanilla',
      description: 'A central and popular beach in Marbella.',
      distance: '9.5 km',
      category: 'Beach',
    },
  ];

  const handleOpenMaps = (attractionName: string) => {
    const query = encodeURIComponent(`${attractionName} near Calle Azahar, Nueva Andalucía, Marbella`);
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
          Discover the most interesting places to visit around Jardines Tropicales. From beautiful beaches to cultural attractions, all these destinations are easily accessible from your apartment.
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