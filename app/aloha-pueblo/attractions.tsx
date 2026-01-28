import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { MapPin, ExternalLink } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function AlohaPuebloAttractionsScreen() {
  const insets = useSafeAreaInsets();

  const attractions = [
    {
      id: 1,
      name: 'Aloha Golf Club',
      description: 'Championship 18-hole golf course designed by Javier Arana, perfect for golf enthusiasts.',
      distance: '300 meters',
      category: 'Golf',
    },
    {
      id: 2,
      name: 'Las Brisas Golf Club',
      description: 'Prestigious golf course with stunning views and challenging holes.',
      distance: '800 meters',
      category: 'Golf',
    },
    {
      id: 3,
      name: 'Los Naranjos Golf Club',
      description: 'Robert Trent Jones designed course in the heart of Golf Valley.',
      distance: '1.2 km',
      category: 'Golf',
    },
    {
      id: 4,
      name: 'Puerto Banús Marina',
      description: 'Luxury marina with high-end shops, restaurants, and beautiful yachts.',
      distance: '2 km',
      category: 'Marina',
    },
    {
      id: 5,
      name: 'Playa Puerto Banús',
      description: 'Beautiful beach with beach clubs and water sports activities.',
      distance: '2.5 km',
      category: 'Beach',
    },
    {
      id: 6,
      name: 'Centro Plaza',
      description: 'Shopping and entertainment complex with shops, restaurants, and Saturday market.',
      distance: '2.8 km',
      category: 'Shopping',
    },
    {
      id: 7,
      name: 'El Corte Inglés Puerto Banús',
      description: 'Large department store offering a wide variety of products and services.',
      distance: '3 km',
      category: 'Shopping',
    },
    {
      id: 8,
      name: 'Museo Ralli Marbella',
      description: 'Contemporary art museum showcasing Latin American artists.',
      distance: '3.5 km',
      category: 'Culture',
    },
    {
      id: 9,
      name: 'Playa Nueva Andalucía',
      description: 'Wide sandy beach perfect for families with calm waters.',
      distance: '4 km',
      category: 'Beach',
    },
    {
      id: 10,
      name: 'Marbella Old Town',
      description: 'Historic district with narrow streets, charming plazas, and traditional architecture.',
      distance: '8 km',
      category: 'Historic',
    },
  ];

  const handleOpenMaps = (attractionName: string) => {
    const query = encodeURIComponent(`${attractionName} near Calle del Agua, Aloha, Marbella`);
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
          Explore the best attractions around your Aloha Pueblo townhouse. From world-class golf courses to beautiful beaches and cultural sites, everything is within easy reach.
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