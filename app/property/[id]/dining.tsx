import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { UtensilsCrossed, MapPin, ExternalLink } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';

export default function DiningScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();

  // Get restaurants based on property ID
  const getRestaurants = () => {
    switch(id) {
      case '29051501': // Jardines Tropicales
        return [
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
          }
        ];
      case '29051502': // Seaview Fontanilla
        return [
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
          }
        ];
      case '29051503': // Aloha Pueblo
        return [
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
          }
        ];
      case '29051504': // Old Town
        return [
          {
            id: 1,
            name: 'Restaurante Skina',
            description: 'Michelin-starred restaurant offering innovative Andalusian cuisine in the heart of Old Town.',
            distance: '200m',
            category: 'Fine Dining',
          },
          {
            id: 2,
            name: 'El Patio de Mariscal',
            description: 'Traditional Spanish restaurant with excellent seafood and authentic local dishes.',
            distance: '150m',
            category: 'Spanish',
          },
          {
            id: 3,
            name: 'La Meridiana',
            description: 'Upscale Italian restaurant known for its fresh pasta and romantic atmosphere.',
            distance: '300m',
            category: 'Italian',
          },
          {
            id: 4,
            name: 'Casanis Bistrot',
            description: 'French bistro offering classic dishes and an extensive wine selection.',
            distance: '250m',
            category: 'French',
          },
          {
            id: 5,
            name: 'Restaurante Santiago',
            description: 'Traditional Andalusian restaurant famous for its grilled fish and local specialties.',
            distance: '400m',
            category: 'Andalusian',
          },
          {
            id: 6,
            name: 'Messina',
            description: 'Contemporary restaurant with creative cuisine and beautiful presentation.',
            distance: '350m',
            category: 'Contemporary',
          },
          {
            id: 7,
            name: 'Bibo Marbella',
            description: 'Trendy restaurant by Dani García offering modern Andalusian tapas.',
            distance: '500m',
            category: 'Modern Tapas',
          },
          {
            id: 8,
            name: 'Taberna del Pintxo',
            description: 'Basque-style tapas bar with excellent pintxos and local atmosphere.',
            distance: '180m',
            category: 'Tapas',
          },
          {
            id: 9,
            name: 'El Estrecho',
            description: 'Traditional tapas bar popular with locals, serving authentic Spanish dishes.',
            distance: '220m',
            category: 'Traditional',
          },
          {
            id: 10,
            name: 'La Pesquera',
            description: 'Seafood specialist restaurant with fresh daily catches and ocean views.',
            distance: '600m',
            category: 'Seafood',
          }
        ];
      default:
        return [
          {
            id: 1,
            name: 'Local Restaurant',
            description: 'Description of the restaurant.',
            distance: '100m',
            category: 'Local',
          }
        ];
    }
  };

  const restaurants = getRestaurants();

  const getDescription = () => {
    switch(id) {
      case '29051501':
        return 'Discover the best dining options around Jardines Tropicales. From local Spanish cuisine to international flavors, these carefully selected restaurants are all within easy reach of your apartment.';
      case '29051502':
        return 'Discover the best dining options around your Seaview apartment. From beachfront restaurants to local favorites, enjoy exceptional culinary experiences just steps from your door.';
      case '29051503':
        return 'Discover the best dining options around your Aloha Pueblo townhouse. From golf club restaurants to international cuisine, enjoy great food in beautiful settings.';
      case '29051504':
        return 'Discover the best dining options in Marbella\'s historic Old Town. From Michelin-starred restaurants to traditional tapas bars, experience authentic Andalusian cuisine just steps from your apartment.';
      default:
        return 'Discover the best dining options around your property.';
    }
  };

  const handleOpenMaps = (restaurantName: string) => {
    let location = '';
    switch(id) {
      case '29051501':
        location = 'Calle Azahar, Nueva Andalucía, Marbella';
        break;
      case '29051502':
        location = 'Calle Camilo José Cela, Marbella';
        break;
      case '29051503':
        location = 'Calle del Agua, Aloha, Marbella';
        break;
      case '29051504':
        location = 'Calle Málaga, Marbella Old Town';
        break;
      default:
        location = 'Marbella';
    }
    
    const query = encodeURIComponent(`${restaurantName} near ${location}`);
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`);
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title={t('home.dining')} />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.description}>
          {t(`dining.description.${id}`, { defaultValue: getDescription() })}
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

            <Text style={styles.category}>{t(`dining.categories.${restaurant.category}`, { defaultValue: restaurant.category })}</Text>
            <Text style={styles.restaurantDescription}>{t(`dining.restaurants.${id}.${restaurant.id}.description`, { defaultValue: restaurant.description })}</Text>
            
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