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
      name: 'Bungalow Café',
      description: 'Popular beachfront café offering breakfast, lunch, and cocktails with direct beach access and stunning sea views.',
      distance: '50 meters',
      category: 'Beachfront',
    },
    {
      id: 2,
      name: 'Soleo Marbella Beach Club',
      description: 'Chic beach club with Mediterranean cuisine, cocktails, and sun loungers with sea views.',
      distance: '100 meters',
      category: 'Beachfront',
    },
    {
      id: 3,
      name: 'La Fonty',
      description: 'Authentic beach chiringuito serving fresh seafood and traditional Spanish dishes.',
      distance: '150 meters',
      category: 'Beachfront',
    },
    {
      id: 4,
      name: 'Restaurante Buenaventura',
      description: 'Mediterranean cuisine in an elegant setting near Plaza del Mar.',
      distance: '300 meters',
      category: 'City Center',
    },
    {
      id: 5,
      name: 'Yanx Marbella',
      description: 'American style restaurant serving burgers, salads, and international cuisine.',
      distance: '350 meters',
      category: 'City Center',
    },
    {
      id: 6,
      name: 'Döner Kebab Marbella',
      description: 'Turkish restaurant offering kebabs and Middle Eastern dishes.',
      distance: '250 meters',
      category: 'City Center',
    },
    {
      id: 7,
      name: 'Lekune',
      description: 'Popular restaurant known for its excellent meat dishes and wine selection.',
      distance: '400 meters',
      category: 'Lekune Area',
    },
    {
      id: 8,
      name: 'El Rincón de la Sala',
      description: 'Spanish restaurant with traditional tapas and local dishes.',
      distance: '450 meters',
      category: 'Lekune Area',
    },
    {
      id: 9,
      name: 'Rachel\'s Eco Love',
      description: 'Healthy café serving organic and vegetarian options.',
      distance: '350 meters',
      category: 'Lekune Area',
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
          Discover the best dining options around your Seaview apartment. From beachfront restaurants to local favorites, enjoy exceptional culinary experiences just steps from your door.
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