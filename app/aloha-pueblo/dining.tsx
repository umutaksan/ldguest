import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { UtensilsCrossed, MapPin, ExternalLink } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function AlohaPuebloDiningScreen() {
  const insets = useSafeAreaInsets();

  const restaurants = [
    {
      id: 1,
      name: 'Aloha Golf Club Restaurant',
      description: 'On-site restaurant at the golf club with Mediterranean cuisine and beautiful views.',
      distance: '300m',
      category: 'Mediterranean',
    },
    {
      id: 2,
      name: 'Las Brisas Golf Club Restaurant',
      description: 'Elegant dining at the prestigious Las Brisas golf course.',
      distance: '800m',
      category: 'International',
    },
    {
      id: 3,
      name: 'La Sala Puerto Banús',
      description: 'Popular restaurant and bar with European and Spanish cuisine.',
      distance: '2km',
      category: 'European',
    },
    {
      id: 4,
      name: 'NOTO Food & People',
      description: 'Prime Mediterranean cuisine in an elegant garden setting.',
      distance: '2.5km',
      category: 'Mediterranean',
    },
    {
      id: 5,
      name: 'Breathe Marbella',
      description: 'Modern restaurant with Mediterranean and fusion cuisine.',
      distance: '2.8km',
      category: 'Fusion',
    },
    {
      id: 6,
      name: 'Occo Marbella',
      description: 'Lebanese and Middle Eastern cuisine in a stylish atmosphere.',
      distance: '3km',
      category: 'Middle Eastern',
    },
    {
      id: 7,
      name: 'Sensations Sushi Bar',
      description: 'Fresh sushi and Japanese cuisine in Nueva Andalucía.',
      distance: '3.2km',
      category: 'Japanese',
    },
    {
      id: 8,
      name: 'Cafe Yanx',
      description: 'American classics and international favorites with great burgers.',
      distance: '3.5km',
      category: 'American',
    },
  ];

  const handleOpenMaps = (restaurantName: string) => {
    const query = encodeURIComponent(`${restaurantName} near Calle del Agua, Aloha, Marbella`);
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
          Discover the best dining options around your Aloha Pueblo townhouse. From golf club restaurants to international cuisine, enjoy great food in beautiful settings.
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