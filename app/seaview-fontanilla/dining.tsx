import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { UtensilsCrossed, MapPin, ExternalLink } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function SeaviewDiningScreen() {
  const insets = useSafeAreaInsets();

  const restaurants = [
    {
      id: 1,
      name: 'Restaurante Skina',
      description: 'Michelin-starred restaurant offering innovative Andalusian cuisine in the heart of Marbella Old Town.',
      distance: '800m',
      category: 'Fine Dining',
    },
    {
      id: 2,
      name: 'El Patio de Mariscal',
      description: 'Traditional Spanish restaurant with excellent seafood and paella, located near the beach.',
      distance: '300m',
      category: 'Spanish',
    },
    {
      id: 3,
      name: 'Zozoi Restaurant',
      description: 'Modern Mediterranean cuisine with a beautiful terrace overlooking the sea.',
      distance: '200m',
      category: 'Mediterranean',
    },
    {
      id: 4,
      name: 'Restaurante Marbella Club',
      description: 'Elegant beachfront dining with international cuisine and stunning sea views.',
      distance: '1.2km',
      category: 'International',
    },
    {
      id: 5,
      name: 'La Meridiana',
      description: 'Upscale Italian restaurant known for its fresh pasta and romantic atmosphere.',
      distance: '600m',
      category: 'Italian',
    },
    {
      id: 6,
      name: 'Casanis Bistrot',
      description: 'French bistro offering classic dishes and an extensive wine selection.',
      distance: '700m',
      category: 'French',
    },
    {
      id: 7,
      name: 'Trocadero Arena',
      description: 'Beachfront restaurant and beach club with fresh seafood and cocktails.',
      distance: '400m',
      category: 'Seafood',
    },
    {
      id: 8,
      name: 'Restaurante Santiago',
      description: 'Traditional Andalusian restaurant famous for its grilled fish and local specialties.',
      distance: '500m',
      category: 'Andalusian',
    },
    {
      id: 9,
      name: 'Messina',
      description: 'Contemporary restaurant with creative cuisine and beautiful presentation.',
      distance: '900m',
      category: 'Contemporary',
    },
    {
      id: 10,
      name: 'Bibo Marbella',
      description: 'Trendy restaurant by Dani García offering modern Andalusian tapas.',
      distance: '1km',
      category: 'Modern Tapas',
    },
  ];

  const handleOpenMaps = (restaurantName: string) => {
    const query = encodeURIComponent(`${restaurantName} near Calle Camilo José Cela, Marbella`);
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Places to Eat" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.description}>
          Discover the best dining options around your Seaview apartment. From Michelin-starred restaurants to local tapas bars, Marbella offers exceptional culinary experiences just steps from your door.
        </Text>

        {restaurants.map((restaurant, index) => (
          <Animated.View 
            key={restaurant.id}
            entering={FadeIn.delay(index * 100)}
            style={styles.restaurantCard}
          >
            <View style={styles.headerContainer}>
              <View style={styles.nameContainer}>
                <UtensilsCrossed size={20} color={theme.colors.primary} />
                <Text style={styles.restaurantName}>{restaurant.name}</Text>
              </View>
              <TouchableOpacity
                style={styles.mapsButton}
                onPress={() => handleOpenMaps(restaurant.name)}
              >
                <ExternalLink size={16} color={theme.colors.primary} />
              </TouchableOpacity>
            </View>

            <Text style={styles.category}>{restaurant.category}</Text>
            <Text style={styles.restaurantDescription}>{restaurant.description}</Text>
            
            <View style={styles.distanceContainer}>
              <MapPin size={16} color={theme.colors.textTertiary} />
              <Text style={styles.distance}>{restaurant.distance}</Text>
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
  restaurantCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  restaurantName: {
    ...theme.typography.bodyMedium,
    marginLeft: theme.spacing.s,
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
  restaurantDescription: {
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