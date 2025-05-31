import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { MapPin, ExternalLink } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function NearbyCitiesScreen() {
  const insets = useSafeAreaInsets();

  const cities = [
    {
      id: 1,
      name: 'Marbella Old Town',
      description: 'Right in Marbella, explore narrow streets, charming plazas, and historical sites.',
      distance: '0 km',
    },
    {
      id: 2,
      name: 'Benahavis',
      description: 'A charming mountain village known for its gastronomy and scenic views.',
      distance: '20 km',
    },
    {
      id: 3,
      name: 'Estepona',
      description: 'A picturesque coastal town with beautiful beaches and flower-filled streets.',
      distance: '30 km',
    },
    {
      id: 4,
      name: 'Casares',
      description: 'A stunning hilltop village famous for its whitewashed houses and historic charm.',
      distance: '40 km',
    },
    {
      id: 5,
      name: 'Mijas Pueblo',
      description: 'A traditional Andalusian village with cobblestone streets and spectacular coastal views.',
      distance: '55 km',
    },
    {
      id: 6,
      name: 'Fuengirola',
      description: 'A lively seaside town with vibrant beaches and plenty of entertainment options.',
      distance: '50 km',
    },
    {
      id: 7,
      name: 'Ronda',
      description: 'Known for its dramatic cliffs, historic bridges, and breathtaking landscapes.',
      distance: '60 km',
    },
    {
      id: 8,
      name: 'Málaga',
      description: 'The birthplace of Picasso, offering rich history, museums, and a lively cultural scene.',
      distance: '60 km',
    },
    {
      id: 9,
      name: 'Nerja',
      description: 'Famous for its beautiful beaches and the Nerja Caves with ancient stalagmites.',
      distance: '100 km',
    },
    {
      id: 10,
      name: 'Granada',
      description: 'Home to the Alhambra Palace and rich Moorish history, a must-visit for cultural enthusiasts.',
      distance: '180 km',
    },
    {
      id: 11,
      name: 'Córdoba',
      description: 'Known for the Mezquita, a unique mosque-cathedral, and a charming old town.',
      distance: '200 km',
    },
    {
      id: 12,
      name: 'Gibraltar',
      description: 'A British territory featuring the iconic Rock of Gibraltar and its famous monkeys.',
      distance: '80 km',
    },
    {
      id: 13,
      name: 'Tarifa',
      description: 'A paradise for windsurfing and kiteboarding, located at the southernmost point of Europe.',
      distance: '100 km',
    },
    {
      id: 14,
      name: 'Jerez de la Frontera',
      description: 'Famous for its sherry wine, flamenco, and beautiful equestrian shows.',
      distance: '160 km',
    },
    {
      id: 15,
      name: 'Sevilla',
      description: 'A vibrant city known for its Gothic Cathedral, Alcázar palace, and lively streets.',
      distance: '250 km',
    },
    {
      id: 16,
      name: 'Cádiz',
      description: "One of Europe's oldest cities, surrounded by the sea with a charming old town.",
      distance: '180 km',
    },
    {
      id: 17,
      name: 'Almería',
      description: 'A coastal city with a rich history and beautiful beaches.',
      distance: '250 km',
    },
    {
      id: 18,
      name: 'Antequera',
      description: 'Known as the "Heart of Andalusia," famous for its dolmens and natural park El Torcal.',
      distance: '100 km',
    },
    {
      id: 19,
      name: 'Úbeda and Baeza',
      description: 'UNESCO World Heritage Sites known for their Renaissance architecture.',
      distance: '220 km',
    },
    {
      id: 20,
      name: 'Setenil de las Bodegas',
      description: 'A unique town with houses built into rock formations.',
      distance: '90 km',
    },
    {
      id: 21,
      name: 'Vejer de la Frontera',
      description: 'A beautifully preserved white village with stunning views and rich history.',
      distance: '150 km',
    },
  ];

  const handleOpenMaps = (cityName: string) => {
    const query = encodeURIComponent(`${cityName}, Spain`);
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Cities and Towns Near Marbella" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.description}>
          Explore these beautiful destinations around Marbella, each offering unique experiences and cultural heritage.
        </Text>

        {cities.map((city, index) => (
          <Animated.View 
            key={city.id}
            entering={FadeIn.delay(index * 100)}
            style={styles.cityCard}
          >
            <View style={styles.cityHeader}>
              <View style={styles.cityInfo}>
                <Text style={styles.cityName}>{city.name}</Text>
                <View style={styles.distanceContainer}>
                  <MapPin size={14} color={theme.colors.primary} />
                  <Text style={styles.distance}>{city.distance}</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.mapButton}
                onPress={() => handleOpenMaps(city.name)}
              >
                <ExternalLink size={16} color={theme.colors.primary} />
              </TouchableOpacity>
            </View>
            <Text style={styles.cityDescription}>{city.description}</Text>
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
  cityCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  cityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.s,
  },
  cityInfo: {
    flex: 1,
    marginRight: theme.spacing.m,
  },
  cityName: {
    ...theme.typography.bodyMedium,
    marginBottom: theme.spacing.xs,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    ...theme.typography.bodySmall,
    color: theme.colors.primary,
    marginLeft: theme.spacing.xs,
  },
  mapButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
  },
});