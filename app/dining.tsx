import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { UtensilsCrossed, MapPin, Star, ExternalLink } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function DiningScreen() {
  const insets = useSafeAreaInsets();

  const restaurants = [
    {
      id: 1,
      name: 'NOTO Food & People',
      description: 'Prime Mediterranean cuisine and elegant dishes. Located just steps away on Calle Azahar with a beautiful garden setting.',
      distance: '50 meters',
      category: 'Mediterranean',
    },
    {
      id: 2,
      name: 'La Sala Puerto Banús',
      description: 'European, Spanish, and contemporary dishes in a vibrant atmosphere. One of the most popular restaurants in Nueva Andalucía.',
      distance: '200 meters',
      category: 'European',
    },
    {
      id: 3,
      name: 'Breathe Marbella',
      description: 'A modern restaurant offering Mediterranean, European, and fusion cuisine with a beautiful terrace.',
      distance: '300 meters',
      category: 'Mediterranean',
    },
    {
      id: 4,
      name: 'Occo Marbella',
      description: 'Lebanese and Middle Eastern cuisine in a stylish atmosphere. Known for their mezze platters and grilled meats.',
      distance: '400 meters',
      category: 'Middle Eastern',
    },
    {
      id: 5,
      name: 'Sensations Sushi Bar',
      description: 'Japanese cuisine and sushi specialties. Fresh fish and creative rolls in a modern setting.',
      distance: '500 meters',
      category: 'Japanese',
    },
    {
      id: 6,
      name: 'Restaurante Asiatico Zen',
      description: 'Chinese and Asian cuisine with an extensive menu of authentic dishes.',
      distance: '600 meters',
      category: 'Asian',
    },
    {
      id: 7,
      name: 'Cafe Yanx',
      description: 'American classics and international favorites. Famous for their burgers and brunch menu.',
      distance: '700 meters',
      category: 'American',
    },
    {
      id: 8,
      name: 'Top Thai Restaurant',
      description: 'Authentic Thai cuisine with a modern twist. Beautiful decoration and great service.',
      distance: '800 meters',
      category: 'Thai',
    },
    {
      id: 9,
      name: 'Aloha Grill Restaurant',
      description: 'Contemporary dishes in a tropical setting in the heart of Nueva Andalucía. Great for steaks and seafood.',
      distance: '900 meters',
      category: 'International',
    },
    {
      id: 10,
      name: 'El Jardín Marbella',
      description: 'Famous for dishes like chicken teriyaki and pizza served in a cozy garden atmosphere.',
      distance: '1 km',
      category: 'International',
    },
    {
      id: 11,
      name: 'La Campana Restaurante',
      description: 'Scandinavian, Italian, and international cuisine with a modern twist, located on Avenida Manolete.',
      distance: '1.2 km',
      category: 'International',
    },
    {
      id: 12,
      name: 'La Tirana',
      description: 'Andalusian and Mediterranean cuisine served in a charming Andalusian garden setting.',
      distance: '1.3 km',
      category: 'Mediterranean',
    },
    {
      id: 13,
      name: 'La Tienda',
      description: 'Mediterranean and international cuisine in a cozy, rustic setting with excellent wine selection.',
      distance: '1.3 km',
      category: 'International',
    },
    {
      id: 14,
      name: 'El Portalón',
      description: 'Creative Mediterranean cuisine using seasonal products in a rustic environment.',
      distance: '1.8 km',
      category: 'Mediterranean',
    },
    {
      id: 15,
      name: 'Belvedere Restaurant Pizzeria',
      description: 'Italian specialties with Mediterranean flair and spectacular Puerto Banús views.',
      distance: '2 km',
      category: 'Italian',
    },
    {
      id: 16,
      name: 'Alabardero Beach',
      description: 'Specializing in rice dishes and Mediterranean cuisine, located on the beachfront.',
      distance: '2 km',
      category: 'Mediterranean',
    },
    {
      id: 17,
      name: 'Nikki Beach Marbella',
      description: 'Luxury beach club offering international cuisine in a glamorous setting.',
      distance: '2 km',
      category: 'International',
    },
    {
      id: 18,
      name: 'Palacio de Babilonia - Olivia Valere',
      description: 'Exotic setting with international cuisine, meats, seafood, and seasonal vegetables.',
      distance: '2 km',
      category: 'International',
    },
    {
      id: 19,
      name: 'Marbella Club Grill',
      description: 'Gourmet cuisine in the lush gardens of Marbella Club Hotel. Perfect for special occasions.',
      distance: '2.5 km',
      category: 'Gourmet',
    },
    {
      id: 20,
      name: 'Sea Soul Beach Club',
      description: 'Mediterranean cuisine specializing in seafood and rice dishes by the beach.',
      distance: '3 km',
      category: 'Mediterranean',
    },
  ];

  const handleOpenMaps = (restaurantName: string) => {
    const query = encodeURIComponent(`${restaurantName} near Calle Azahar, Nueva Andalucía, Marbella`);
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
          Discover the best dining options around Jardines Tropicales. From local Spanish cuisine to international flavors, these carefully selected restaurants are all within easy reach of your apartment.
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
    ...(theme.layout.isWeb && {
      maxWidth: '100vw',
      overflowX: 'hidden',
    }),
  },
  content: {
    padding: theme.spacing.m,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      maxWidth: 1200,
      marginHorizontal: 'auto',
      padding: theme.spacing.xl,
    }),
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.l,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 18,
      lineHeight: 28,
      maxWidth: 800,
      marginHorizontal: 'auto',
      marginBottom: theme.spacing.xl,
      textAlign: 'center',
    }),
  },
  restaurantCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
    ...(theme.layout.isWeb && {
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      },
    }),
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      padding: theme.spacing.l,
      marginBottom: theme.spacing.l,
      maxWidth: 900,
      marginHorizontal: 'auto',
    }),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      marginBottom: theme.spacing.s,
    }),
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  restaurantName: {
    ...theme.typography.bodyMedium,
    marginLeft: theme.spacing.s,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 20,
    }),
  },
  mapsButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    ...(theme.layout.isWeb && {
      transition: 'background-color 0.3s ease',
      '&:hover': {
        backgroundColor: theme.colors.primary,
      },
    }),
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      width: 40,
      height: 40,
      borderRadius: 20,
    }),
  },
  category: {
    ...theme.typography.bodySmall,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 16,
      fontWeight: '600',
    }),
  },
  restaurantDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.s,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 17,
      lineHeight: 26,
    }),
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  distance: {
    ...theme.typography.bodySmall,
    color: theme.colors.textTertiary,
    marginLeft: theme.spacing.xs,
    ...(theme.layout.isWeb && theme.layout.isDesktop && {
      fontSize: 15,
    }),
  },
});