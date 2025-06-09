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
      description: 'Beautiful urban beach with golden sand, sunbeds, and beach clubs. Perfect for swimming and sunbathing.',
      distance: '50 meters',
      category: 'Beach',
    },
    {
      id: 2,
      name: 'Paseo Marítimo',
      description: 'Beautiful beachfront promenade perfect for walking, running, or cycling with various restaurants and cafes.',
      distance: '100 meters',
      category: 'Promenade',
    },
    {
      id: 3,
      name: 'Plaza del Mar',
      description: 'Central square with fountains, shops, and restaurants, connecting beach area to city center.',
      distance: '300 meters',
      category: 'Plaza',
    },
    {
      id: 4,
      name: 'Avenida del Mar',
      description: 'Iconic boulevard featuring Salvador Dalí bronze sculptures and beautiful landscaping.',
      distance: '400 meters',
      category: 'Culture',
    },
    {
      id: 5,
      name: 'Parque de la Alameda',
      description: 'Historic park with tropical plants, traditional benches, and fountains.',
      distance: '600 meters',
      category: 'Park',
    },
    {
      id: 6,
      name: 'Puerto Deportivo Marbella',
      description: 'Marina with luxury yachts, restaurants, bars, and shopping opportunities.',
      distance: '800 meters',
      category: 'Marina',
    },
    {
      id: 7,
      name: 'Casco Antiguo',
      description: 'Marbella\'s charming old town with narrow streets, white buildings, and historic sites.',
      distance: '700 meters',
      category: 'Historic',
    },
    {
      id: 8,
      name: 'Plaza de los Naranjos',
      description: 'Historic square in old town with orange trees, restaurants, and traditional architecture.',
      distance: '750 meters',
      category: 'Historic',
    },
    {
      id: 9,
      name: 'Iglesia de la Encarnación',
      description: 'Historic church with mix of architectural styles in the old town.',
      distance: '800 meters',
      category: 'Religious',
    },
    {
      id: 10,
      name: 'Contemporary Spanish Engraving Museum',
      description: 'Museum featuring modern Spanish art and temporary exhibitions.',
      distance: '900 meters',
      category: 'Culture',
    },
    {
      id: 11,
      name: 'El Corte Inglés',
      description: 'Premium department store offering fashion, electronics, and gourmet food.',
      distance: '3 km',
      category: 'Shopping',
    },
    {
      id: 12,
      name: 'Centro Comercial La Cañada',
      description: 'Large shopping mall with international brands, restaurants, and entertainment options.',
      distance: '4 km',
      category: 'Shopping',
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